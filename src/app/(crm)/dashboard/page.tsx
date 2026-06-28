import {
  Ban,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Edit3,
  MoreHorizontal,
  Search,
  Share2,
  TrendingUp,
  Video,
  Wrench,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  dashboardStats,
  todaysJobCards,
  upcomingTasks,
  workflowPulse,
  type DashboardStatIcon,
} from "@/data/crm";
import { cn } from "@/lib/utils";

const statIcons: Record<
  DashboardStatIcon,
  React.ComponentType<{ className?: string }>
> = {
  calendar: CalendarDays,
  wrench: Wrench,
  ban: Ban,
  video: Video,
  check: CheckCircle2,
  edit: Edit3,
  share: Share2,
};

const toneStyles = {
  blue: "border-l-[#4f72e8] text-[#4f72e8] bg-[#4f72e8]/10",
  cyan: "border-l-[#22b8cf] text-[#0f9dae] bg-[#22b8cf]/10",
  red: "border-l-[#ef4444] text-[#ef4444] bg-[#ef4444]/10",
  amber: "border-l-[#f2b72f] text-[#bd8505] bg-[#f2b72f]/14",
  emerald: "border-l-[#22c78b] text-[#13a26f] bg-[#22c78b]/10",
};

const statusStyles = {
  Open: "bg-emerald-100 text-emerald-700",
  Closed: "bg-slate-100 text-slate-700",
};

export default function DashboardPage() {
  return (
    <div className="space-y-8 px-5 py-6 md:px-6 lg:px-8 xl:px-10">
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dashboardStats.map((item) => {
          const Icon = statIcons[item.icon];
          const card = (
            <Card
              className={cn(
                "h-full rounded-lg border-0 border-l-4 bg-white py-0 shadow-sm shadow-slate-200/80 ring-1 ring-slate-200/80 transition",
                item.href && "hover:-translate-y-0.5 hover:shadow-md",
                toneStyles[item.tone]
              )}
            >
              <CardContent className="flex min-h-32 items-center justify-between gap-4 p-6">
                <div className="min-w-0">
                  <p className="text-sm font-bold uppercase tracking-normal">
                    {item.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-slate-700">
                    {item.value}
                  </p>
                </div>
                <div className="grid size-12 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-300">
                  <Icon className="size-7" aria-hidden="true" />
                </div>
              </CardContent>
            </Card>
          );

          return item.href ? (
            <Link
              key={item.label}
              href={item.href}
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f72e8]"
            >
              {card}
            </Link>
          ) : (
            <div key={item.label}>{card}</div>
          );
        })}
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_24rem]">
        <Card className="rounded-lg border-0 bg-white py-0 shadow-sm ring-1 ring-slate-200">
          <CardHeader className="border-b border-slate-200 px-6 py-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold text-[#315cc7]">
                <CalendarDays className="size-5" aria-hidden="true" />
                Today&apos;s Job Cards
              </CardTitle>
              <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
                <Search className="size-4" aria-hidden="true" />
                <span>Search job cards</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/80 hover:bg-slate-50/80">
                  <TableHead className="px-6 text-[#315cc7]">Job No.</TableHead>
                  <TableHead className="text-[#315cc7]">
                    Customer Name
                  </TableHead>
                  <TableHead className="text-[#315cc7]">Car Name</TableHead>
                  <TableHead className="text-[#315cc7]">Service</TableHead>
                  <TableHead className="text-[#315cc7]">Status</TableHead>
                  <TableHead className="text-right text-[#315cc7]">
                    Due
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {todaysJobCards.map((job) => (
                  <TableRow key={job.jobNo}>
                    <TableCell className="px-6 font-medium text-slate-900">
                      {job.jobNo}
                    </TableCell>
                    <TableCell>{job.customer}</TableCell>
                    <TableCell>{job.car}</TableCell>
                    <TableCell>{job.service}</TableCell>
                    <TableCell>
                      <Badge
                        className={cn(
                          "rounded-md px-2.5 py-1",
                          statusStyles[job.status]
                        )}
                      >
                        {job.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-slate-500">
                      {job.due}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="rounded-lg border-0 bg-white shadow-sm ring-1 ring-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-lg font-semibold">
                Workflow Pulse
                <TrendingUp className="size-5 text-emerald-500" aria-hidden="true" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {workflowPulse.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">{item.label}</span>
                    <span className="text-slate-500">{item.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div
                      className={cn("h-2 rounded-full", item.colorClass)}
                      style={{ width: item.value }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-lg border-0 bg-white shadow-sm ring-1 ring-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-lg font-semibold">
                Upcoming Tasks
                <MoreHorizontal className="size-5 text-slate-400" aria-hidden="true" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingTasks.map(
                (task) => (
                  <div
                    key={task.label}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 p-3"
                  >
                    <div className="grid size-9 place-items-center rounded-lg bg-slate-100 text-slate-500">
                      <Clock3 className="size-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-slate-800">
                        {task.label}
                      </p>
                      <p className="text-xs text-slate-500">{task.time}</p>
                    </div>
                  </div>
                )
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
