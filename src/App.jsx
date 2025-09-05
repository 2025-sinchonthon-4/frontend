import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import QuizPage from './pages/quiz/QuizPage';
import MainPage from './pages/main/MainPage';
import QuizReportPage from './pages/quizReport/QuizReportPage';
import QuizRecordPage from './pages/quizRecord/QuizRecordPage';
import InterestPage from "./pages/interest/interestPage";
import KakaoCallback from './pages/login/KakaoCallback';


function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-[393px] h-screen bg-white shadow-lg border-2 border-gray-300">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path='/quiz-report' element={<QuizReportPage />} />
          <Route path='/quiz-record' element={<QuizRecordPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="interest" element={<InterestPage />} />
          <Route path="/auth/kakao/callback" element={<KakaoCallback />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
