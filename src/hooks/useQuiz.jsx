import { useState } from 'react';

export const useQuiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [subjectiveAnswer, setSubjectiveAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = (userAnswer, correctAnswer, quizType) => {
    switch (quizType) {
      case 'multiple':
      case 'ox':
        return userAnswer === correctAnswer;
      case 'subjective':
        // 대소문자 구분 없이, 공백 제거하고 비교
        return userAnswer.toLowerCase() === correctAnswer.toLowerCase();
      default:
        return false;
    }
  };

  const handleSubmit = (quizData) => {
    let userAnswer;
    
    // 퀴즈 타입별로 답안 처리
    switch (quizData.type) {
      case 'multiple':
      case 'ox':
        userAnswer = selectedAnswer;
        if (!userAnswer) {
          alert('답안을 선택해주세요.');
          return;
        }
        break;
      case 'subjective':
        userAnswer = subjectiveAnswer.trim();
        if (!userAnswer) {
          alert('답안을 입력해주세요.');
          return;
        }
        break;
      default:
        alert('알 수 없는 퀴즈 형식입니다.');
        return;
    }
    
    // 정답 확인 로직
    const correct = checkAnswer(userAnswer, quizData.answer, quizData.type);
    setIsCorrect(correct);
    setIsSubmitted(true);
  };

  const handleHint = (explanation) => {
    alert('힌트: ' + explanation);
  };

  const handleAnswerSelect = (answer) => {
    if (!isSubmitted) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubjectiveChange = (value) => {
    if (!isSubmitted) {
      setSubjectiveAnswer(value);
    }
  };

  return {
    selectedAnswer,
    subjectiveAnswer,
    isSubmitted,
    isCorrect,
    handleSubmit,
    handleHint,
    handleAnswerSelect,
    handleSubjectiveChange
  };
};