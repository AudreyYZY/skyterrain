export type AppMode = "study" | "travel";

const KEY = "fge-app-mode";

export function getStoredMode(): AppMode {
  if (typeof window === "undefined") return "study";
  try {
    return window.localStorage.getItem(KEY) === "travel" ? "travel" : "study";
  } catch {
    return "study";
  }
}

export function setStoredMode(m: AppMode): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, m);
  } catch {
    /* private mode etc. */
  }
}
