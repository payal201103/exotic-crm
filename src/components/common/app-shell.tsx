import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { AppHeader } from "@/components/common/app-header";

export function AppShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-100 text-slate-950">
      <AppSidebar />
      <main className="min-w-0 flex-1 overflow-y-auto">
        <AppHeader />
        {children}
      </main>
    </div>
  );
}
