const form = document.querySelector(".form");
const inputTel = document.querySelector("#tel");
const inputName = document.querySelector("#name");

//хранение данных
form.addEventListener("submit", (evt) => {
  if (!inputTel.value || !inputName.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("tel", inputTel.value);
    localStorage.setItem("email", inputName.value);
  }
});
