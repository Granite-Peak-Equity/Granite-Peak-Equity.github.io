import Link from "next/link";

export default function Cta({
  heading,
  sub,
  btnLabel = "Get in Touch",
  btnHref,
}: {
  heading: string;
  sub?: string;
  btnLabel?: string;
  btnHref?: string;
}) {
  const href = btnHref ?? "/contact";
  const isInternal = href.startsWith("/");

  const btnClass =
    "shrink-0 inline-block bg-blue hover:bg-blue-dark text-white px-[42px] py-[17px] text-[13px] font-semibold tracking-[0.05em] transition-colors";

  return (
    <div className="bg-navy-dark px-6 md:px-[60px] py-[72px] flex flex-col gap-8 md:flex-row md:gap-[60px] md:justify-between md:items-center">
      <div>
        <h2 className="font-serif font-light text-white leading-[1.2] text-[32px] md:text-[44px] mb-3">
          {heading}
        </h2>
        {sub && <p className="text-white/45 text-[15px]">{sub}</p>}
      </div>
      {isInternal ? (
        <Link href={href} className={btnClass}>
          {btnLabel}
        </Link>
      ) : (
        <a href={href} className={btnClass}>
          {btnLabel}
        </a>
      )}
    </div>
  );
}
