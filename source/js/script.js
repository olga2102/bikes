'use strict';

let menu = document.querySelector(".main-nav");
let openMenu = document.querySelector(".toggle");
let form = document.querySelector(".form");
let inputTel = document.querySelectorAll("#tel");
let inputName = document.querySelectorAll("#name");

openMenu.classList.add("toggle--closed");
menu.classList.remove("main-nav--open");

openMenu.addEventListener("click", function () {
  menu.classList.toggle("main-nav--open");
  openMenu.classList.toggle("toggle--closed");
  openMenu.classList.toggle("toggle--opened");
});


// form.addEventListener("submit", function (evt) {
//   if (!inputTel.value || !inputName.value) {
//     evt.preventDefault();
//   } else {
//     localStorage.setItem("tel", inputTel.value);
//     localStorage.setItem("email", inputName.value);
//   }
// });
