function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const btnRef = document.querySelector(".change-color");
const colorNameRef = document.querySelector(".color");

btnRef.addEventListener("click", onBtnClick);

function onBtnClick() {
  bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
  colorNameRef.textContent = `${getRandomHexColor()}`;
}
