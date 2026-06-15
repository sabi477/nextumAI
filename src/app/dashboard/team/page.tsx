"use client";

import { useState } from "react";

// Demo: toggle between roles to preview both views
type Role = "owner" | "employee";

const TEAM_MEMBERS = [
  { id: 1, name: "Ahmet Kaya", email: "ahmet@teknopar.com", role: "Şirket Karar Vericisi", dept: "Yönetim", status: "aktif", joined: "Oca 2026", initials: "AK", color: "#1d3557" },
  { id: 2, name: "Selin Arslan", email: "selin@teknopar.com", role: "Çalışan", dept: "Satış", status: "aktif", joined: "Şub 2026", initials: "SA", color: "#457b9d" },
  { id: 3, name: "Mert Öztürk", email: "mert@teknopar.com", role: "Çalışan", dept: "Operasyon", status: "aktif", joined: "Mar 2026", initials: "MÖ", color: "#457b9d" },
  { id: 4, name: "Elif Demir", email: "elif@teknopar.com", role: "Çalışan", dept: "İnsan Kaynakları", status: "davet bekliyor", joined: "—", initials: "ED", color: "#a8dadc" },
];

const MODULE_PERMS = [
  { key: "report_summary", label: "Rapor Özeti & Skor" },
  { key: "report_detail", label: "Detaylı Rapor" },
  { key: "action_plan", label: "Aksiyon Planı" },
  { key: "survey_fill", label: "Anket Doldurma" },
  { key: "pdf_download", label: "PDF İndirme" },
];

const DEFAULT_PERMS: Record<number, Record<string, boolean>> = {
  2: { report_summary: true, report_detail: false, action_plan: true, survey_fill: true, pdf_download: true },
  3: { report_summary: true, report_detail: false, action_plan: true, survey_fill: true, pdf_download: false },
  4: { report_summary: false, report_detail: false, action_plan: false, survey_fill: false, pdf_download: false },
};

