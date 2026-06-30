import {
  CalendarDays,
  CheckCircle2,
  Clapperboard,
  Hourglass,
  Scissors,
  Search,
  Share2,
  Video,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  videoWorkflowPeople,
  videoWorkflowStats,
  videoWorkflowTasks,
  type VideoWorkflowRole,
  type VideoWorkflowStage,
  type VideoWorkflowType,
} from "@/data/crm";
import { cn } from "@/lib/utils";

const statIcons = {
  acceptance: Hourglass,
  video: Video,
  check: CheckCircle2,
  calendar: CalendarDays,
};

const statToneStyles = {
  amber: "border-l-[#f2b72f] text-[#f2b72f]",
  blue: "border-l-[#4f72e8] text-[#4f72e8]",
  emerald: "border-l-[#20c990] text-[#20c990]",
  cyan: "border-l-[#22b8cf] text-[#22b8cf]",
  red: "border-l-[#ef4444] text-[#ef4444]",
};

const peopleToneStyles = {
  blue: "bg-[#4f72e8]",
  emerald: "bg-[#20c990]",
  cyan: "bg-[#22b8cf]",
};

const roleIcons: Record<VideoWorkflowRole, React.ComponentType<{ className?: string }>> = {
  videographer: Video,
  editor: Scissors,
  poster: Share2,
};

const videoTypeStyles: Record<VideoWorkflowType, string> = {
  Reel: "bg-[#ef4444] text-white",
  YouTube: "bg-[#ef4444] text-white",
  Walkaround: "bg-[#22b8cf] text-white",
};

const stageStyles: Record<VideoWorkflowStage, string> = {
  "Recording Pending": "bg-[#f2b72f] text-white",
  Recording: "bg-[#4f72e8] text-white",
  "Pending Edit": "bg-[#f2b72f] text-white",
  Editing: "bg-[#4f72e8] text-white",
  "Ready To Post": "bg-[#20c990] text-white",
  Posted: "bg-[#20c990] text-white",
};

function VideoTypeBadge({ type }: Readonly<{ type: VideoWorkflowType }>) {
  const Icon = type === "YouTube" ? Clapperboard : Video;

  return (
    <Badge className={cn("h-6 rounded-md px-2 text-xs", videoTypeStyles[type])}>
      <Icon className="size-3" aria-hidden="true" />
      {type}
    </Badge>
  );
}

