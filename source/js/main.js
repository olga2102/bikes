"use strict";

const menu = document.querySelector(".main-nav");
const openMenuButton = document.querySelector(".toggle");
const form = document.querySelector(".form");
const inputTel = document.querySelectorAll("#tel");
const inputName = document.querySelectorAll("#name");
const body = document.querySelector(".page__body");

function getBodyScrollTop() {
  return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
}

//открытие/закрытие меню
openMenuButton.classList.add("toggle--closed");
menu.classList.remove("main-nav--open");

openMenuButton.addEventListener("click", function () {

  openMenuButton.classList.toggle("toggle--closed");
  openMenuButton.classList.toggle("toggle--opened");
  console.log(getBodyScrollTop());
  // body.dataset.scrollY = getBodyScrollTop(); // сохраним значение скролла
  // body.style.top = `-${body.dataset.scrollY}px`;

  menu.classList.toggle("main-nav--open");
  // body.classList.add("page__body--lock");
});

// //хранение данных
// form.addEventListener("submit", function (evt) {
//   if (!inputTel.value || !inputName.value) {
//     evt.preventDefault();
//   } else {
//     localStorage.setItem("tel", inputTel.value);
//     localStorage.setItem("email", inputName.value);
//   }
// });

// openMenuButton.addEventListener('click', function (evt) {
//   evt.preventDefault()

//   body.dataset.scrollY = getBodyScrollTop() // сохраним значение скролла
//   body.style.top = `-${body.dataset.scrollY}px`

//   menu.classList.toggle("main-nav--open")
//   body.classList.toggle("page__body--lock")
// })
