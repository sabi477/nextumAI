const DIMENSIONS = [
  { label: "Liderlik & Vizyon", score: 82, desc: "Yönetim netliği ve uzun vadeli yön belirleme kapasitesi." },
  { label: "Operasyonel Verimlilik", score: 61, desc: "Süreçlerin etkinliği, otomasyon olgunluğu ve kaynak kullanımı.", weak: true },
  { label: "İnsan Kaynakları", score: 78, desc: "Yetenek çekimi, bağlılık ve organizasyonel kültür sağlığı." },
  { label: "Finansal Sağlık", score: 85, desc: "Nakit akışı, kârlılık oranları ve büyüme finansmanı kapasitesi." },
  { label: "Müşteri Deneyimi", score: 54, desc: "NPS skoru, müşteri tutma oranı ve temas noktası kalitesi.", weak: true },
  { label: "İnovasyon Kapasitesi", score: 70, desc: "Yeni ürün/hizmet geliştirme hızı ve deneysellik kültürü." },
  { label: "Dijital Olgunluk", score: 67, desc: "Teknoloji altyapısı, veri kullanımı ve dijital dönüşüm seviyesi." },
];

export function DiagnosisShowcase() {
  return (
    <section id="dimensions" className="py-28" style={{ backgroundColor: "#fafafa" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="md:sticky md:top-28">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--red)" }}>
              7 Boyutlu Teşhis
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6" style={{ color: "var(--text)" }}>
              Şirketinin tam resmini görün.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              Çoğu şirket sadece finansal metriklere bakar. Nextum AI, başarıyı belirleyen 7 kritik boyutu eş zamanlı analiz ederek gerçek zayıf noktalarını ortaya çıkarır.
            </p>
            <div className="flex items-center gap-4 text-sm" style={{ color: "var(--text-muted)" }}>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm inline-block" style={{ backgroundColor: "var(--text)" }} />
                Güçlü alan
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm inline-block" style={{ backgroundColor: "var(--red)" }} />
                Öncelikli odak
              </span>
            </div>
          </div>

          {/* Right: Score bars */}
          <div className="flex flex-col gap-5">
            {DIMENSIONS.map((d) => (
              <div key={d.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-semibold" style={{ color: d.weak ? "var(--red)" : "var(--text)" }}>
                    {d.label}
                  </span>
                  <span className="text-sm font-bold" style={{ color: d.weak ? "var(--red)" : "var(--text)" }}>
                    {d.score}
                    <span className="text-xs font-normal opacity-50">/100</span>
                  </span>
                </div>
                <div className="relative h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(29,53,87,0.08)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${d.score}%`,
                      backgroundColor: d.weak ? "var(--red)" : "var(--text)",
                      opacity: d.weak ? 1 : 0.7,
                    }}
                  />
                </div>
                <p className="text-xs mt-1.5 leading-relaxed" style={{ color: "rgba(69,123,157,0.7)" }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
