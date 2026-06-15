"use client";

import { useState } from "react";

const WEEKS = [
  {
    range: "Hafta 1–2",
    theme: "Müşteri Geri Bildirim Sistemi",
    focus: "Müşteri Deneyimi",
    tasks: [
      { id: 1, done: true, text: "NPS anketi oluştur ve mevcut müşterilere gönder", effort: "2 saat", owner: "CEO" },
      { id: 2, done: true, text: "Son 6 ayın churn verilerini analiz et", effort: "3 saat", owner: "Satış" },
      { id: 3, done: false, text: "Müşteri başarı ekibi için haftalık ritim kur", effort: "1 saat", owner: "CEO" },
    ],
  },
  {
    range: "Hafta 3–4",
    theme: "Operasyon Haritalama",
    focus: "Operasyonel Verimlilik",
    tasks: [
      { id: 4, done: false, text: "Satış sürecini baştan sona belgele", effort: "4 saat", owner: "Satış" },
      { id: 5, done: false, text: "Darboğaz olan 3 süreci tespit et", effort: "2 saat", owner: "Operasyon" },
      { id: 6, done: false, text: "OKR şablonunu ekibe tanıt", effort: "3 saat", owner: "CEO" },
    ],
  },
  {
    range: "Hafta 5–8",
    theme: "Dijital Araç Konsolidasyonu",
    focus: "Dijital Olgunluk",
    tasks: [
      { id: 7, done: false, text: "Kullanılmayan SaaS aboneliklerini denetle", effort: "2 saat", owner: "Finans" },
      { id: 8, done: false, text: "CRM verilerini temizle ve standartlaştır", effort: "5 saat", owner: "Satış" },
      { id: 9, done: false, text: "Otomasyon fırsatlarını önceliklendir", effort: "3 saat", owner: "Operasyon" },
    ],
  },
  {
    range: "Hafta 9–12",
    theme: "Liderlik & Vizyon Güçlendirme",
    focus: "Liderlik & Vizyon",
    tasks: [
      { id: 10, done: false, text: "6 aylık strateji toplantısı düzenle", effort: "1 gün", owner: "CEO" },
      { id: 11, done: false, text: "Departman bazlı hedefleri netleştir", effort: "4 saat", owner: "CEO" },
      { id: 12, done: false, text: "Performans değerlendirme sistemini kur", effort: "3 saat", owner: "İK" },
    ],
  },
];

const FOCUS_COLORS: Record<string, { bg: string; text: string }> = {
  "Müşteri Deneyimi": { bg: "rgba(230,57,70,0.08)", text: "var(--red)" },
  "Operasyonel Verimlilik": { bg: "rgba(230,57,70,0.08)", text: "var(--red)" },
  "Dijital Olgunluk": { bg: "rgba(69,123,157,0.1)", text: "var(--text-muted)" },
  "Liderlik & Vizyon": { bg: "rgba(29,53,87,0.07)", text: "var(--text)" },
};

export default function PlanPage() {
  const [tasks, setTasks] = useState(WEEKS.flatMap((w) => w.tasks));
  const [activeWeek, setActiveWeek] = useState<string | null>(null);

  const toggle = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const getTask = (id: number) => tasks.find((t) => t.id === id)!;
  const totalDone = tasks.filter((t) => t.done).length;
  const pct = Math.round((totalDone / tasks.length) * 100);

  return (
    <>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--red)" }}>
            90 Günlük Plan
          </p>
          <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>
            Aksiyon Planı
          </h1>
          <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
            Teknopar A.Ş. · 14 Haziran – 12 Eylül 2026
          </p>
        </div>

        {/* Overall progress */}
        <div
          className="rounded-xl px-5 py-4 flex items-center gap-5 shrink-0"
          style={{ border: "1px solid rgba(29,53,87,0.08)", backgroundColor: "var(--surface)" }}
        >
          <div className="text-center">
            <p className="text-3xl font-black" style={{ color: "var(--text)" }}>{pct}%</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>Tamamlandı</p>
          </div>
          <div className="w-px h-10" style={{ backgroundColor: "rgba(29,53,87,0.08)" }} />
          <div className="text-center">
            <p className="text-3xl font-black" style={{ color: "var(--text)" }}>{totalDone}/{tasks.length}</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>Görev</p>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(29,53,87,0.07)" }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${pct}%`, backgroundColor: "var(--text)" }}
          />
        </div>
      </div>

      {/* Week sections */}
      <div className="flex flex-col gap-4">
        {WEEKS.map((week) => {
          const weekTasks = week.tasks.map((t) => getTask(t.id));
          const weekDone = weekTasks.filter((t) => t.done).length;
          const isActive = activeWeek === week.range;
          const fc = FOCUS_COLORS[week.focus];

          return (
            <div
              key={week.range}
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(29,53,87,0.08)", backgroundColor: "var(--surface)" }}
            >
              {/* Week header */}
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-black/[0.015]"
                onClick={() => setActiveWeek(isActive ? null : week.range)}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-md"
                    style={{ backgroundColor: "rgba(29,53,87,0.07)", color: "var(--text)" }}
                  >
                    {week.range}
                  </span>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>
                      {week.theme}
                    </p>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded mt-1 inline-block"
                      style={{ backgroundColor: fc.bg, color: fc.text }}
                    >
                      {week.focus}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-sm tabular-nums" style={{ color: "var(--text-muted)" }}>
                    {weekDone}/{week.tasks.length}
                  </span>
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs transition-transform duration-200"
                    style={{
                      backgroundColor: "rgba(29,53,87,0.06)",
                      color: "var(--text)",
                      transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ↓
                  </div>
                </div>
              </button>

              {/* Tasks */}
              {isActive && (
                <div
                  className="px-6 pb-5 flex flex-col gap-3"
                  style={{ borderTop: "1px solid rgba(29,53,87,0.06)" }}
                >
                  <div className="pt-4 flex flex-col gap-2.5">
                    {weekTasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-start gap-3 group cursor-pointer"
                        onClick={() => toggle(task.id)}
                      >
                        {/* Checkbox */}
                        <div
                          className="w-5 h-5 rounded-md mt-0.5 shrink-0 flex items-center justify-center transition-all duration-150"
                          style={{
                            backgroundColor: task.done ? "var(--text)" : "transparent",
                            border: task.done ? "none" : "1.5px solid rgba(29,53,87,0.2)",
                          }}
                        >
                          {task.done && (
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5l2.5 2.5 3.5-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>

                        {/* Task content */}
                        <div className="flex-1 min-w-0">
                          <p
                            className="text-sm leading-relaxed transition-all"
                            style={{
                              color: task.done ? "rgba(69,123,157,0.45)" : "var(--text)",
                              textDecoration: task.done ? "line-through" : "none",
                            }}
                          >
                            {task.text}
                          </p>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-xs" style={{ color: "rgba(69,123,157,0.55)" }}>
                              ⏱ {task.effort}
                            </span>
                            <span className="text-xs" style={{ color: "rgba(69,123,157,0.55)" }}>
                              👤 {task.owner}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
