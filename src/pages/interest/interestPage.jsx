// src/pages/interest/interestPage.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import InterestIntro from "./components/InterestIntro";
import CategoryPills from "./components/CategoryPills"; // ← 여기로 교체
import NextButton from "./components/NextButton";

export default function InterestPage() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState(null); // 'life' | 'travel' | 'tech' | null

  const handleSkip = () => navigate("/");

  const handleNext = () => {
    if (!selection) return;
    // 선택 값과 레이블을 함께 전달 (퀴즈에서 사용)
    const labelMap = {
      life: "생활/문화",
      travel: "여행/지역",
      tech: "과학/기술",
    };
    navigate("/", {
      state: { topicId: selection, topicLabel: labelMap[selection] },
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#F3F3F6] text-[#0F0F10]">
      {/* 393 × 100vh 박스 (스크롤 방지용, padding 없음) */}
        <InterestIntro onSkip={handleSkip} />

        {/* ⬇︎ Figma 좌표로 중앙에 배치 (원하면 top만 미세조정) */}
        <CategoryPills
          value={selection}
          onChange={setSelection}
          className="absolute inset-x-0 mx-auto top-[260px]" // 가운데 정렬 + Y 위치
        />

        <NextButton
          onClick={handleNext}
          disabled={!selection}
          className="absolute left-1/2 -translate-x-1/2 bottom-[90px]"
        />
    </div>
  );
}
