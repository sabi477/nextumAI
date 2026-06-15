"use client";

import { useRole } from "@/contexts/RoleContext";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { ScoreCards } from "@/components/dashboard/ScoreCards";
import { DimensionChart } from "@/components/dashboard/DimensionChart";
import { ActionPlanPreview } from "@/components/dashboard/ActionPlanPreview";
import { InsightCard } from "@/components/dashboard/InsightCard";

function EmployeeDashboard() {
  return (
    <>
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--red)" }}>Hoş geldin</p>
        <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>Merhaba, Selin 👋</h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>Teknopar A.Ş. · Satış Departmanı</p>
      </div>

      {/* Score summary — kısıtlı */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        {[
          { label: "Şirket Skoru", value: "74/100", sub: "Genel durum" },
          { label: "Aksiyon İlerlemesi", value: "%17", sub: "2/12 görev" },
          { label: "Kalan Süre", value: "72 gün", sub: "Plan bitimine" },
        ].map((c) => (
          <div key={c.label} className="rounded-xl p-4" style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}>
            <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>{c.label}</p>
            <p className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>{c.value}</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{c.sub}</p>
          </div>
        ))}
      </div>

      {/* Kilitli rapor uyarısı */}
      <div
        className="rounded-xl p-5 mb-6 flex items-start gap-4"
        style={{ backgroundColor: "rgba(29,53,87,0.04)", border: "1px solid var(--border)" }}
      >
        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(29,53,87,0.08)" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="var(--text-muted)" strokeWidth="1.4" />
            <path d="M5 7V5a3 3 0 016 0v2" stroke="var(--text-muted)" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>Detaylı rapor kısıtlı</p>
          <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Detaylı teşhis raporuna erişiminiz bulunmuyor. Erişim için şirket yöneticinizle iletişime geçin.
          </p>
        </div>
      </div>

      {/* Aksiyon planı — tam erişim */}
      <ActionPlanPreview />
    </>
  );
}

export default function DashboardPage() {
  const { role } = useRole();

  if (role === "employee") return <EmployeeDashboard />;

  return (
    <>
      <DashboardHeader />
      <ScoreCards />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 flex flex-col gap-6">
          <DimensionChart />
          <ActionPlanPreview />
        </div>
        <div className="lg:col-span-2">
          <InsightCard />
        </div>
      </div>
    </>
  );
}
