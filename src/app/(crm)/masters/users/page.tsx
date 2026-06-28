"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Eye, Save, UserPlus, UsersRound } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
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
import { users as seedUsers, userRoleOptions, type CrmUser, type UserRole } from "@/data/crm";
import { cn } from "@/lib/utils";

const USER_STORAGE_KEY = "exotic-crm-users";

const emptyForm = {
  firstName: "",
  lastName: "",
  username: "",
  contact: "",
  email: "",
  role: "" as UserRole | "",
  password: "",
};

const roleStyles: Record<UserRole, string> = {
  Admin: "bg-[#22b8cf] text-white",
  Manager: "bg-[#315cc7] text-white",
  Accountant: "bg-[#f2b72f] text-slate-900",
  Videographer: "bg-[#16a34a] text-white",
  "Video Editor": "bg-[#8b5cf6] text-white",
  "Social Media Poster": "bg-[#ef4444] text-white",
  Staff: "bg-slate-600 text-white",
};

function getFullName(user: CrmUser) {
  return [user.firstName, user.lastName].filter(Boolean).join(" ");
}

export default function UsersPage() {
  const [userList, setUserList] = useState<CrmUser[]>(seedUsers);
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState("25");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    queueMicrotask(() => {
      const savedUsers = window.localStorage.getItem(USER_STORAGE_KEY);

      if (!savedUsers) {
        return;
      }

      try {
        setUserList(JSON.parse(savedUsers) as CrmUser[]);
      } catch {
        window.localStorage.removeItem(USER_STORAGE_KEY);
      }
    });
  }, []);

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return userList;
    }

    return userList.filter((user) =>
      [
        user.username,
        getFullName(user),
        user.email,
        user.contact,
        user.role,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [search, userList]);

  const visibleUsers = filteredUsers.slice(0, Number(pageSize));

  function updateForm(field: keyof typeof emptyForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.role) {
      return;
    }

    const nextUser: CrmUser = {
      id: Date.now(),
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      username: form.username.trim(),
      contact: form.contact.trim(),
      email: form.email.trim(),
      role: form.role,
    };

    setUserList((current) => {
      const nextUsers = [nextUser, ...current];

      window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(nextUsers));

      return nextUsers;
    });
    setForm(emptyForm);
    setOpen(false);
  }

  return (
    <div className="space-y-5 px-5 py-8 md:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="flex items-center gap-3 text-3xl font-normal text-slate-700">
          <UsersRound className="size-8 text-slate-600" aria-hidden="true" />
          Users
        </h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="w-fit rounded-md bg-[#4f72e8] hover:bg-[#3f61cf]">
              <UserPlus className="size-4" aria-hidden="true" />
              Add User
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[92vh] overflow-y-auto rounded-lg bg-slate-50 p-0 sm:max-w-6xl">
            <DialogHeader className="px-6 pb-0 pt-6">
              <DialogTitle className="flex items-center gap-2 text-3xl font-normal text-slate-700">
                <UserPlus className="size-8 text-slate-600" aria-hidden="true" />
                Add New User
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSave} className="px-6 pb-6">
              <div className="overflow-hidden rounded-md bg-white shadow-lg shadow-slate-400/30 ring-1 ring-slate-200">
                <div className="bg-[#4f72e8] px-6 py-4 text-lg font-semibold text-white">
                  User Details
                </div>

                <div className="space-y-6 p-6">
                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-slate-500">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        value={form.firstName}
                        onChange={(event) =>
                          updateForm("firstName", event.target.value)
                        }
                        placeholder="First name"
                        required
                        className="h-10 rounded-md bg-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-slate-500">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        value={form.lastName}
                        onChange={(event) =>
                          updateForm("lastName", event.target.value)
                        }
                        placeholder="Last name"
                        required
                        className="h-10 rounded-md bg-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-slate-500">
                        Username (Login Id)
                      </Label>
                      <Input
                        id="username"
                        value={form.username}
                        onChange={(event) =>
                          updateForm("username", event.target.value)
                        }
                        placeholder="Username"
                        required
                        className="h-10 rounded-md bg-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact" className="text-slate-500">
                        Contact Number
                      </Label>
                      <Input
                        id="contact"
                        value={form.contact}
                        onChange={(event) =>
                          updateForm("contact", event.target.value)
                        }
                        placeholder="Contact Number"
                        required
                        className="h-10 rounded-md bg-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-500">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(event) => updateForm("email", event.target.value)}
                        placeholder="name@gmail.com"
                        required
                        className="h-10 rounded-md bg-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-slate-500">
                        Role*
                      </Label>
                      <Select
                        value={form.role}
                        onValueChange={(value) => updateForm("role", value)}
                        required
                      >
                        <SelectTrigger
                          id="role"
                          className="h-10 w-full rounded-md bg-white"
                        >
                          <SelectValue placeholder="- Select -" />
                        </SelectTrigger>
                        <SelectContent>
                          {userRoleOptions.map((role) => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-slate-500">
                        Login Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        value={form.password}
                        onChange={(event) =>
                          updateForm("password", event.target.value)
                        }
                        placeholder="********"
                        required
                        className="h-10 rounded-md bg-white"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="rounded-md bg-[#4f72e8] hover:bg-[#3f61cf]"
                  >
                    <Save className="size-4" aria-hidden="true" />
                    Save User
                  </Button>
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="rounded-lg border-0 bg-white py-0 shadow-sm ring-1 ring-slate-200">
        <CardHeader className="border-b border-slate-200 bg-slate-50/70 px-5 py-4">
          <CardTitle className="text-base font-semibold text-[#4f72e8]">
            User List
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 p-5">
          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <span>Show</span>
              <Select value={pageSize} onValueChange={setPageSize}>
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
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="h-9 w-full rounded-md bg-white md:w-56"
              />
            </label>
          </div>

          <div className="overflow-hidden rounded-md border border-slate-200">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-100 hover:bg-slate-100">
                  {["Username", "Name", "Email", "Contact No.", "User Role", "Action"].map(
                    (heading) => (
                      <TableHead
                        key={heading}
                        className="h-12 px-4 text-xs font-semibold uppercase text-slate-600"
                      >
                        {heading}
                      </TableHead>
                    )
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {visibleUsers.map((user) => (
                  <TableRow key={user.id} className="hover:bg-slate-50/80">
                    <TableCell className="px-4 text-slate-600">
                      {user.username}
                    </TableCell>
                    <TableCell className="px-4 text-slate-600">
                      {getFullName(user)}
                    </TableCell>
                    <TableCell className="px-4 text-slate-600">
                      {user.email || "-"}
                    </TableCell>
                    <TableCell className="px-4 text-slate-600">
                      {user.contact || "-"}
                    </TableCell>
                    <TableCell className="px-4">
                      <Badge
                        className={cn(
                          "h-6 rounded-md px-2.5 text-xs font-semibold uppercase",
                          roleStyles[user.role]
                        )}
                      >
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-4">
                      <Button
                        type="button"
                        size="icon-sm"
                        className="rounded-full bg-[#4f72e8] hover:bg-[#3f61cf]"
                        aria-label={`View ${getFullName(user) || user.username}`}
                        title="View user"
                      >
                        <Eye className="size-4" aria-hidden="true" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}

                {visibleUsers.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center text-slate-500">
                      No users found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>
              Showing {visibleUsers.length ? 1 : 0} to {visibleUsers.length} of{" "}
              {filteredUsers.length} entries
            </p>
            <div className="flex items-center justify-end">
              <Button
                type="button"
                variant="outline"
                className="rounded-r-none bg-white text-slate-500"
              >
                Previous
              </Button>
              <Button
                type="button"
                className="rounded-none bg-[#4f72e8] px-4 hover:bg-[#3f61cf]"
              >
                1
              </Button>
              <Button
                type="button"
                variant="outline"
                className="rounded-l-none bg-white text-slate-500"
              >
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
