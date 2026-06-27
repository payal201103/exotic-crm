"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BarChart3,
  Car,
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
  { label: "Masters", href: "#", icon: Folder },
  { label: "Job Cards", href: "/job-card", icon: ClipboardList },
  { label: "Reports", href: "#", icon: BarChart3 },
  { label: "Video Workflow", href: "#", icon: Video },
  { label: "Customers", href: "#", icon: UserRound },
  { label: "Settings", href: "#", icon: Settings },
];

export function AppSidebar() {
  const [collapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "sticky top-0 z-30 flex h-screen shrink-0 flex-col border-r border-white/15 bg-[#315cc7] text-white shadow-xl transition-[width] duration-300",
        collapsed ? "w-[4.75rem]" : "w-[17.5rem]",
        "max-sm:w-[4.75rem]"
      )}
    >
      <div className="flex h-20 items-center gap-3 px-5">
        <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-white/15 ring-1 ring-white/20">
          <Car className="size-6" aria-hidden="true" />
        </div>
        <span
          className={cn(
            "overflow-hidden whitespace-nowrap text-xl font-bold tracking-wide transition-opacity max-sm:hidden",
            collapsed && "opacity-0"
          )}
        >
          EXOTIC CRM
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-1">
          {navigation.map((item) => {
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
                  active && "bg-white/16 text-white shadow-sm"
                )}
                title={collapsed ? item.label : undefined}
              >
                <Icon className="size-5 shrink-0" aria-hidden="true" />
                <span
                  className={cn(
                    "overflow-hidden whitespace-nowrap transition-opacity max-sm:hidden",
                    collapsed && "opacity-0"
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
            "flex items-center gap-3 rounded-lg bg-white/10 p-3 ring-1 ring-white/15 max-sm:justify-center max-sm:p-2",
            collapsed && "justify-center p-2"
          )}
        >
          <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-white text-[#315cc7]">
            <ShieldCheck className="size-5" aria-hidden="true" />
          </div>
          <div
            className={cn(
              "min-w-0 transition-opacity max-sm:hidden",
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
