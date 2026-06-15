"use client";

import { useState } from "react";
import { StepShell } from "./StepShell";
import { OnboardingState } from "./types";

interface Props {
  state: OnboardingState;
  update: (patch: Partial<OnboardingState>) => void;
  onNext: () => void;
}

export function Step0Email({ state, update, onNext }: Props) {
  const [focused, setFocused] = useState(false);
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email);

  return (
    <StepShell
      eyebrow="Hoş geldin"
      title="E-posta adresinle başla."
      subtitle="Hesabın varsa otomatik giriş yaparsın. Yoksa seni birkaç adımda hazır hale getiririz."
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex items-center rounded-xl px-4 transition-all duration-150"
          style={{
            border: `1.5px solid ${focused ? "var(--text)" : "rgba(29,53,87,0.15)"}`,
            backgroundColor: "var(--surface)",
          }}
        >
          <input
            type="email"
            placeholder="ornek@sirketiniz.com"
            value={state.email}
            onChange={(e) => update({ email: e.target.value })}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onKeyDown={(e) => e.key === "Enter" && valid && onNext()}
            className="flex-1 h-14 bg-transparent outline-none text-base"
            style={{ color: "var(--text)" }}
            autoFocus
          />
          {valid && (
            <span style={{ color: "var(--teal)" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9l4.5 4.5 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          )}
        </div>

        <button
          onClick={onNext}
          disabled={!valid}
          className="h-14 rounded-xl font-semibold text-base transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
          style={{ backgroundColor: "var(--text)", color: "white" }}
        >
          Devam Et →
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px" style={{ backgroundColor: "rgba(29,53,87,0.08)" }} />
        <span className="text-xs" style={{ color: "rgba(29,53,87,0.35)" }}>ya da</span>
        <div className="flex-1 h-px" style={{ backgroundColor: "rgba(29,53,87,0.08)" }} />
      </div>

      {/* Google SSO */}
      <button
        className="h-14 w-full rounded-xl font-medium text-sm flex items-center justify-center gap-3 transition-all duration-150 hover:bg-black/5"
        style={{ border: "1.5px solid rgba(29,53,87,0.12)", color: "var(--text)" }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18">
          <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
          <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
          <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
          <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
        </svg>
        Google ile devam et
      </button>

      <p className="text-xs text-center" style={{ color: "rgba(69,123,157,0.6)" }}>
        Devam ederek{" "}
        <span style={{ color: "var(--text)", textDecoration: "underline", cursor: "pointer" }}>Kullanım Koşulları</span>{" "}
        ve{" "}
        <span style={{ color: "var(--text)", textDecoration: "underline", cursor: "pointer" }}>Gizlilik Politikası</span>'nı
        {" "}kabul etmiş olursunuz.
      </p>
    </StepShell>
  );
}
