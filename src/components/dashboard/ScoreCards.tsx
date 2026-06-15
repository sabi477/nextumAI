const CARDS = [
  {
    label: "Genel Skor",
    value: "74",
    unit: "/100",
    delta: "+6",
    deltaUp: true,
    sub: "Geçen analize göre",
  },
  {
    label: "Kritik Alan",
    value: "2",
    unit: " boyut",
    delta: "Öncelikli",
    deltaUp: false,
    sub: "Müşteri & Operasyon",
    accent: true,
  },
  {
    label: "Plan İlerlemesi",
    value: "18",
    unit: "%",
    delta: "12/66 görev",
    deltaUp: true,
    sub: "90 günlük planda",
  },
  {
    label: "Kalan Gün",
    value: "72",
    unit: " gün",
    delta: "Hafta 2",
    deltaUp: null,
    sub: "Plan bitimine kalan",
  },
];

export function ScoreCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {CARDS.map((c) => (
        <div
          key={c.label}
          className="rounded-xl p-5 flex flex-col gap-2"
          style={{
            border: c.accent
              ? "1.5px solid rgba(230,57,70,0.2)"
              : "1px solid rgba(29,53,87,0.08)",
            backgroundColor: c.accent ? "rgba(230,57,70,0.03)" : "white",
          }}
        >
          <p className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
            {c.label}
          </p>
          <div className="flex items-baseline gap-0.5">
            <span
              className="text-3xl font-black tracking-tight"
              style={{ color: c.accent ? "var(--red)" : "var(--text)" }}
            >
              {c.value}
            </span>
            <span className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
              {c.unit}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {c.deltaUp !== null && (
              <span
                className="text-xs font-semibold px-1.5 py-0.5 rounded"
                style={{
                  backgroundColor: c.accent
                    ? "rgba(230,57,70,0.1)"
                    : c.deltaUp
                    ? "rgba(168,218,220,0.35)"
                    : "rgba(29,53,87,0.06)",
                  color: c.accent ? "var(--red)" : c.deltaUp ? "var(--text)" : "var(--text-muted)",
                }}
              >
                {c.deltaUp && !c.accent ? "↑ " : ""}{c.delta}
              </span>
            )}
            {c.deltaUp === null && (
              <span
                className="text-xs font-semibold px-1.5 py-0.5 rounded"
                style={{ backgroundColor: "rgba(29,53,87,0.06)", color: "var(--text-muted)" }}
              >
                {c.delta}
              </span>
            )}
            <span className="text-xs" style={{ color: "rgba(69,123,157,0.6)" }}>
              {c.sub}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