export default function TeamPage() {
  const [viewRole, setViewRole] = useState<Role>("owner");
  const [perms, setPerms] = useState(DEFAULT_PERMS);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const togglePerm = (memberId: number, key: string) => {
    setPerms((p) => ({
      ...p,
      [memberId]: { ...p[memberId], [key]: !p[memberId][key] },
    }));
  };

  // Employee view — minimal
  if (viewRole === "employee") {
    const me = TEAM_MEMBERS[1]; // Selin as the logged-in employee
    return (
      <div className="max-w-lg">
        {/* Role switcher (demo only) */}
        <RoleSwitcher viewRole={viewRole} setViewRole={setViewRole} />

        <div className="mb-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--red)" }}>Ekip</p>
          <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>Profilim</h1>
          <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>Hesap bilgileriniz ve modül erişimleriniz</p>
        </div>

        {/* Profile card */}
        <div className="rounded-xl p-6 mb-4" style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-base" style={{ backgroundColor: me.color, color: "white" }}>
              {me.initials}
            </div>
            <div>
              <p className="font-bold" style={{ color: "var(--text)" }}>{me.name}</p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>{me.email}</p>
              <span className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block" style={{ backgroundColor: "rgba(69,123,157,0.1)", color: "var(--steel)" }}>
                {me.role} · {me.dept}
              </span>
            </div>
          </div>
          <div className="h-px mb-5" style={{ backgroundColor: "var(--border)" }} />
          <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "var(--text-muted)", opacity: 0.6 }}>Modül Erişimleri</p>
          <div className="flex flex-col gap-2.5">
            {MODULE_PERMS.map((m) => {
              const allowed = perms[2]?.[m.key] ?? false;
              return (
                <div key={m.key} className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: "var(--text)" }}>{m.label}</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{
                    backgroundColor: allowed ? "rgba(168,218,220,0.2)" : "rgba(230,57,70,0.07)",
                    color: allowed ? "var(--steel)" : "var(--red)",
                  }}>
                    {allowed ? "Erişim var" : "Erişim yok"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-xs text-center" style={{ color: "var(--text-muted)", opacity: 0.5 }}>
          Erişim değişikliği için şirket yöneticinizle iletişime geçin.
        </p>
      </div>
    );
  }

  // Owner view — full team management
  return (
    <>
      {/* Role switcher (demo only) */}
      <RoleSwitcher viewRole={viewRole} setViewRole={setViewRole} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--red)" }}>Kullanıcı Yönetimi</p>
          <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>Ekip</h1>
          <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
            {TEAM_MEMBERS.length} üye · Teknopar A.Ş.
          </p>
        </div>
        <button
          onClick={() => setInviteOpen(true)}
          className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg self-start transition-all hover:opacity-90"
          style={{ backgroundColor: "var(--text)", color: "white" }}
        >
          <span>+</span> Üye Davet Et
        </button>
      </div>

      {/* Invite modal */}
      {inviteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ backgroundColor: "rgba(29,53,87,0.3)", backdropFilter: "blur(4px)" }}>
          <div className="w-full max-w-sm rounded-2xl p-6" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", boxShadow: "0 24px 64px rgba(29,53,87,0.16)" }}>
            <h2 className="text-lg font-bold mb-1" style={{ color: "var(--text)" }}>Üye Davet Et</h2>
            <p className="text-sm mb-5" style={{ color: "var(--text-muted)" }}>Davet linki e-posta ile gönderilecek.</p>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--text)" }}>E-posta adresi</label>
            <input
              type="email"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              placeholder="calisanadi@teknopar.com"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none mb-4"
              style={{ border: "1.5px solid var(--border-mid)", backgroundColor: "var(--bg-subtle)", color: "var(--text)" }}
            />
            <div className="flex gap-2">
              <button
                onClick={() => { setInviteOpen(false); setInviteEmail(""); }}
                className="flex-1 py-2.5 rounded-lg text-sm font-medium transition-all"
                style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
              >
                İptal
              </button>
              <button
                onClick={() => { setInviteOpen(false); setInviteEmail(""); }}
                className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--text)", color: "white" }}
              >
                Davet Gönder
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Team list */}
      <div className="flex flex-col gap-3">
        {TEAM_MEMBERS.map((member) => {
          const isOwner = member.role === "Şirket Karar Vericisi";
          const isExpanded = expandedMember === member.id;
          const memberPerms = perms[member.id];

          return (
            <div key={member.id} className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}>
              {/* Row */}
              <div
                className="flex items-center gap-4 px-5 py-4"
                style={{ cursor: !isOwner ? "pointer" : "default" }}
                onClick={() => !isOwner && setExpandedMember(isExpanded ? null : member.id)}
              >
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ backgroundColor: member.color, color: "white" }}>
                  {member.initials}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{member.name}</p>
                    {isOwner && (
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(29,53,87,0.07)", color: "var(--text)" }}>
                        Siz
                      </span>
                    )}
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{
                      backgroundColor: member.status === "aktif" ? "rgba(168,218,220,0.2)" : "rgba(230,57,70,0.07)",
                      color: member.status === "aktif" ? "var(--steel)" : "var(--red)",
                    }}>
                      {member.status}
                    </span>
                  </div>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{member.email} · {member.dept}</p>
                </div>

                {/* Role + expand */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs hidden sm:block" style={{ color: "var(--text-muted)" }}>{member.role}</span>
                  {!isOwner && (
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs transition-transform duration-200"
                      style={{
                        backgroundColor: "rgba(29,53,87,0.06)",
                        color: "var(--text-muted)",
                        transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      ↓
                    </div>
                  )}
                </div>
              </div>

              {/* Permission panel */}
              {isExpanded && memberPerms && (
                <div className="px-5 pb-5" style={{ borderTop: "1px solid var(--border)" }}>
                  <p className="text-xs font-semibold tracking-wider uppercase mt-4 mb-3" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
                    Modül Erişimi
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {MODULE_PERMS.map((m) => (
                      <label key={m.key} className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors hover:bg-black/[0.02]" style={{ border: "1px solid var(--border)" }}>
                        <span className="text-sm" style={{ color: "var(--text)" }}>{m.label}</span>
                        {/* Toggle */}
                        <div
                          onClick={() => togglePerm(member.id, m.key)}
                          className="relative w-9 h-5 rounded-full shrink-0 transition-colors duration-200"
                          style={{ backgroundColor: memberPerms[m.key] ? "var(--navy)" : "rgba(29,53,87,0.15)" }}
                        >
                          <div
                            className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-200"
                            style={{ transform: memberPerms[m.key] ? "translateX(18px)" : "translateX(2px)" }}
                          />
                        </div>
                      </label>
                    ))}
                  </div>
                  <div className="flex items-center justify-end gap-2 mt-4">
                    <button
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-all hover:opacity-80"
                      style={{ color: "var(--red)", border: "1px solid rgba(230,57,70,0.2)" }}
                    >
                      Kullanıcıyı Kaldır
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Auth matrix reference */}
      <div className="mt-8 rounded-xl p-5" style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-subtle)" }}>
        <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--text-muted)", opacity: 0.6 }}>Yetki Matrisi Özeti</p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                <th className="text-left py-2 pr-4 font-semibold" style={{ color: "var(--text-muted)" }}>Aksiyon</th>
                <th className="text-center py-2 px-3 font-semibold" style={{ color: "var(--text)" }}>Siz</th>
                <th className="text-center py-2 px-3 font-semibold" style={{ color: "var(--text-muted)" }}>Çalışan</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Üye davet etme", true, false],
                ["Üye silme / devre dışı", true, false],
                ["Modül erişimi düzenleme", true, false],
                ["Rapor özeti görüntüleme", true, true],
                ["Detaylı rapor görüntüleme", true, false],
                ["Aksiyon planı görüntüleme", true, true],
                ["Anket doldurma", true, true],
                ["Yeni analiz başlatma", true, false],
              ].map(([label, owner, emp]) => (
                <tr key={label as string} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td className="py-2.5 pr-4" style={{ color: "var(--text)" }}>{label as string}</td>
                  <td className="text-center py-2.5 px-3">
                    <span style={{ color: owner ? "#22c55e" : "var(--red)" }}>{owner ? "✓" : "✗"}</span>
                  </td>
                  <td className="text-center py-2.5 px-3">
                    <span style={{ color: emp ? "#22c55e" : "var(--red)" }}>{emp ? "✓" : "✗"}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function RoleSwitcher({ viewRole, setViewRole }: { viewRole: Role; setViewRole: (r: Role) => void }) {
  return (
    <div className="flex items-center gap-2 mb-6 p-1 rounded-lg w-fit" style={{ backgroundColor: "rgba(230,57,70,0.06)", border: "1px solid rgba(230,57,70,0.12)" }}>
      <span className="text-xs font-semibold pl-2" style={{ color: "var(--red)" }}>Demo görünümü:</span>
      {(["owner", "employee"] as Role[]).map((r) => (
        <button
          key={r}
          onClick={() => setViewRole(r)}
          className="text-xs font-semibold px-3 py-1.5 rounded-md transition-all"
          style={{
            backgroundColor: viewRole === r ? "var(--red)" : "transparent",
            color: viewRole === r ? "white" : "var(--red)",
          }}
        >
          {r === "owner" ? "Şirket Sahibi" : "Çalışan"}
        </button>
      ))}
    </div>
  );
}
