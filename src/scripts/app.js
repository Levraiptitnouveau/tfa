'use strict'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
let BurgerMenuButton = document.querySelector(".burgermenu_button");
let BurgerMenu = document.querySelector(".nav_burger");
let UpPage = document.querySelector(".uppage");
let Body = document.querySelector("body");
let Images = document.querySelectorAll("img");
let ConteneurImage1 = document.querySelector(".prologue");
let Chapitre1 = document.querySelector(".chapitre_1");
let Chapitre2 = document.querySelector(".chapitre_2");
let Chapitre4 = document.querySelector(".chapitre_4");
let Chapitre5 = document.querySelector(".chapitre_5");
let ConteneurImage4 = document.querySelector(".chapitre_3__contenu__partie_1");
let ConteneurVideo1 = document.querySelector(".chapitre_3__contenu__partie_2");
let ConteneurVideo2 = document.querySelector(".chapitre_3__contenu__partie_4");
let Pages = document.querySelector(".pages");
let ImagesGear = document.querySelector(".gear");
let Videos = document.querySelectorAll(".chapitre_3__video");
let RandomBookSection = document.querySelector(".demo_button");
let DivImageContainer = document.createElement('div');
DivImageContainer.classList.add("image_1")
let DivImageContainer1 = document.createElement('div');
DivImageContainer1.classList.add("image_2")
let DivImageContainer2 = document.createElement('div');
DivImageContainer2.classList.add("image_4")
let DivImageContainer3 = document.createElement('div');
DivImageContainer3.classList.add('image_5');
let DivImageContainer4 = document.createElement('div');
DivImageContainer4.classList.add('image_6');
let DivImageContainer5 = document.createElement('div');
DivImageContainer5.classList.add('image_7');
let DivImageContainer6 = document.createElement('div');
DivImageContainer6.classList.add('image_8');
let DivImageContainer7 = document.createElement('div');
DivImageContainer7.classList.add('image_9');
let main = document.querySelector("header");
/* Borgir menu */

BurgerMenuButton.addEventListener("click", () => {

    if (BurgerMenuButton.innerHTML == "X") {
        BurgerMenu.classList.remove("actif");
        Body.classList.remove("actif");
        BurgerMenuButton.classList.remove("clicked")
        BurgerMenuButton.innerHTML = "ME</br>NU";
    } else {
        BurgerMenu.classList.add("actif");
        Body.classList.add("actif");
    BurgerMenuButton.innerHTML = "X";
    BurgerMenuButton.classList.add("clicked")
    }
    
})

let Prologue = document.querySelector("#burgerlink");
Prologue.addEventListener("click", () => {
        BurgerMenu.classList.remove("actif");
        Body.classList.remove("actif");
        BurgerMenuButton.innerHTML = "ME</br>NU";
});

let Chapitre1Lien = document.querySelector("#burgerchapter1");
Chapitre1Lien.addEventListener("click", () => {
        BurgerMenu.classList.remove("actif");
        Body.classList.remove("actif");
        BurgerMenuButton.classList.remove("clicked")
        BurgerMenuButton.innerHTML = "ME</br>NU";
});

let Chapitre2Lien = document.querySelector("#burgerchapter2");
Chapitre2Lien.addEventListener("click", () => {
        BurgerMenu.classList.remove("actif");
        Body.classList.remove("actif");
        BurgerMenuButton.classList.remove("clicked")
        BurgerMenuButton.innerHTML = "ME</br>NU";
});

let Chapitre3Lien = document.querySelector("#burgerchapter3");
Chapitre3Lien.addEventListener("click", () => {
        BurgerMenu.classList.remove("actif");
        Body.classList.remove("actif");
        BurgerMenuButton.classList.remove("clicked")
        BurgerMenuButton.innerHTML = "ME</br>NU";
});

let Chapitre4Lien = document.querySelector("#burgerchapter4");
Chapitre4Lien.addEventListener("click", () => {
        BurgerMenu.classList.remove("actif");
        Body.classList.remove("actif");
        BurgerMenuButton.classList.remove("clicked")
        BurgerMenuButton.innerHTML = "ME</br>NU";
});

let Chapitre5Lien = document.querySelector("#burgerchapter5");
Chapitre5Lien.addEventListener("click", () => {
        BurgerMenu.classList.remove("actif");
        Body.classList.remove("actif");
        BurgerMenuButton.classList.remove("clicked")
        BurgerMenuButton.innerHTML = "ME</br>NU";
});

