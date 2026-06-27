import Link from "next/link";
import { ClipboardList, Plus } from "lucide-react";

import { JobCardListCard } from "@/components/job-card/job-card-list-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { jobCards } from "@/data/crm";

export default function JobCardListPage() {
  return (
    <div className="space-y-5 px-5 pb-8 md:px-8">
      <div className="flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-700">
          <ClipboardList className="size-6" aria-hidden="true" />
          Job Card List
        </h2>
        <Button asChild className="rounded-md bg-[#4f72e8] hover:bg-[#3f61cf]">
          <Link href="/job-card/add">
            <Plus className="size-4" aria-hidden="true" />
            Add Job Card
          </Link>
        </Button>
      </div>

      <Card className="rounded-lg border-0 bg-white py-0 shadow-sm ring-1 ring-slate-200">
        <CardHeader className="border-b border-slate-200 bg-slate-50/70 px-5 py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <CardTitle className="text-base font-semibold text-[#4f72e8]">
              Job Cards
            </CardTitle>
            <Select defaultValue="open">
              <SelectTrigger className="h-9 w-full rounded-md bg-white md:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 p-5">
          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <span>Show</span>
              <Select defaultValue="10">
                <SelectTrigger className="h-9 w-20 rounded-md bg-white">
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
            <label className="flex items-center gap-2">
              Search:
              <Input className="h-9 w-full rounded-md bg-white md:w-56" />
            </label>
          </div>

          <div className="space-y-4">
            {jobCards.map((jobCard) => (
              <JobCardListCard key={jobCard.id} jobCard={jobCard} />
            ))}
          </div>

          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>Showing 1 to {jobCards.length} of {jobCards.length} entries</p>
            <div className="flex items-center justify-end">
              <Button variant="outline" className="rounded-r-none bg-white text-slate-500">
                Previous
              </Button>
              <Button className="rounded-none bg-[#4f72e8] px-4 hover:bg-[#3f61cf]">
                1
              </Button>
              <Button variant="outline" className="rounded-l-none bg-white text-slate-500">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
