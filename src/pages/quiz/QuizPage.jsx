import { useState } from 'react';
import { mockQuiz } from '../../mocks/mockQuiz';
import Button from '../../components/Button';

const QuizPage = () => {
  const quizData = mockQuiz;
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSubmit = () => {
    if (selectedAnswer) {
      alert(`${selectedAnswer}을(를) 답안으로 제출합니다.`);
      // 실제 정답 확인 로직 (예시)
      if (selectedAnswer === quizData.answer) {
        alert('정답입니다!');
      } else {
        alert(`틀렸습니다. 정답은 ${quizData.answer} 입니다.`);
      }
    } else {
      alert('답안을 선택해주세요.');
    }
  };

  const handleHint = () => {
    alert('힌트: ' + quizData.explanation);
  };

  return (
    <div className="flex flex-col h-full p-8 bg-[#F5F5F8]">
      <div className="h-20 flex-shrink-0"></div>

      {/* 퀴즈 카테고리 */}
      <div className="text-center text-base font-normal mb-[20px]">
        {quizData.category}
      </div>

      {/* 퀴즈 질문 */}
      <div className="text-center text-xl font-medium mb-[33px]">
        {quizData.question}
      </div>

      {/* 선택지 버튼들 - Button 컴포넌트 사용 */}
      <div className="flex flex-col items-center gap-5">
        {quizData.options.map((option) => (
          <Button
            key={option.id}
            onClick={() => setSelectedAnswer(option.id)}
            className={`transition-colors btn-shadow
              ${
                selectedAnswer === option.id
                  ? '!bg-[#F79030] !font-semibold !border-none'
                  : '!bg-white !text-black !font-semibold '
              }`}
          >
            {`${option.id}) ${option.text}`}
          </Button>
        ))}
      </div>

      {/* 액션 버튼들 - Button 컴포넌트 사용 */}
      <div className="flex flex-col items-center gap-6 mt-[90px]">
        <Button
          onClick={handleSubmit}
        >
          답안 제출하기
        </Button>
        <Button
          onClick={handleHint}
          className="bg-[#FDE39B] !text-black"
        >
          힌트 보기
        </Button>
      </div>
    </div>
  );
};

export default QuizPage;