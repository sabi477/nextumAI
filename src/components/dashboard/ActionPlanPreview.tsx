import Link from "next/link";

const WEEKS = [
  {
    week: "Hafta 1–2",
    theme: "Müşteri Geri Bildirim Sistemi",
    tasks: [
      { done: true, text: "NPS anketi oluştur ve müşterilere gönder" },
      { done: true, text: "Son 6 ayın churn verilerini analiz et" },
      { done: false, text: "Müşteri başarı ekibi için haftalık ritim kur" },
    ],
  },
  {
    week: "Hafta 3–4",
    theme: "Operasyon Haritalama",
    tasks: [
      { done: false, text: "Satış sürecini baştan sona belgele" },
      { done: false, text: "Darboğaz olan 3 süreci tespit et" },
      { done: false, text: "OKR şablonunu ekibe tanıt" },
    ],
  },
  {
    week: "Hafta 5–8",
    theme: "Dijital Araç Konsolidasyonu",
    tasks: [
      { done: false, text: "Kullanılmayan SaaS aboneliklerini denetle" },
      { done: false, text: "CRM verilerini temizle ve standartlaştır" },
      { done: false, text: "Otomasyon fırsatlarını önceliklendir" },
    ],
  },
];

export function ActionPlanPreview() {
  return (
    <div
      className="rounded-xl p-6"
      style={{ border: "1px solid rgba(29,53,87,0.08)", backgroundColor: "var(--surface)" }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-bold" style={{ color: "var(--text)" }}>
          90 Günlük Plan — Özet
        </h2>
        <Link
          href="/dashboard/plan"
          className="text-xs font-semibold transition-opacity hover:opacity-70"
          style={{ color: "var(--red)" }}
        >
          Tümünü Gör →
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        {WEEKS.map((w, wi) => {
          const done = w.tasks.filter((t) => t.done).length;
          return (
            <div key={w.week}>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-xs font-semibold px-2 py-1 rounded-md"
                  style={{
                    backgroundColor: wi === 0 ? "var(--text)" : "rgba(29,53,87,0.07)",
                    color: wi === 0 ? "white" : "var(--text-muted)",
                  }}
                >
                  {w.week}
                </span>
                <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                  {w.theme}
                </span>
                <span className="ml-auto text-xs" style={{ color: "var(--text-muted)" }}>
                  {done}/{w.tasks.length}
                </span>
              </div>

              <div className="flex flex-col gap-2 pl-1">
                {w.tasks.map((t, ti) => (
                  <div key={ti} className="flex items-start gap-2.5">
                    <div
                      className="w-4 h-4 rounded-md mt-0.5 shrink-0 flex items-center justify-center"
                      style={{
                        backgroundColor: t.done ? "var(--text)" : "transparent",
                        border: t.done ? "none" : "1.5px solid rgba(29,53,87,0.2)",
                      }}
                    >
                      {t.done && (
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                          <path d="M1.5 4.5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span
                      className="text-sm leading-relaxed"
                      style={{
                        color: t.done ? "rgba(69,123,157,0.5)" : "var(--text)",
                        textDecoration: t.done ? "line-through" : "none",
                      }}
                    >
                      {t.text}
                    </span>
                  </div>
                ))}
              </div>

              {wi < WEEKS.length - 1 && (
                <div className="mt-4 h-px" style={{ backgroundColor: "rgba(29,53,87,0.06)" }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
