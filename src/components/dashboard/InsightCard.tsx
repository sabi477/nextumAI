const INSIGHTS = [
  {
    type: "critical",
    title: "Müşteri Deneyimi düşüyor",
    body: "Son çeyrekte NPS 34'ten 21'e geriledi. Churn riskindeki müşteri sayısı %18 arttı.",
    action: "Acil öneri gör",
  },
  {
    type: "warning",
    title: "Operasyonel süreçler belgelenmemiş",
    body: "Satış handoff süreci 4 farklı şekilde uygulanıyor. Standartlaşma 2 haftalık bir çalışmayla çözülebilir.",
    action: "Süreci incele",
  },
  {
    type: "positive",
    title: "Finansal sağlık güçleniyor",
    body: "Nakit döngüsü 48 günden 39 güne indi. Brüt marj sektör ortalamasının 8 puan üzerinde.",
    action: "Detaylı rapor",
  },
];

const TYPE_STYLE = {
  critical: { border: "rgba(230,57,70,0.2)", bg: "rgba(230,57,70,0.03)", dot: "var(--red)", label: "Kritik" },
  warning: { border: "rgba(253,186,14,0.25)", bg: "rgba(253,186,14,0.04)", dot: "#f59e0b", label: "Dikkat" },
  positive: { border: "rgba(168,218,220,0.4)", bg: "rgba(168,218,220,0.08)", dot: "var(--text-muted)", label: "Olumlu" },
};

export function InsightCard() {
  return (
    <div
      className="rounded-xl p-6"
      style={{ border: "1px solid rgba(29,53,87,0.08)", backgroundColor: "var(--surface)" }}
    >
      <h2 className="text-base font-bold mb-5" style={{ color: "var(--text)" }}>
        AI Tespitleri
      </h2>
      <div className="flex flex-col gap-3">
        {INSIGHTS.map((ins) => {
          const s = TYPE_STYLE[ins.type as keyof typeof TYPE_STYLE];
          return (
            <div
              key={ins.title}
              className="rounded-xl p-4"
              style={{ border: `1px solid ${s.border}`, backgroundColor: s.bg }}
            >
              <div className="flex items-start gap-2.5 mb-2">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: s.dot }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-semibold px-1.5 py-0.5 rounded"
                      style={{ backgroundColor: `${s.dot}18`, color: s.dot }}
                    >
                      {s.label}
                    </span>
                    <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                      {ins.title}
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {ins.body}
                  </p>
                </div>
              </div>
              <button
                className="ml-4 text-xs font-semibold transition-opacity hover:opacity-70"
                style={{ color: "var(--text)" }}
              >
                {ins.action} →
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
