"use client";

import { useState } from "react";

type Tab = "profil" | "firma" | "abonelik" | "bildirimler";

export default function SettingsPage() {
  const [tab, setTab] = useState<Tab>("profil");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  const TABS: { key: Tab; label: string }[] = [
    { key: "profil", label: "Profil" },
    { key: "firma", label: "Firma" },
    { key: "abonelik", label: "Abonelik & Ödeme" },
    { key: "bildirimler", label: "Bildirimler" },
  ];

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--red)" }}>Hesap</p>
        <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>Ayarlar</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar tabs */}
        <nav className="flex lg:flex-col gap-1 lg:w-44 shrink-0 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-left whitespace-nowrap transition-all"
              style={{
                backgroundColor: tab === t.key ? "rgba(29,53,87,0.07)" : "transparent",
                color: tab === t.key ? "var(--text)" : "var(--text-muted)",
              }}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {tab === "profil" && <ProfilTab onSave={handleSave} />}
          {tab === "firma" && <FirmaTab onSave={handleSave} />}
          {tab === "abonelik" && <AbonelikTab />}
          {tab === "bildirimler" && <BildirimlerTab onSave={handleSave} />}
        </div>
      </div>

      {/* Save toast */}
      <div
        className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
        style={{
          backgroundColor: "var(--navy)",
          color: "white",
          boxShadow: "0 8px 24px rgba(29,53,87,0.2)",
          opacity: saved ? 1 : 0,
          transform: saved ? "translateY(0)" : "translateY(8px)",
          pointerEvents: "none",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Değişiklikler kaydedildi
      </div>
    </>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden mb-5" style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}>
      <div className="px-6 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
        <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{title}</p>
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-3" style={{ borderBottom: "1px solid var(--border)" }}>
      <label className="text-xs font-semibold sm:w-40 shrink-0" style={{ color: "var(--text-muted)" }}>{label}</label>
      <div className="flex-1">{children}</div>
    </div>
  );
}

function Input({ defaultValue, placeholder, type = "text" }: { defaultValue?: string; placeholder?: string; type?: string }) {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="w-full px-3 py-2 rounded-lg text-sm outline-none transition-all"
      style={{ border: "1.5px solid var(--border-mid)", backgroundColor: "var(--bg-subtle)", color: "var(--text)" }}
    />
  );
}

function ProfilTab({ onSave }: { onSave: () => void }) {
  return (
    <>
      <SectionCard title="Kişisel Bilgiler">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: "var(--navy)", color: "white" }}>
            AK
          </div>
          <div>
            <button className="text-xs font-semibold hover:underline" style={{ color: "var(--text)" }}>Fotoğraf yükle</button>
            <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>JPG, PNG · maks. 2 MB</p>
          </div>
        </div>
        <Field label="Ad Soyad"><Input defaultValue="Ahmet Kaya" /></Field>
        <Field label="E-posta"><Input defaultValue="ahmet@teknopar.com" type="email" /></Field>
        <Field label="Telefon"><Input defaultValue="+90 532 000 00 00" type="tel" /></Field>
        <Field label="Rol"><Input defaultValue="CEO" /></Field>
      </SectionCard>

      <SectionCard title="Şifre">
        <Field label="Mevcut Şifre"><Input type="password" placeholder="••••••••" /></Field>
        <Field label="Yeni Şifre"><Input type="password" placeholder="••••••••" /></Field>
        <Field label="Şifre Tekrar"><Input type="password" placeholder="••••••••" /></Field>
      </SectionCard>

      <div className="flex justify-end">
        <button
          onClick={onSave}
          className="text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:opacity-90"
          style={{ backgroundColor: "var(--navy)", color: "white" }}
        >
          Kaydet
        </button>
      </div>
    </>
  );
}

