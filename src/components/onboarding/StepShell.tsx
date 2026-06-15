interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function StepShell({ eyebrow, title, subtitle, children }: Props) {
  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--red)" }}>
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight" style={{ color: "var(--text)" }}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
