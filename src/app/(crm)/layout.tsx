import { AppShell } from "@/components/common/app-shell";

export default function CrmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShell>{children}</AppShell>;
}
