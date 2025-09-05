const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://spacefarm.shop";

export async function fetchQuizzesByCategory(code /* "LIFE"|"TRIP"|"TECH" */) {
  const res = await fetch(
    `${API_BASE}/quizzes?category=${encodeURIComponent(code)}`,
    {
      credentials: "include",
    }
  );
  if (!res.ok) throw new Error(`퀴즈 로드 실패: ${res.status}`);
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}
