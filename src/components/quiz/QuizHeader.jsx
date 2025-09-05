const QuizHeader = ({ category, question }) => {
  return (
    <>
      {/* 퀴즈 카테고리 */}
      <div className="text-center text-base font-normal mb-[20px]">
        {category}
      </div>

      {/* 퀴즈 질문 */}
      <div className="text-center text-xl font-medium mb-[33px] px-4">
        {question}
      </div>
    </>
  );
};

export default QuizHeader;