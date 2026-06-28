"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BarChart3,
  ChevronDown,
  ClipboardList,
  Folder,
  Gauge,
  Settings,
  ShieldCheck,
  UserRound,
  Video,
} from "lucide-react";

import { cn } from "@/lib/utils";

const navigation = [
  { label: "Dashboard", href: "/dashboard", icon: Gauge },
  { label: "Job Cards", href: "/job-card", icon: ClipboardList },
  { label: "Reports", href: "#", icon: BarChart3 },
  { label: "Video Workflow", href: "/video-workflow", icon: Video },
  { label: "Customers", href: "#", icon: UserRound },
  { label: "Settings", href: "#", icon: Settings },
];

const masterItems = [
  { label: "Users", href: "/masters/users" },
  { label: "Customers", href: "#" },
  { label: "Companies", href: "#" },
  { label: "Car Brand", href: "#" },
  { label: "Car Model", href: "#" },
  { label: "Tax Slab", href: "#" },
  { label: "Products", href: "#" },
];

export function AppSidebar({
  collapsed,
  className,
}: Readonly<{
  collapsed: boolean;
  className?: string;
}>) {
  const pathname = usePathname();
  const [mastersOpen, setMastersOpen] = useState(false);

  const isMastersActive = pathname.startsWith("/masters");

  return (
    <aside
      className={cn(
        "sticky top-0 z-30 flex h-screen shrink-0 flex-col overflow-hidden border-r border-white/15 bg-[#315cc7] text-white shadow-xl transition-[width] duration-300 ease-in-out",
        collapsed ? "w-[4.75rem]" : "w-56",
        className
      )}
    >
      <div
        className={cn(
          "flex h-20 items-center gap-3 px-5 pl-16",
          collapsed && "justify-center gap-0 px-3 pt-12"
        )}
      >
        <span
          className={cn(
            "overflow-hidden whitespace-nowrap text-xl font-bold tracking-wide transition-[opacity,width] duration-200",
            collapsed && "w-0 opacity-0"
          )}
        >
          EXOTIC CRM
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="space-y-1">

          {/* Dashboard first */}
          {navigation.slice(0, 1).map((item) => {
            const Icon = item.icon;
            const active =
              item.href !== "#" &&
              (pathname === item.href || pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "group flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium text-white/78 transition hover:bg-white/12 hover:text-white",
                  collapsed && "justify-center gap-0 px-0",
                  active && "bg-white/16 text-white shadow-sm"
                )}
                title={collapsed ? item.label : undefined}
              >
                <Icon className="size-5 shrink-0" aria-hidden="true" />
                <span
                  className={cn(
                    "overflow-hidden whitespace-nowrap transition-[opacity,width] duration-200",
                    collapsed && "w-0 opacity-0"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}

          {/* Masters dropdown */}
          <div>
            <button
              type="button"
              onClick={() => !collapsed && setMastersOpen((o) => !o)}
              className={cn(
                "group flex h-11 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium text-white/78 transition hover:bg-white/12 hover:text-white",
                collapsed && "justify-center gap-0 px-0",
                isMastersActive && "bg-white/16 text-white shadow-sm"
              )}
              title={collapsed ? "Masters" : undefined}
            >
              <Folder className="size-5 shrink-0" aria-hidden="true" />
              <span
                className={cn(
                  "min-w-0 flex-1 overflow-hidden whitespace-nowrap text-left transition-[opacity,width] duration-200",
                  collapsed && "w-0 opacity-0"
                )}
              >
                Masters
              </span>
              <ChevronDown
                className={cn(
                  "size-4 shrink-0 transition-transform duration-200",
                  collapsed && "w-0 opacity-0",
                  mastersOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>

            {/* Smooth animated dropdown */}
            <div
              className={cn(
                "overflow-hidden transition-all duration-200 ease-in-out",
                mastersOpen && !collapsed
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <div className="mt-1 space-y-0.5 pl-3">
                {masterItems.map((item) => {
                  const active =
                    item.href !== "#" &&
                    (pathname === item.href ||
                      pathname.startsWith(`${item.href}/`));

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "block rounded-md px-3 py-2 text-sm text-white/70 transition hover:bg-white/12 hover:text-white",
                        active && "bg-white/16 font-medium text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Remaining nav items */}
          {navigation.slice(1).map((item) => {
            const Icon = item.icon;
            const active =
              item.href !== "#" &&
              (pathname === item.href || pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "group flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium text-white/78 transition hover:bg-white/12 hover:text-white",
                  collapsed && "justify-center gap-0 px-0",
                  active && "bg-white/16 text-white shadow-sm"
                )}
                title={collapsed ? item.label : undefined}
              >
                <Icon className="size-5 shrink-0" aria-hidden="true" />
                <span
                  className={cn(
                    "overflow-hidden whitespace-nowrap transition-[opacity,width] duration-200",
                    collapsed && "w-0 opacity-0"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="space-y-4 border-t border-white/15 p-4">
        <div
          className={cn(
            "flex items-center gap-3 rounded-lg bg-white/10 p-3 ring-1 ring-white/15",
            collapsed && "justify-center p-2"
          )}
        >
          <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-white text-[#315cc7]">
            <ShieldCheck className="size-5" aria-hidden="true" />
          </div>
          <div
            className={cn(
              "min-w-0 transition-opacity",
              collapsed && "hidden opacity-0"
            )}
          >
            <p className="truncate text-sm font-semibold">Dhrumil</p>
            <p className="truncate text-xs uppercase tracking-wide text-white/55">
              Super Admin
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
