"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ClipboardList,
  Edit3,
  FileText,
  Save,
  Share2,
  Trash2,
  UserRound,
  Wrench,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  carBrandOptions,
  carModelOptions,
  customerOptions,
  serviceOptions,
  type JobCard,
} from "@/data/crm";

function RequiredMark() {
  return <span className="text-red-500">*</span>;
}

function DetailRow({
  label,
  value,
}: Readonly<{
  label: string;
  value: React.ReactNode;
}>) {
  return (
    <div className="grid border-b border-slate-200 last:border-b-0 md:grid-cols-[18rem_minmax(0,1fr)]">
      <div className="border-slate-200 px-4 py-4 font-bold text-slate-500 md:border-r">
        {label}
      </div>
      <div className="min-w-0 px-4 py-4 text-slate-500">{value}</div>
    </div>
  );
}

function SectionTitle({
  icon: Icon,
  children,
}: Readonly<{
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center gap-2 border-b border-slate-200 pb-3 text-sm font-bold uppercase text-slate-500">
      <Icon className="size-4" aria-hidden="true" />
      {children}
    </div>
  );
}

function EditJobCardDialog({
  jobCard,
  onSave,
}: Readonly<{
  jobCard: JobCard;
  onSave: (jobCard: JobCard) => void;
}>) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(jobCard);

  function updateDraft(field: keyof JobCard, value: string | string[]) {
    setDraft((current) => ({
      ...current,
      [field]: value,
      vehicle:
        field === "carBrand" || field === "carModel"
          ? `${field === "carBrand" ? value : current.carBrand} ${
              field === "carModel" ? value : current.carModel
            }`
          : current.vehicle,
    }));
  }

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (nextOpen) {
      setDraft(jobCard);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSave(draft);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="rounded-md bg-[#f2b72f] text-white hover:bg-[#d99e16]">
          <Edit3 className="size-4" aria-hidden="true" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-lg p-0 sm:max-w-5xl">
        <DialogHeader className="rounded-t-lg bg-[#4f72e8] px-5 py-3 text-white">
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
            <ClipboardList className="size-5" aria-hidden="true" />
            Edit Job Card
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 px-5 pb-5">
          <section className="space-y-5">
            <SectionTitle icon={UserRound}>Customer Details</SectionTitle>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="edit-mobile-no" className="text-slate-500">
                  Mobile No <RequiredMark />
                </Label>
                <Input
                  id="edit-mobile-no"
                  value={draft.mobile}
                  onChange={(event) => updateDraft("mobile", event.target.value)}
                  className="h-10 rounded-md bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-customer-name" className="text-slate-500">
                  Customer Name <RequiredMark />
                </Label>
                <Select
                  value={draft.customerName}
                  onValueChange={(value) => updateDraft("customerName", value)}
                >
                  <SelectTrigger
                    id="edit-customer-name"
                    className="h-10 w-full rounded-md bg-white"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[draft.customerName, ...customerOptions.map((item) => item.label)]
                      .filter((value, index, values) => values.indexOf(value) === index)
                      .map((customer) => (
                        <SelectItem key={customer} value={customer}>
                          {customer}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <SectionTitle icon={ClipboardList}>Vehicle Details</SectionTitle>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="edit-car-brand" className="text-slate-500">
                  Car Brand <RequiredMark />
                </Label>
                <Select
                  value={draft.carBrand}
                  onValueChange={(value) => updateDraft("carBrand", value)}
                >
                  <SelectTrigger
                    id="edit-car-brand"
                    className="h-10 w-full rounded-md bg-white"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[draft.carBrand, ...carBrandOptions.map((item) => item.label)]
                      .filter((value, index, values) => values.indexOf(value) === index)
                      .map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-car-model" className="text-slate-500">
                  Car Model <RequiredMark />
                </Label>
                <Select
                  value={draft.carModel}
                  onValueChange={(value) => updateDraft("carModel", value)}
                >
                  <SelectTrigger
                    id="edit-car-model"
                    className="h-10 w-full rounded-md bg-white"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[draft.carModel, ...carModelOptions.map((item) => item.label)]
                      .filter((value, index, values) => values.indexOf(value) === index)
                      .map((model) => (
                        <SelectItem key={model} value={model}>
                          {model}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-car-number" className="text-slate-500">
                  Car Number
                </Label>
                <Input
                  id="edit-car-number"
                  value={draft.carNumber}
                  onChange={(event) => updateDraft("carNumber", event.target.value)}
                  className="h-10 rounded-md bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-car-color" className="text-slate-500">
                  Car Color
                </Label>
                <Input
                  id="edit-car-color"
                  value={draft.carColor}
                  onChange={(event) => updateDraft("carColor", event.target.value)}
                  className="h-10 rounded-md bg-white"
                />
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <SectionTitle icon={Wrench}>Service & Schedule</SectionTitle>
            <div className="grid gap-5 lg:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="edit-services" className="text-slate-500">
                  Service <RequiredMark />
                </Label>
                <Select
                  value={draft.services[0] ?? ""}
                  onValueChange={(value) => updateDraft("services", [value])}
                >
                  <SelectTrigger
                    id="edit-services"
                    className="h-10 w-full rounded-md bg-white"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[draft.services[0], ...serviceOptions.map((item) => item.label)]
                      .filter(Boolean)
                      .filter((value, index, values) => values.indexOf(value) === index)
                      .map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-booking-date" className="text-slate-500">
                  Booking Date <RequiredMark />
                </Label>
                <Input
                  id="edit-booking-date"
                  value={draft.bookingDateTime}
                  onChange={(event) =>
                    updateDraft("bookingDateTime", event.target.value)
                  }
                  className="h-10 rounded-md bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-delivery-date" className="text-slate-500">
                  Delivery Date <RequiredMark />
                </Label>
                <Input
                  id="edit-delivery-date"
                  value={draft.deliveryDateTime}
                  onChange={(event) =>
                    updateDraft("deliveryDateTime", event.target.value)
                  }
                  className="h-10 rounded-md bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-notes" className="text-slate-500">
                Special Notes / Instructions (Optional)
              </Label>
              <Textarea
                id="edit-notes"
                value={draft.note}
                onChange={(event) => updateDraft("note", event.target.value)}
                className="min-h-20 rounded-md bg-white"
              />
            </div>
          </section>

          <DialogFooter className="justify-start sm:justify-start">
            <Button type="submit" className="rounded-md bg-[#4f72e8] hover:bg-[#3f61cf]">
              <Save className="size-4" aria-hidden="true" />
              Update Job Card
            </Button>
            <DialogClose asChild>
              <Button type="button" className="rounded-md bg-slate-500 hover:bg-slate-600">
                <X className="size-4" aria-hidden="true" />
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function JobCardDetailView({
  initialJobCard,
}: Readonly<{
  initialJobCard: JobCard;
}>) {
  const [jobCard, setJobCard] = useState(initialJobCard);

  const rows = [
    ["Customer Name", jobCard.customerName],
    ["Mobile No", jobCard.mobile],
    ["Car Brand", jobCard.carBrand],
    ["Car Model", jobCard.carModel],
    ["Car Color", jobCard.carColor],
    ["Car Number", jobCard.carNumber],
    ["Booking Date", jobCard.bookingDateTime],
    ["Estimated Delivery Date", jobCard.deliveryDateTime],
    ["Services", jobCard.services.join(", ")],
    ["Note/Remark", jobCard.note],
  ];

  return (
    <div className="space-y-6 px-5 py-8 md:px-8">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-end">
        <div className="flex flex-wrap items-end gap-2">
          <Button asChild className="rounded-md bg-slate-500 hover:bg-slate-600">
            <Link href="/job-card">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back
            </Link>
          </Button>
          <Button className="rounded-md bg-[#22b8cf] hover:bg-[#159eb3]">
            <Share2 className="size-4" aria-hidden="true" />
            Share
          </Button>
          <Button className="rounded-md bg-[#ef4444] hover:bg-[#dc2626]">
            <FileText className="size-4" aria-hidden="true" />
            PDF
          </Button>
          <EditJobCardDialog jobCard={jobCard} onSave={setJobCard} />
          <Button className="rounded-md bg-slate-600 hover:bg-slate-700">
            <Trash2 className="size-4" aria-hidden="true" />
            Delete
          </Button>
        </div>
      </div>

      <section className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50/70 px-5 py-4">
          <h3 className="text-lg font-bold text-[#4f72e8]">
            Job Card #{jobCard.id}
          </h3>
          <Badge className="rounded-md bg-[#ef4444] px-3 py-1 text-white">
            {jobCard.status}
          </Badge>
        </div>

        <div className="p-5">
          <div className="overflow-hidden border border-slate-200 text-base md:text-lg">
            {rows.map(([label, value]) => (
              <DetailRow key={label} label={label} value={value} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
