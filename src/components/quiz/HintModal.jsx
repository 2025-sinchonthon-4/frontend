const HintModal = ({ isOpen, onClose, hint }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-100 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-[20px] w-full max-w-[320px] p-6 relative animate-fadeIn">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500 text-xl leading-none"
        >
          ×
        </button>

        {/* 모달 헤더 */}
        <div className="text-center mb-6">
          <div className="text-2xl mb-2">💡</div>
          <h2 className="text-xl font-bold text-gray-800">힌트</h2>
        </div>

        {/* 힌트 내용 */}
        <div className="bg-yellow-50 rounded-[15px] p-4 mb-6 border border-yellow-200">
          <p className="text-gray-700 leading-relaxed text-center">
            {hint}
          </p>
        </div>

        {/* 확인 버튼 */}
        <button
          onClick={onClose}
          className="w-full h-11 bg-[#F79030] text-white font-semibold rounded-[20px] hover:bg-[#E8822E] transition-colors"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default HintModal;