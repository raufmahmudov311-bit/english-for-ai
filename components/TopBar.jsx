"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, User } from "lucide-react";

const PROFILES = ["you", "your-friend"];

const TITLES = {
  "/dashboard": "dashboard",
  "/vocabulary": "vocabulary",
  "/error-practice": "error-practice",
  "/prompt-writing": "prompt-writing",
  "/voice": "voice",
};

export default function TopBar() {
  const pathname = usePathname();
  const [profile, setProfile] = useState(PROFILES[0]);
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between border-b border-border bg-surface px-5 py-3.5">
      <div className="font-mono text-sm text-muted">
        <span className="text-cyan">{profile}</span>
        <span className="text-muted">@codeenglish</span>
        <span className="text-ink">:~/{TITLES[pathname] || ""}$</span>
      </div>

      <div className="relative">
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2 rounded-lg border border-border bg-surface2 px-3 py-1.5 text-sm text-ink hover:border-amber/40 transition-colors"
        >
          <User size={15} className="text-amber" />
          {profile}
          <ChevronDown size={14} className="text-muted" />
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-40 rounded-lg border border-border bg-surface2 shadow-xl overflow-hidden z-10">
            {PROFILES.map((p) => (
              <button
                key={p}
                onClick={() => {
                  setProfile(p);
                  setOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-surface transition-colors ${
                  p === profile ? "text-amber" : "text-muted"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
