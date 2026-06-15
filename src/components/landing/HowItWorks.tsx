const STEPS = [
  {
    number: "01",
    title: "Şirketini Tanıt",
    description:
      "2 dakikalık interaktif onboarding akışıyla sektörünü, büyüklüğünü ve öncelikli hedeflerini belirle. Sıkıcı form yok.",
  },
  {
    number: "02",
    title: "7 Boyutlu Teşhis",
    description:
      "Nöro-sembolik AI motoru, şirketini Liderlik'ten Dijital Olgunluk'a kadar 7 kritik boyutta derinlemesine analiz eder.",
  },
  {
    number: "03",
    title: "90 Günlük Planını Al",
    description:
      "Zayıf noktalarına özel, önceliklendirilmiş ve uygulanabilir bir eylem planı anında hazırlanır. Haftaya başlayabilirsin.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-20">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--red)" }}
          >
            Nasıl Çalışır?
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Süreçten stratejiye,
            <br />
            dakikalar içinde.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-0 md:gap-0">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="relative py-10 pr-10 md:pr-16"
              style={{
                borderTop: "1px solid rgba(29,53,87,0.1)",
                borderRight: i < STEPS.length - 1 ? "1px solid rgba(29,53,87,0.1)" : "none",
              }}
            >
              {/* Step number */}
              <span
                className="block text-6xl font-black mb-6 leading-none"
                style={{ color: "rgba(29,53,87,0.07)" }}
              >
                {step.number}
              </span>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "var(--text)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
