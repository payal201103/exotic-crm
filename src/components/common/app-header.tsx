"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  ExternalLink,
  Palette,
  Plus,
  Save,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const pageConfig: Record<
  string,
  {
    title: string;
    eyebrow?: string;
    actions?: "dashboard" | "job-card-add";
  }
> = {
  "/dashboard": {
    title: "Dashboard",
    eyebrow: "Welcome back",
    actions: "dashboard",
  },
  "/job-card/add": {
    title: "Add Job Card",
    eyebrow: "Job Card",
    actions: "job-card-add",
  },
  "/job-card": {
    title: "Job Card List",
    eyebrow: "Job Cards",
  },
};

function getPageConfig(pathname: string) {
  return (
    pageConfig[pathname] ?? {
      title: "Exotic CRM",
      eyebrow: "Workspace",
    }
  );
}

export function AppHeader() {
  const pathname = usePathname();
  const config = getPageConfig(pathname);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="flex min-h-20 flex-col gap-4 px-5 py-4 md:px-8 xl:flex-row xl:items-center xl:justify-between">
        <div className="min-w-0">
          {config.eyebrow ? (
            <p className="text-sm font-medium text-slate-500">{config.eyebrow}</p>
          ) : null}
          <h1 className="truncate text-2xl font-semibold tracking-normal text-slate-800 md:text-3xl">
            {config.title}
          </h1>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center xl:justify-end">
          {config.actions === "dashboard" ? (
            <div className="flex flex-wrap items-center gap-2">
              <Button asChild className="rounded-lg bg-[#315cc7] hover:bg-[#294fb0]">
                <Link href="/job-card/add">
                  <Plus className="size-4" aria-hidden="true" />
                  New Job Card
                </Link>
              </Button>
              <Button className="rounded-lg bg-[#22b8cf] hover:bg-[#159eb3]">
                <Palette className="size-4" aria-hidden="true" />
                PaintEye
              </Button>
              <Button className="rounded-lg bg-[#f2b72f] text-white hover:bg-[#d99e16]">
                <ExternalLink className="size-4" aria-hidden="true" />
                Exotic
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-lg bg-white"
                aria-label="Notifications"
              >
                <Bell className="size-4" aria-hidden="true" />
              </Button>
            </div>
          ) : null}

          {config.actions === "job-card-add" ? (
            <div className="flex flex-wrap items-center gap-2">
              <Button className="rounded-md bg-[#4f72e8] px-5 hover:bg-[#3f61cf]">
                <Save className="size-4" aria-hidden="true" />
                Create Job Card
              </Button>
              <Button className="rounded-md bg-slate-500 px-5 hover:bg-slate-600">
                <X className="size-4" aria-hidden="true" />
                Cancel
              </Button>
            </div>
          ) : null}

          <div className="flex items-center gap-3 sm:border-l sm:border-slate-200 sm:pl-3">
            <div className="text-left sm:text-right">
              <p className="text-sm font-semibold text-slate-800">Dhrumil</p>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Super Admin
              </p>
            </div>
            <div className="grid size-12 place-items-center rounded-full bg-[#4f72e8] text-base font-bold text-white shadow-lg shadow-slate-300 ring-2 ring-white">
              DH
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
