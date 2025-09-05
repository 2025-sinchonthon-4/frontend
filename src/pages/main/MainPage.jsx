// src/pages/main/MainPage.jsx
import { useEffect, useState } from "react";
import api from "../../apis/instance";
import StatsRow from "./components/StatsRow";
import RulerIllustration from "./components/RulerIllustration";
import KnowledgeLength from "./components/KnowledgeLength";
import MainActions from "./components/MainActions";

export default function MainPage() {
  const [solved, setSolved] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    api.get("/users/study-info")
      .then(res => {
        setSolved(res.data.todaySolvedCount);
        setStreak(res.data.continuousStudyDays);
      })
      .catch(err => {
        // 에러 처리 필요시 추가
        setSolved(0);
        setStreak(0);
      });
  }, []);

  return (
    <div className="w-full bg-[#F3F3F6] text-[#0F0F10]">
      {/* 393 × 100vh 고정 컨테이너 */}
      <div className="w-full mx-auto overflow-hidden">
        {/* ⬇️ 여기 랩퍼의 pt/gap으로 전체 위치·간격 제어 */}
        <div className="px-6 pt-[36px]">
          <div className="flex flex-col items-center gap-[28px]">
            <StatsRow solved={solved} streak={streak} />
            <RulerIllustration className="mt-[12px]" />
            <KnowledgeLength lengthCm={3} />
            <div className="mt-[20px]">
              <MainActions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
