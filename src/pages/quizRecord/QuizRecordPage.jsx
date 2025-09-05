import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Modal({ open, onClose, title, children }) {
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
        <div className="mb-4 flex items-start justify-center gap-4">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>

        <div className="prose max-w-none text-sm leading-relaxed">
          {children}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50 active:scale-95"
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
    <div className="flex flex-col items-center">
      <div className="flex flex-col">
        {problem}
        <div className="flex justify-between">
          {date}
          <button className="" onClick={() => setOpen(true)}>
            정답 및 해설 보기
          </button>
        </div>
      </div>
      <button className="" onClick={() => navigate("/")}>
        홈으로 돌아가기
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title="정답 및 해설">
        <p className="font-semibold">{problem}</p>
        <p className="mb-2 text-center">
          <span className="font-semibold">정답:</span> {answer}
        </p>
        <p className="text-neutral-700">{explanation}</p>
      </Modal>
    </div>
  );
};

export default QuizRecordPage;
