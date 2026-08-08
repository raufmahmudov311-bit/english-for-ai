import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";

export default function DashboardShellLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-base">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <main className="flex-1 px-5 py-6 sm:px-8 sm:py-8 max-w-6xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