function FirmaTab({ onSave }: { onSave: () => void }) {
  return (
    <>
      <SectionCard title="Firma Bilgileri">
        <Field label="Firma Adı"><Input defaultValue="Teknopar A.Ş." /></Field>
        <Field label="Sektör">
          <select className="w-full px-3 py-2 rounded-lg text-sm outline-none" style={{ border: "1.5px solid var(--border-mid)", backgroundColor: "var(--bg-subtle)", color: "var(--text)" }}>
            <option>Teknoloji</option>
            <option>Üretim</option>
            <option>Perakende</option>
            <option>Hizmet</option>
          </select>
        </Field>
        <Field label="Çalışan Sayısı">
          <select className="w-full px-3 py-2 rounded-lg text-sm outline-none" style={{ border: "1.5px solid var(--border-mid)", backgroundColor: "var(--bg-subtle)", color: "var(--text)" }}>
            <option>1–10</option>
            <option selected>11–50</option>
            <option>51–200</option>
            <option>200+</option>
          </select>
        </Field>
        <Field label="Vergi No"><Input defaultValue="1234567890" /></Field>
        <Field label="Adres"><Input defaultValue="Maslak Mah. Büyükdere Cad. No:123, İstanbul" /></Field>
      </SectionCard>

      <div className="flex justify-end">
        <button onClick={onSave} className="text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:opacity-90" style={{ backgroundColor: "var(--navy)", color: "white" }}>
          Kaydet
        </button>
      </div>
    </>
  );
}

function AbonelikTab() {
  return (
    <>
      {/* Current plan */}
      <div className="rounded-xl p-6 mb-5" style={{ backgroundColor: "var(--navy)", border: "1px solid var(--border)" }}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "rgba(168,218,220,0.6)" }}>Aktif Plan</p>
            <p className="text-2xl font-extrabold" style={{ color: "white" }}>Pro</p>
            <p className="text-sm mt-1" style={{ color: "rgba(168,218,220,0.75)" }}>₺2.499 / ay · Sonraki ödeme: 14 Temmuz 2026</p>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(168,218,220,0.15)", color: "var(--teal)" }}>Aktif</span>
        </div>
      </div>

      {/* Plan features */}
      <SectionCard title="Plan Özellikleri">
        {[
          ["Şirket analizi", "Sınırsız"],
          ["Ekip üyesi", "10 kişiye kadar"],
          ["AI içgörü", "Aylık 50"],
          ["PDF rapor", "✓"],
          ["Öncelikli destek", "✓"],
        ].map(([label, val]) => (
          <div key={label} className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text)" }}>{label}</span>
            <span className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>{val}</span>
          </div>
        ))}
      </SectionCard>

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <button className="text-sm font-semibold px-4 py-2.5 rounded-lg transition-all hover:opacity-90" style={{ backgroundColor: "var(--navy)", color: "white" }}>
          Planı Yükselt
        </button>
        <button className="text-sm font-medium px-4 py-2.5 rounded-lg transition-all hover:bg-black/5" style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}>
          Faturaları Görüntüle
        </button>
        <button className="text-sm font-medium px-4 py-2.5 rounded-lg transition-all hover:bg-black/5" style={{ color: "var(--red)" }}>
          Aboneliği İptal Et
        </button>
      </div>
    </>
  );
}

function BildirimlerTab({ onSave }: { onSave: () => void }) {
  const [notifs, setNotifs] = useState({
    report_ready: true,
    plan_reminder: true,
    team_invite: true,
    product_updates: false,
  });

  const items = [
    { key: "report_ready", label: "Rapor hazır", desc: "Analiziniz tamamlandığında bildirim alın" },
    { key: "plan_reminder", label: "Haftalık plan hatırlatıcısı", desc: "Her Pazartesi aksiyon özetini e-postayla alın" },
    { key: "team_invite", label: "Ekip daveti", desc: "Yeni üye davetlerinde bildirim alın" },
    { key: "product_updates", label: "Ürün güncellemeleri", desc: "Yeni özellikler ve iyileştirmeler hakkında haberdar olun" },
  ];

  return (
    <>
      <SectionCard title="E-posta Bildirimleri">
        {items.map((item) => (
          <div key={item.key} className="flex items-center justify-between gap-4 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{item.label}</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
            </div>
            <div
              onClick={() => setNotifs((n) => ({ ...n, [item.key]: !n[item.key as keyof typeof n] }))}
              className="relative w-10 h-6 rounded-full shrink-0 cursor-pointer transition-colors duration-200"
              style={{ backgroundColor: notifs[item.key as keyof typeof notifs] ? "var(--navy)" : "rgba(29,53,87,0.15)" }}
            >
              <div
                className="absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200"
                style={{ transform: notifs[item.key as keyof typeof notifs] ? "translateX(20px)" : "translateX(4px)" }}
              />
            </div>
          </div>
        ))}
      </SectionCard>

      <div className="flex justify-end">
        <button onClick={onSave} className="text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:opacity-90" style={{ backgroundColor: "var(--navy)", color: "white" }}>
          Kaydet
        </button>
      </div>
    </>
  );
}
