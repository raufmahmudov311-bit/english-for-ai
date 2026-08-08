import ErrorCard from "@/components/ErrorCard";

const ERRORS = [
  {
    source: "git · terminal",
    level: "Beginner",
    error: "! [rejected] main -> main (fetch first)",
    question: "Why did this push fail? Explain the cause in one or two English sentences.",
    answer:
      "This means someone else's changes are on the remote repository that you don't have locally yet. Git refuses to overwrite them. You need to run 'git pull' first to bring those changes into your local copy, then push again.",
  },
  {
    source: "npm · terminal",
    level: "Beginner",
    error: "npm ERR! code ENOENT — no such file or directory, open 'package.json'",
    question: "What is this error telling you, and what should you check first?",
    answer:
      "ENOENT means 'error, no entry' — the file npm was looking for doesn't exist at that location. This usually means you're running the command in the wrong folder. Check that you're inside the project folder that actually contains package.json.",
  },
  {
    source: "Vercel · build log",
    level: "Intermediate",
    error: "Error: Environment Variable \"DATABASE_URL\" references Secret \"database_url\", which does not exist.",
    question: "Where does this problem live — in the code, or in the project settings? Explain why.",
    answer:
      "This is a project settings problem, not a code problem. The code expects an environment variable, but it was never added (or was misspelled) in the Vercel project's Environment Variables settings. Adding it there — with the exact same name the code expects — fixes it.",
  },
  {
    source: "git · terminal",
    level: "Intermediate",
    error: "CONFLICT (content): Merge conflict in app/page.js",
    question: "In your own words, explain what a merge conflict is and why Git can't resolve it automatically.",
    answer:
      "A merge conflict happens when two branches changed the same lines of the same file in different ways. Git can't guess which version is correct, so it pauses and asks a person to open the file, choose (or combine) the correct version, and mark it as resolved.",
  },
  {
    source: "Vercel · build log",
    level: "Advanced",
    error: "Module not found: Can't resolve '@/components/Sidebar' in '/vercel/path0/app/(dashboard)'",
    question: "List two possible causes of this error, in English.",
    answer:
      "Two common causes: (1) the file path or filename doesn't exactly match what's imported — including capitalization, which matters on Vercel's Linux servers even if it worked on Windows/Mac locally; (2) the import alias ('@/') isn't configured correctly in jsconfig.json or tsconfig.json.",
  },
  {
    source: "npm · terminal",
    level: "Advanced",
    error: "npm ERR! peer dep missing: react@\">=18\", required by some-package@2.0.0",
    question: "What is a 'peer dependency', and why is npm complaining here?",
    answer:
      "A peer dependency is a package that another package expects your project to already have installed — usually a shared library like React, so there's only one copy of it. Here, 'some-package' needs React version 18 or higher in your project, and npm can't find a compatible version installed.",
  },
];

export default function ErrorPracticePage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold text-ink">Error Practice</h1>
        <p className="text-muted text-sm mt-1">
          Real errors from git, npm, and Vercel. Read, explain, then check yourself.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {ERRORS.map((e, i) => (
          <ErrorCard key={i} {...e} />
        ))}
      </div>
    </div>
  );
}
