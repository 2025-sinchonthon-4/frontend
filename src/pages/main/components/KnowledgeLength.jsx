// src/pages/main/components/KnowledgeLength.jsx
export default function KnowledgeLength({ lengthCm = 3 }) {
  return (
    <p className="mt-6 text-center text-[16px] leading-[22px] text-[#0F0F10]">
      나의 지식 길이:{" "}
      <span className="text-[#F7931A] font-semibold">{lengthCm}cm</span>
    </p>
  );
}
