import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import Button from '../../components/Button';

const QuizReportPage = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(20);

  /*
  useEffect(() => {
    fetch("/api/quiz/result")   // GET 요청
      .then((res) => res.json()) 
      .then((data) => {
        console.log("서버 응답:", data);
        // setScore(data.score);
      })
      .catch((err) => console.error(err));
  }, []);
  */

  return(
    <div className="flex flex-col items-center">
      <p className="mt-[13.06rem] mb-[1rem] text-[1.25rem]">퀴즈 결과</p>
      <div className="flex mb-[15.44rem]">
        <p className="font-bold text-[#F79030] text-[3rem]">{score}</p>
        <p className="font-bold text-[3rem]">/{totalScore}</p>
      </div>
      
      <Button className='mb-[1.13rem]' onClick={() => navigate("/")}>홈으로 돌아가기</Button>
      <Button className='mb-[1.13rem]' onClick={() => navigate("/quiz")}>틀린 문제 다시 풀기</Button>
      <Button onClick={() => navigate("/quiz")}>다른 퀴즈 풀기</Button>
    </div>
  );
}

export default QuizReportPage;