import Button from '../Button';

const QuizContent = ({ 
  quizData, 
  selectedAnswer, 
  subjectiveAnswer, 
  isSubmitted, 
  isCorrect,
  onAnswerSelect,
  onSubjectiveChange 
}) => {
  
  // 객관식 퀴즈 렌더링
  const renderMultipleChoice = () => (
    <div className="flex flex-col items-center gap-5">
      {quizData.options.map((option) => (
        <Button
          key={option.id}
          onClick={() => !isSubmitted && onAnswerSelect(option.id)}
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
          <div className="text-orange-400 text-base font-medium text-center">
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
          onClick={() => !isSubmitted && onAnswerSelect('O')}
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
          onClick={() => !isSubmitted && onAnswerSelect('X')}
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
          <div className="text-orange-400 text-base font-medium text-center">
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
        onChange={(e) => !isSubmitted && onSubjectiveChange(e.target.value)}
        placeholder="정답을 입력하세요"
        disabled={isSubmitted}
        className="w-[17rem] h-[2.8125rem] px-4 rounded-[1.875rem] border border-gray-300 text-center text-lg focus:outline-none focus:border-[#F79030] btn-shadow bg-white"
      />
      {isSubmitted && subjectiveAnswer.trim() && (
        <div className="mt-5 w-[17rem]">
          <div className="text-orange-400 text-base font-medium text-center">
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

  return renderQuizContent();
};

export default QuizContent;