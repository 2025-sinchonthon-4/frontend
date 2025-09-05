export default function StatItem({ label, value, unit, side = "left" }) {
  const textAlign =
    side === "right" ? "text-right items-end" : "text-left items-start";
  const lineJustify = side === "right" ? "justify-end" : "justify-start";

  return (
    <div className={`w-1/2 flex flex-col ${textAlign}`}>
      <div className="text-[16px] leading-[22px] font-extrabold text-[#0F0F10]">
        {label}
      </div>

      <div
        className={`mt-1 flex ${lineJustify} gap-1 text-[16px] leading-[22px]`}
      >
        <span className="text-[#F79030] font-semibold">{value}</span>
        <span className="text-[#000000]">{unit}</span>
      </div>
    </div>
  );
}
