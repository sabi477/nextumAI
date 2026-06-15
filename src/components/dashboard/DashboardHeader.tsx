export function DashboardHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--red)" }}>
          Organizasyonel Teşhis
        </p>
        <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>
          Teknopar A.Ş.
        </h1>
        <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
          Son analiz: 14 Haziran 2026 · Sonraki analiz 30 gün sonra
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="text-sm font-medium px-4 py-2 rounded-lg border transition-all hover:bg-black/5"
          style={{ borderColor: "rgba(29,53,87,0.12)", color: "var(--text)" }}
        >
          Raporu İndir
        </button>
        <button
          className="text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:opacity-90"
          style={{ backgroundColor: "var(--text)", color: "white" }}
        >
          Analizi Yenile
        </button>
      </div>
    </div>
  );
}