UpPage.addEventListener("click", () => {
    window.scrollTo(0, 0)
})

/* Ecouteur taille fenêtre */

let DivImage = document.createElement("div");
DivImage.classList.add("images");

function cdiv(x) {              /* https://www.w3schools.com/howto/howto_js_media_queries.asp */
    if (x.matches && ConteneurImage1.contains(Images[2]) == true) { 
        ConteneurImage1.removeChild(Images[2]);
        Chapitre1.removeChild(Images[5]);
        Chapitre2.removeChild(ImagesGear);
        ConteneurImage4.removeChild(Images[7]);
        ConteneurVideo1.removeChild(Videos[0]);
        ConteneurVideo2.removeChild(Videos[1]);
        ConteneurVideo2.removeChild(RandomBookSection);
        Chapitre4.removeChild(Images[8]);
        Chapitre5.removeChild(Images[9]);

        Pages.appendChild(DivImage);

        DivImageContainer.appendChild(Images[2]);
        DivImageContainer1.appendChild(Images[5]);
        DivImageContainer2.appendChild(Images[7]);
        DivImageContainer3.appendChild(Videos[0]);
        DivImageContainer4.appendChild(Videos[1]);
        DivImageContainer5.appendChild(RandomBookSection);
        DivImageContainer6.appendChild(Images[8]);
        DivImageContainer7.appendChild(Images[9]);

        DivImage.appendChild(DivImageContainer);
        DivImage.appendChild(DivImageContainer1);
        ImagesGear.classList.add("image_3")
        DivImage.appendChild(ImagesGear);
        DivImage.appendChild(DivImageContainer2);
        DivImage.appendChild(DivImageContainer3);
        DivImage.appendChild(DivImageContainer4);
        DivImage.appendChild(DivImageContainer5);
        DivImage.appendChild(DivImageContainer6);
        DivImage.appendChild(DivImageContainer7);
        
        
    } 
}
let x = window.matchMedia("(min-width: 1000px)");
cdiv(x);
x.addListener(cdiv);
        

function ediv(x1) { 
    if (x1.matches && Pages.contains(DivImage) == true) {
        
        ConteneurImage1.appendChild(Images[2]);
        Chapitre1.appendChild(Images[5]);
        Chapitre2.appendChild(ImagesGear);
        ConteneurImage4.appendChild(Images[7]);
        ConteneurVideo1.appendChild(Videos[0]);
        ConteneurVideo2.prepend(Videos[1]);
        ConteneurVideo2.appendChild(RandomBookSection);
        Chapitre4.appendChild(Images[8]);
        Chapitre5.appendChild(Images[9]);
        Pages.removeChild(DivImage); 
    }
}
let x1 = window.matchMedia("(max-width: 999px)");
ediv(x1);
x1.addListener(ediv);

/* GSAP */

ScrollTrigger.matchMedia({
    "(min-width:1000px)": function() {
        let cover = document.querySelector(".couverture");
let pages = document.querySelector(".pages");
let InsideCover = document.querySelectorAll(".couverture__contenu");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "main",
    scrub: 1,
    pin: true,
    markers: true,
    end: "+=10000"
  }
});
tl.to(".couverture", { rotationY: -180, xPercent: 50 });
tl.addLabel("fin rotation");
tl.to(".otherpage", { xPercent: 50 }, "<");

tl.from(".prologue", { yPercent: 100, opacity: 0 });
tl.from(".image_1", {yPercent:100}, "<");
tl.addLabel("prologue");
tl.to(".prologue", { yPercent: -2, opacity: 1 });
tl.to(".prologue", { opacity: 0 });
tl.to(".prologue", { yPercent: -100 }, "<");
tl.to(".image_1", {yPercent:-100}, "<");
tl.addLabel("chapitre 1");
tl.from(".chapitre_1", { opacity: 0 }, "<");
tl.to(".chapitre_1", { opacity: 1, yPercent: -100 }, "<");
tl.to(".image_2", {yPercent:-100}, "<");
tl.to(".chapitre_1__contenu__partie_1", { yPercent: -2 });
tl.to(".chapitre_1__contenu__partie_1", { opacity: 0 });


