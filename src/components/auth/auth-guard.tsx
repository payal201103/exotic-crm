"use client";

import { useRouter } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";

import { AUTH_STORAGE_KEY } from "@/components/auth/auth-form";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);

  return () => window.removeEventListener("storage", onStoreChange);
}

function getAuthSnapshot() {
  return sessionStorage.getItem(AUTH_STORAGE_KEY) === "true";
}

function getServerSnapshot() {
  return false;
}

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isAllowed = useSyncExternalStore(
    subscribe,
    getAuthSnapshot,
    getServerSnapshot
  );

  useEffect(() => {
    if (!isAllowed) {
      router.replace("/");
    }
  }, [isAllowed, router]);

  if (!isAllowed) {
    return (
      <div className="grid min-h-dvh place-items-center bg-slate-100 text-sm font-medium text-slate-500">
        Loading
      </div>
    );
  }

  return children;
}
