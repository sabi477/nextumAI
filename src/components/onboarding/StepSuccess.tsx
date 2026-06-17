"use client";

import Link from "next/link";
import { OnboardingState } from "./types";
import { SURVEY_QUESTION_COUNT } from "./surveyQuestions";

interface Props {
  state: OnboardingState;
}

export function StepSuccess({ state }: Props) {
  const isCompany = state.path === "company";
  const answeredCount = Object.keys(state.surveyAnswers ?? {}).length;

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center text-center gap-8">
      {/* Animated check */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "rgba(29,53,87,0.06)" }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path
            d="M7 18l7 7 15-14"
            stroke="var(--text)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--red)" }}>
          Hazırsın
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>
          {isCompany
            ? `${state.companyName || "Şirketin"} analiz ediliyor.`
            : "Hesabına başarıyla katıldın."}
        </h2>
        <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {isCompany
            ? "7 boyutlu teşhis tamamlandığında seni e-posta ile bilgilendireceğiz. Genellikle 2 dakika sürer."
            : "Şirketin Nextum panosuna erişimin hazır. Analizleri ve 90 günlük planı görüntüleyebilirsin."}
        </p>
      </div>

      {isCompany && (
        <div
          className="w-full rounded-xl p-5 text-left flex flex-col gap-3"
          style={{ backgroundColor: "#fafafa", border: "1px solid rgba(29,53,87,0.08)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(29,53,87,0.4)" }}>
            Analiz Özeti
          </p>
          {[
            { label: "Şirket", value: state.companyName },
            { label: "Sektör", value: state.sector },
            { label: "Çalışan", value: state.size },
            { label: "Teşhis Anketi", value: `${answeredCount}/${SURVEY_QUESTION_COUNT} yanıt` },
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between">
              <span className="text-sm" style={{ color: "var(--text-muted)" }}>{r.label}</span>
              <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>{r.value}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col w-full gap-3">
        <Link
          href="/dashboard"
          className="h-14 w-full rounded-xl font-semibold text-base flex items-center justify-center transition-all duration-150 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
          style={{ backgroundColor: "var(--text)", color: "white" }}
        >
          Panoya Git →
        </Link>
        <Link
          href="/"
          className="text-sm text-center py-2 transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          Ana sayfaya dön
        </Link>
      </div>
    </div>
  );
}
