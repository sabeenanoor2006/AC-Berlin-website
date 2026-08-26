const languageButton = document.getElementById("languageButton");
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