tl.to(".chapitre_1__contenu__partie_2", { yPercent: -100 }, "<");
tl.to(".chapitre_1__contenu__partie_1", { yPercent: -100 });
tl.to(".chapitre_1__contenu__partie_2", { yPercent: -102 });
tl.to(".chapitre_1__contenu__partie_2", { opacity: 0 });
tl.to(".chapitre_1__contenu__partie_3", { yPercent: -200 }, "<");
tl.to(".chapitre_1__contenu__partie_2", { yPercent: -200 });

tl.to(".chapitre_1__contenu__partie_3", { yPercent: -202 });
tl.to(".chapitre_1__contenu__partie_3", { opacity: 0 });
tl.to(".chapitre_1__contenu__partie_4", { yPercent: -300 }, "<");
tl.to(".chapitre_1__contenu__partie_3", { yPercent: -300 });

tl.to(".chapitre_1", {yPercent:-200});
tl.to(".image_2", {yPercent:-200}, "<");
tl.from(".chapitre_2", {opacity:0}, "<");
tl.to(".chapitre_2", {yPercent:-200}, "<");
tl.to(".image_3", {yPercent:-200}, "<");
tl.addLabel("chapitre 2");

tl.to(".chapitre_2", { yPercent: -202 });
tl.to(".chapitre_2", { opacity: 0 });
tl.to(".chapitre_2", { yPercent: -300 }, "<");
tl.to(".image_3", {yPercent:-300}, "<");
tl.from(".chapitre_3", {opacity: 0});
tl.to(".chapitre_3", { yPercent: -300 }, "<");
tl.to(".image_4", {yPercent: -300}, "<");
tl.addLabel("chapitre 3");

tl.to(".chapitre_3__contenu__partie_1", {yPercent: -2});
tl.to(".chapitre_3__contenu__partie_1", {opacity: 0});
tl.to(".image_4", {yPercent: -400}, "<");
tl.from(".chapitre_3__contenu__partie_2", {opacity:0}, "<");
tl.to(".chapitre_3__contenu__partie_2", {yPercent: -100}, "<");
tl.to(".image_5", {yPercent: -400}, "<");
tl.to(".chapitre_3__contenu__partie_1", {yPercent: -100});


tl.to(".chapitre_3__contenu__partie_2", {yPercent: -102});
tl.to(".chapitre_3__contenu__partie_2", {opacity: 0});
tl.from(".chapitre_3__contenu__partie_3", {opacity:0}, "<");
tl.to(".chapitre_3__contenu__partie_3", {yPercent: -200}, "<");
tl.to(".image_5", {yPercent:-500}, "<")
tl.to(".image_6", {yPercent:-500}, "<")
tl.to(".chapitre_3__contenu__partie_2", {yPercent: -200});

tl.to(".chapitre_3__contenu__partie_3", {yPercent: -202});
tl.to(".chapitre_3__contenu__partie_3", {opacity: 0});
tl.to(".image_6", {yPercent:-600}, "<");
tl.to(".image_7", {yPercent:-600}, "<");
tl.from(".chapitre_3__contenu__partie_4", {opacity:0}, "<");
tl.to(".chapitre_3__contenu__partie_4", {yPercent: -300}, "<");
tl.to(".chapitre_3__contenu__partie_3", {yPercent: -300});

tl.to(".chapitre_3", { yPercent: -302 });
tl.to(".image_7", {yPercent:-602}, "<")
tl.to(".chapitre_3", { opacity: 0 });
tl.to(".chapitre_3", { yPercent: -400 }, "<");
tl.to(".image_7", {yPercent:-700}, "<")
tl.from(".chapitre_4", {opacity: 0});
tl.to(".chapitre_4", { yPercent: -400 }, "<");
tl.to(".image_8", {yPercent:-700}, "<");
tl.addLabel("chapitre 4");

tl.to(".chapitre_4__contenu__partie_1", {yPercent: -2});
tl.to(".chapitre_4__contenu__partie_1", {opacity: 0});
tl.from(".chapitre_4__contenu__partie_2", {opacity:0}, "<");
tl.to(".chapitre_4__contenu__partie_2", {yPercent: -100}, "<");
tl.to(".chapitre_4__contenu__partie_1", {yPercent: -100});

tl.to(".chapitre_4__contenu__partie_2", {yPercent: -102});
tl.to(".chapitre_4__contenu__partie_2", {opacity: 0});
tl.from(".chapitre_4__contenu__partie_3", {opacity:0}, "<");
tl.to(".chapitre_4__contenu__partie_3", {yPercent: -200}, "<");
tl.to(".chapitre_4__contenu__partie_2", {yPercent: -200});

