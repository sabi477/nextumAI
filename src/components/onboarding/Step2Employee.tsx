"use client";

import { useState } from "react";
import { StepShell } from "./StepShell";
import { OnboardingState } from "./types";

interface Props {
  state: OnboardingState;
  update: (patch: Partial<OnboardingState>) => void;
  onNext: () => void;
}

const DEPARTMENTS = [
  "Yönetim", "Satış & Pazarlama", "Operasyon", "İnsan Kaynakları",
  "Finans", "Teknoloji", "Müşteri Hizmetleri", "Diğer",
];

export function Step2Employee({ state, update, onNext }: Props) {
  const [codeFocused, setCodeFocused] = useState(false);
  const [roleFocused, setRoleFocused] = useState(false);
  const valid = state.companyCode.trim().length >= 4 && state.role.trim().length > 1 && state.department;

  return (
    <StepShell
      eyebrow="Adım 2 / 3"
      title="Şirket hesabına katıl."
      subtitle="Şirketinin Nextum yöneticisinden aldığın kodu gir."
    >
      {/* Company code */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(29,53,87,0.5)" }}>
          Şirket Kodu
        </label>
        <input
          type="text"
          placeholder="NXTM-XXXX"
          value={state.companyCode}
          onChange={(e) => update({ companyCode: e.target.value.toUpperCase() })}
          onFocus={() => setCodeFocused(true)}
          onBlur={() => setCodeFocused(false)}
          className="h-13 rounded-xl px-4 text-base outline-none transition-all duration-150 font-mono tracking-widest"
          style={{
            border: `1.5px solid ${codeFocused ? "var(--text)" : "rgba(29,53,87,0.15)"}`,
            color: "var(--text)",
          }}
          autoFocus
          maxLength={9}
        />
        <p className="text-xs" style={{ color: "rgba(69,123,157,0.6)" }}>
          Kodu bilmiyorsan şirket yöneticine ulaş.
        </p>
      </div>

      {/* Role */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(29,53,87,0.5)" }}>
          Unvanın
        </label>
        <input
          type="text"
          placeholder="Örn: Satış Müdürü"
          value={state.role}
          onChange={(e) => update({ role: e.target.value })}
          onFocus={() => setRoleFocused(true)}
          onBlur={() => setRoleFocused(false)}
          className="h-13 rounded-xl px-4 text-base outline-none transition-all duration-150"
          style={{
            border: `1.5px solid ${roleFocused ? "var(--text)" : "rgba(29,53,87,0.15)"}`,
            color: "var(--text)",
          }}
        />
      </div>

      {/* Department */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(29,53,87,0.5)" }}>
          Departman
        </label>
        <div className="flex flex-wrap gap-2">
          {DEPARTMENTS.map((d) => (
            <button
              key={d}
              onClick={() => update({ department: d })}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-100"
              style={{
                border: `1.5px solid ${state.department === d ? "var(--text)" : "rgba(29,53,87,0.12)"}`,
                backgroundColor: state.department === d ? "var(--text)" : "white",
                color: state.department === d ? "white" : "var(--text-muted)",
              }}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!valid}
        className="h-14 w-full rounded-xl font-semibold text-base transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
        style={{ backgroundColor: "var(--text)", color: "white" }}
      >
        Hesabıma Katıl →
      </button>
    </StepShell>
  );
}
