"use client";

import { useState } from "react";
import FlashCard from "@/components/FlashCard";

const CATEGORIES = ["All", "AI/ML", "Programming", "Deployment", "Soft Skills"];

const WORDS = [
  { term: "fine-tune", category: "AI/ML", definition: "To further train an existing AI model on specific data so it performs better at a narrow task.", example: "We fine-tuned the model on our support tickets." },
  { term: "hallucination", category: "AI/ML", definition: "When an AI model confidently generates information that is false or made up.", example: "The chatbot's answer was a hallucination — that feature doesn't exist." },
  { term: "inference", category: "AI/ML", definition: "The process of an AI model producing an output from a given input, after training.", example: "Inference is slower on larger models." },
  { term: "token", category: "AI/ML", definition: "A small chunk of text (word or part of a word) that a language model processes.", example: "This prompt uses about two hundred tokens." },
  { term: "dependency", category: "Programming", definition: "A piece of external code your project needs in order to run.", example: "Installing this package added twelve new dependencies." },
  { term: "refactor", category: "Programming", definition: "To restructure existing code without changing what it does, usually to make it cleaner.", example: "I refactored the login function to remove duplicate code." },
  { term: "deprecated", category: "Programming", definition: "No longer recommended for use, often because something newer replaced it.", example: "This method is deprecated — use the new API instead." },
  { term: "deploy", category: "Deployment", definition: "To publish your application so it's live and accessible to users.", example: "We deploy to production every Friday." },
  { term: "rollback", category: "Deployment", definition: "To revert to a previous, working version after a bad deployment.", example: "We had to roll back after the update broke checkout." },
  { term: "environment variable", category: "Deployment", definition: "A configuration value stored outside your code, often used for secrets or settings.", example: "The API key is stored as an environment variable." },
  { term: "blocker", category: "Soft Skills", definition: "Something that is stopping you from making progress on a task.", example: "The main blocker right now is waiting on API access." },
  { term: "walk me through", category: "Soft Skills", definition: "A polite way to ask someone to explain something step by step.", example: "Can you walk me through how the deployment works?" },
];

export default function VocabularyPage() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = WORDS.filter((w) => {
    const matchesCategory = active === "All" || w.category === active;
    const matchesQuery = w.term.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold text-ink">Vocabulary</h1>
        <p className="text-muted text-sm mt-1">Tap a card to see the definition and an example.</p>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-6">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-mono border transition-colors ${
              active === c
                ? "border-amber text-amber bg-surface2"
                : "border-border text-muted hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a word…"
          className="ml-auto rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-amber/50 w-full sm:w-48"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((w) => (
          <FlashCard key={w.term} {...w} />
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-muted col-span-full">No words match "{query}".</p>
        )}
      </div>
    </div>
  );
}
