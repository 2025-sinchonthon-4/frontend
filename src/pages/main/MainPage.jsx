// src/pages/main/MainPage.jsx
import StatsRow from "./components/StatsRow";
import RulerIllustration from "./components/RulerIllustration";
import KnowledgeLength from "./components/KnowledgeLength";
import MainActions from "./components/MainActions";

export default function MainPage() {
  return (
    <div className="relative w-full h-screen bg-[#F3F3F6] text-[#0F0F10]">
      {/* 393 × 100vh 고정 컨테이너 */}
      <div className="relative w-[393px] h-screen mx-auto overflow-hidden">
        {/* ⬇️ 여기 랩퍼의 pt/gap으로 전체 위치·간격 제어 */}
        <div className="px-6 pt-[36px]">
          <div className="flex flex-col items-center gap-[28px]">
            <StatsRow solved={46} streak={23} />
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
