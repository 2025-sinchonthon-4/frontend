import StatItem from "./StatItem";

export default function StatsRow({ solved = 46, streak = 23 }) {
  return (
    <div className="mt-[36px] w-full flex px-6">
      <StatItem
        label="오늘 푼 문제 수"
        value={solved}
        unit="문제"
        side="left"
      />

      <StatItem label="연속 학습 일수" value={streak} unit="일" side="right" />
    </div>
  );
}
