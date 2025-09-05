import { useParams } from 'react-router-dom';
import { getQuizById } from '../../mocks/mockQuiz';
import { useQuiz } from '../../hooks/useQuiz';
import { useModal } from '../../hooks/useModal';
import QuizError from '../../components/quiz/QuizError';
import QuizHeader from '../../components/quiz/QuizHeader';
import QuizContent from '../../components/quiz/QuizContent';
import QuizActions from '../../components/quiz/QuizActions';
import QuizExplanation from '../../components/quiz/QuizExplanation';
import HintModal from '../../components/quiz/HintModal';

const QuizPage = () => {
  const { id } = useParams();
  const quizData = getQuizById(parseInt(id));
  
  const {
    selectedAnswer,
    subjectiveAnswer,
    isSubmitted,
    isCorrect,
    handleSubmit,
    handleHint,
    handleAnswerSelect,
    handleSubjectiveChange
  } = useQuiz();

  const { isOpen, openModal, closeModal } = useModal();

  // 퀴즈 데이터가 없는 경우 처리
  if (!quizData) {
    return <QuizError />;
  }

  return (
    <>
      <div className="flex flex-col h-full p-8 bg-[#F5F5F8]">
        <div className="h-20 flex-shrink-0"></div>

        <QuizHeader 
          category={quizData.category}
          question={quizData.question}
        />

        <QuizContent
          quizData={quizData}
          selectedAnswer={selectedAnswer}
          subjectiveAnswer={subjectiveAnswer}
          isSubmitted={isSubmitted}
          isCorrect={isCorrect}
          onAnswerSelect={handleAnswerSelect}
          onSubjectiveChange={handleSubjectiveChange}
        />

        <QuizActions
          onSubmit={() => handleSubmit(quizData)}
          onHint={() => handleHint(openModal)}
          isSubmitted={isSubmitted}
        />

        <QuizExplanation
          quizData={quizData}
          isSubmitted={isSubmitted}
        />
      </div>

      <HintModal
        isOpen={isOpen}
        onClose={closeModal}
        hint={quizData.hint}
      />
    </>
  );
};

export default QuizPage;