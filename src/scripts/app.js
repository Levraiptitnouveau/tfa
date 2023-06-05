'use strict'
let BurgerMenuButton = document.querySelector(".burgermenu_button");
let BurgerMenu = document.querySelector(".nav_burger");
let UpPage = document.querySelector(".uppage");
let Body = document.querySelector("body");
BurgerMenuButton.addEventListener("click", () => {

    if (BurgerMenuButton.innerHTML == "X") {
        BurgerMenu.classList.remove("actif");
        Body.classList.remove("actif");
        BurgerMenuButton.innerHTML = "ME</br>NU";
    } else {
        BurgerMenu.classList.add("actif");
        Body.classList.add("actif");
    BurgerMenuButton.innerHTML = "X";
    }
    
})

let Prologue = document.querySelectorAll("#link");
Prologue[1].addEventListener("click", () => {
        BurgerMenu.classList.remove("actif");
        Body.classList.remove("actif");
        BurgerMenuButton.innerHTML = "ME</br>NU";
});

UpPage.addEventListener("click", () => {
    window.scrollTo(0, 0)
})