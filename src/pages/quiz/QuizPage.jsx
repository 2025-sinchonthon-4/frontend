import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchQuizzesByCategory } from "../../api/quizzes";

import { useQuiz } from "../../hooks/useQuiz";
import { useModal } from "../../hooks/useModal";
import QuizError from "../../components/quiz/QuizError";
import QuizHeader from "../../components/quiz/QuizHeader";
import QuizContent from "../../components/quiz/QuizContent";
import QuizActions from "../../components/quiz/QuizActions";
import QuizExplanation from "../../components/quiz/QuizExplanation";
import HintModal from "../../components/quiz/HintModal";

export default function QuizPage() {
  const [params] = useSearchParams();
  const category = (params.get("category") || "").toUpperCase(); // LIFE/TRIP/TECH

  const [state, setState] = useState({
    loading: true,
    error: null,
    quiz: null,
  });

  const {
    selectedAnswer,
    subjectiveAnswer,
    isSubmitted,
    isCorrect,
    handleSubmit,
    handleHint,
    handleAnswerSelect,
    handleSubjectiveChange,
  } = useQuiz();
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        if (!category) {
          setState({
            loading: false,
            error: "카테고리 정보가 없습니다.",
            quiz: null,
          });
          return;
        }
        setState({ loading: true, error: null, quiz: null });
        const list = await fetchQuizzesByCategory(category);
        if (!alive) return;

        if (!list.length) {
          setState({
            loading: false,
            error: "해당 카테고리의 퀴즈가 없습니다.",
            quiz: null,
          });
          return;
        }
        // 첫 문제로 시작 (필요 시 진행 로직 확장)
        setState({ loading: false, error: null, quiz: normalizeQuiz(list[0]) });
      } catch (e) {
        setState({
          loading: false,
          error: e.message || "퀴즈 로드 실패",
          quiz: null,
        });
      }
    })();
    return () => {
      alive = false;
    };
  }, [category]);

  if (state.loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#F5F5F8] text-sm text-[#6B707F]">
        불러오는 중…
      </div>
    );
  }
  if (state.error || !state.quiz) {
    return <QuizError message={state.error || "퀴즈를 찾을 수 없습니다."} />;
  }

  const quizData = state.quiz;

  return (
    <>
      <div className="flex flex-col h-full p-8 bg-[#F5F5F8]">
        <div className="h-20 flex-shrink-0" />
        <QuizHeader category={quizData.category} question={quizData.question} />
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
        <QuizExplanation quizData={quizData} isSubmitted={isSubmitted} />
      </div>
      <HintModal isOpen={isOpen} onClose={closeModal} hint={quizData.hint} />
    </>
  );
}

function normalizeQuiz(raw) {
  return {
    id: raw.id,
    category: raw.category ?? raw.categoryName,
    question: raw.question,
    options: raw.options ?? raw.choices,
    answer: raw.answer ?? raw.solution,
    hint: raw.hint ?? raw.tip,
    type: raw.type ?? "multiple",
    ...raw,
  };
}
