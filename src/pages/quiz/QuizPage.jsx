import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuizById } from '../../mocks/mockQuiz';
import Button from '../../components/Button';

const QuizPage = () => {
  const { id } = useParams();
  const quizData = getQuizById(parseInt(id));
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [subjectiveAnswer, setSubjectiveAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

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
    
    // 정답 확인 로직
    const correct = checkAnswer(userAnswer, quizData.answer, quizData.type);
    setIsCorrect(correct);
    setIsSubmitted(true);
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
          onClick={() => !isSubmitted && setSelectedAnswer(option.id)}
          disabled={isSubmitted}
          className={`transition-colors btn-shadow cursor-pointer
            ${
              selectedAnswer === option.id
                ? '!bg-[#F79030] !font-semibold !border-none'
                : '!bg-white !text-black !font-semibold '
            }`}
        >
          {`${option.id}) ${option.text}`}
        </Button>
      ))}
      {isSubmitted && selectedAnswer && (
        <div className="mt-5 w-[17rem]">
          <div className="text-orange-400 text-base font-medium text-left">
            {isCorrect ? '정답이에요!🎉' : '오답이에요😢'}
          </div>
        </div>
      )}
    </div>
  );

  // OX형 퀴즈 렌더링
  const renderOXQuiz = () => (
    <div className="flex flex-col items-center">
      <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={() => !isSubmitted && setSelectedAnswer('O')}
          disabled={isSubmitted}
          className={`w-24 h-24 rounded-[1.25rem] flex items-center justify-center text-4xl font-bold transition-colors btn-shadow cursor-pointer
            ${
              selectedAnswer === 'O'
                ? 'bg-[#F79030] text-white'
                : 'bg-white text-black'
            }`}
        >
          O
        </button>
        <button
          onClick={() => !isSubmitted && setSelectedAnswer('X')}
          disabled={isSubmitted}
          className={`w-24 h-24 rounded-[1.25rem] flex items-center justify-center text-4xl font-bold transition-colors btn-shadow cursor-pointer
            ${
              selectedAnswer === 'X'
                ? 'bg-[#F79030] text-white'
                : 'bg-white text-black'
            }`}
        >
          X
        </button>
      </div>
      {isSubmitted && selectedAnswer && (
        <div className="mt-5 w-[216px]">
          <div className="text-orange-400 text-base font-medium text-left">
            {isCorrect ? '정답이에요!🎉' : '오답이에요😢'}
          </div>
        </div>
      )}
    </div>
  );

  // 주관식 퀴즈 렌더링
  const renderSubjective = () => (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={subjectiveAnswer}
        onChange={(e) => !isSubmitted && setSubjectiveAnswer(e.target.value)}
        placeholder="정답을 입력하세요"
        disabled={isSubmitted}
        className="w-[17rem] h-[2.8125rem] px-4 rounded-[1.875rem] border border-gray-300 text-center text-lg focus:outline-none focus:border-[#F79030] btn-shadow bg-white cursor-pointer"
      />
      {isSubmitted && subjectiveAnswer.trim() && (
        <div className="mt-5 w-[17rem]">
          <div className="text-orange-400 text-base font-medium text-left">
            {isCorrect ? '정답이에요!🎉' : '오답이에요😢'}
          </div>
        </div>
      )}
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

      {/* 액션 버튼들 - 제출 전에만 표시 */}
      {!isSubmitted && (
        <div className="flex flex-col items-center gap-6 mt-[90px]">
          <Button onClick={handleSubmit}
          className='cursor-pointer'>
            답안 제출하기
          </Button>
          <Button
            onClick={handleHint}
            className="bg-[#FDE39B] !text-black cursor-pointer"
          >
            힌트 보기
          </Button>
        </div>
      )}

      {/* 해설 - 제출 후에만 표시 */}
      {isSubmitted && (
        <div className="flex flex-col items-center mt-[40px]">
          <div className="w-72 h-auto text-center text-xl font-medium mb-4">
            해설
          </div>
          <div className="w-72 h-auto min-h-[200px] bg-white rounded-[30px] shadow-[0px_30px_60px_0px_rgba(57,57,57,0.10)] p-6 flex items-center justify-center">
            <div className="text-center text-base leading-relaxed">
              <div className="font-medium mb-2">정답: {quizData.answer}</div>
              <div>{quizData.explanation}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;