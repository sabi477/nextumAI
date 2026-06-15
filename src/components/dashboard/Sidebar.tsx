"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRole } from "@/contexts/RoleContext";

const NAV_OWNER = [
  {
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><rect x="10" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><rect x="2" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><rect x="10" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" /></svg>,
    label: "Genel Bakış", href: "/dashboard",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" /><path d="M9 5v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
    label: "90 Günlük Plan", href: "/dashboard/plan",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 14l4-4 3 3 4-6 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    label: "Teşhis Raporu", href: "/dashboard/report",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2a5 5 0 100 10A5 5 0 009 2z" stroke="currentColor" strokeWidth="1.5" /><path d="M3.5 15.5c0-2 2.5-3.5 5.5-3.5s5.5 1.5 5.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
    label: "Ekip", href: "/dashboard/team",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2v4M9 12v4M2 9h4M12 9h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" /></svg>,
    label: "Ayarlar", href: "/dashboard/settings",
  },
];

const NAV_EMPLOYEE = [
  {
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><rect x="10" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><rect x="2" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><rect x="10" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" /></svg>,
    label: "Genel Bakış", href: "/dashboard",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" /><path d="M9 5v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
    label: "90 Günlük Plan", href: "/dashboard/plan",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2v4M9 12v4M2 9h4M12 9h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" /></svg>,
    label: "Ayarlar", href: "/dashboard/settings",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { role } = useRole();
  const nav = role === "owner" ? NAV_OWNER : NAV_EMPLOYEE;

  return (
    <aside
      className="hidden md:flex flex-col w-60 shrink-0 px-4 py-6"
      style={{ borderRight: "1px solid var(--border)", backgroundColor: "var(--bg-subtle)", minHeight: "calc(100vh - 40px)" }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 font-bold text-lg tracking-tight mb-8 px-2"
        style={{ color: "var(--text)" }}
      >
        <span className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-black shrink-0" style={{ backgroundColor: "var(--red)", color: "white" }}>
          N
        </span>
        Nextum<span style={{ color: "var(--red)" }}>.</span>
      </Link>

      {/* Nav */}
      <nav className="flex flex-col gap-0.5 flex-1">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150"
              style={{
                backgroundColor: active ? "rgba(29,53,87,0.07)" : "transparent",
                color: active ? "var(--text)" : "var(--text-muted)",
              }}
            >
              <span style={{ opacity: active ? 1 : 0.65 }}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User badge */}
      <div className="mt-4 p-3 rounded-xl" style={{ backgroundColor: "rgba(29,53,87,0.05)", border: "1px solid rgba(29,53,87,0.07)" }}>
        <div className="flex items-center gap-2.5 mb-2">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold shrink-0"
            style={{ backgroundColor: role === "owner" ? "var(--teal)" : "var(--steel)", color: "white" }}
          >
            {role === "owner" ? "AK" : "SA"}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold truncate" style={{ color: "var(--text)" }}>
              {role === "owner" ? "Ahmet Kaya" : "Selin Arslan"}
            </p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              {role === "owner" ? "Şirket Sahibi" : "Çalışan · Satış"}
            </p>
          </div>
        </div>
        {role === "owner" && (
          <>
            <div className="flex items-center justify-between">
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>Genel Skor</span>
              <span className="text-xs font-bold" style={{ color: "var(--text)" }}>74/100</span>
            </div>
            <div className="mt-1.5 h-1 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(29,53,87,0.1)" }}>
              <div className="h-full rounded-full" style={{ width: "74%", backgroundColor: "var(--navy)" }} />
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
