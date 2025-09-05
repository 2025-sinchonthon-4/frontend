import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import api from "../../apis/instance";

function Modal({ open, onClose, title, category, children }) {
  if (!open) return null;

  // 오버레이 클릭으로 닫기
  const handleBackdrop = (e) => { 
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center bg-black/50"
      onMouseDown={handleBackdrop}
    >
      <div
        className="mx-4 w-[20rem] rounded-2xl bg-white p-6 shadow-xl animate-fadeIn"
      >
        <div className="mb-[0.5rem] flex flex-col justify-start items-center gap-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-[0.9rem] font-semibold text-[#6F6E6E]">category && ([{category}])</p>
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
  const [quizRecord, setQuizRecord] = useState([]);
  const [selected, setSelected] = useState(null); // 모달에 띄울 항목

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await api.get("/api/users/me/logs");
        // 스프링이라면 보통 res.data가 바로 배열인 경우가 많음
        setQuizRecord(Array.isArray(res.data) ? res.data : res.data?.data ?? []);
      } catch (err) {
        console.error("❌ API 오류:", err.response?.status, err.response?.data || err.message);
      }
    };

    fetchLogs();
  }, []); // 한 번만 호출

  const openModalWith = (item) => {
    setSelected(item);
    setOpen(true);
  };

  const fmtDate = (d) =>
    d ? new Date(d).toLocaleDateString("ko-KR") : "";

  return (
    <div className="w-full h-full flex flex-col items-center justify-between bg-[#F5F5F8]">

      <div className="flex flex-col items-center mt-[7rem] w-full h-[33.84rem] overflow-y-auto gap-[1.87rem]">
        
        {quizRecord.length === 0 && (
          <div className="text-sm text-neutral-500">풀이 기록이 아직 없어요.</div>
        )}

        {quizRecord.map((item) => (
          <div 
            className="shrink-0 flex flex-col justify-between items-center w-[19.6875rem] min-h-[6.4375rem] bg-white rounded-[1rem] shadow-[0_10px_40px_0_rgba(0,0,0,0.03)] p-[1rem]"
            key={item.quizId}
          >
            <div className="w-full truncate text-[0.8125rem] font-semibold mb-[1.13rem]">
              {item.quizQuestion}
            </div>
            <div className="flex justify-between w-full items-center">
              <span className="text-[0.75rem] text-[#6F6E6E] font-medium">{fmtDate(item.solvedDate)}</span>
              <button className="cursor-pointer h-[1.9rem] w-[6.4375rem] border border-[#6F6E6E] rounded-[1.25rem] text-[#6F6E6E] text-[0.8125rem] font-medium hover:bg-neutral-50 active:scale-95" onClick={() => openModalWith(item)}>
                정답 및 해설
              </button>
            </div>
          </div>
        ))}

      </div>
      <Button className='mt-[2.47rem] mb-[7.12rem]' onClick={() => navigate("/")}>
        홈으로 돌아가기
      </Button>
      
      {selected && (
        <Modal open={open} onClose={() => setOpen(false)} title="정답 및 해설" category={selected.category}>
              <p className="font-semibold">{selected.quizQuestion}</p>
              <p className="mb-2 text-center">
                <span className="text-[1rem] font-semibold text-[#F79030]">정답:</span> <span className='text-[1rem] text-[#F79030]'>{selected.correctAnswer}</span>
              </p>
              <p className="text-neutral-700">{selected.explanation}</p>
        </Modal>
      )}
    </div>
  );
};

export default QuizRecordPage;
