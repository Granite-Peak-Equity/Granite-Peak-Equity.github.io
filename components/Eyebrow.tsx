/** The blue accent line + uppercase label used as a section kicker throughout the site. */
export default function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-7 h-0.5 bg-blue" />
      <span className="text-blue text-[11px] tracking-[0.15em] uppercase font-semibold">
        {children}
      </span>
    </div>
  );
}
