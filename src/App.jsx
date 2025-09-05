// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import QuizPage from './pages/quiz/QuizPage';
import MainPage from './pages/main/MainPage';
import QuizReportPage from './pages/quizReport/quizReportPage';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-[393px] h-[852px] bg-white shadow-lg overflow-y-auto rounded-3xl border-2 border-gray-300">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path='/quiz-report' element={<QuizReportPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;