"use client";

import { useRole } from "@/contexts/RoleContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function AccessDenied() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(29,53,87,0.07)" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="5" y="11" width="14" height="11" rx="2" stroke="var(--text-muted)" strokeWidth="1.6" />
          <path d="M8 11V7a4 4 0 018 0v4" stroke="var(--text-muted)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>
      <h2 className="text-xl font-extrabold mb-2" style={{ color: "var(--text)" }}>Erişim kısıtlı</h2>
      <p className="text-sm max-w-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
        Detaylı teşhis raporunu görüntüleme yetkiniz bulunmuyor. Erişim için şirket yöneticinizle iletişime geçin.
      </p>
    </div>
  );
}

function ReportContent() {
  return <ReportPageInner />;
}

export default function ReportPage() {
  const { role } = useRole();
  if (role === "employee") return <AccessDenied />;
  return <ReportContent />;
}

const DIMENSIONS = [
  {
    label: "Liderlik & Vizyon",
    score: 82,
    status: "güçlü",
    summary: "Yönetim ekibi ortak bir vizyon etrafında toplanmış durumda. Uzun vadeli karar alma mekanizmaları işlevsel.",
    strengths: ["Kurucu liderlik vizyonu net ve tutarlı", "Stratejik hedefler yıllık bazda güncelleniyor", "Ekip içi iletişim kanalları açık"],
    gaps: ["Orta kademe yönetici geliştirme programı eksik", "Acil durum liderlik planı bulunmuyor"],
  },
  {
    label: "Operasyonel Verimlilik",
    score: 61,
    status: "kritik",
    summary: "Süreçlerin %40'ı belgelenmemiş. Aynı hatalar tekrar ediyor, bilgi transferi sözlü yapılıyor.",
    strengths: ["Temel üretim/hizmet kalitesi tutarlı", "Operasyon ekibi motive"],
    gaps: ["Satış handoff süreci 4 farklı şekilde uygulanıyor", "Hata kayıt sistemi yok", "Onboarding belgeleri güncel değil"],
  },
  {
    label: "İnsan Kaynakları",
    score: 78,
    status: "iyi",
    summary: "Çalışan memnuniyeti sektör ortalamasının üzerinde. İşe alım süreci optimize edilmiş ancak bağlılık programları geliştirilebilir.",
    strengths: ["İşten ayrılma oranı düşük (%8)", "Performans değerlendirme sistemi mevcut", "Şirket kültürü güçlü"],
    gaps: ["Kariyer yol haritaları belirsiz", "Eğitim bütçesi yetersiz"],
  },
  {
    label: "Finansal Sağlık",
    score: 85,
    status: "güçlü",
    summary: "Nakit akışı sağlıklı, brüt marj sektör ortalamasının 8 puan üzerinde. Büyüme finansmanı kapasitesi var.",
    strengths: ["Nakit döngüsü 39 gün (sektör: 52 gün)", "Brüt marj %42", "3 aylık operasyonel rezerv mevcut"],
    gaps: ["Finansal raporlama gecikmeli (ay+15 gün)", "Maliyet merkezi bazlı analiz eksik"],
  },
  {
    label: "Müşteri Deneyimi",
    score: 54,
    status: "kritik",
    summary: "NPS son çeyrekte 34'ten 21'e düştü. Müşteri şikayetleri artıyor, çözüm süresi uzuyor.",
    strengths: ["Ürün/hizmet kalitesi müşteri onayı alıyor", "Uzun vadeli müşteri ilişkileri güçlü"],
    gaps: ["Destek yanıt süresi 48 saati aşıyor", "Müşteri geri bildirimi sistematik toplanmıyor", "Churn early warning sistemi yok"],
  },
  {
    label: "İnovasyon Kapasitesi",
    score: 70,
    status: "iyi",
    summary: "Yeni ürün/hizmet fikirleri üretiliyor ancak hayata geçirme süreci yavaş ve kaynaksız.",
    strengths: ["Ekipten fikir akışı var", "Rakip takibi düzenli yapılıyor"],
    gaps: ["İnovasyon için ayrılmış bütçe yok", "Prototipleme ve test süreci tanımsız"],
  },
  {
    label: "Dijital Olgunluk",
    score: 67,
    status: "gelişiyor",
    summary: "Temel dijital araçlar kullanımda ancak entegrasyon eksik. Veri kararları sezgisel alınıyor.",
    strengths: ["CRM sistemi mevcut", "Temel analitik araçlar kullanılıyor"],
    gaps: ["Araçlar arası entegrasyon yok, veri siloları oluşuyor", "Veri bazlı karar kültürü henüz yerleşmemiş"],
  },
];

