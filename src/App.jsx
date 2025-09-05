import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import QuizPage from './pages/quiz/QuizPage';
import MainPage from './pages/main/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path='/quiz-report' element={<QuizReportPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;