"use client";

import { useState } from "react";
import Link from "next/link";
import { ProgressBar } from "@/components/onboarding/ProgressBar";
import { Step0Email } from "@/components/onboarding/Step0Email";
import { Step1Path } from "@/components/onboarding/Step1Path";
import { Step2Company } from "@/components/onboarding/Step2Company";
import { Step3Problems } from "@/components/onboarding/Step3Problems";
import { Step2Employee } from "@/components/onboarding/Step2Employee";
import { StepSuccess } from "@/components/onboarding/StepSuccess";
import { INITIAL_STATE, OnboardingState } from "@/components/onboarding/types";

type Screen =
  | "email"
  | "path"
  | "company-info"
  | "company-problems"
  | "employee-join"
  | "success";

function getProgress(screen: Screen, path: string | null): { current: number; total: number } {
  if (path === "company") {
    const map: Record<string, number> = {
      email: 1, path: 2, "company-info": 3, "company-problems": 4, success: 4,
    };
    return { current: map[screen] ?? 1, total: 4 };
  }
  const map: Record<string, number> = {
    email: 1, path: 2, "employee-join": 3, success: 3,
  };
  return { current: map[screen] ?? 1, total: 3 };
}

export default function OnboardingPage() {
  const [screen, setScreen] = useState<Screen>("email");
  const [state, setState] = useState<OnboardingState>(INITIAL_STATE);
  const [animating, setAnimating] = useState(false);

  const update = (patch: Partial<OnboardingState>) =>
    setState((s) => ({ ...s, ...patch }));

  const go = (next: Screen) => {
    setAnimating(true);
    setTimeout(() => {
      setScreen(next);
      setAnimating(false);
    }, 180);
  };

  const back = () => {
    const prev: Partial<Record<Screen, Screen>> = {
      path: "email",
      "company-info": "path",
      "company-problems": "company-info",
      "employee-join": "path",
    };
    const p = prev[screen];
    if (p) go(p);
  };

  const showBack = screen !== "email" && screen !== "success";
  const { current, total } = getProgress(screen, state.path);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--surface)" }}>
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid rgba(29,53,87,0.06)" }}>
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg tracking-tight"
          style={{ color: "var(--text)" }}
        >
          <span
            className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-black"
            style={{ backgroundColor: "var(--red)", color: "white" }}
          >
            N
          </span>
          Nextum<span style={{ color: "var(--red)" }}>.</span>
        </Link>

        {screen !== "success" && (
          <div className="w-48 sm:w-64">
            <ProgressBar current={current} total={total} />
          </div>
        )}

        <Link
          href="/"
          className="text-sm font-medium transition-colors"
          style={{ color: "rgba(69,123,157,0.6)" }}
        >
          Çıkış
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div
          className="w-full transition-all duration-180"
          style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(8px)" : "translateY(0)" }}
        >
          {screen === "email" && (
            <Step0Email
              state={state}
              update={update}
              onNext={() => go("path")}
            />
          )}
          {screen === "path" && (
            <Step1Path
              state={state}
              update={update}
              onNext={(selected) => {
                if (selected === "company") go("company-info");
                else go("employee-join");
              }}
            />
          )}
          {screen === "company-info" && (
            <Step2Company
              state={state}
              update={update}
              onNext={() => go("company-problems")}
            />
          )}
          {screen === "company-problems" && (
            <Step3Problems
              state={state}
              update={update}
              onNext={() => go("success")}
            />
          )}
          {screen === "employee-join" && (
            <Step2Employee
              state={state}
              update={update}
              onNext={() => go("success")}
            />
          )}
          {screen === "success" && <StepSuccess state={state} />}
        </div>
      </main>

      {/* Back button */}
      {showBack && (
        <div className="flex justify-center pb-10">
          <button
            onClick={back}
            className="flex items-center gap-1.5 text-sm font-medium transition-colors"
            style={{ color: "rgba(69,123,157,0.6)" }}
          >
            ← Geri
          </button>
        </div>
      )}
    </div>
  );
}
