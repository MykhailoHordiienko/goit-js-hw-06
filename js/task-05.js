const inputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  nameOutputRef.textContent = event.currentTarget.value || "Anonymous";
}
