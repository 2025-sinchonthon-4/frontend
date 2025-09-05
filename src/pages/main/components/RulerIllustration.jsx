// src/pages/main/components/RulerIllustration.jsx
// 가운데 자(자루) SVG. 파일 경로는 /public/svg/ruler.svg 로 가정했습니다.
export default function RulerIllustration({ className = "" }) {
  return (
    <img
      src="/public/image 2.svg"
      alt="자 아이콘"
      className={[
        "block mx-auto w-[240px] h-[240px] select-none",
        className,
      ].join(" ")}
      draggable={false}
    />
  );
}
