import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuizById } from '../../mocks/mockQuiz';
import Button from '../../components/Button';

const QuizPage = () => {
  const { id } = useParams();
  const quizData = getQuizById(parseInt(id));
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [subjectiveAnswer, setSubjectiveAnswer] = useState('');

  // 퀴즈 데이터가 없는 경우 처리
  if (!quizData) {
    return (
      <div className="flex flex-col h-full p-8 bg-[#F5F5F8] justify-center items-center">
        <div className="text-xl font-medium text-center">
          퀴즈를 찾을 수 없습니다.
        </div>
        <div className="text-base text-gray-600 mt-4">
          올바른 퀴즈 ID를 확인해주세요. (1: 객관식, 2: OX형, 3: 주관식)
        </div>
      </div>
    );
  }

  const handleSubmit = () => {
    let userAnswer;
    
    // 퀴즈 타입별로 답안 처리
    switch (quizData.type) {
      case 'multiple':
      case 'ox':
        userAnswer = selectedAnswer;
        if (!userAnswer) {
          alert('답안을 선택해주세요.');
          return;
        }
        break;
      case 'subjective':
        userAnswer = subjectiveAnswer.trim();
        if (!userAnswer) {
          alert('답안을 입력해주세요.');
          return;
        }
        break;
      default:
        alert('알 수 없는 퀴즈 형식입니다.');
        return;
    }

    alert(`${userAnswer}을(를) 답안으로 제출합니다.`);
    
    // 정답 확인 로직
    const isCorrect = checkAnswer(userAnswer, quizData.answer, quizData.type);
    
    if (isCorrect) {
      alert('정답입니다!');
    } else {
      alert(`틀렸습니다. 정답은 ${quizData.answer} 입니다.`);
    }
  };

  const checkAnswer = (userAnswer, correctAnswer, quizType) => {
    switch (quizType) {
      case 'multiple':
      case 'ox':
        return userAnswer === correctAnswer;
      case 'subjective':
        // 대소문자 구분 없이, 공백 제거하고 비교
        return userAnswer.toLowerCase() === correctAnswer.toLowerCase();
      default:
        return false;
    }
  };

  const handleHint = () => {
    alert('힌트: ' + quizData.explanation);
  };

  // 객관식 퀴즈 렌더링
  const renderMultipleChoice = () => (
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
  );

  // OX형 퀴즈 렌더링
  const renderOXQuiz = () => (
    <div className="flex justify-center gap-6 mt-8">
      <button
        onClick={() => setSelectedAnswer('O')}
        className={`w-24 h-24 rounded-[1.25rem] flex items-center justify-center text-4xl font-bold transition-colors btn-shadow
          ${
            selectedAnswer === 'O'
              ? 'bg-[#F79030] text-white'
              : 'bg-white text-black'
          }`}
      >
        O
      </button>
      <button
        onClick={() => setSelectedAnswer('X')}
        className={`w-24 h-24 rounded-[1.25rem] flex items-center justify-center text-4xl font-bold transition-colors btn-shadow
          ${
            selectedAnswer === 'X'
              ? 'bg-[#F79030] text-white'
              : 'bg-white text-black'
          }`}
      >
        X
      </button>
    </div>
  );

  // 주관식 퀴즈 렌더링
  const renderSubjective = () => (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={subjectiveAnswer}
        onChange={(e) => setSubjectiveAnswer(e.target.value)}
        placeholder="정답을 입력하세요"
        className="w-[17rem] h-[2.8125rem] px-4 rounded-[1.875rem] border border-gray-300 text-center text-lg focus:outline-none focus:border-[#F79030] btn-shadow bg-white"
      />
    </div>
  );

  // 퀴즈 타입별 컨텐츠 렌더링
  const renderQuizContent = () => {
    switch (quizData.type) {
      case 'multiple':
        return renderMultipleChoice();
      case 'ox':
        return renderOXQuiz();
      case 'subjective':
        return renderSubjective();
      default:
        return <div>지원하지 않는 퀴즈 형식입니다.</div>;
    }
  };

  return (
    <div className="flex flex-col h-full p-8 bg-[#F5F5F8]">
      <div className="h-20 flex-shrink-0"></div>

      {/* 퀴즈 카테고리 */}
      <div className="text-center text-base font-normal mb-[20px]">
        {quizData.category}
      </div>

      {/* 퀴즈 질문 */}
      <div className="text-center text-xl font-medium mb-[33px] px-4">
        {quizData.question}
      </div>

      {/* 퀴즈 타입별 컨텐츠 */}
      {renderQuizContent()}

      {/* 액션 버튼들 */}
      <div className="flex flex-col items-center gap-6 mt-[90px]">
        <Button onClick={handleSubmit}>
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