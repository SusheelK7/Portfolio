import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'api-chat-dev-server',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            const url = req.url || '';
            if (url.startsWith('/api/chat')) {
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
              res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

              if (req.method === 'OPTIONS') {
                res.statusCode = 200;
                res.end();
                return;
              }

              if (req.method === 'POST') {
                try {
                  const chunks = [];
                  for await (const chunk of req) {
                    chunks.push(chunk);
                  }
                  const rawBody = Buffer.concat(chunks).toString();
                  const parsed = JSON.parse(rawBody || '{}');

                  const rawKey =
                    env.GEMINI_API_KEY ||
                    env.VITE_GEMINI_API_KEY ||
                    process.env.GEMINI_API_KEY ||
                    process.env.VITE_GEMINI_API_KEY ||
                    '';
                  process.env.GEMINI_API_KEY = rawKey.trim();

                  const { default: handler } = await import('./api/chat.js');

                  req.body = parsed;
                  res.status = (code) => {
                    res.statusCode = code;
                    return res;
                  };
                  res.json = (data) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(data));
                    return res;
                  };

                  await handler(req, res);
                  return;
                } catch (err) {
                  console.error('Dev server API chat error:', err);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: err.message || 'Server error' }));
                  return;
                }
              } else {
                res.statusCode = 405;
                res.end('Method Not Allowed');
                return;
              }
            }
            next();
          });
        },
      },
    ],
  };
});
