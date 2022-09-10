function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector("#boxes");
const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");
const inputRef = document.querySelector("input");

let number = 0;
inputRef.addEventListener("input", changeNumber);
function changeNumber(event) {
  number = Number(event.target.value);
}

createBtnRef.addEventListener("click", onCreateBtnClick);

function onCreateBtnClick() {
  for (let i = 0; i < number; i++) {
    let num = 30;
    const newBox = `<div style="width: ${num + i * 10}px; height: ${
      num + i * 10
    }px; background-color: ${getRandomHexColor()};"></div>`;

    boxesRef.insertAdjacentHTML("afterbegin", newBox);
  }
}

destroyBtnRef.addEventListener("click", () => {
  boxesRef.innerHTML = "";
  inputRef.value = "";
  number = 0;
});