tl.to(".chapitre_4", { yPercent: -402 });
tl.to(".chapitre_4", { opacity: 0 });
tl.to(".chapitre_4", { yPercent: -500 }, "<");
tl.to(".image_8", {yPercent:-800}, "<");
tl.from(".chapitre_5", {opacity: 0});
tl.to(".chapitre_5", { yPercent: -500 }, "<");
tl.to(".image_9", {yPercent:-800}, "<");
tl.addLabel("chapitre 5");
tl.to(".chapitre_5", {yPercent:-502});
tl.to(".chapitre_5", {yPercent:-600});
tl.to(".chapitre_5", {opacity:0}, "<");
tl.to(".fin", {yPercent:-600}, "<");

function labelToScroll(timeline, label) {
  console.log("scroll?", timeline, label);
  let st = timeline.scrollTrigger;
  
  let val = (
    st.start +
    (st.end - st.start) * (timeline.labels[label] / timeline.duration())
  )
  console.log(val, "wat")
  console.log(timeline.duration())
  return val ;
}

let link = document.querySelector("#link");
let chapter1 = document.querySelector("#chapter1")
let chapter2 = document.querySelector("#chapter2")
let chapter3 = document.querySelector("#chapter3")
let chapter4 = document.querySelector("#chapter4")
let chapter5 = document.querySelector("#chapter5")

link.addEventListener("click", (e) => {
  console.log("boop");
  e.preventDefault();

  gsap.to(window, {
    scrollTo: labelToScroll(tl, "prologue"),
    duration: 2,
    onStart: () => {
      console.log("scrolling");
    }
  });
});

chapter1.addEventListener("click", (e) => {
  console.log("boop");
  e.preventDefault();

  gsap.to(window, {
    scrollTo: labelToScroll(tl, "chapitre 1"),
    duration: 2,
    onStart: () => {
      console.log("scrolling");
    }
  });
});

chapter2.addEventListener("click", (e) => {
  console.log("boop");
  e.preventDefault();

  gsap.to(window, {
    scrollTo: labelToScroll(tl, "chapitre 2"),
    duration: 2,
    onStart: () => {
      console.log("scrolling");
    }
  });
});

chapter3.addEventListener("click", (e) => {
  console.log("boop");
  e.preventDefault();

  gsap.to(window, {
    scrollTo: labelToScroll(tl, "chapitre 3"),
    duration: 2,
    onStart: () => {
      console.log("scrolling");
    }
  });
});

chapter4.addEventListener("click", (e) => {
  console.log("boop");
  e.preventDefault();

  gsap.to(window, {
    scrollTo: labelToScroll(tl, "chapitre 4"),
    duration: 2,
    onStart: () => {
      console.log("scrolling");
    }
  });
});

chapter5.addEventListener("click", (e) => {
  console.log("boop");
  e.preventDefault();

  gsap.to(window, {
    scrollTo: labelToScroll(tl, "chapitre 5"),
    duration: 2,
    onStart: () => {
      console.log("scrolling");
    }
  });
});

window.addEventListener("scroll", pop);
function pop() {
    if(Pages.contains(DivImage) == true) {

          if (Number(cover.style.transform.substring(10, 14)) < 20.6) {
            InsideCover.forEach((element) => element.classList.remove("hidden"));
          } else if (Number(cover.style.transform.substring(10, 14)) >= 20.6) {
            InsideCover.forEach((element) => element.classList.add("hidden"));
          }
          if (Number(cover.style.transform.substring(10, 12)) >= 50) {
            /* Je récupère les chaînes de caractère du transform de la cover, une fois fait je vais à la chaîne de caractère 10 et 12 que je convertis en chiffre, et si je ceux-ci forment le chiffre 50 j'affiche la suite du contenu */
            cover.classList.add("hidden");
            pages.classList.remove("hidden");
          } else if (Number(cover.style.transform.substring(10, 12)) < 50) {
            cover.classList.remove("hidden");
            pages.classList.add("hidden");
          }
    }
    console.log(window.scrollY + " = " + main.offsetTop)
    if (window.scrollY < main.offsetTop) {
      BurgerMenuButton.classList.add("unseen")

    } else {
      BurgerMenuButton.classList.remove("unseen");
    }
  
}
    }
})

