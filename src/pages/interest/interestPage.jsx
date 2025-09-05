import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 상대경로 확인!
import { setPrefCategory, CAT_CODE } from "../../lib/prefCategory";
// (옵션) 서버에도 저장하고 싶으면 주석 해제
// import { postPreferredCategories } from "../../api/auth";

import InterestIntro from "./components/InterestIntro";
import CategoryPills from "./components/CategoryPills";
import NextButton from "./components/NextButton";

export default function InterestPage() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState(null); // 'life' | 'travel' | 'tech'

  const handleNext = () => {
    if (!selection) {
      alert("카테고리를 선택해주세요.");
      return;
    }
    const code = CAT_CODE[selection]; // "LIFE"|"TRIP"|"TECH"

    // 로컬에 저장
    setPrefCategory(code);

    // (옵션) 서버에도 비동기 저장 — 실패해도 페이지 이동은 막지 않음
    // postPreferredCategories([code]).catch((e) => console.error("signup2 실패:", e));

    // 메인으로 이동
    navigate("/");
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#F3F3F6] text-[#000000]">
      <InterestIntro onSkip={() => navigate("/")} />
      <CategoryPills
        value={selection}
        onChange={setSelection}
        className="absolute inset-x-0 mx-auto top-[260px]"
      />
      <NextButton
        onClick={handleNext}
        className="absolute left-1/2 -translate-x-1/2 bottom-[90px]"
      />
    </div>
  );
}
