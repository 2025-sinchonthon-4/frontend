import OrangeButton from "./OrangeButton";
import { useNavigate } from "react-router-dom";
import { getPrefCategory } from "../../../lib/prefCategory"; // 경로 확인!

export default function MainActions() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    const code = getPrefCategory(); // "LIFE"|"TRIP"|"TECH" 또는 ""
    if (!code) {
      alert("관심 카테고리를 먼저 선택해 주세요.");
      navigate("/interest");
      return;
    }
    // 선택된 카테고리로 퀴즈 시작
    navigate(`/quiz?category=${code}`);
  };

  return (
    <div className="mt-10 flex flex-col items-center gap-4">
      <OrangeButton onClick={handleStartQuiz}>퀴즈 시작하기</OrangeButton>
      <OrangeButton onClick={() => navigate("/quiz?mode=retry")}>
        틀린 문제 다시 풀기
      </OrangeButton>
      <OrangeButton onClick={() => navigate("/quiz-report")}>
        퀴즈 기록 조회하기
      </OrangeButton>
    </div>
  );
}
