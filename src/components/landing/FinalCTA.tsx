import Link from "next/link";

export function FinalCTA() {
  return (
    <section
      id="pricing"
      className="py-28 border-t"
      style={{ borderColor: "rgba(29,53,87,0.08)" }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--red)" }}>
          Hemen Başla
        </p>
        <h2
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-3xl"
          style={{ color: "var(--text)" }}
        >
          Şirketini analiz etmeye hazır mısın?
        </h2>
        <p className="text-lg max-w-xl" style={{ color: "var(--text-muted)" }}>
          İlk analiz ücretsiz. Kredi kartı gerekmez. 2 dakikada kurulum tamamlanır.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/onboarding"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--text)", color: "white" }}
          >
            Ücretsiz Analizi Başlat
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/login"
            className="px-6 py-4 rounded-xl font-medium text-base transition-colors hover:bg-black/5"
            style={{ color: "var(--text-muted)" }}
          >
            Zaten hesabın var mı? Giriş yap
          </Link>
        </div>
        {/* Mini feature list */}
        <div
          className="flex flex-wrap justify-center gap-6 pt-4 text-sm"
          style={{ color: "rgba(69,123,157,0.7)" }}
        >
          {["7 boyutlu teşhis", "90 günlük eylem planı", "GDPR uyumlu", "Türkçe destek", "Kurulum gerektirmez"].map((f) => (
            <span key={f} className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
