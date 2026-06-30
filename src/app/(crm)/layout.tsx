import { AuthGuard } from "@/components/auth/auth-guard";
import { AppShell } from "@/components/common/app-shell";

export default function CrmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthGuard>
      <AppShell>{children}</AppShell>
    </AuthGuard>
  );
}
