export default function SkipButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "absolute left-[235px] top-[88px] w-[124px] h-[19px]",

        "text-[13px] leading-[19px] font-medium text-[#000000] text-left",

        "hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
      ].join(" ")}
      aria-label="선택하지 않을래요"
    >
      선택하지 않을래요
    </button>
  );
}