export default function VideoWorkflowPage() {
  return (
    <div className="space-y-6 px-4 py-5 sm:px-5 md:px-6 md:py-6 lg:px-8 xl:px-10">
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {videoWorkflowStats.map((stat) => {
          const Icon = statIcons[stat.icon];

          return (
            <Card
              key={stat.key}
              className={cn(
                "rounded-lg border-0 border-l-4 bg-white py-0 shadow-sm ring-1 ring-slate-200",
                statToneStyles[stat.tone]
              )}
            >
              <CardContent className="flex min-h-28 items-center justify-between gap-4 p-4 sm:p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-normal">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-700">
                    {stat.value}
                  </p>
                </div>
                <div className="grid size-12 place-items-center rounded-lg bg-slate-100 text-slate-300">
                  <Icon className="size-7" aria-hidden="true" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {videoWorkflowPeople.map((group) => {
          const Icon = roleIcons[group.role];
          const activePeople = group.people.filter(
            (person) => person.active > 0 || person.done > 0
          );

          return (
            <Card
              key={group.key}
              className="rounded-lg border-0 bg-white py-0 shadow-sm ring-1 ring-slate-200"
            >
              <CardHeader
                className={cn(
                  "px-5 py-4 text-white",
                  peopleToneStyles[group.tone]
                )}
              >
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                  <Icon className="size-4" aria-hidden="true" />
                  {group.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {activePeople.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent">
                        <TableHead className="px-5 text-xs uppercase text-[#4f72e8]">
                          Name
                        </TableHead>
                        <TableHead className="text-right text-xs uppercase text-[#4f72e8]">
                          Active
                        </TableHead>
                        <TableHead className="pr-5 text-right text-xs uppercase text-[#4f72e8]">
                          Done
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {activePeople.map((person) => (
                        <TableRow key={person.name} className="hover:bg-slate-50/70">
                          <TableCell className="px-5 font-medium text-slate-500">
                            {person.name}
                          </TableCell>
                          <TableCell className="text-right">
                            <Badge className="rounded-md bg-[#4f72e8] text-white">
                              {person.active}
                            </Badge>
                          </TableCell>
                          <TableCell className="pr-5 text-right">
                            <Badge className="rounded-md bg-[#20c990] text-white">
                              {person.done}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="px-5 py-7 text-sm text-slate-500">
                    No {group.title.toLowerCase()} found
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </section>

      <Card className="rounded-lg border-0 bg-white py-0 shadow-sm ring-1 ring-slate-200">
        <CardHeader className="border-b border-slate-200 bg-[#16a476] px-5 py-4 text-white">
          <div className="flex items-center justify-between gap-3">
            <CardTitle className="flex items-center gap-2 text-base font-semibold">
              <Video className="size-4" aria-hidden="true" />
              Recent Video Tasks
            </CardTitle>
            <Badge className="rounded-md bg-white/90 text-[#16a476]">
              {videoWorkflowTasks.length} Tasks
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 p-5">
          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <span>Show</span>
              <Select defaultValue="25">
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <span>entries</span>
            </div>
            <label className="flex flex-col gap-2 sm:flex-row sm:items-center">
              Search:
              <div className="relative w-full sm:w-auto">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                  aria-hidden="true"
                />
                <Input className="w-full pl-9 sm:w-72 md:w-56" />
              </div>
            </label>
          </div>

          <Table className="min-w-[64rem]">
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-xs uppercase text-[#4f72e8]">
                  Job Card
                </TableHead>
                <TableHead className="text-xs uppercase text-[#4f72e8]">
                  Customer
                </TableHead>
                <TableHead className="text-xs uppercase text-[#4f72e8]">
                  Car Details
                </TableHead>
                <TableHead className="text-xs uppercase text-[#4f72e8]">
                  Video Type
                </TableHead>
                <TableHead className="text-xs uppercase text-[#4f72e8]">
                  Stage
                </TableHead>
                <TableHead className="text-xs uppercase text-[#4f72e8]">
                  Assigned To
                </TableHead>
                <TableHead className="text-xs uppercase text-[#4f72e8]">
                  Due Date
                </TableHead>
                <TableHead className="text-right text-xs uppercase text-[#4f72e8]">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {videoWorkflowTasks.map((task) => (
                <TableRow key={task.jobCardId} className="hover:bg-slate-50/80">
                  <TableCell className="font-bold text-slate-500">
                    JC-{String(task.jobCardId).padStart(4, "0")}
                  </TableCell>
                  <TableCell className="font-medium text-slate-500">
                    {task.customer}
                  </TableCell>
                  <TableCell className="min-w-48 text-slate-500">
                    <div>{task.carDetails}</div>
                    <div className="text-xs uppercase text-slate-400">
                      {task.carNumber}
                    </div>
                  </TableCell>
                  <TableCell>
                    <VideoTypeBadge type={task.videoType} />
                  </TableCell>
                  <TableCell>
                    <Badge className={cn("rounded-md", stageStyles[task.stage])}>
                      {task.stage}
                    </Badge>
                  </TableCell>
                  <TableCell className="min-w-52 text-slate-500">
                    <div className="space-y-1">
                      {task.assignedTo.map((assignee) => {
                        const Icon = roleIcons[assignee.role];

                        return (
                          <div
                            key={`${task.jobCardId}-${assignee.role}`}
                            className="flex items-center gap-1.5"
                          >
                            <Icon className="size-3.5 text-slate-500" aria-hidden="true" />
                            <span>{assignee.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-500">{task.dueDate}</TableCell>
                  <TableCell className="text-right">
                    {task.isOverdue ? (
                      <Badge className="rounded-md bg-[#ef4444] text-white">
                        Overdue
                      </Badge>
                    ) : (
                      <Badge className="rounded-md bg-[#20c990] text-white">
                        On Track
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>
              Showing 1 to {videoWorkflowTasks.length} of{" "}
              {videoWorkflowTasks.length} entries
            </p>
            <div className="flex items-center justify-start md:justify-end">
              <button className="h-9 rounded-l-md border border-slate-200 bg-white px-3 text-slate-500">
                Previous
              </button>
              <button className="h-9 border-y border-[#4f72e8] bg-[#4f72e8] px-4 font-medium text-white">
                1
              </button>
              <button className="h-9 rounded-r-md border border-slate-200 bg-white px-3 text-slate-500">
                Next
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
