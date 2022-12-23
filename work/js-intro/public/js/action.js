"use strict";
"iffy";
const buttonEls = document.querySelectorAll(".globalnav__button");
const submenus = document.querySelectorAll(".globalnav__submenu");
for (let i = 0; i < buttonEls.length; i++){
    buttonEls[i].addEventListener("click",function show() {
        submenus[i].classList.toggle("globalnav__submenu__onclick");
    });
}
