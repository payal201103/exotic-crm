"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ArrowRight, LockKeyhole, Mail, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AUTH_STORAGE_KEY = "exotic-crm-authenticated";
const REGISTERED_USER_STORAGE_KEY = "exotic-crm-registered-user";

type AuthMode = "login" | "register";

const content = {
  login: {
    eyebrow: "Welcome back",
    title: "Sign in to Exotic CRM",
    subtitle: "Manage job cards, customers, inventory, and workflow from one workspace.",
    submit: "Login",
    footer: "New to Exotic CRM?",
    linkText: "Create an account",
    href: "/register",
  },
  register: {
    eyebrow: "Create account",
    title: "Register your workspace",
    subtitle: "Set up access for your service team, then sign in to continue.",
    submit: "Register",
    footer: "Already have an account?",
    linkText: "Sign in",
    href: "/",
  },
} satisfies Record<AuthMode, Record<string, string>>;

export function AuthForm({ mode }: { mode: AuthMode }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const copy = content[mode];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    setIsSubmitting(true);

    if (mode === "register") {
      const name = String(formData.get("name") ?? "");

      localStorage.setItem(
        REGISTERED_USER_STORAGE_KEY,
        JSON.stringify({ email, name, password })
      );
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
      router.replace("/");
      return;
    }

    const registeredUser = localStorage.getItem(REGISTERED_USER_STORAGE_KEY);

    if (!registeredUser) {
      setMessage("Please register before logging in.");
      setIsSubmitting(false);
      return;
    }

    const user = JSON.parse(registeredUser) as {
      email: string;
      password: string;
    };

    if (user.email !== email || user.password !== password) {
      setMessage("Enter the email and password you used during registration.");
      setIsSubmitting(false);
      return;
    }

    sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
    router.replace("/dashboard");
  }

  return (
    <main className="min-h-dvh bg-slate-100 text-slate-950">
      <div className="mx-auto grid min-h-dvh w-full max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_26rem] lg:px-8">
        <section className="hidden min-h-[32rem] flex-col justify-between rounded-lg bg-[#315cc7] p-8 text-white shadow-lg shadow-slate-300/70 lg:flex">
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-white/12 px-3 py-2 text-sm font-medium">
              <LockKeyhole className="size-4" aria-hidden="true" />
              Exotic CRM
            </div>
            <h1 className="mt-12 max-w-xl text-4xl font-semibold leading-tight">
              One clean control room for every service workflow.
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-3 text-sm">
            {["Job Cards", "Customers", "Inventory"].map((item) => (
              <div key={item} className="rounded-lg bg-white/12 p-4">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-[#315cc7]">
              {copy.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">
              {copy.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {copy.subtitle}
            </p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            {mode === "register" && (
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <div className="relative">
                  <UserRound className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Priya Shah"
                    className="h-11 rounded-lg pl-10 text-sm md:text-sm"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="admin@exoticcrm.com"
                  className="h-11 rounded-lg pl-10 text-sm md:text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                  required
                  minLength={6}
                  placeholder="********"
                  className="h-11 rounded-lg pl-10 text-sm md:text-sm"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-11 w-full rounded-lg bg-[#315cc7] text-white hover:bg-[#274da9]"
            >
              {isSubmitting ? "Redirecting" : copy.submit}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </form>

          {message && (
            <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
              {message}
            </p>
          )}

          <p className="mt-6 text-center text-sm text-slate-500">
            {copy.footer}{" "}
            <Link href={copy.href} className="font-semibold text-[#315cc7] hover:underline">
              {copy.linkText}
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}

export { AUTH_STORAGE_KEY, REGISTERED_USER_STORAGE_KEY };
