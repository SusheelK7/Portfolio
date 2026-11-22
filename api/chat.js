import { portfolioContext } from '../src/data/portfolioData.js';

// Priority ordered list of fallback models (tested & verified working)
const CANDIDATE_MODELS = [
  'gemini-flash-lite-latest',
  'gemini-3.5-flash-lite',
  'gemini-3.1-flash-lite',
  'gemini-3.8-flash',
  'gemini-flash-latest',
  'gemini-3.5-flash',
];

async function generateWithModelFallback(apiKey, contents) {
  let lastError = null;

  for (const model of CANDIDATE_MODELS) {
    try {
      const isLegacy = model === 'gemini-pro';
      const bodyPayload = {
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 800,
        },
      };

      if (isLegacy) {
        const legacyContents = JSON.parse(JSON.stringify(contents));
        if (legacyContents[0]?.parts?.[0]) {
          legacyContents[0].parts[0].text = `${portfolioContext}\n\n---\nUser query: ${legacyContents[0].parts[0].text}`;
        }
        bodyPayload.contents = legacyContents;
      } else {
        bodyPayload.systemInstruction = {
          parts: [{ text: portfolioContext }],
        };
        bodyPayload.contents = contents;
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bodyPayload),
        }
      );

      const data = await response.json().catch(() => null);

      if (response.ok && data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text;
      }

      const errMsg =
        data?.error?.message || `Model ${model} returned HTTP ${response.status}`;
      lastError = new Error(errMsg);

      console.warn(`[AI Chat] ${model} unavailable (${errMsg}). Trying next fallback...`);
      // Model unavailable, high demand, or not found: continue to next candidate
      continue;
    } catch (err) {
      console.warn(`[AI Chat] Error with ${model}:`, err.message);
      lastError = err;
      continue;
    }
  }

  throw (
    lastError ||
    new Error(
      'The AI service is experiencing high demand across all models. Please try again in a few seconds.'
    )
  );
}

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const rawKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || '';
  const apiKey = rawKey.trim();

  if (!apiKey) {
    return res.status(500).json({
      error: 'GEMINI_API_KEY is not configured on the server. Please add it to your environment variables.'
    });
  }

  const { messages } = req.body || {};

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid or empty messages array.' });
  }

  try {
    const contents = messages.map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const reply = await generateWithModelFallback(apiKey, contents);
    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Chatbot API route error:', error);
    const friendlyMessage = error.message?.includes('high demand')
      ? 'The AI model is experiencing a temporary spike in traffic. Please wait a moment and try again.'
      : error.message;

    return res.status(503).json({
      error: friendlyMessage || 'An unexpected error occurred. Please try again in a moment.'
    });
  }
}
