import { Car, ClipboardList, UserRound, Wrench } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
} from "@/data/crm";

function RequiredMark() {
  return <span className="text-red-500">*</span>;
}

function SectionTitle({
  icon: Icon,
  children,
}: Readonly<{
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}>) {
  return (
    <div className="mb-6 flex items-center gap-2 border-b border-slate-200 pb-3 text-sm font-bold uppercase text-slate-500">
      <Icon className="size-4" aria-hidden="true" />
      {children}
    </div>
  );
}

export default function AddJobCardPage() {
  return (
    <div className="px-5 pb-8 md:px-8">
      <Card className="rounded-lg border-0 bg-white py-0 shadow-sm ring-1 ring-slate-200">
        <CardHeader className="rounded-t-lg bg-[#4f72e8] px-5 py-3 text-white">
          <CardTitle className="flex items-center gap-2 text-xl font-semibold">
            <ClipboardList className="size-5" aria-hidden="true" />
            Job Card Information
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-8 p-5">
          <section>
            <SectionTitle icon={UserRound}>Customer Details</SectionTitle>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="mobile-no" className="text-slate-500">
                  Mobile No <RequiredMark />
                </Label>
                <Input
                  id="mobile-no"
                  className="h-10 rounded-md bg-white"
                  placeholder="10-digit mobile number"
                />
              </div>
              <div className="space-y-2 xl:col-span-2">
                <Label htmlFor="customer-name" className="text-slate-500">
                  Customer Name <RequiredMark />
                </Label>
                <Select>
                  <SelectTrigger
                    id="customer-name"
                    className="h-10 w-full rounded-md bg-white"
                  >
                    <SelectValue placeholder="Select or type customer name" />
                  </SelectTrigger>
                  <SelectContent>
                    {customerOptions.map((customer) => (
                      <SelectItem key={customer.value} value={customer.value}>
                        {customer.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          <section>
            <SectionTitle icon={Car}>Vehicle Details</SectionTitle>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="car-brand" className="text-slate-500">
                  Car Brand <RequiredMark />
                </Label>
                <Select>
                  <SelectTrigger
                    id="car-brand"
                    className="h-10 w-full rounded-md bg-white"
                  >
                    <SelectValue placeholder="Select Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {carBrandOptions.map((brand) => (
                      <SelectItem key={brand.value} value={brand.value}>
                        {brand.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="car-model" className="text-slate-500">
                  Car Model <RequiredMark />
                </Label>
                <Select>
                  <SelectTrigger
                    id="car-model"
                    className="h-10 w-full rounded-md bg-white"
                  >
                    <SelectValue placeholder="Select Model" />
                  </SelectTrigger>
                  <SelectContent>
                    {carModelOptions.map((model) => (
                      <SelectItem key={model.value} value={model.value}>
                        {model.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="car-number" className="text-slate-500">
                  Car Number
                </Label>
                <Input
                  id="car-number"
                  className="h-10 rounded-md bg-white"
                  placeholder="E.G., MH01AB1234"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="car-color" className="text-slate-500">
                  Car Color
                </Label>
                <Input
                  id="car-color"
                  className="h-10 rounded-md bg-white"
                  placeholder="e.g., White"
                />
              </div>
            </div>
          </section>

          <section>
            <SectionTitle icon={Wrench}>Service & Schedule</SectionTitle>
            <div className="grid gap-5 lg:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="service" className="text-slate-500">
                  Service <RequiredMark />
                </Label>
                <Select>
                  <SelectTrigger
                    id="service"
                    className="h-10 w-full rounded-md bg-white"
                  >
                    <SelectValue placeholder="Select services..." />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="booking-date" className="text-slate-500">
                  Booking Date <RequiredMark />
                </Label>
                <Input
                  id="booking-date"
                  type="datetime-local"
                  className="h-10 rounded-md bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="delivery-date" className="text-slate-500">
                  Delivery Date <RequiredMark />
                </Label>
                <Input
                  id="delivery-date"
                  type="datetime-local"
                  className="h-10 rounded-md bg-white"
                />
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Label htmlFor="notes" className="text-slate-500">
                Special Notes / Instructions (Optional)
              </Label>
              <Textarea
                id="notes"
                className="min-h-20 rounded-md bg-white"
                placeholder="Any special instructions or notes..."
              />
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
