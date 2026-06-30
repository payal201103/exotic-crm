"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  ExternalLink,
  Folder,
  Gauge,
  ListChecks,
  Menu,
  Palette,
  Plus,
  Save,
  Settings,
  UsersRound,
  Video,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mobileNavigation = [
  { label: "Dashboard", href: "/dashboard", icon: Gauge },
  { label: "Masters", href: "/masters/users", icon: Folder },
  { label: "Job Cards", href: "/job-card", icon: ListChecks },
  { label: "Video Workflow", href: "/video-workflow", icon: Video },
  { label: "Customers", href: "#", icon: UsersRound },
  { label: "Settings", href: "#", icon: Settings },
];

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
  "/video-workflow": {
    title: "Video Workflow Dashboard",
    eyebrow: "Video Workflow",
  },
};

function getPageConfig(pathname: string) {
  return (
    pageConfig[pathname] ?? {
      title: "Job Card Details",
      eyebrow: "Workspace",
    }
  );
}

function HeaderActions({
  actions,
  compact = false,
}: Readonly<{
  actions?: "dashboard" | "job-card-add";
  compact?: boolean;
}>) {
  if (actions === "dashboard") {
    return (
      <div className={compact ? "grid gap-2" : "flex flex-wrap items-center gap-2"}>
        <Button
          asChild
          className={compact ? "w-full justify-start rounded-md bg-[#315cc7] hover:bg-[#294fb0]" : "rounded-lg bg-[#315cc7] hover:bg-[#294fb0]"}
        >
          <Link href="/job-card/add">
            <Plus className="size-4" aria-hidden="true" />
            New Job Card
          </Link>
        </Button>
        <Button className={compact ? "w-full justify-start rounded-md bg-[#22b8cf] hover:bg-[#159eb3]" : "rounded-lg bg-[#22b8cf] hover:bg-[#159eb3]"}>
          <Palette className="size-4" aria-hidden="true" />
          PaintEye
        </Button>
        <Button className={compact ? "w-full justify-start rounded-md bg-[#f2b72f] text-white hover:bg-[#d99e16]" : "rounded-lg bg-[#f2b72f] text-white hover:bg-[#d99e16]"}>
          <ExternalLink className="size-4" aria-hidden="true" />
          Exotic
        </Button>
        <Button
          variant="outline"
          className={compact ? "w-full justify-start rounded-md bg-white" : "rounded-lg bg-white"}
          aria-label="Notifications"
        >
          <Bell className="size-4" aria-hidden="true" />
          Notifications
        </Button>
      </div>
    );
  }

  if (actions === "job-card-add") {
    return (
      <div className={compact ? "grid gap-2" : "flex flex-wrap items-center gap-2"}>
        <Button className={compact ? "w-full justify-start rounded-md bg-[#4f72e8] hover:bg-[#3f61cf]" : "rounded-md bg-[#4f72e8] px-5 hover:bg-[#3f61cf]"}>
          <Save className="size-4" aria-hidden="true" />
          Create Job Card
        </Button>
        <Button className={compact ? "w-full justify-start rounded-md bg-slate-500 hover:bg-slate-600" : "rounded-md bg-slate-500 px-5 hover:bg-slate-600"}>
          <X className="size-4" aria-hidden="true" />
          Cancel
        </Button>
      </div>
    );
  }

  return null;
}

function UserSummary({ desktop = false }: Readonly<{ desktop?: boolean }>) {
  return (
    <div className={desktop ? "flex items-center gap-3 border-l border-slate-200 pl-3" : "flex items-center gap-3 rounded-md bg-slate-50 p-3"}>
      <div className={desktop ? "text-right" : "min-w-0 text-left"}>
        <p className="text-sm font-semibold text-slate-800">Dhrumil</p>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          Super Admin
        </p>
      </div>
      <div className="grid size-12 place-items-center rounded-full bg-[#4f72e8] text-base font-bold text-white shadow-lg shadow-slate-300 ring-2 ring-white">
        DH
      </div>
    </div>
  );
}

export function AppHeader() {
  const pathname = usePathname();
  const config = getPageConfig(pathname);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="flex min-h-16 items-center justify-between gap-3 px-4 py-3 sm:px-5 md:px-6 lg:min-h-20 lg:px-8 lg:py-4 xl:px-10">
        <div className="min-w-0 flex-1">
          {config.eyebrow ? (
            <p className="truncate text-sm font-medium text-slate-500">
              {config.eyebrow}
            </p>
          ) : null}
          <h1 className="truncate text-2xl font-semibold tracking-normal text-slate-800 md:text-3xl">
            {config.title}
          </h1>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <HeaderActions actions={config.actions} />
          <UserSummary desktop />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="shrink-0 rounded-md bg-white lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="scrollbar-none max-h-[calc(100dvh-5rem)] w-72 overflow-y-auto rounded-lg p-2 lg:hidden"
          >
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            {mobileNavigation.map((item) => {
              const Icon = item.icon;

              return (
                <DropdownMenuItem key={item.label} asChild>
                  <Link href={item.href} className="cursor-pointer">
                    <Icon className="size-4" aria-hidden="true" />
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}

            {config.actions ? (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <div className="px-1 py-1">
                  <HeaderActions actions={config.actions} compact />
                </div>
              </>
            ) : null}

            <DropdownMenuSeparator />
            <UserSummary />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
