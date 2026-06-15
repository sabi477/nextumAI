interface Props {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: Props) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full flex items-center gap-4">
      <div className="flex-1 h-0.5 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(29,53,87,0.1)" }}>
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%`, backgroundColor: "var(--text)" }}
        />
      </div>
      <span className="text-xs font-medium tabular-nums shrink-0" style={{ color: "rgba(29,53,87,0.4)" }}>
        {current}/{total}
      </span>
    </div>
  );
}
