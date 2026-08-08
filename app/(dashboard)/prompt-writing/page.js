"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

const TASK =
  "Task: Ask an AI to fix a bug where your login form submits even when the password field is empty.";

export default function PromptWritingPage() {
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState(null);

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const handleSubmit = () => {
    // Placeholder — this will call the Claude API in the next step.
    setFeedback(
      "AI feedback isn't connected yet. Once we add the API, this panel will show grammar corrections, clarity notes, and a professionalism score here."
    );
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold text-ink">Prompt Writing</h1>
        <p className="text-muted text-sm mt-1">
          Write a clear, professional English prompt for the task below.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface2 px-5 py-4 font-mono text-sm text-cyan mb-6">
        {TASK}
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your prompt here, as if you were asking an AI for help…"
        rows={6}
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-amber/50 resize-none"
      />

      <div className="flex items-center justify-between mt-3 mb-6">
        <span className="text-xs text-muted font-mono">{wordCount} words</span>
        <button
          onClick={handleSubmit}
          className="inline-flex items-center gap-2 rounded-lg bg-amber px-4 py-2 text-sm font-medium text-black hover:bg-amber-soft transition-colors"
        >
          <Sparkles size={15} />
          Get feedback
        </button>
      </div>

      {feedback && (
        <div className="rounded-xl border border-border bg-surface p-5 text-sm text-muted leading-relaxed">
          {feedback}
        </div>
      )}
    </div>
  );
}
