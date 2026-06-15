"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Nasıl Çalışır?", href: "#how-it-works" },
  { label: "7 Boyut", href: "#dimensions" },
  { label: "Fiyatlandırma", href: "#pricing" },
  { label: "Giriş Yap", href: "/login" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Floating pill */}
      <nav
        className="pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-full"
        style={{
          backgroundColor: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(24px) saturate(200%)",
          WebkitBackdropFilter: "blur(24px) saturate(200%)",
          border: "1px solid rgba(255,255,255,0.45)",
          boxShadow: "0 8px 32px rgba(29,53,87,0.08), 0 1px 0 rgba(255,255,255,0.8) inset",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-base tracking-tight select-none px-3 py-1"
          style={{ color: "var(--navy)" }}
        >
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
            style={{ backgroundColor: "var(--red)", color: "white" }}
          >
            N
          </span>
          Nextum<span style={{ color: "var(--red)" }}>.</span>
        </Link>

        {/* Separator */}
        <div className="w-px h-4 mx-1 hidden md:block" style={{ backgroundColor: "rgba(29,53,87,0.12)" }} />

        {/* Nav links */}
        <ul className="hidden md:flex items-center">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium px-4 py-2 rounded-full transition-all duration-150 hover:bg-black/5 block"
                style={{ color: "var(--steel)" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Separator */}
        <div className="w-px h-4 mx-1 hidden md:block" style={{ backgroundColor: "rgba(29,53,87,0.12)" }} />

        {/* CTA */}
        <Link
          href="/onboarding"
          className="hidden md:flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:opacity-90 hover:shadow-lg"
          style={{ backgroundColor: "var(--navy)", color: "white" }}
        >
          Ücretsiz Başla
          <span className="text-xs">↗</span>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-full transition-colors hover:bg-white/10 ml-1"
          style={{ color: "var(--navy)" }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menü"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="pointer-events-auto absolute top-16 left-4 right-4 rounded-2xl px-4 pb-4 pt-3 flex flex-col gap-1 md:hidden"
          style={{
            backgroundColor: "rgba(15,15,18,0.95)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
          }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium py-3 px-2 rounded-xl hover:bg-white/10 transition-all"
              style={{ color: "rgba(255,255,255,0.8)" }}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="h-px my-1" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
          <Link
            href="/onboarding"
            className="text-sm font-semibold text-center py-3.5 rounded-xl transition-all"
            style={{ backgroundColor: "white", color: "#0f0f12" }}
            onClick={() => setMobileOpen(false)}
          >
            Ücretsiz Başla →
          </Link>
        </div>
      )}
    </header>
  );
}
