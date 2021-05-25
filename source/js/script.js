'use strict';

let menu = document.querySelector(".main-nav");
let openMenu = document.querySelector(".toggle");

openMenu.classList.add("toggle--closed");
menu.classList.remove("main-nav--open");

openMenu.addEventListener("click", function () {
  menu.classList.toggle("main-nav--open");
  openMenu.classList.toggle("toggle--closed");
  openMenu.classList.toggle("toggle--opened");
});
