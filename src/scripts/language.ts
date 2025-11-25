// Language management
export function initLanguage() {
  const lang = getLanguage();

  // Listen for language toggle
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const langBtn = target.closest("[data-lang]");
    if (langBtn) {
      const newLang = langBtn.getAttribute("data-lang");
      if (newLang === "es" || newLang === "en") {
        setLanguage(newLang);
      }
    }
  });

  updateLanguageButtons(lang);
}

export function getLanguage(): "es" | "en" {
  if (typeof window === "undefined") return "es";

  const stored = localStorage.getItem("locale");
  if (stored === "es" || stored === "en") {
    return stored;
  }

  return "es";
}

export function setLanguage(lang: "es" | "en") {
  localStorage.setItem("locale", lang);

  // Reload page to apply new language
  window.location.href = lang === "es" ? "/" : "/en";
}

function updateLanguageButtons(currentLang: "es" | "en") {
  const buttons = document.querySelectorAll("[data-lang]");
  buttons.forEach((btn) => {
    const lang = btn.getAttribute("data-lang");
    if (lang === currentLang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// Initialize on load
if (typeof window !== "undefined") {
  initLanguage();
}
