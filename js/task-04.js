const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);

const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);

const valueRef = document.querySelector("#value");

let counterValue = 0;

decrementBtnRef.addEventListener("click", onDecrementBtnClick);
incrementBtnRef.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function onIncrementBtnClick() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}
