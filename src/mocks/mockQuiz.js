// 객관식 퀴즈
export const multipleChoiceQuiz = {
  id: 1,
  type: "multiple",
  category: "생활·문화",
  question: "영화 '기생충'이 아카데미 시상식에서 받은 최고상이 아닌 것은?",
  options: [
    { id: "A", text: "작품상" },
    { id: "B", text: "감독상" },
    { id: "C", text: "남우주연상" },
  ],
  answer: "C",
  hint: "2020년 아카데미 시상식에서 한국 영화 최초로 4관왕을 차지했어요. 봉준호 감독이 수상한 상들을 떠올려보세요!",
  explanation: "영화 '기생충'은 제92회 아카데미 시상식에서 작품상, 감독상, 각본상, 국제장편영화상을 수상하며 4관왕에 올랐습니다. 남우주연상은 호아킨 피닉스가 수상했습니다."
};

// OX형 퀴즈
export const oxQuiz = {
  id: 2,
  type: "ox",
  category: "생활·문화", 
  question: "속초의 지명은 '바다와 가까운 마을'이라는 뜻이다.",
  answer: "O", // O 또는 X
  hint: "속초는 강원도의 동해안에 위치한 도시로, 실제로 바다와 매우 가까운 위치에 있어요. 지명의 어원을 생각해보세요!",
  explanation: "속초는 바다와 가까운 마을이라는 뜻의 아이누어에서 유래되었습니다."
};

// 주관식 퀴즈
export const subjectiveQuiz = {
  id: 3,
  type: "subjective",
  category: "여행·지역",
  question: "서울 중구에 위치한 백 년의 역사를 가진 시장으로, 고소한 빈대떡과 마약김밥으로 특히 유명한 곳은 어디일까요?",
  answer: "광장시장", // 정답
  hint: "1905년에 개장한 서울의 대표적인 전통시장이에요. '광'자가 들어가는 이름이며, 많은 관광객들이 빈대떡을 먹으러 찾아오는 곳이랍니다!",
  explanation: "광장시장은 1905년 개장한 서울의 대표적인 전통시장으로, 빈대떡과 마약김밥으로 유명합니다."
};

// ID별 퀴즈 매핑
export const quizData = {
  1: multipleChoiceQuiz,
  2: oxQuiz,
  3: subjectiveQuiz
};

// ID로 퀴즈 가져오기
export const getQuizById = (id) => {
  return quizData[id] || null;
};

// 기존 mockQuiz export 유지 (호환성을 위해)
export const mockQuiz = multipleChoiceQuiz;