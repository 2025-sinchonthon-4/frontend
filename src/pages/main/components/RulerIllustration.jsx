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
