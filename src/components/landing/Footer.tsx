import Link from "next/link";

const LINKS = {
  Ürün: ["Nasıl Çalışır?", "7 Boyut", "Fiyatlandırma", "Entegrasyonlar"],
  Şirket: ["Hakkımızda", "Blog", "Kariyer", "İletişim"],
  Hukuki: ["Gizlilik Politikası", "Kullanım Koşulları", "GDPR", "Çerez Politikası"],
};

export function Footer() {
  return (
    <footer
      className="border-t py-16"
      style={{ borderColor: "rgba(29,53,87,0.08)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold text-xl tracking-tight mb-4"
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
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
              KOBİ'ler için otonom stratejik AI asistanı. 7 boyutlu teşhis, 90 günlük aksiyon.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--text)" }}>
                {group}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm transition-colors"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 text-xs"
          style={{
            borderTop: "1px solid rgba(29,53,87,0.08)",
            color: "rgba(69,123,157,0.6)",
          }}
        >
          <p>© 2025 Nextum AI. Tüm hakları saklıdır.</p>
          <p>İstanbul, Türkiye 🇹🇷</p>
        </div>
      </div>
    </footer>
  );
}
