document.addEventListener("DOMContentLoaded", () => {

  const languageButton = document.getElementById("languageButton");
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");


  // ------------------------------
  // LANGUAGE BUTTON
  // ------------------------------

  let english = false;

  languageButton.addEventListener("click", () => {

    english = !english;

    languageButton.textContent = english ? "DE" : "EN";

    alert(
      english
        ? "English version will be added in the next development step."
        : "Die deutsche Version ist die aktuelle Prototyp-Version."
    );

  });


  // ------------------------------
  // MOBILE MENU
  // ------------------------------

  menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Menü schließen" : "Menü öffnen"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";

  });


  // ------------------------------
  // CLOSE MENU AFTER CLICKING LINK
  // ------------------------------

  const navLinks = mainNav.querySelectorAll("a");

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.setAttribute(
        "aria-label",
        "Menü öffnen"
      );

      menuToggle.textContent = "☰";

    });

  });

});
