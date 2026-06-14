/** Stacked rows with a blue left-accent bar — used on Home (About) and Investors (What to Expect). */
export default function FeatureRows({
  items,
}: {
  items: { t: string; d: string }[];
}) {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.t}
          className="flex gap-[18px] py-[22px] border-b border-navy-dark/10"
        >
          <div className="w-[3px] shrink-0 bg-blue rounded-sm" />
          <div>
            <div className="text-[15px] font-semibold text-navy-dark mb-1.5">
              {item.t}
            </div>
            <div className="text-sm text-navy-dark/55 leading-[1.7]">
              {item.d}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
