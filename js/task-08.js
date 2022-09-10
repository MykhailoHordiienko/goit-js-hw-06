const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Заполните поля!");
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  formRef.reset();
}
