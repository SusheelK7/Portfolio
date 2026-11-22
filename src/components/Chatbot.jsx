import { useState, useRef, useEffect } from "react";
import { suggestedQuestions, portfolioContext } from "../data/portfolioData";

// Tested & verified working models in priority order
const FALLBACK_MODELS = [
  "gemini-flash-lite-latest",
  "gemini-3.5-flash-lite",
  "gemini-3.1-flash-lite",
  "gemini-3.8-flash",
  "gemini-flash-latest",
  "gemini-3.5-flash",
];

// Fallback caller directly from browser with multi-model auto-retry
async function callGeminiDirectlyWithFallback(apiKey, messages) {
  const cleanKey = apiKey.trim();

  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  let lastError = null;

  for (const model of FALLBACK_MODELS) {
    try {
      const isLegacy = model === "gemini-pro";
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

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(cleanKey)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyPayload),
        }
      );

      const data = await res.json().catch(() => null);

      if (res.ok && data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text;
      }

      const errorMsg = data?.error?.message || `Status ${res.status}`;
      console.warn(`[Client AI] ${model} reported: ${errorMsg}. Trying next candidate...`);
      lastError = new Error(errorMsg);
      continue;
    } catch (err) {
      lastError = err;
      continue;
    }
  }

  throw lastError || new Error("All AI models are currently busy. Please try again in a moment.");
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! 👋 I'm **Susheel's AI Assistant**. Ask me anything about his full-stack & AI projects, experience at VisionX, technical skills, or how to get in touch!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUserPrompt, setLastUserPrompt] = useState("");

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, isOpen]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSend = async (messageText) => {
    const textToSend = (messageText || input).trim();
    if (!textToSend || loading) return;

    setError(null);
    setInput("");
    setLastUserPrompt(textToSend);

    const newMessages = [...messages, { role: "user", content: textToSend }];
    setMessages(newMessages);
    setLoading(true);

    try {
      let reply = null;
      let usedFallback = false;

      // 1. Try server endpoint (/api/chat)
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: newMessages.map(({ role, content }) => ({ role, content })),
          }),
        });

        const data = await response.json().catch(() => null);

        if (response.ok && data?.reply) {
          reply = data.reply;
        } else if (data?.error) {
          // If server failed, fallback directly
          console.warn("/api/chat returned:", data.error);
          usedFallback = true;
        } else {
          usedFallback = true;
        }
      } catch (fetchErr) {
        console.warn("/api/chat network error:", fetchErr);
        usedFallback = true;
      }

      // 2. If /api/chat failed or was busy, try client multi-model fallback
      if (usedFallback && !reply) {
        const clientKey = (
          import.meta.env.VITE_GEMINI_API_KEY ||
          import.meta.env.GEMINI_API_KEY ||
          ""
        ).trim();

        if (clientKey) {
          reply = await callGeminiDirectlyWithFallback(clientKey, newMessages);
        } else {
          throw new Error(
            "Could not connect to /api/chat and no VITE_GEMINI_API_KEY was found in .env."
          );
        }
      }

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("Chat error:", err);
      const isHighDemand =
        err.message?.toLowerCase().includes("demand") ||
        err.message?.toLowerCase().includes("overloaded") ||
        err.message?.toLowerCase().includes("503");

      setError(
        isHighDemand
          ? "The AI models are currently experiencing high traffic. Please click Retry below to try again!"
          : err.message || "Something went wrong. Please check your API key."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Conversation cleared! What else would you like to know about Susheel?",
      },
    ]);
    setError(null);
  };

  // Helper to render markdown-like formatting (bold, links, bullet points)
  const renderFormattedText = (text) => {
    const lines = text.split("\n");
    return lines.map((line, lineIdx) => {
      const formattedParts = [];
      const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\(https?:\/\/[^\s)]+\)|https?:\/\/[^\s]+)/g;
      let lastIndex = 0;
      let match;

      while ((match = regex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          formattedParts.push(line.substring(lastIndex, match.index));
        }

        const matchedText = match[0];
        if (matchedText.startsWith("**") && matchedText.endsWith("**")) {
          formattedParts.push(
            <strong key={match.index} className="font-semibold text-neutral-950 dark:text-white">
              {matchedText.slice(2, -2)}
            </strong>
          );
        } else if (matchedText.startsWith("[") && matchedText.includes("](")) {
          const title = matchedText.substring(1, matchedText.indexOf("]("));
          const url = matchedText.substring(matchedText.indexOf("](") + 2, matchedText.length - 1);
          formattedParts.push(
            <a
              key={match.index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 underline font-medium hover:text-emerald-700 dark:hover:text-emerald-300 break-all"
            >
              {title}
            </a>
          );
        } else if (matchedText.startsWith("http")) {
          formattedParts.push(
            <a
              key={match.index}
              href={matchedText}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 underline font-medium hover:text-emerald-700 dark:hover:text-emerald-300 break-all"
            >
              {matchedText}
            </a>
          );
        }
        lastIndex = regex.lastIndex;
      }

      if (lastIndex < line.length) {
        formattedParts.push(line.substring(lastIndex));
      }

      const isBullet = line.trim().startsWith("- ") || line.trim().startsWith("• ");
      return (
        <span key={lineIdx} className={isBullet ? "block pl-3 relative my-0.5" : "block min-h-[1.2em]"}>
          {isBullet && <span className="absolute left-0 text-emerald-500">•</span>}
          {formattedParts.length > 0 ? formattedParts : <br />}
        </span>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Launcher Pill / Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-body text-xs font-semibold shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 btn-3d cursor-pointer"
          aria-label="Open Susheel's AI Assistant"
        >
          {/* Pulsing online beacon */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>

          {/* AI Sparkle Icon */}
          <svg
            className="w-4 h-4 text-emerald-400 dark:text-emerald-600 group-hover:rotate-12 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>

          <span className="hidden sm:inline font-mono">Ask Susheel's AI</span>
          <span className="sm:hidden font-mono">Chat AI</span>
        </button>
      )}

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[380px] md:w-[410px] h-[540px] max-h-[85vh] flex flex-col bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl border border-neutral-200/90 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden card-3d animate-pop-in">
          {/* Header */}
          <div className="px-4 py-3.5 bg-neutral-50/80 dark:bg-neutral-800/80 border-b border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center font-display font-bold text-xs shadow-sm">
                SK
                <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-neutral-900 dark:text-white leading-tight">
                  Susheel's AI Assistant
                </h3>
                <p className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {/* Clear chat history */}
              <button
                onClick={handleClear}
                title="Clear conversation"
                className="w-7 h-7 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-700/60 transition-colors cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </button>

              {/* Close window */}
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="w-7 h-7 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-700/60 transition-colors cursor-pointer text-base"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  msg.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed font-body shadow-sm ${
                    msg.role === "user"
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 rounded-br-xs font-normal"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-bl-xs border border-neutral-200/70 dark:border-neutral-700/70"
                  }`}
                >
                  {renderFormattedText(msg.content)}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {loading && (
              <div className="flex items-start">
                <div className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/70 dark:border-neutral-700/70 px-3.5 py-2 rounded-2xl rounded-bl-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"></span>
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"
                    style={{ animationDelay: "0.15s" }}
                  ></span>
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"
                    style={{ animationDelay: "0.3s" }}
                  ></span>
                </div>
              </div>
            )}

            {/* Error Banner with Retry button */}
            {error && (
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/60 text-amber-800 dark:text-amber-200 text-xs font-body leading-relaxed flex flex-col gap-2">
                <div>
                  <span className="font-semibold block mb-0.5">⚠️ Notice</span>
                  <span>{error}</span>
                </div>
                {lastUserPrompt && (
                  <button
                    onClick={() => handleSend(lastUserPrompt)}
                    disabled={loading}
                    className="w-fit px-3 py-1 rounded-lg bg-amber-200 dark:bg-amber-800 text-amber-900 dark:text-amber-100 text-[11px] font-mono font-semibold hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    🔄 Retry question
                  </button>
                )}
              </div>
            )}

            {/* Quick Suggestions Chips (shown when few messages) */}
            {messages.length <= 2 && !loading && (
              <div className="pt-2">
                <p className="font-mono text-[10px] tracking-wider uppercase text-neutral-400 dark:text-neutral-500 font-bold mb-2">
                  Suggested Questions
                </p>
                <div className="flex flex-col gap-1.5">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="text-left px-3 py-1.5 rounded-xl bg-white dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/60 font-body text-xs text-neutral-700 dark:text-neutral-300 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 cursor-pointer shadow-2xs"
                    >
                      💡 {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-neutral-50/80 dark:bg-neutral-800/50 border-t border-neutral-200/80 dark:border-neutral-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Susheel's skills, projects..."
                disabled={loading}
                className="flex-1 px-3.5 py-2 text-xs font-body rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors disabled:opacity-50"
              />

              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="w-8 h-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-30 disabled:hover:scale-100 transition-all cursor-pointer shrink-0 shadow-sm"
                aria-label="Send message"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </button>
            </form>
            <p className="text-[10px] text-center text-neutral-400 dark:text-neutral-500 font-mono mt-1.5">
              Trained on Susheel's verified resume & projects
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
