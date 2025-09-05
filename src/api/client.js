const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://spacefarm.shop";

// 토큰을 로컬스토리지에 저장해 쓰는 경우를 가정 (로그인 시 저장하세요)
export function getAccessToken() {
  return localStorage.getItem("accessToken") || "";
}

function authHeaders() {
  const token = getAccessToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "GET",
    headers: { Accept: "application/json", ...authHeaders() },
    credentials: "include", // 세션/쿠키 방식이면 유지
  });
  if (!res.ok) throw new Error(`${path} GET ${res.status}`);
  return res.json().catch(() => ({}));
}

export async function apiPost(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    credentials: "include",
    body: JSON.stringify(body ?? {}),
  });
  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(`${path} POST ${res.status} ${msg}`);
  }
  return res.json().catch(() => ({}));
}
