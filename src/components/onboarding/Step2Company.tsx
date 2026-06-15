"use client";

import { useState } from "react";
import { StepShell } from "./StepShell";
import { OnboardingState } from "./types";

interface Props {
  state: OnboardingState;
  update: (patch: Partial<OnboardingState>) => void;
  onNext: () => void;
}

const SECTORS = [
  "Teknoloji & Yazılım", "Üretim & Sanayi", "Perakende & E-ticaret",
  "Sağlık & Medikal", "Lojistik & Taşımacılık", "Finans & Sigorta",
  "Eğitim", "Turizm & Konaklama", "İnşaat & Gayrimenkul", "Diğer",
];

const SIZES = [
  { label: "1–10", sub: "Mikro" },
  { label: "11–50", sub: "Küçük" },
  { label: "51–250", sub: "Orta" },
  { label: "250+", sub: "Büyük" },
];

export function Step2Company({ state, update, onNext }: Props) {
  const [nameFocused, setNameFocused] = useState(false);
  const valid = state.companyName.trim().length > 1 && state.sector && state.size;

  return (
    <StepShell
      eyebrow="Adım 2 / 4"
      title="Şirketini tanıyalım."
      subtitle="Analizin doğruluğu bu bilgilere dayanır."
    >
      {/* Company name */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(29,53,87,0.5)" }}>
          Şirket Adı
        </label>
        <input
          type="text"
          placeholder="Örn: Teknopar A.Ş."
          value={state.companyName}
          onChange={(e) => update({ companyName: e.target.value })}
          onFocus={() => setNameFocused(true)}
          onBlur={() => setNameFocused(false)}
          className="h-13 rounded-xl px-4 text-base outline-none transition-all duration-150"
          style={{
            border: `1.5px solid ${nameFocused ? "var(--text)" : "rgba(29,53,87,0.15)"}`,
            color: "var(--text)",
          }}
          autoFocus
        />
      </div>

      {/* Sector */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(29,53,87,0.5)" }}>
          Sektör
        </label>
        <div className="flex flex-wrap gap-2">
          {SECTORS.map((s) => (
            <button
              key={s}
              onClick={() => update({ sector: s })}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-100"
              style={{
                border: `1.5px solid ${state.sector === s ? "var(--text)" : "rgba(29,53,87,0.12)"}`,
                backgroundColor: state.sector === s ? "var(--text)" : "white",
                color: state.sector === s ? "white" : "var(--text-muted)",
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Company size */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(29,53,87,0.5)" }}>
          Çalışan Sayısı
        </label>
        <div className="grid grid-cols-4 gap-2">
          {SIZES.map((s) => (
            <button
              key={s.label}
              onClick={() => update({ size: s.label })}
              className="rounded-xl py-3 flex flex-col items-center gap-0.5 transition-all duration-100"
              style={{
                border: `1.5px solid ${state.size === s.label ? "var(--text)" : "rgba(29,53,87,0.12)"}`,
                backgroundColor: state.size === s.label ? "var(--text)" : "white",
              }}
            >
              <span
                className="text-sm font-bold"
                style={{ color: state.size === s.label ? "white" : "var(--text)" }}
              >
                {s.label}
              </span>
              <span
                className="text-xs"
                style={{ color: state.size === s.label ? "rgba(255,255,255,0.6)" : "var(--text-muted)" }}
              >
                {s.sub}
              </span>
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
        Devam Et →
      </button>
    </StepShell>
  );
}
