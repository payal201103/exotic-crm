"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { ArrowUpDown, Edit, Percent, Plus, Search, Trash2 } from "lucide-react";

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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { taxSlabs as seedTaxSlabs, type TaxSlab } from "@/data/crm";

const TAX_SLAB_STORAGE_KEY = "exotic-crm-tax-slabs";

const emptyForm = {
  name: "",
  rate: "",
};

function formatRate(rate: string) {
  const trimmedRate = rate.trim();

  return trimmedRate ? `${trimmedRate} %` : "-";
}

export default function TaxSlabPage() {
  const [taxSlabList, setTaxSlabList] = useState<TaxSlab[]>(seedTaxSlabs);
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState("25");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    queueMicrotask(() => {
      const savedTaxSlabs = window.localStorage.getItem(TAX_SLAB_STORAGE_KEY);

      if (!savedTaxSlabs) {
        return;
      }

      try {
        setTaxSlabList(JSON.parse(savedTaxSlabs) as TaxSlab[]);
      } catch {
        window.localStorage.removeItem(TAX_SLAB_STORAGE_KEY);
      }
    });
  }, []);

  const filteredTaxSlabs = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return taxSlabList;
    }

    return taxSlabList.filter((taxSlab) =>
      [taxSlab.name, taxSlab.rate]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [search, taxSlabList]);

  const visibleTaxSlabs = filteredTaxSlabs.slice(0, Number(pageSize));

  function updateForm(field: keyof typeof emptyForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function persistTaxSlabs(nextTaxSlabs: TaxSlab[]) {
    window.localStorage.setItem(
      TAX_SLAB_STORAGE_KEY,
      JSON.stringify(nextTaxSlabs)
    );
  }

  function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextTaxSlab: TaxSlab = {
      id: Date.now(),
      name: form.name.trim(),
      rate: form.rate.trim(),
    };

    setTaxSlabList((current) => {
      const nextTaxSlabs = [nextTaxSlab, ...current];

      persistTaxSlabs(nextTaxSlabs);

      return nextTaxSlabs;
    });

    setForm(emptyForm);
    setOpen(false);
  }

  function handleDelete(id: number) {
    setTaxSlabList((current) => {
      const nextTaxSlabs = current.filter((taxSlab) => taxSlab.id !== id);

      persistTaxSlabs(nextTaxSlabs);

      return nextTaxSlabs;
    });
  }

  return (
    <div className="space-y-5 px-4 py-5 sm:px-5 md:px-6 md:py-7 lg:px-8 xl:px-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="flex min-w-max items-center gap-3 text-2xl font-normal text-slate-700 md:text-3xl">
          <Percent
            className="size-7 shrink-0 text-slate-600 sm:size-8"
            aria-hidden="true"
          />
          Tax Slab List
        </h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="ml-auto justify-center rounded-md bg-[#4f72e8] text-sm shadow-md shadow-slate-300 hover:bg-[#3f61cf] md:text-base">
              <Plus className="size-5" aria-hidden="true" />
              Add New
            </Button>
          </DialogTrigger>
          <DialogContent className="gap-0 rounded-md bg-white p-0 text-slate-700 sm:max-w-[min(calc(100vw-2rem),48rem)] lg:max-w-[min(calc(100vw-4rem),64rem)]">
            <DialogHeader className="border-b border-slate-200 px-4 py-4 sm:px-5 sm:py-5">
              <DialogTitle className="text-xl font-normal text-slate-500 md:text-2xl">
                Add Tax Rate
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSave}>
              <div className="space-y-4 px-4 py-5 sm:space-y-5 sm:px-5 sm:py-6">
                <div className="space-y-2">
                  <Label htmlFor="taxSlabName" className="text-base text-slate-500 md:text-lg">
                    Tax Slab Name
                  </Label>
                  <Input
                    id="taxSlabName"
                    value={form.name}
                    onChange={(event) => updateForm("name", event.target.value)}
                    required
                    className="text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="taxSlabRate" className="text-base text-slate-500 md:text-lg">
                    Tax Slab Rate (%)
                  </Label>
                  <Input
                    id="taxSlabRate"
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.rate}
                    onChange={(event) => updateForm("rate", event.target.value)}
                    required
                    className="text-base"
                  />
                </div>
              </div>

              <DialogFooter className="border-t border-slate-200 px-4 py-4 sm:px-5 sm:py-5">
                <DialogClose asChild>
                  <Button
                    type="button"
                    className="rounded-md bg-slate-500 text-base hover:bg-slate-600"
                  >
                    Close
                  </Button>
                </DialogClose>
                <Button
                  type="submit"
                  className="rounded-md bg-[#4f72e8] text-base hover:bg-[#3f61cf]"
                >
                  Save changes
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:p-5">
        <div className="mb-5 flex flex-col gap-3 text-base text-slate-500 md:flex-row md:items-center md:justify-between md:text-lg">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <Select value={pageSize} onValueChange={setPageSize}>
              <SelectTrigger className="w-20 text-base">
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
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full pl-9 sm:w-72 md:w-64"
              />
            </div>
          </label>
        </div>

        <div className="overflow-hidden rounded-md border border-slate-200">
          <Table className="min-w-[56rem]">
            <TableHeader>
              <TableRow className="bg-slate-100 hover:bg-slate-100">
                {["SR", "TAX NAME", "TAX RATE %", "ACTION"].map((heading) => (
                  <TableHead
                    key={heading}
                    className="h-14 border-r border-slate-200 px-4 text-sm font-medium text-slate-600 last:border-r-0"
                  >
                    <div className="flex items-center justify-between gap-3">
                      {heading}
                      <ArrowUpDown
                        className="size-3.5 text-slate-300"
                        aria-hidden="true"
                      />
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {visibleTaxSlabs.map((taxSlab, index) => (
                <TableRow key={taxSlab.id} className="h-[68px] hover:bg-slate-50/80">
                  <TableCell className="w-40 border-r border-slate-200 px-4 text-lg text-slate-500">
                    {index + 1}
                  </TableCell>
                  <TableCell className="border-r border-slate-200 px-4 text-slate-600">
                    {taxSlab.name}
                  </TableCell>
                  <TableCell className="border-r border-slate-200 px-4 text-slate-600">
                    {formatRate(taxSlab.rate)}
                  </TableCell>
                  <TableCell className="w-72 px-4">
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        size="icon-sm"
                        className="rounded-md bg-[#16c995] hover:bg-[#12ad80]"
                        aria-label={`Edit ${taxSlab.name}`}
                        title="Edit tax slab"
                      >
                        <Edit className="size-4" aria-hidden="true" />
                      </Button>
                      <Button
                        type="button"
                        size="icon-sm"
                        className="rounded-md bg-[#ef4444] hover:bg-[#dc2626]"
                        aria-label={`Delete ${taxSlab.name}`}
                        title="Delete tax slab"
                        onClick={() => handleDelete(taxSlab.id)}
                      >
                        <Trash2 className="size-4" aria-hidden="true" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}

              {visibleTaxSlabs.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="h-28 text-center text-slate-500">
                    No tax slabs found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 flex flex-col gap-3 text-base text-slate-500 md:flex-row md:items-center md:justify-between md:text-lg">
          <p>
            Showing {visibleTaxSlabs.length ? 1 : 0} to {visibleTaxSlabs.length} of{" "}
            {filteredTaxSlabs.length} entries
          </p>
          <div className="flex items-center justify-start md:justify-end">
            <Button
              type="button"
              variant="outline"
              className="rounded-r-none bg-white text-base text-slate-500"
            >
              Previous
            </Button>
            <Button
              type="button"
              className="rounded-none bg-[#4f72e8] px-4 text-base hover:bg-[#3f61cf]"
            >
              1
            </Button>
            <Button
              type="button"
              variant="outline"
              className="rounded-l-none bg-white text-base text-slate-500"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
