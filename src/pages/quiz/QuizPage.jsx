import { useState } from 'react';
import { mockQuiz } from '../../mocks/mockQuiz';

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
    <div className="flex flex-col h-full p-8 bg-white font-['Pretendard']">
      <div className="h-20 flex-shrink-0"></div>

      {/* 퀴즈 카테고리 */}
      <div className="text-center text-black text-xs font-normal mb-4">
        {quizData.category}
      </div>

      {/* 퀴즈 질문 */}
      <div className="text-center text-lg font-semibold mb-12">
        {quizData.question}
      </div>


      <div className="flex flex-col items-center gap-6">
        {quizData.options.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedAnswer(option.id)}
            className={`w-64 h-12 flex items-center justify-center text-xl rounded-lg transition-colors
              ${
                selectedAnswer === option.id
                  ? 'bg-stone-300 text-black font-bold border-none'
                  : 'bg-white text-black font-normal border border-black'
              }`}
          >
            {`${option.id}) ${option.text}`}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6 mt-auto">
        <button
          onClick={handleSubmit}
          className="w-64 h-12 flex items-center justify-center text-xl font-normal bg-zinc-300 rounded-lg"
        >
          답안 제출하기
        </button>
        <button
          onClick={handleHint}
          className="w-64 h-12 flex items-center justify-center text-xl font-normal bg-white border border-black rounded-lg"
        >
          힌트 보기
        </button>
      </div>
    </div>
  );
};

export default QuizPage;