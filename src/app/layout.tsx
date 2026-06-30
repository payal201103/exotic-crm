import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Exotic CRM",
  description: "Service workflow CRM for Exotic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className={cn("min-h-full flex flex-col font-sans")}>
        {children}
      </body>
    </html>
  );
}
