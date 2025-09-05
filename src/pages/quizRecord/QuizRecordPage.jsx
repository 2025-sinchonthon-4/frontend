import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

function Modal({ open, onClose, title, category, children }) {
  if (!open) return null;

  // 오버레이 클릭으로 닫기
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onMouseDown={handleBackdrop}
    >
      <div
        className="mx-4 w-[20rem] rounded-2xl bg-white p-6 shadow-xl transition-all
                   animate-in fade-in zoom-in duration-150"
      >
        <div className="mb-[0.5rem] flex flex-col justify-start items-center gap-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-[0.9rem] font-semibold text-[#6F6E6E]">[{category}]</p>
        </div>

        <div className="flex flex-col justify-center gap-[1rem] prose max-w-none text-sm leading-relaxed">
          {children}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="cursor-pointer h-[1.9rem] w-[5rem] border border-[#6F6E6E] rounded-[1.25rem] text-[#6F6E6E] text-[0.8125rem] font-medium  hover:bg-neutral-50 active:scale-95"
            type="button"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

const QuizRecordPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const problem = "서울에서 부산까지 고속버스로 평균 소요 시간은 약 얼마일까요?";
  const date = "2025.09.05";
  const answer = "약 4시간 30분";
  const explanation =
    "교통 상황과 경유 여부에 따라 달라지지만, 경부고속도로 기준 평균 약 4~5시간이 소요됩니다. 야간/주말에는 더 걸릴 수 있어요.";

  return (
    <div className="w-full h-full flex flex-col items-center justify-between bg-[#F5F5F8]">

      <div className="flex flex-col items-center mt-[7rem] w-full h-[33.84rem] overflow-y-auto gap-[1.87rem]">
        
        <div className="shrink-0 flex flex-col justify-between items-center w-[19.6875rem] h-[6.4375rem] bg-white rounded-[1rem] shadow-[0_10px_40px_0_rgba(0,0,0,0.03)] p-[1rem]">
          <div className="w-full truncate text-[0.8125rem] font-semibold mb-[1.13rem]">
            {problem}
          </div>
          <div className="flex justify-between w-full items-center">
            <span className="text-[0.75rem] text-[#6F6E6E] font-medium">{date}</span>
            <button className="cursor-pointer h-[1.9rem] w-[6.4375rem] border border-[#6F6E6E] rounded-[1.25rem] text-[#6F6E6E] text-[0.8125rem] font-medium hover:bg-neutral-50 active:scale-95" onClick={() => setOpen(true)}>
              정답 및 해설
            </button>
          </div>
        </div>
        
      </div>
      <Button className='mt-[2.47rem] mb-[7.12rem]' onClick={() => navigate("/")}>
        홈으로 돌아가기
      </Button>

      <Modal open={open} onClose={() => setOpen(false)} title="정답 및 해설" category="여행/지역">
        <p className="font-semibold">{problem}</p>
        <p className="mb-2 text-center">
          <span className="text-[1rem] font-semibold text-[#F79030]">정답:</span> <span className='text-[1rem] text-[#F79030]'>{answer}</span>
        </p>
        <p className="text-neutral-700">{explanation}</p>
      </Modal>
    </div>
  );
};

export default QuizRecordPage;
