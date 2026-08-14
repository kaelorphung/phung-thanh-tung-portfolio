
"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function PortfolioChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const { messages, sendMessage, status } = useChat();

  const isLoading =
    status === "submitted" || status === "streaming";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = input.trim();

    if (!text || isLoading) {
      return;
    }

    sendMessage({
      text,
    });

    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 rounded-full border border-emerald-400/40 bg-zinc-950 px-5 py-3 font-mono text-sm text-emerald-400 shadow-xl transition hover:bg-emerald-400/10"
        >
          AI // Ask Tung
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[520px] w-[calc(100vw-32px)] max-w-md flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
            <div>
              <p className="font-mono text-xs text-emerald-400">
                AI ASSISTANT
              </p>

              <p className="mt-1 text-sm font-medium text-white">
                Ask about Tung
              </p>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-xl leading-none text-zinc-500 transition hover:text-white"
              aria-label="Close AI assistant"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            {messages.length === 0 && (
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
                <p className="text-sm leading-6 text-zinc-400">
                  Ask me about cybersecurity projects, skills,
                  experience, or Tung&apos;s security focus.
                </p>

                <div className="mt-4 space-y-2">
                  <p className="text-xs text-zinc-600">
                    Try:
                  </p>

                  <p className="rounded-lg border border-zinc-800 px-3 py-2 text-xs text-zinc-400">
                    What security projects has Tung built?
                  </p>

                  <p className="rounded-lg border border-zinc-800 px-3 py-2 text-xs text-zinc-400">
                    What SIEM technologies does he use?
                  </p>

                  <p className="rounded-lg border border-zinc-800 px-3 py-2 text-xs text-zinc-400">
                    What is his cybersecurity focus?
                  </p>
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.role === "user"
                    ? "ml-8 rounded-xl bg-white p-4 text-sm text-black"
                    : "mr-8 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-sm text-zinc-300"
                }
              >
                {message.parts?.map((part, index) => {
                  if (part.type !== "text") {
                    return null;
                  }

                  return (
                    <p
                      key={`${message.id}-${index}`}
                      className="whitespace-pre-wrap leading-6"
                    >
                      {part.text}
                    </p>
                  );
                })}
              </div>
            ))}

            {isLoading && (
              <div className="mr-8 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
                <p className="font-mono text-xs text-emerald-400">
                  THINKING...
                </p>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-zinc-800 p-4"
          >
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask a question..."
                disabled={isLoading}
                className="min-w-0 flex-1 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-emerald-400 disabled:opacity-50"
              />

              <button
                type="submit"
                disabled={isLoading || input.trim().length === 0}
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
