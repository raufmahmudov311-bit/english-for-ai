"use client";

import { useState } from "react";

export default function FlashCard({ term, category, definition, example }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-48 [perspective:1000px] cursor-pointer"
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={`relative h-full w-full card-flip-inner ${flipped ? "flipped" : ""}`}
      >
        {/* front */}
        <div className="card-face absolute inset-0 rounded-xl border border-border bg-surface p-5 flex flex-col justify-between">
          <span className="font-mono text-[10px] uppercase tracking-wide text-cyan">
            {category}
          </span>
          <div className="font-display text-xl text-ink">{term}</div>
          <span className="text-xs text-muted">Tap to flip</span>
        </div>
        {/* back */}
        <div className="card-face card-face-back absolute inset-0 rounded-xl border border-amber/40 bg-surface2 p-5 flex flex-col justify-center gap-2">
          <p className="text-sm text-ink leading-relaxed">{definition}</p>
          <p className="text-xs text-muted italic leading-relaxed">"{example}"</p>
        </div>
      </div>
    </div>
  );
}
