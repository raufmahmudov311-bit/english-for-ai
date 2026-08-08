"use client";

import { useState } from "react";
import { AlertTriangle, ChevronDown } from "lucide-react";

export default function ErrorCard({ source, level, error, question, answer }) {
  const [value, setValue] = useState("");
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface2">
        <span className="font-mono text-xs text-muted">{source}</span>
        <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-mono text-amber">
          {level}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start gap-2 rounded-lg bg-black/30 border border-danger/30 px-4 py-3 font-mono text-sm text-danger mb-4">
          <AlertTriangle size={16} className="mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>

        <p className="text-sm text-ink mb-2">{question}</p>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Write your answer in English…"
          rows={3}
          className="w-full rounded-lg border border-border bg-base px-3 py-2 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-amber/50 resize-none"
        />

        <button
          onClick={() => setRevealed((r) => !r)}
          className="mt-3 flex items-center gap-1.5 text-xs font-mono text-cyan hover:text-cyan-soft transition-colors"
        >
          <ChevronDown size={14} className={`transition-transform ${revealed ? "rotate-180" : ""}`} />
          {revealed ? "Hide explanation" : "Show explanation"}
        </button>

        {revealed && (
          <div className="mt-3 rounded-lg border border-border bg-surface2 px-4 py-3 text-sm text-muted leading-relaxed">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
}
