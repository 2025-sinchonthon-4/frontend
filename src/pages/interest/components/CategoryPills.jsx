// src/pages/interest/components/CategoryPills.jsx
"use client";

const CATEGORIES = [
  { id: "life", label: "생활/문화" },
  { id: "travel", label: "여행/지역" },
  { id: "tech", label: "과학/기술" },
];

export default function CategoryPills({
  value, // 선택된 id (string | null)
  onChange, // (id) => void
  className = "", // 위치/레이아웃 주입
}) {
  return (
    <div
      className={[
        // Figma처럼 중앙에 세로 스택 (좌표는 외부에서)
        "flex flex-col items-center gap-4",
        className,
      ].join(" ")}
      role="radiogroup"
      aria-label="카테고리 선택"
    >
      {CATEGORIES.map((cat) => {
        const selected = value === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange?.(cat.id)}
            className={[
              // Figma 사이즈: 142 x 45, pill
              "inline-flex items-center justify-center w-[142px] h-[45px] rounded-full",
              "text-[14px] leading-[20px] transition-colors",
              selected
                ? "bg-[#F79030] text-white border border-[#F79030] font-semibold"
                : "bg-white text-[#333333] border border-[#DADDE2]",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
            ].join(" ")}
          >
            #{cat.label}
          </button>
        );
      })}
    </div>
  );
}
