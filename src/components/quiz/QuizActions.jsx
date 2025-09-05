import Button from '../Button';

const QuizActions = ({ onSubmit, onHint, isSubmitted }) => {
  if (isSubmitted) return null;

  return (
    <div className="flex flex-col items-center gap-6 mt-[90px]">
      <Button onClick={onSubmit} className='cursor-pointer'>
        답안 제출하기
      </Button>
      <Button
        onClick={onHint}
        className="bg-[#FDE39B] !text-black cursor-pointer"
      >
        힌트 보기
      </Button>
    </div>
  );
};

export default QuizActions;