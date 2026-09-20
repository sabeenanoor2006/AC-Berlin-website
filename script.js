document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     MOBILE MENU
     ========================================= */

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("active");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );
      menuToggle.textContent = isOpen ? "×" : "☰";
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
        menuToggle.textContent = "☰";
      });
    });
  }


  /* =========================================
     LANGUAGE SWITCHING
     ========================================= */

  const languageButton = document.getElementById("languageButton");

  if (!languageButton) return;

  const currentPage =
    window.location.pathname.split("/").pop();

  let targetPage = null;
  let isEnglish = false;

  if (currentPage === "index.html" || currentPage === "") {
    targetPage = "index-en.html";
  } 
  else if (currentPage === "index-en.html") {
    targetPage = "index.html";
    isEnglish = true;
  } 
  else if (currentPage === "training.html") {
    targetPage = "training-en.html";
  } 
  else if (currentPage === "training-en.html") {
    targetPage = "training.html";
    isEnglish = true;
  }
else if (currentPage === "news.html") {
  targetPage = "news-en.html";
}
else if (currentPage === "news-en.html") {
  targetPage = "news.html";
  isEnglish = true;
}
  /* Language button label */

  languageButton.textContent = isEnglish ? "DE" : "EN";

  languageButton.setAttribute(
    "aria-label",
    isEnglish
      ? "Auf Deutsch wechseln"
      : "Switch to English"
  );

  /* Language switch */

  if (targetPage) {
    languageButton.addEventListener("click", () => {
      window.location.href =
        targetPage + window.location.hash;
    });
  }

});
