export function Testimonial() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="rounded-2xl p-10 md:p-16"
          style={{ backgroundColor: "var(--text)" }}
        >
          <div className="max-w-3xl">
            {/* Quote mark */}
            <span
              className="block text-8xl font-black leading-none mb-6 select-none"
              style={{ color: "var(--red)", lineHeight: 1 }}
            >
              "
            </span>
            <blockquote
              className="text-2xl md:text-3xl font-semibold leading-snug mb-8"
              style={{ color: "var(--cream)" }}
            >
              Nextum bize ne yapacağımızı söylemedi — neden yanlış yaptığımızı gösterdi. 90 günlük planda ilk 3 haftayı uyguladık, müşteri churn'ümüz %18 düştü.
            </blockquote>
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                style={{ backgroundColor: "var(--red)", color: "white" }}
              >
                MK
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--cream)" }}>
                  Murat Kaya
                </p>
                <p className="text-xs" style={{ color: "var(--teal)", opacity: 0.8 }}>
                  CEO, Teknopar A.Ş. · 120 çalışan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
