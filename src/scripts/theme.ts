// Theme management
export function initTheme() {
  const theme = getTheme();
  applyTheme(theme);

  // Listen for theme toggle
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.closest("[data-theme-toggle]")) {
      toggleTheme();
    }
  });
}

export function getTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";

  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  // Check system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

export function setTheme(theme: "light" | "dark") {
  localStorage.setItem("theme", theme);
  applyTheme(theme);
}

export function toggleTheme() {
  const current = getTheme();
  const next = current === "light" ? "dark" : "light";
  setTheme(next);
}

function applyTheme(theme: "light" | "dark") {
  document.documentElement.setAttribute("data-theme", theme);

  // Update toggle button icon if exists
  const toggleBtn = document.querySelector("[data-theme-toggle]");
  if (toggleBtn) {
    const icon = toggleBtn.querySelector("[data-theme-icon]");
    if (icon) {
      icon.textContent = theme === "light" ? "🌙" : "☀️";
    }
  }
}

// Initialize on load
if (typeof window !== "undefined") {
  initTheme();
}
