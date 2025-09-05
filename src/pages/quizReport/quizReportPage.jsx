import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';

const QuizReportPage = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  /*
  useEffect(() => {
    fetch("/api/quiz/result")   // GET 요청
      .then((res) => res.json()) 
      .then((data) => {
        console.log("서버 응답:", data);
        // setScore(data.score);
        // setTotalScore(data.totalScore);
      })
      .catch((err) => console.error(err));
  }, []);
  */

  return(
    <div className="flex flex-col items-center">
      <p>퀴즈 결과</p>
      <p>{score}/{totalScore}</p>
      
      <button className='' onClick={() => navigate("/")}>홈으로 돌아가기</button>
      <button className='' onClick={() => navigate("/quiz")}>틀린 문제 다시 풀기</button>
      <button className='' onClick={() => navigate("/quiz")}>다른 퀴즈 풀기</button>
    </div>
  );
}

export default QuizReportPage;