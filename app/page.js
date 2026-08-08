import Link from "next/link";
import { Terminal, MessageSquareText, BookOpen, Mic, FileCode2, ArrowRight } from "lucide-react";
import TerminalHero from "@/components/TerminalHero";

const FEATURES = [
  {
    icon: Terminal,
    title: "Real Error Practice",
    desc: "Actual GitHub, git, and Vercel error messages. Read them, understand them, explain the cause in English.",
  },
  {
    icon: MessageSquareText,
    title: "Prompt Writing",
    desc: "Learn to write clear, precise prompts — the English skill AI tools actually reward.",
  },
  {
    icon: BookOpen,
    title: "AI Vocabulary",
    desc: "The exact terms used in AI and programming work, with real example sentences.",
  },
  {
    icon: Mic,
    title: "Voice Conversation",
    desc: "Speak with an AI tutor about AI topics, at Advanced or Professional level.",
  },
  {
    icon: FileCode2,
    title: "Code Reading",
    desc: "Short code snippets with English explanations and comprehension checks.",
  },
];

const STEPS = [
  { label: "Pick a mode", text: "Errors, vocabulary, prompts, or live voice practice." },
  { label: "Work through real material", text: "Real errors and real AI-world English, not generic textbook English." },
  { label: "Get corrected, not just graded", text: "Every answer comes back with a clear, specific explanation." },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-base">
      <section className="relative overflow-hidden bg-grid-fade">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-cyan mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              English for AI
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight text-ink">
              The English you need when the terminal
              <span className="text-amber"> turns red.</span>
            </h1>
            <p className="mt-5 text-muted text-lg max-w-md">
              Built for people learning to work with AI — read real errors, write real prompts,
              and talk about AI, in English, at a professional level.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-lg bg-amber px-5 py-3 font-medium text-base text-black hover:bg-amber-soft transition-colors"
              >
                Get started
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/error-practice"
                className="text-sm text-muted hover:text-ink transition-colors font-mono"
              >
                See a real error →
              </Link>
            </div>
          </div>
          <TerminalHero />
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-2xl font-semibold text-ink mb-10">How it works</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <div key={step.label}>
                <div className="font-mono text-xs text-amber mb-2">step_{i + 1}</div>
                <h3 className="font-display text-lg text-ink mb-2">{step.label}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-2xl font-semibold text-ink mb-10">
            Five ways to practice
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-surface p-6 hover:border-amber/40 transition-colors"
              >
                <f.icon size={22} className="text-cyan mb-4" />
                <h3 className="font-display text-base text-ink mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-semibold text-ink mb-4">
            Two profiles. One goal.
          </h2>
          <p className="text-muted mb-8 max-w-md mx-auto">
            Track your own progress and your friend's, side by side.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-lg bg-amber px-6 py-3 font-medium text-black hover:bg-amber-soft transition-colors"
          >
            Open dashboard
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8 text-center text-xs text-muted font-mono">
        english-for-ai · built for learning, not for scale
      </footer>
    </main>
  );
}
