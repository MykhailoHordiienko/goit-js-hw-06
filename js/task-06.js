const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const dataSetToNumber = Number(event.target.dataset.length);
  const inputValueToNumber = event.target.value.length;
  if (dataSetToNumber === inputValueToNumber) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
