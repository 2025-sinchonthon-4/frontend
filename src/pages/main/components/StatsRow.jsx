// src/pages/main/components/StatsRow.jsx
import StatItem from "./StatItem";

export default function StatsRow({ solved = 46, streak = 23 }) {
  return (
    // 좌우 여백(px-6)은 디자인에 맞게 조절하세요.
    <div className="mt-[36px] w-full flex px-6">
      {/* 왼쪽 블록 */}
      <StatItem
        label="오늘 푼 문제 수"
        value={solved}
        unit="문제"
        side="left"
      />
      {/* 오른쪽 블록 */}
      <StatItem label="연속 학습 일수" value={streak} unit="일" side="right" />
    </div>
  );
}
