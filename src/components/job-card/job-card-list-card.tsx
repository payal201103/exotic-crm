// job-card-list-card.tsx
import {
  CalendarDays,
  Car,
  CheckCircle2,
  Eye,
  FileText,
  Phone,
  UserRound,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import type { JobCard } from "@/data/crm";
import { cn } from "@/lib/utils";

export function JobCardListCard({
  jobCard,
}: Readonly<{
  jobCard: JobCard;
}>) {
  return (
    <article className="grid gap-4 rounded-md border-l-4 border-l-[#4f72e8] bg-white px-4 py-4 shadow-sm ring-1 ring-slate-200 md:grid-cols-[minmax(0,1fr)_auto] md:px-5">
      <div className="min-w-0 space-y-4">
        <div>
          <h3 className="flex min-w-0 items-center gap-2 text-base font-bold text-[#4f72e8]">
            <CalendarDays className="size-4" aria-hidden="true" />
            Job Card #{jobCard.id}
          </h3>
          <Badge className="mt-2 rounded-md bg-[#20c990] px-3 py-1 text-white">
            {jobCard.status}
          </Badge>
        </div>

        <div className="grid gap-3 text-sm font-medium text-slate-500 lg:grid-cols-2">
          <div className="space-y-2">
            <p className="flex min-w-0 items-center gap-2">
              <UserRound className="size-4 text-[#4f72e8]" aria-hidden="true" />
              <span className="font-bold text-slate-500">Customer:</span>
              <span className="min-w-0 truncate">{jobCard.customerName}</span>
            </p>
            <p className="flex min-w-0 items-center gap-2">
              <Phone className="size-4 text-[#20c990]" aria-hidden="true" />
              <span className="font-bold text-slate-500">Mobile:</span>
              <span className="min-w-0 truncate">{jobCard.mobile}</span>
            </p>
          </div>

          <div className="space-y-2">
            <p className="flex min-w-0 items-center gap-2">
              <CalendarDays className="size-4 text-[#22b8cf]" aria-hidden="true" />
              <span className="font-bold text-slate-500">Booking:</span>
              <span className="min-w-0 truncate">{jobCard.bookingDate}</span>
            </p>
            <p className="flex min-w-0 items-center gap-2">
              <CalendarDays className="size-4 text-[#f2b72f]" aria-hidden="true" />
              <span className="font-bold text-slate-500">Delivery:</span>
              <span className="min-w-0 truncate">{jobCard.deliveryDate}</span>
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-3 text-sm font-medium text-slate-500">
          <p className="flex min-w-0 items-center gap-2">
            <Car className="size-4 text-[#ef4444]" aria-hidden="true" />
            <span className="font-bold text-slate-500">Vehicle:</span>
            <Badge variant="outline" className="h-6 min-w-0 rounded-md bg-slate-50 text-xs">
              {jobCard.vehicle}
            </Badge>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-start gap-2 md:flex-col md:items-end">
        <Button className="rounded-md bg-[#20c990] hover:bg-[#18ad7b] max-sm:flex-1">
          <CheckCircle2 className="size-4" aria-hidden="true" />
          Mark Close
        </Button>
        <div className="flex gap-2">
          <Link
            href={`/job-card/${jobCard.id}`}
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-md bg-[#4f72e8] text-white hover:bg-[#3f61cf]"
            )}
            aria-label={`View job card ${jobCard.id}`}
          >
            <Eye className="size-4" aria-hidden="true" />
          </Link>
          <Button
            size="sm"
            className="rounded-md bg-[#ef4444] hover:bg-[#dc2626]"
            aria-label={`Open job card document ${jobCard.id}`}
          >
            <FileText className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </article>
  );
}
