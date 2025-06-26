function generatePoem(event) {
  event.preventDefault();

  let colorChangeElement = document.querySelector("#example-poem");

  colorChangeElement.style.color = "#001774cf";

  new Typewriter("#example-poem", {
    loop: false,
    delay: 100,
  })
    .typeString(
      "Appreciation for experience: sight, smell, sound, taste, touch."
    )
    .start();
}

let poemGeneratorForm = document.querySelector("#form-1");
poemGeneratorForm.addEventListener("submit", generatePoem);
