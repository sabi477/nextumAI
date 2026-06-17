"use client";

import { StepShell } from "./StepShell";
import { OnboardingState } from "./types";

interface Props {
  state: OnboardingState;
  update: (patch: Partial<OnboardingState>) => void;
  onNext: () => void;
}

const PROBLEMS = [
  { id: "operations", icon: "⚙️", title: "Operasyonel kaos", desc: "Süreçler belirsiz, tekrarlayan hatalar var." },
  { id: "growth", icon: "📈", title: "Büyüme durdu", desc: "Gelir plato yaptı, yeni müşteri edinmek güçleşti." },
  { id: "team", icon: "👥", title: "Ekip motivasyonu", desc: "Yüksek çalışan sirkülasyonu, düşük bağlılık." },
  { id: "cash", icon: "💰", title: "Nakit akışı", desc: "Tahsilatlar gecikiyor, finansal görünürlük yok." },
  { id: "digital", icon: "💻", title: "Dijital dönüşüm", desc: "Rakipler teknolojiyi kullanırken geride kalıyoruz." },
  { id: "strategy", icon: "🧭", title: "Strateji belirsizliği", desc: "Nereye gideceğimizi bilemiyoruz, öncelikler dağınık." },
];

export function Step3Problems({ state, update, onNext }: Props) {
  const toggle = (id: string) => {
    const has = state.problems.includes(id);
    if (has) {
      update({ problems: state.problems.filter((p) => p !== id) });
    } else if (state.problems.length < 3) {
      update({ problems: [...state.problems, id] });
    }
  };

  const valid = state.problems.length >= 1;

  return (
    <StepShell
      eyebrow="Adım 3 / 5"
      title="En büyük zorluklarını seç."
      subtitle="En fazla 3 alan seç. Analizin bu alanlara odaklanacak."
    >
      <div className="grid grid-cols-1 gap-2.5">
        {PROBLEMS.map((p) => {
          const selected = state.problems.includes(p.id);
          const maxed = state.problems.length >= 3 && !selected;
          return (
            <button
              key={p.id}
              onClick={() => toggle(p.id)}
              disabled={maxed}
              className="w-full text-left rounded-xl p-4 flex items-center gap-4 transition-all duration-150 disabled:opacity-35"
              style={{
                border: `1.5px solid ${selected ? "var(--text)" : "rgba(29,53,87,0.1)"}`,
                backgroundColor: selected ? "rgba(29,53,87,0.03)" : "white",
                transform: selected ? "translateY(-1px)" : "none",
                boxShadow: selected ? "0 2px 12px rgba(29,53,87,0.08)" : "none",
              }}
            >
              <span className="text-xl shrink-0">{p.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>{p.title}</p>
                <p className="text-xs mt-0.5 truncate" style={{ color: "var(--text-muted)" }}>{p.desc}</p>
              </div>
              <div
                className="w-5 h-5 rounded-md shrink-0 flex items-center justify-center transition-all"
                style={{
                  border: `1.5px solid ${selected ? "var(--text)" : "rgba(29,53,87,0.2)"}`,
                  backgroundColor: selected ? "var(--text)" : "transparent",
                }}
              >
                {selected && (
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M2 5.5l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Counter */}
      <p className="text-xs text-center" style={{ color: "rgba(69,123,157,0.6)" }}>
        {state.problems.length}/3 seçildi
      </p>

      <button
        onClick={onNext}
        disabled={!valid}
        className="h-14 w-full rounded-xl font-semibold text-base transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
        style={{ backgroundColor: "var(--text)", color: "white" }}
      >
        Devam Et →
      </button>
    </StepShell>
  );
}
