
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


    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach((link) => {

      link.addEventListener("click", () => {

        mainNav.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open menu"
        );

        menuToggle.textContent = "☰";

      });

    });

  }


  /* =========================================
     LANGUAGE PAGE SWITCHING
     ========================================= */

  const languageButton =
    document.getElementById("languageButton");

  if (languageButton) {

    languageButton.addEventListener("click", () => {

      const currentPage =
        window.location.pathname.split("/").pop();

      let targetPage = "";

      /*
       * Homepage
       */

      if (currentPage === "index.html" || currentPage === "") {

        targetPage = "index-en.html";

      } else if (currentPage === "index-en.html") {

        targetPage = "index.html";


      /*
       * Training page
       */

      } else if (currentPage === "training.html") {

        targetPage = "training-en.html";

      } else if (currentPage === "training-en.html") {

        targetPage = "training.html";

      }


      /*
       * Preserve the current section when possible.
       * This is useful when switching language
       * from a section such as #sports.
       */

      if (targetPage) {

        const hash = window.location.hash;

        window.location.href =
          targetPage + hash;

      }

    });

  }


  /* =========================================
     LANGUAGE BUTTON LABEL
     ========================================= */

  if (languageButton) {

    const currentPage =
      window.location.pathname.split("/").pop();

    if (
      currentPage === "index-en.html" ||
      currentPage === "training-en.html"
    ) {

      languageButton.textContent = "DE";

      languageButton.setAttribute(
        "aria-label",
        "Auf Deutsch wechseln"
      );

    } else {

      languageButton.textContent = "EN";

      languageButton.setAttribute(
        "aria-label",
        "Switch to English"
      );

    }

  }


});
