// src/pages/main/components/OrangeButton.jsx
export default function OrangeButton({ children, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "block w-[272px] h-[45px] rounded-full",
        "bg-[#F79030] text-white font-semibold transition-none",
        "mx-auto",
        className,
      ].join(" ")}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {children}
    </button>
  );
}
