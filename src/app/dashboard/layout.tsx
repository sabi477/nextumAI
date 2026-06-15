"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { RoleProvider } from "@/contexts/RoleContext";

function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "var(--bg-subtle)" }}>
      <Sidebar />
      <main className="flex-1 min-w-0 px-6 py-8 md:px-10 md:py-10">
        {children}
      </main>
    </div>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <RoleProvider>
      <DashboardShell>{children}</DashboardShell>
    </RoleProvider>
  );
}
