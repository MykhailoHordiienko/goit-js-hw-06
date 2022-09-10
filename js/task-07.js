const inputRef = document.querySelector("#font-size-control");
const textToChangeRef = document.querySelector("#text");

inputRef.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  textToChangeRef.style.fontSize = `${event.target.value}px`;
}
