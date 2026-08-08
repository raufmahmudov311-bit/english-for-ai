import Link from "next/link";
import { Flame, BookOpen, Clock, TrendingUp, Terminal, MessageSquareText, Mic, FileCode2 } from "lucide-react";

const STATS = [
  { icon: Flame, label: "Streak", value: "0 days" },
  { icon: BookOpen, label: "Words learned", value: "0" },
  { icon: Clock, label: "Practice time", value: "0 min" },
  { icon: TrendingUp, label: "Level", value: "Intermediate" },
];

const MODES = [
  { href: "/vocabulary", icon: BookOpen, title: "Vocabulary", desc: "AI & programming terms" },
  { href: "/error-practice", icon: Terminal, title: "Error Practice", desc: "Read real GitHub & git errors" },
  { href: "/prompt-writing", icon: MessageSquareText, title: "Prompt Writing", desc: "Write clear AI prompts" },
  { href: "/voice", icon: Mic, title: "Voice Practice", desc: "Talk to an AI tutor" },
];

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-2xl font-semibold text-ink">Welcome back</h1>
        <p className="text-muted text-sm mt-1">Here's where you left off.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-surface p-5">
            <s.icon size={18} className="text-cyan mb-3" />
            <div className="font-display text-xl text-ink">{s.value}</div>
            <div className="text-xs text-muted mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <h2 className="font-display text-lg text-ink mb-4">Continue practicing</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {MODES.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5 hover:border-amber/40 transition-colors"
          >
            <div className="rounded-lg bg-surface2 p-3">
              <m.icon size={20} className="text-amber" />
            </div>
            <div>
              <div className="font-display text-ink">{m.title}</div>
              <div className="text-sm text-muted">{m.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
