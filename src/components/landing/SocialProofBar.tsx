export function SocialProofBar() {
  const logos = [
    "Teknopar A.Ş.",
    "Anadolu Lojistik",
    "MetroPlast",
    "Ege Tekstil",
    "Bosphorus Capital",
    "NovaMed",
  ];

  return (
    <section className="border-y" style={{ borderColor: "rgba(29,53,87,0.08)" }}>
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6">
        <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(29,53,87,0.35)" }}>
          Türkiye'nin büyüyen KOBİ'leri tarafından kullanılıyor
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {logos.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold"
              style={{ color: "rgba(29,53,87,0.25)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
