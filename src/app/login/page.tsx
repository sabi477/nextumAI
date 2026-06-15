"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "var(--bg-subtle)" }}>
      {/* Left panel — branding */}
      <div
        className="hidden lg:flex lg:w-[44%] flex-col justify-between p-12"
        style={{ backgroundColor: "var(--text)" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-base"
            style={{ backgroundColor: "rgba(168,218,220,0.2)", color: "var(--teal)" }}
          >
            N
          </div>
          <span className="font-bold text-lg tracking-tight" style={{ color: "white" }}>
            Nextum AI
          </span>
        </Link>

        {/* Mid content */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(168,218,220,0.5)" }}>
            Nextum AI ile
          </p>
          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight mb-6"
            style={{ color: "white" }}
          >
            Şirketini ilk kez{" "}
            <span style={{ color: "var(--teal)" }}>gerçekten anlıyorsun.</span>
          </h2>
          <div className="flex flex-col gap-4">
            {[
              "7 boyutlu organizasyonel teşhis",
              "Kişiselleştirilmiş 90 günlük aksiyon planı",
              "AI destekli gerçek zamanlı içgörüler",
            ].map((f) => (
              <div key={f} className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(168,218,220,0.15)" }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5 3.5-4" stroke="#a8dadc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm" style={{ color: "rgba(168,218,220,0.75)" }}>
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <blockquote>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>
            "Nextum ile için için büyüyen sorunları açıkça görebildik. 3 ay içinde ekibimiz hem hızlandı hem de rahatladı."
          </p>
          <footer className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: "rgba(168,218,220,0.2)", color: "var(--teal)" }}
            >
              AK
            </div>
            <div>
              <p className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>Ahmet Kaya</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>CEO, Teknopar A.Ş.</p>
            </div>
          </footer>
        </blockquote>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Mobile logo */}
        <Link href="/" className="flex items-center gap-2.5 mb-10 lg:hidden no-underline">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-base"
            style={{ backgroundColor: "var(--text)", color: "var(--teal)" }}
          >
            N
          </div>
          <span className="font-bold text-lg tracking-tight" style={{ color: "var(--text)" }}>
            Nextum AI
          </span>
        </Link>

        <div className="w-full max-w-sm">
          {/* Tabs */}
          <div
            className="flex rounded-xl p-1 mb-8"
            style={{ backgroundColor: "rgba(29,53,87,0.06)" }}
          >
            {(["login", "register"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150"
                style={{
                  backgroundColor: tab === t ? "white" : "transparent",
                  color: tab === t ? "var(--text)" : "var(--text-muted)",
                  boxShadow: tab === t ? "0 1px 4px rgba(29,53,87,0.1)" : "none",
                }}
              >
                {t === "login" ? "Giriş Yap" : "Kayıt Ol"}
              </button>
            ))}
          </div>

          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>
              {tab === "login" ? "Tekrar hoş geldin" : "Hesabını oluştur"}
            </h1>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
              {tab === "login"
                ? "Hesabına giriş yap ve analize devam et."
                : "2 dakikada ücretsiz analiz başlat."}
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => { e.preventDefault(); }}
            className="flex flex-col gap-4"
          >
            {tab === "register" && (
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--text)" }}>
                  Şirket Adı
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Teknopar A.Ş."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{
                    border: "1.5px solid rgba(29,53,87,0.12)",
                    backgroundColor: "var(--surface)",
                    color: "var(--text)",
                  }}
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--text)" }}>
                E-posta
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ahmet@teknopar.com"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  border: "1.5px solid rgba(29,53,87,0.12)",
                  backgroundColor: "var(--surface)",
                  color: "var(--text)",
                }}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold" style={{ color: "var(--text)" }}>
                  Şifre
                </label>
                {tab === "login" && (
                  <button type="button" className="text-xs hover:underline" style={{ color: "var(--text-muted)" }}>
                    Şifremi unuttum
                  </button>
                )}
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  border: "1.5px solid rgba(29,53,87,0.12)",
                  backgroundColor: "var(--surface)",
                  color: "var(--text)",
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-sm font-semibold mt-1 transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: "var(--text)", color: "white" }}
            >
              {tab === "login" ? "Giriş Yap" : "Ücretsiz Başla"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(29,53,87,0.1)" }} />
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>veya</span>
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(29,53,87,0.1)" }} />
          </div>

          {/* Google SSO */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl text-sm font-medium transition-all hover:bg-black/[0.03]"
            style={{ border: "1.5px solid rgba(29,53,87,0.12)", backgroundColor: "var(--surface)", color: "var(--text)" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
              <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Google ile devam et
          </button>

          {/* Footer note */}
          <p className="text-xs text-center mt-6" style={{ color: "rgba(69,123,157,0.55)" }}>
            {tab === "login" ? "Hesabın yok mu? " : "Hesabın var mı? "}
            <button
              type="button"
              className="font-semibold hover:underline"
              style={{ color: "var(--text-muted)" }}
              onClick={() => setTab(tab === "login" ? "register" : "login")}
            >
              {tab === "login" ? "Kayıt ol" : "Giriş yap"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
