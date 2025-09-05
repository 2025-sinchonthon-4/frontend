// src/pages/interest/components/InterestHeading.jsx
// 스샷 기준 중앙 한 줄 제목
export default function InterestHeading() {
  return (
    <h2
      className={[
        // 가로 중앙 정렬 (absolute에서도 가능)
        "absolute inset-x-0 mx-auto top-[145px]",
        // Figma 사이즈
        "w-[358px] h-[27px]",
        // 타이포
        "text-[20px] leading-[30px] font-extrabold tracking-[-0.2px]",
        "text-center whitespace-nowrap text-[#000000]",
      ].join(" ")}
    >
      관심 있는 카테고리를 선택해주세요
    </h2>
  );
}
