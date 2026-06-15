"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const STATS = [
  { value: "7", label: "Boyutlu Teşhis" },
  { value: "90", label: "Günlük Aksiyon Planı" },
  { value: "2dk", label: "Analiz Süresi" },
];

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(29,53,87,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(29,53,87,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Teal soft glow top-right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168,218,220,0.3) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{
            backgroundColor: "rgba(230,57,70,0.08)",
            color: "var(--red)",
            border: "1px solid rgba(230,57,70,0.15)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--red)" }}
          />
          Nöro-Sembolik AI Asistanı
        </div>

        {/* H1 */}
        <h1
          ref={headlineRef}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight"
          style={{ color: "var(--text)" }}
        >
          Şirketini ilk kez{" "}
          <br className="hidden sm:block" />
          <span
            className="relative inline-block"
            style={{ color: "var(--red)" }}
          >
            gerçekten anlıyorsun.
            <svg
              className="absolute -bottom-1 left-0 w-full"
              height="6"
              viewBox="0 0 100 6"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q50 0 100 5"
                stroke="#e63946"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.4"
              />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-xl text-lg sm:text-xl leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          7 boyutlu teşhis ve 90 günlük aksiyon planı —{" "}
          <strong style={{ color: "var(--text)", fontWeight: 600 }}>
            2 dakikada.
          </strong>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <Link
            href="/onboarding"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--text)", color: "var(--cream)" }}
          >
            Ücretsiz Analizi Başlat
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <button
            className="flex items-center gap-2 px-6 py-4 rounded-xl font-medium text-base transition-all duration-200 hover:bg-black/5"
            style={{ color: "var(--text)" }}
          >
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(29,53,87,0.08)" }}
            >
              ▶
            </span>
            Demo İzle
          </button>
        </div>

        {/* Trust note */}
        <p className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.7 }}>
          Kredi kartı gerekmez · 2 dakikada kurulum · GDPR uyumlu
        </p>

        {/* Stats row */}
        <div
          className="mt-8 flex flex-col sm:flex-row items-center gap-8 sm:gap-12 pt-8 w-full max-w-lg"
          style={{ borderTop: "1px solid rgba(29,53,87,0.1)" }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span
                className="text-4xl font-black tracking-tight"
                style={{ color: "var(--text)" }}
              >
                {s.value}
              </span>
              <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Product mockup card */}
      <div className="relative z-10 mt-16 w-full max-w-3xl mx-auto">
        <div
          className="w-full rounded-2xl overflow-hidden"
          style={{
            background: "white",
            border: "1px solid rgba(29,53,87,0.1)",
            boxShadow:
              "0 24px 80px rgba(29,53,87,0.12), 0 4px 16px rgba(29,53,87,0.06)",
          }}
        >
          {/* Fake browser bar */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{
              borderBottom: "1px solid rgba(29,53,87,0.08)",
              backgroundColor: "rgba(29,53,87,0.02)",
            }}
          >
            <div className="flex gap-1.5">
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <div
                  key={c}
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <div
              className="flex-1 mx-4 h-6 rounded-md flex items-center px-3"
              style={{ backgroundColor: "rgba(29,53,87,0.06)" }}
            >
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                app.nextum.ai/dashboard
              </span>
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--red)" }}>
                  Organizasyonel Teşhis
                </p>
                <h3 className="text-xl font-bold" style={{ color: "var(--text)" }}>
                  Acme Teknoloji A.Ş.
                </h3>
                <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
                  Analiz tamamlandı · 23 Ocak 2025
                </p>
              </div>
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "rgba(168,218,220,0.3)", color: "var(--text)" }}
              >
                Skor: 74/100
              </span>
            </div>

            {/* 7 dimension bars */}
            <div className="space-y-3">
              {[
                { label: "Liderlik & Vizyon", score: 82, color: "var(--text)" },
                { label: "Operasyonel Verimlilik", score: 61, color: "var(--red)" },
                { label: "İnsan Kaynakları", score: 78, color: "var(--text)" },
                { label: "Finansal Sağlık", score: 85, color: "var(--text)" },
                { label: "Müşteri Deneyimi", score: 54, color: "var(--red)" },
                { label: "İnovasyon Kapasitesi", score: 70, color: "var(--text-muted)" },
                { label: "Dijital Olgunluk", score: 67, color: "var(--text-muted)" },
              ].map((dim) => (
                <div key={dim.label} className="flex items-center gap-3">
                  <span
                    className="text-xs w-44 shrink-0"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {dim.label}
                  </span>
                  <div
                    className="flex-1 h-1.5 rounded-full overflow-hidden"
                    style={{ backgroundColor: "rgba(29,53,87,0.08)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${dim.score}%`,
                        backgroundColor: dim.color,
                        opacity: 0.8,
                      }}
                    />
                  </div>
                  <span
                    className="text-xs font-semibold w-8 text-right"
                    style={{ color: dim.color }}
                  >
                    {dim.score}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="mt-6 p-4 rounded-xl text-sm"
              style={{
                backgroundColor: "rgba(230,57,70,0.05)",
                border: "1px solid rgba(230,57,70,0.12)",
                color: "var(--text)",
              }}
            >
              <span className="font-semibold" style={{ color: "var(--red)" }}>
                Öncelikli Odak:
              </span>{" "}
              Müşteri Deneyimi ve Operasyonel Verimlilik boyutlarında kritik
              açıklar tespit edildi. 90 günlük planınız hazır.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
