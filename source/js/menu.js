const menu = document.querySelector(".main-nav");
const menuButton = document.querySelector(".toggle");
const body = document.querySelector(".page__body");
const links = document.querySelectorAll(".main-nav__link");

const closedMenu = () => {
  menuButton.classList.add("toggle--closed");
  menu.classList.remove("main-nav--open");
}

closedMenu();

//переключение меню
menuButton.addEventListener("click", () => {
  if (menuButton.classList.contains('toggle--closed')) { // меню закрыто
    body.classList.add("page__body--lock");
    menu.classList.add("main-nav--open");
    menuButton.classList.remove("toggle--closed");
    menuButton.classList.add("toggle--opened");
  } else if (menuButton.classList.contains("toggle--opened")) { // меню закрыто
      body.classList.remove("page__body--lock");
      menu.classList.remove("main-nav--open");
      menuButton.classList.remove("toggle--opened");
      menuButton.classList.add("toggle--closed");
  }
});

//блокировка скролла
const scrollLock = () => {
  if (links && links.length > 0) {
    links.forEach(link => {
    link.addEventListener("click", () => {
      body.classList.remove("page__body--lock");
    });
  });
  }
};

scrollLock();
