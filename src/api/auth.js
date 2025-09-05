// src/api/auth.js
const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://spacefarm.shop";

export async function postPreferredCategories(codes) {
  const res = await fetch(`${API_BASE}/api/auth/signup2`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ category: codes }),
  });
  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(`signup2 ${res.status} ${msg}`);
  }
  return res.json().catch(() => ({}));
}
