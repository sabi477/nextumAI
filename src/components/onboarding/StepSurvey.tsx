"use client";

import { useState } from "react";
import { StepShell } from "./StepShell";
import { OnboardingState } from "./types";
import {
  SURVEY_SECTIONS,
  SURVEY_SCALE,
  SURVEY_QUESTION_COUNT,
} from "./surveyQuestions";

interface Props {
  state: OnboardingState;
  update: (patch: Partial<OnboardingState>) => void;
  /** Anketi tamamla → analiz / başarı ekranı */
  onSubmit: () => void;
  /** İlk bölümden geri → önceki onboarding adımı */
  onBack: () => void;
}

export function StepSurvey({ state, update, onSubmit, onBack }: Props) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const total = SURVEY_SECTIONS.length;
  const section = SURVEY_SECTIONS[index];
  const isLast = index === total - 1;
  const answers = state.surveyAnswers ?? {};
  const answeredCount = Object.keys(answers).length;

  const setAnswer = (qid: string, value: number) =>
    update({ surveyAnswers: { ...answers, [qid]: value } });

  const isSectionDone = (s: (typeof SURVEY_SECTIONS)[number]) =>
    s.questions.every((q) => answers[q.id] != null);

  const sectionComplete = isSectionDone(section);

  const transition = (fn: () => void) => {
    setFading(true);
    setTimeout(() => {
      fn();
      setFading(false);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    }, 160);
  };

  const next = () => {
    if (!sectionComplete) return;
    if (isLast) onSubmit();
    else transition(() => setIndex((i) => i + 1));
  };

  const back = () => {
    if (index === 0) onBack();
    else transition(() => setIndex((i) => i - 1));
  };

  return (
    <StepShell
      eyebrow={`Adım 4 / 5 · Teşhis Anketi`}
      title={section.title}
      subtitle="Her ifadeyi işletmenizin bugünkü gerçekliğine göre 1 (zayıf) – 5 (güçlü) arası puanlayın."
    >
      {/* Bölüm ilerleme — AF segmentleri */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          {SURVEY_SECTIONS.map((s, i) => {
            const done = isSectionDone(s);
            const current = i === index;
            return (
              <div
                key={s.af}
                className="flex-1 h-1 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: current
                    ? "var(--text)"
                    : done
                      ? "var(--teal)"
                      : "rgba(29,53,87,0.12)",
                }}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium" style={{ color: "rgba(69,123,157,0.7)" }}>
            Bölüm {index + 1} / {total}
          </span>
          <span className="text-xs font-medium tabular-nums" style={{ color: "rgba(69,123,157,0.7)" }}>
            {answeredCount}/{SURVEY_QUESTION_COUNT} yanıtlandı
          </span>
        </div>
      </div>

      {/* Sorular */}
      <div
        className="flex flex-col gap-7 transition-all duration-150"
        style={{ opacity: fading ? 0 : 1, transform: fading ? "translateY(6px)" : "translateY(0)" }}
      >
        {section.questions.map((q) => {
          const value = answers[q.id];
          return (
            <div key={q.id} className="w-full flex flex-col gap-2.5">
              <span
                className="text-[10px] font-semibold uppercase tracking-widest"
                style={{ color: "rgba(29,53,87,0.4)" }}
              >
                {q.topic}
              </span>
              <p className="font-semibold text-[15px] leading-snug" style={{ color: "var(--text)" }}>
                {q.text}
              </p>
              <div className="grid grid-cols-5 gap-2">
                {SURVEY_SCALE.map((v) => {
                  const selected = value === v;
                  return (
                    <button
                      key={v}
                      onClick={() => setAnswer(q.id, v)}
                      className="rounded-xl py-3 text-sm font-bold transition-all duration-100 hover:-translate-y-0.5"
                      style={{
                        border: `1.5px solid ${selected ? "var(--text)" : "rgba(29,53,87,0.14)"}`,
                        backgroundColor: selected ? "var(--text)" : "white",
                        color: selected ? "white" : "var(--text-muted)",
                      }}
                      aria-pressed={selected}
                      aria-label={`${q.topic}: ${v}`}
                    >
                      {v}
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center justify-between px-0.5">
                <span className="text-[11px]" style={{ color: "rgba(69,123,157,0.55)" }}>
                  Zayıf
                </span>
                <span className="text-[11px]" style={{ color: "rgba(69,123,157,0.55)" }}>
                  Güçlü
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Aksiyonlar */}
      <div className="flex items-center gap-3">
        <button
          onClick={back}
          className="h-14 px-5 rounded-xl font-medium text-sm transition-all duration-150 hover:bg-black/5 shrink-0"
          style={{ border: "1.5px solid rgba(29,53,87,0.14)", color: "var(--text-muted)" }}
        >
          ← Geri
        </button>
        <button
          onClick={next}
          disabled={!sectionComplete}
          className="h-14 flex-1 rounded-xl font-semibold text-base transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
          style={{ backgroundColor: "var(--text)", color: "white" }}
        >
          {isLast ? "Analizi Başlat →" : "Devam Et →"}
        </button>
      </div>
    </StepShell>
  );
}
