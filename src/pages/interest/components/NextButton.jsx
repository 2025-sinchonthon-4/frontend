// src/pages/interest/components/NextButton.jsx
export default function NextButton({ onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-[272px] h-[45px] rounded-full bg-[#F79030] text-white font-semibold transition-none focus-visible:outline-none ${className}`}
      style={{ WebkitTapHighlightColor: "transparent" }} // 모바일 탭 하이라이트 제거
    >
      다음
    </button>
  );
}
