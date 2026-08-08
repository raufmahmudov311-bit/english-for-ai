"use client";

import { useState } from "react";
import { Mic, Square } from "lucide-react";

const TOPICS = [
  "Explaining a bug",
  "Job interview practice",
  "Tech discussion",
  "Daily conversation",
];

const LEVELS = ["Intermediate", "Advanced", "Professional"];

export default function VoicePage() {
  const [listening, setListening] = useState(false);
  const [topic, setTopic] = useState(TOPICS[0]);
  const [level, setLevel] = useState(LEVELS[1]);

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold text-ink">Voice Practice</h1>
        <p className="text-muted text-sm mt-1">
          Talk with an AI tutor about AI and programming topics.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink focus:outline-none focus:border-amber/50"
        >
          {TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink focus:outline-none focus:border-amber/50"
        >
          {LEVELS.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </div>

      <div className="rounded-xl border border-border bg-surface p-10 flex flex-col items-center justify-center text-center">
        <button
          onClick={() => setListening((l) => !l)}
          className={`h-20 w-20 rounded-full flex items-center justify-center transition-colors ${
            listening ? "bg-danger" : "bg-amber"
          }`}
        >
          {listening ? <Square size={26} className="text-black" /> : <Mic size={28} className="text-black" />}
        </button>
        <p className="mt-4 text-sm text-muted font-mono">
          {listening ? "Listening…" : "Tap to start speaking"}
        </p>
        <p className="mt-1 text-xs text-muted max-w-xs">
          Topic: <span className="text-cyan">{topic}</span> · Level:{" "}
          <span className="text-cyan">{level}</span>
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-surface2 p-5">
        <h2 className="font-mono text-xs text-muted mb-3">transcript</h2>
        <p className="text-sm text-muted italic">
          Your conversation will appear here once voice input is connected.
        </p>
      </div>

      <p className="mt-4 text-xs text-muted">
        Note: this page is ready for the Web Speech API and an AI backend — that's the next step.
      </p>
    </div>
  );
}
