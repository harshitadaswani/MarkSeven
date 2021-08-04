console.log("script is working");

var translateButton = document.querySelector("#translate-button");
var translateInput = document.querySelector("#translate-input");
var translateOutput = document.querySelector("#translate-output");
var url = "https://api.funtranslations.com/translate/pirate.json";

console.log(translateButton);
translateButton.addEventListener("click", buttonClickHandler);

function getTranslatedURL(text) {
  var a = `${url}?text=${text}`;
  return a;
}

function buttonClickHandler() {
  console.log("button clicked");
  var input = translateInput.value;
  var finalURL = getTranslatedURL(input);
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((json) => {
      translateOutput.innerText = json.contents.translated;
    })
    .catch((error) => {
      alert("OOPS! An Error occured. Please try again in a few minutes");
    });
}
