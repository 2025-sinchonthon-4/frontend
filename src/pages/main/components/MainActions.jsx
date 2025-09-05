// src/pages/main/components/MainActions.jsx
import OrangeButton from "./OrangeButton";
import { useNavigate } from "react-router-dom";

export default function MainActions() {
  const navigate = useNavigate();

  return (
    <div className="mt-10 flex flex-col items-center gap-4">
      <OrangeButton onClick={() => navigate("/quiz")}>
        퀴즈 시작하기
      </OrangeButton>
      <OrangeButton onClick={() => navigate("/quiz?mode=retry")}>
        틀린 문제 다시 풀기
      </OrangeButton>
      <OrangeButton onClick={() => navigate("/quiz-report")}>
        퀴즈 기록 조회하기
      </OrangeButton>
    </div>
  );
}
