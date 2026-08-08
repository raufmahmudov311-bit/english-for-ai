"use client";

import { useEffect, useState } from "react";

const LINES = [
  { type: "cmd", text: "git push origin main" },
  { type: "err", text: "! [rejected]  main -> main (fetch first)" },
  { type: "err", text: "error: failed to push some refs to 'github.com/you/project.git'" },
  { type: "hint", text: "hint: Updates were rejected because the remote contains work that you do" },
  { type: "hint", text: "hint: not have locally." },
  { type: "gap", text: "" },
  { type: "lesson", text: "> Now you can read it, explain it, and fix it — in English." },
];

export default function TerminalHero() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [charIndex, setCharIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= LINES.length) return;

    const current = LINES[lineIndex];
    if (charIndex <= current.text.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => {
          const next = [...prev];
          next[lineIndex] = { ...current, text: current.text.slice(0, charIndex) };
          return next;
        });
        setCharIndex((c) => c + 1);
      }, current.type === "cmd" ? 45 : 12);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, current.type === "lesson" ? 400 : 220);
      return () => clearTimeout(pause);
    }
  }, [charIndex, lineIndex]);

  const colorFor = (type) => {
    switch (type) {
      case "cmd":
        return "text-ink";
      case "err":
        return "text-danger";
      case "hint":
        return "text-muted";
      case "lesson":
        return "text-amber";
      default:
        return "text-ink";
    }
  };

  return (
    <div className="w-full max-w-xl rounded-xl border border-border bg-surface shadow-2xl shadow-black/40 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface2">
        <span className="h-3 w-3 rounded-full bg-danger/70" />
        <span className="h-3 w-3 rounded-full bg-amber/70" />
        <span className="h-3 w-3 rounded-full bg-success/70" />
        <span className="ml-3 text-xs text-muted font-mono">you@codeenglish</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[220px]">
        {visibleLines.map((line, i) => (
          <div key={i} className={colorFor(line.type)}>
            {line.type === "cmd" && <span className="text-cyan mr-2">$</span>}
            {line.text}
          </div>
        ))}
        {lineIndex < LINES.length && <span className="cursor-blink text-amber">▍</span>}
      </div>
    </div>
  );
}
