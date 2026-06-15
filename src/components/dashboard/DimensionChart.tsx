const DIMENSIONS = [
  { label: "Liderlik & Vizyon", score: 82, prev: 76, weak: false },
  { label: "Operasyonel Verimlilik", score: 61, prev: 58, weak: true },
  { label: "İnsan Kaynakları", score: 78, prev: 75, weak: false },
  { label: "Finansal Sağlık", score: 85, prev: 80, weak: false },
  { label: "Müşteri Deneyimi", score: 54, prev: 57, weak: true },
  { label: "İnovasyon Kapasitesi", score: 70, prev: 66, weak: false },
  { label: "Dijital Olgunluk", score: 67, prev: 63, weak: false },
];

export function DimensionChart() {
  return (
    <div
      className="rounded-xl p-6"
      style={{ border: "1px solid rgba(29,53,87,0.08)", backgroundColor: "var(--surface)" }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-bold" style={{ color: "var(--text)" }}>
          7 Boyutlu Teşhis
        </h2>
        <div className="flex items-center gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: "var(--text)" }} />
            Bu analiz
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: "rgba(29,53,87,0.2)" }} />
            Önceki
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {DIMENSIONS.map((d) => {
          const delta = d.score - d.prev;
          return (
            <div key={d.label} className="group">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  {d.weak && (
                    <span
                      className="text-xs font-semibold px-1.5 py-0.5 rounded"
                      style={{ backgroundColor: "rgba(230,57,70,0.1)", color: "var(--red)" }}
                    >
                      Kritik
                    </span>
                  )}
                  <span
                    className="text-sm font-medium"
                    style={{ color: d.weak ? "var(--red)" : "var(--text)" }}
                  >
                    {d.label}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs"
                    style={{ color: delta >= 0 ? "var(--text-muted)" : "var(--red)" }}
                  >
                    {delta >= 0 ? "+" : ""}{delta}
                  </span>
                  <span
                    className="text-sm font-bold tabular-nums"
                    style={{ color: d.weak ? "var(--red)" : "var(--text)" }}
                  >
                    {d.score}
                    <span className="text-xs font-normal opacity-40">/100</span>
                  </span>
                </div>
              </div>

              {/* Bar track */}
              <div
                className="relative h-2 rounded-full overflow-hidden"
                style={{ backgroundColor: "rgba(29,53,87,0.06)" }}
              >
                {/* Previous score ghost */}
                <div
                  className="absolute top-0 left-0 h-full rounded-full opacity-20"
                  style={{
                    width: `${d.prev}%`,
                    backgroundColor: "var(--text)",
                  }}
                />
                {/* Current score */}
                <div
                  className="absolute top-0 left-0 h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${d.score}%`,
                    backgroundColor: d.weak ? "var(--red)" : "var(--text)",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
