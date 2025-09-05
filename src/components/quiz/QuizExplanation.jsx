const QuizExplanation = ({ quizData, isSubmitted }) => {
  if (!isSubmitted) return null;

  return (
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
  );
};

export default QuizExplanation;