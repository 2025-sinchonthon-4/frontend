const QuizError = () => {
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
};

export default QuizError;