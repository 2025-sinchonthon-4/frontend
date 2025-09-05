// UI id ↔ 서버 코드
export const CAT_CODE = { life: "LIFE", travel: "TRIP", tech: "TECH" };
export const CAT_LABEL = {
  LIFE: "생활/문화",
  TRIP: "여행/지역",
  TECH: "과학/기술",
};

const KEY = "prefCategory";

export function setPrefCategory(code /* "LIFE"|"TRIP"|"TECH" */) {
  localStorage.setItem(KEY, code);
}
export function getPrefCategory() {
  return localStorage.getItem(KEY) || "";
}
export function clearPrefCategory() {
  localStorage.removeItem(KEY);
}