const STATUS = {
  güçlü:    { bg: "rgba(168,218,220,0.2)", text: "var(--text-muted)", bar: "var(--text)" },
  iyi:      { bg: "rgba(168,218,220,0.12)", text: "var(--text-muted)", bar: "var(--text)" },
  "gelişiyor": { bg: "rgba(69,123,157,0.08)", text: "var(--text-muted)", bar: "var(--text-muted)" },
  kritik:   { bg: "rgba(230,57,70,0.07)", text: "var(--red)", bar: "var(--red)" },
};

function ReportPageInner() {
  const overall = Math.round(DIMENSIONS.reduce((s, d) => s + d.score, 0) / DIMENSIONS.length);

  return (
    <>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--red)" }}>
            Teşhis Raporu
          </p>
          <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>
            Organizasyonel Analiz
          </h1>
          <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
            Teknopar A.Ş. · 14 Haziran 2026
          </p>
        </div>
        <button
          className="text-sm font-semibold px-4 py-2.5 rounded-lg self-start transition-all hover:opacity-90"
          style={{ backgroundColor: "var(--text)", color: "white" }}
        >
          PDF İndir
        </button>
      </div>

      {/* Score summary */}
      <div
        className="rounded-xl p-6 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        style={{ backgroundColor: "var(--text)" }}
      >
        <div className="shrink-0">
          <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "rgba(168,218,220,0.6)" }}>
            Genel Skor
          </p>
          <p className="text-6xl font-black tracking-tight" style={{ color: "white" }}>
            {overall}
            <span className="text-2xl font-normal opacity-40">/100</span>
          </p>
        </div>
        <div className="w-px h-16 hidden sm:block" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
        <div className="flex-1">
          <p className="text-sm leading-relaxed" style={{ color: "rgba(168,218,220,0.85)" }}>
            Şirketiniz 7 boyutun 2'sinde kritik düzeyde, 2'sinde güçlü, 3'ünde gelişim potansiyeli olan bir profil sergiliyor. En acil odak noktaları <strong style={{ color: "white" }}>Müşteri Deneyimi</strong> ve <strong style={{ color: "white" }}>Operasyonel Verimlilik</strong>.
          </p>
        </div>
      </div>

      {/* Dimension cards */}
      <div className="flex flex-col gap-4">
        {DIMENSIONS.map((d) => {
          const s = STATUS[d.status as keyof typeof STATUS];
          return (
            <div
              key={d.label}
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(29,53,87,0.08)", backgroundColor: "var(--surface)" }}
            >
              {/* Top row */}
              <div className="px-6 pt-5 pb-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded"
                        style={{ backgroundColor: s.bg, color: s.text }}
                      >
                        {d.status.charAt(0).toUpperCase() + d.status.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-base font-bold" style={{ color: "var(--text)" }}>
                      {d.label}
                    </h3>
                  </div>
                  <span
                    className="text-3xl font-black tabular-nums shrink-0"
                    style={{ color: s.bar }}
                  >
                    {d.score}
                    <span className="text-sm font-normal opacity-40">/100</span>
                  </span>
                </div>

                {/* Bar */}
                <div className="h-1.5 rounded-full overflow-hidden mb-4" style={{ backgroundColor: "rgba(29,53,87,0.06)" }}>
                  <div className="h-full rounded-full" style={{ width: `${d.score}%`, backgroundColor: s.bar }} />
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {d.summary}
                </p>
              </div>

              {/* Strengths & Gaps */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x"
                style={{ borderTop: "1px solid rgba(29,53,87,0.06)", "--tw-divide-opacity": 1 } as React.CSSProperties}
              >
                <div className="px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2.5" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
                    Güçlü Yönler
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {d.strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "var(--text)" }}>
                        <span className="mt-0.5 shrink-0" style={{ color: "var(--teal)" }}>✓</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-4" style={{ borderLeft: "1px solid rgba(29,53,87,0.06)" }}>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2.5" style={{ color: "var(--red)", opacity: 0.7 }}>
                    Açıklar
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {d.gaps.map((g) => (
                      <li key={g} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "var(--text)" }}>
                        <span className="mt-0.5 shrink-0" style={{ color: "var(--red)", opacity: 0.6 }}>→</span>
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
