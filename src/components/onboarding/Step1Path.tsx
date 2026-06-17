"use client";

import { StepShell } from "./StepShell";
import { OnboardingState, Path } from "./types";

interface Props {
  state: OnboardingState;
  update: (patch: Partial<OnboardingState>) => void;
  onNext: (selected: Path) => void;
}

const OPTIONS: { value: Path; icon: string; title: string; desc: string }[] = [
  {
    value: "company",
    icon: "🏢",
    title: "Yeni bir şirket profili oluşturuyorum",
    desc: "Şirketini sisteme tanıtarak kendi organizasyonel analizini al.",
  },
  {
    value: "employee",
    icon: "👤",
    title: "Kayıtlı bir şirketin çalışanıyım",
    desc: "Şirketinin Nextum hesabına çalışan olarak katıl.",
  },
];

export function Step1Path({ state, update, onNext }: Props) {
  return (
    <StepShell
      eyebrow="Adım 1 / 5"
      title="Bu sistemi nasıl kullanacaksın?"
      subtitle="Seçimine göre seni doğru akışa yönlendireceğiz."
    >
      <div className="flex flex-col gap-3">
        {OPTIONS.map((opt) => {
          const selected = state.path === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => {
                update({ path: opt.value });
                setTimeout(() => onNext(opt.value), 160);
              }}
              className="w-full text-left rounded-xl p-5 flex items-start gap-4 transition-all duration-150 hover:-translate-y-0.5"
              style={{
                border: `1.5px solid ${selected ? "var(--text)" : "rgba(29,53,87,0.12)"}`,
                backgroundColor: selected ? "rgba(29,53,87,0.03)" : "white",
                boxShadow: selected ? "0 0 0 3px rgba(29,53,87,0.06)" : "none",
              }}
            >
              <span className="text-2xl mt-0.5 shrink-0">{opt.icon}</span>
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: "var(--text)" }}>
                  {opt.title}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {opt.desc}
                </p>
              </div>
              {/* Radio dot */}
              <div
                className="ml-auto mt-0.5 shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all"
                style={{ borderColor: selected ? "var(--text)" : "rgba(29,53,87,0.2)" }}
              >
                {selected && (
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--text)" }} />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </StepShell>
  );
}
