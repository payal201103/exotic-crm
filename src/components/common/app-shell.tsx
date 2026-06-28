"use client";

import { useState } from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { AppHeader } from "@/components/common/app-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SIDEBAR_STORAGE_KEY = "exotic-crm-sidebar-collapsed";

function getInitialSidebarState() {
  if (typeof window === "undefined") {
    return false;
  }

  return sessionStorage.getItem(SIDEBAR_STORAGE_KEY) === "true";
}

export function AppShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    getInitialSidebarState
  );

  function handleSidebarToggle() {
    setSidebarCollapsed((current) => {
      const next = !current;

      sessionStorage.setItem(SIDEBAR_STORAGE_KEY, String(next));

      return next;
    });
  }

  const ToggleIcon = sidebarCollapsed ? PanelLeftOpen : PanelLeftClose;

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100 text-slate-950">
      <div className="group fixed left-4 top-4 z-50">
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={handleSidebarToggle}
          aria-label={sidebarCollapsed ? "Open sidebar" : "Close sidebar"}
          aria-pressed={!sidebarCollapsed}
          className={cn(
            "size-10 rounded-lg border border-slate-200 bg-white/95 text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:bg-white hover:text-[#315cc7] hover:shadow-md",
            !sidebarCollapsed && "border-white/20 bg-white/15 text-white hover:bg-white/24 hover:text-white"
          )}
        >
          <ToggleIcon className="size-5" aria-hidden="true" />
        </Button>
        <span className="pointer-events-none absolute left-12 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-950 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:block group-hover:opacity-100">
          {sidebarCollapsed ? "Open sidebar" : "Close sidebar"}
        </span>
      </div>

      <AppSidebar
        collapsed={sidebarCollapsed}
      />
      <main className="min-w-0 flex-1 overflow-y-auto transition-[width] duration-300 ease-in-out">
        <AppHeader />
        {children}
      </main>
    </div>
  );
}
