import Eyebrow from "./Eyebrow";

export default function PageHero({
  title,
  subtitle,
  tag,
}: {
  title: string;
  subtitle?: string;
  tag?: string;
}) {
  return (
    <div className="bg-navy-dark px-6 md:px-[60px] pt-20 pb-[72px]">
      {tag && <Eyebrow className="mb-5">{tag}</Eyebrow>}
      <h1
        className="font-serif font-light text-white leading-[1.1] text-[40px] md:text-[64px]"
        style={{ marginBottom: subtitle ? 16 : 0 }}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="text-white/50 text-[17px] leading-[1.7] font-light max-w-[560px] font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
}
