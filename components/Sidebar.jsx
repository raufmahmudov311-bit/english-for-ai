"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Terminal,
  MessageSquareText,
  Mic,
  Home,
} from "lucide-react";

const NAV = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/vocabulary", label: "Vocabulary", icon: BookOpen },
  { href: "/error-practice", label: "Error Practice", icon: Terminal },
  { href: "/prompt-writing", label: "Prompt Writing", icon: MessageSquareText },
  { href: "/voice", label: "Voice Practice", icon: Mic },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-60 shrink-0 flex-col border-r border-border bg-surface">
      <div className="px-5 py-5 border-b border-border">
        <Link href="/" className="flex items-center gap-2 font-display text-ink font-semibold">
          <span className="text-amber">&gt;</span> english-for-ai
        </Link>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-surface2 text-amber border border-border"
                  : "text-muted hover:text-ink hover:bg-surface2"
              }`}
            >
              <item.icon size={17} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="px-3 py-4 border-t border-border">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted hover:text-ink hover:bg-surface2 transition-colors"
        >
          <Home size={17} />
          Back to home
        </Link>
      </div>
    </aside>
  );
}
