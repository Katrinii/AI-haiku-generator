function displayPoem(response) {
  let colorChangeElement = document.querySelector("#example-poem");

  colorChangeElement.style.color = "#001774cf";

  new Typewriter("#example-poem", {
    loop: false,
    delay: 100,
  })
    .typeString(response.data.answer.replace(/\n/g, "<br>"))
    .start();
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#text-input");
  let apiKey = "b6t3cfd0645ebc0e3f49539d885oa6a4";
  let context = `You are a poet who specialises in Haikus. Your mission is to generate a short Haiku, and separate each line (three in total) with a line break. Do not include a title. Please follow the user's instructions. The user's intructions are: Generate a Haiku about ${instructionsInput.value}. Sign off the poem with these exact words on a separte line with a line break: '– SheCodes AI.'`;
  let prompt = `Generate a Haiku about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`context ${context}`);
  console.log(`prompt ${prompt}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemGeneratorForm = document.querySelector("#form-1");
poemGeneratorForm.addEventListener("submit", generatePoem);
