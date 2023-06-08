'use strict'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
let main = document.querySelector("main");
let UpPage = document.querySelector(".uppage");
UpPage.addEventListener("click", () => {
  gsap.to(window, {
    scrollTo: 0,
    duration: 2,
    onStart: () => {
    }})
})


if(main.classList.contains("principal") == true) {
  let BurgerMenuButton = document.querySelector(".burgermenu_button");
let BurgerMenu = document.querySelector(".nav_burger");
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
let DivImageContainer8 = document.createElement('div');
DivImageContainer8.classList.add("image_3");
let cover = document.querySelector(".couverture");
let pages = document.querySelector(".pages");
let InsideCover = document.querySelectorAll(".couverture__contenu");
let navBurger = document.querySelector(".nav_burger");
let recuperateur = main.offsetTop;
let RandomBook = document.querySelector(".random_book__cover");
let RandomBookButton = document.querySelector(".discover");
let TitreLivre = document.querySelector(".book_title")


let Livres = [ 
  '<img src="assets/images/livres/radiant.png" alt="Couverture Radiant">',
  '<img src="assets/images/livres/arena.png" alt="Couverture Arena">',
  '<img src="assets/images/livres/chevalier_licorne.png" alt="Couverture Le Chevalier à Licorne">',
  '<img src="assets/images/livres/dreamland.png" alt="Couverture Dreamland">',
  '<img src="assets/images/livres/frnk.png" alt="Couverture FRNK">',
  '<img src="assets/images/livres/grand_retournement.png" alt="Couverture Le Grand Retournement">',
  '<img src="assets/images/livres/grange_passager.png" alt="Couverture Le passager">',
  '<img src="assets/images/livres/imbattable.png" alt="Couverture Imbattable">',
  '<img src="assets/images/livres/instant_present.png" alt="Couverture L\'instant présent">',
  '<img src="assets/images/livres/nom_secret_chose.png" alt="Couverture Le nom secret des choses">',
  '<img src="assets/images/livres/ripper.png" alt="Couverture Ripper">',
  '<img src="assets/images/livres/space_punch.png" alt="Couverture Space Punch">',
  '<img src="assets/images/livres/spirou_fantasio.png" alt="Couverture Spirou et Fantasio">',
  '<img src="assets/images/livres/telemaque.png" alt="Couverture Telemaque">'
]

let LiensLivres = [
  '<a href="https://www.allskreen.com/webtoon/series/4">Radiant</a>',
  '<a href="https://www.webtoonfactory.com/fr/serie/arena/">Arena</a>',
  '<a href="https://www.babelio.com/livres/Mirande-Le-Chevalier-a-la-licorne-tome-1--Sur-les-traces-/349057">Le Chevalier à la licorne</a>',
  '<a href="https://www.pika.fr/livre/dreamland-t01-9782811666644">Dreamland</a>',
  '<a href="https://www.dupuis.com/seriebd/frnck/11504">FRNK</a>',
  '<a href="https://www.webtoonfactory.com/fr/webtoons/158-le-grand-retournement-saison-1/">Le grand retournement</a>',
  '<a href="https://www.babelio.com/livres/Grange-Le-passager/280953">Le passager</a>',
  '<a href="https://www.dupuis.com/seriebd/imbattable/12717">Imbattable</a>',
  '<a href="https://www.guillaumemusso.com/livres/linstant-present-9782845637795">L\'instant présent</a>',
  '<a href="https://www.babelio.com/livres/Rinkel-Le-nom-secret-des-choses/1153441">Le nom secret des choses</a>',
  '<a href="https://www.allskreen.com/webtoon/series/65">Ripper</a>',
  '<a href="https://www.allskreen.com/webtoon/series/18">Space Punch</a>',
  '<a href="https://www.dupuis.com/seriebd/spirou-et-fantasio/124">Spirou et Fantasio</a>',
  '<a href="https://www.dupuis.com/seriebd/telemaque/14148">Telemaque</a>',
  
]

/* Boutton découverte */

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
let Chiffre
RandomBookButton.addEventListener("click", () => {
  if (TitreLivre.classList.contains("lien_livre") == false) {
    TitreLivre.classList.add("lien_livre");
  }
  
  let Cijfer = getRandomIntInclusive(0, 13)
  while (Cijfer == Chiffre) {
    Cijfer = getRandomIntInclusive(0, 13)
  }
    RandomBook.classList.add("book");
    RandomBook.innerHTML = Livres[Cijfer];
    TitreLivre.innerHTML = LiensLivres[Cijfer];
    Chiffre = Cijfer
  
})

/* Borgir menu */
let Sommaire = document.querySelector(".nav")
BurgerMenuButton.addEventListener("click", () => {

  if (BurgerMenuButton.classList.contains("pc_version") == true) {
    gsap.to(window, {
      scrollTo: Sommaire.offsetTop,
      duration: 1,
    })
  } else {
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
  }

  
  
})

let Prologue = document.querySelector("#burgerlink");
Prologue.addEventListener("click", () => {
      BurgerMenu.classList.remove("actif");
      Body.classList.remove("actif");
      BurgerMenuButton.classList.remove("clicked");
      BurgerMenuButton.innerHTML = "ME</br>NU";
});

let Chapitre1Lien = document.querySelector("#burgerchapter1");
Chapitre1Lien.addEventListener("click", () => {
      BurgerMenu.classList.remove("actif");
      Body.classList.remove("actif");
      BurgerMenuButton.classList.remove("clicked");
      BurgerMenuButton.innerHTML = "ME</br>NU";
});

let Chapitre2Lien = document.querySelector("#burgerchapter2");
Chapitre2Lien.addEventListener("click", () => {
      BurgerMenu.classList.remove("actif");
      Body.classList.remove("actif");
      BurgerMenuButton.classList.remove("clicked");
      BurgerMenuButton.innerHTML = "ME</br>NU";
});

let Chapitre3Lien = document.querySelector("#burgerchapter3");
Chapitre3Lien.addEventListener("click", () => {
      BurgerMenu.classList.remove("actif");
      Body.classList.remove("actif");
      BurgerMenuButton.classList.remove("clicked");
      BurgerMenuButton.innerHTML = "ME</br>NU";
});

let Chapitre4Lien = document.querySelector("#burgerchapter4");
Chapitre4Lien.addEventListener("click", () => {
      BurgerMenu.classList.remove("actif");
      Body.classList.remove("actif");
      BurgerMenuButton.classList.remove("clicked");
      BurgerMenuButton.innerHTML = "ME</br>NU";
});

let Chapitre5Lien = document.querySelector("#burgerchapter5");
Chapitre5Lien.addEventListener("click", () => {
      BurgerMenu.classList.remove("actif");
      Body.classList.remove("actif");
      BurgerMenuButton.classList.remove("clicked");
      BurgerMenuButton.innerHTML = "ME</br>NU";
});


/* Ecouteur taille fenêtre */

let DivImage = document.createElement("div");
DivImage.classList.add("images");
let Image2 = document.querySelector(".prologue__image");
let ImageChapter4 = document.querySelector(".picture")
function cdiv(x) {              /* https://www.w3schools.com/howto/howto_js_media_queries.asp */
    if (x.matches && ConteneurImage1.contains(Images[2]) == true) { 
        ConteneurImage1.removeChild(Image2);
        Chapitre1.removeChild(Images[6]);
        Chapitre2.removeChild(ImagesGear);
        ConteneurImage4.removeChild(Images[8]);
        ConteneurVideo1.removeChild(Videos[0]);
        ConteneurVideo2.removeChild(Videos[1]);
        ConteneurVideo2.removeChild(RandomBookSection);
        Chapitre4.removeChild(ImageChapter4);
        Chapitre5.removeChild(Images[10]);

        Pages.appendChild(DivImage);

        DivImageContainer.appendChild(Image2);
        DivImageContainer1.appendChild(Images[6]);
        DivImageContainer2.appendChild(Images[8]);
        DivImageContainer3.appendChild(Videos[0]);
        DivImageContainer4.appendChild(Videos[1]);
        DivImageContainer5.appendChild(RandomBookSection);
        DivImageContainer6.appendChild(ImageChapter4);
        DivImageContainer7.appendChild(Images[10]);
        DivImageContainer8.appendChild(ImagesGear)

        DivImage.appendChild(DivImageContainer);
        DivImage.appendChild(DivImageContainer1);
        DivImage.appendChild(DivImageContainer8);
        DivImage.appendChild(DivImageContainer2);
        DivImage.appendChild(DivImageContainer3);
        DivImage.appendChild(DivImageContainer4);
        RandomBookSection.classList.add("image_7")
        DivImage.appendChild(RandomBookSection);
        DivImage.appendChild(DivImageContainer6);
        DivImage.appendChild(DivImageContainer7);
        if (navBurger.classList.contains("actif")) {
          navBurger.classList.remove("actif");
          Body.classList.remove("actif");
          BurgerMenuButton.classList.remove("clicked");
          BurgerMenuButton.innerHTML = "ME</br>NU";
        }
        BurgerMenuButton.classList.add("pc_version")
        BurgerMenuButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136 304"><path d="M66 0c7.37 4.48 9.89 12.51 14.02 19.33 11.21 18.51 22.65 36.89 33.33 55.69 7.54 13.27 13.99 27.15 20.95 40.74.42.82 1.13 1.5 1.7 2.24v2c-7.18-6.7-15.07-12.8-21.39-20.23-11.12-13.08-21.68-26.68-31.72-40.61-7.52-10.43-13.85-21.72-20.7-32.63-.31-.5-.58-1.02-.8-1.4C39.81 57.54 29.08 96.44 0 124v-11c.96-3.15 1.46-6.55 2.96-9.42 11.55-22.12 23.1-44.25 35.06-66.15C44.95 24.73 52.65 12.46 60 0h6Z"/><path d="M67 304c-1.41-6.51-3.03-12.99-4.16-19.55-1.19-6.93-2.37-13.91-2.73-20.92-.94-18.52-1.72-37.05-2.03-55.58-.56-33.08-.92-66.18-.95-99.26-.01-11.36 1.28-22.71 1.86-34.07.19-3.61 1.91-5.34 5.44-5.61 3.42-.26 5.27 1.15 5.77 4.59.85 5.8 2.55 11.57 2.66 17.38.58 31.08.94 62.18 1.05 93.27.05 14.43-.49 28.86-.96 43.29-.54 16.2-1.1 32.41-2.05 48.59-.55 9.32-1.91 18.59-2.9 27.89h-1Z"/></svg>';
        
        
       




        
        
        
    } 
}
let x = window.matchMedia("(min-width: 1000px)");
cdiv(x);
x.addListener(cdiv);
        

function ediv(x1) { 
    if (x1.matches && Pages.contains(DivImage) == true) {
        
        ConteneurImage1.appendChild(Image2);
        Chapitre1.appendChild(Images[6]);
        Chapitre2.appendChild(ImagesGear);
        ConteneurImage4.appendChild(Images[8]);
        ConteneurVideo1.appendChild(Videos[0]);
        ConteneurVideo2.prepend(Videos[1]);
        ConteneurVideo2.appendChild(RandomBookSection);
        Chapitre4.appendChild(ImageChapter4);
        Chapitre5.appendChild(Images[10]);
        Pages.removeChild(DivImage); 
        BurgerMenuButton.classList.remove("pc_version")
        BurgerMenuButton.innerHTML = "ME</br>NU"


        


    }
}
let x1 = window.matchMedia("(max-width: 999px)");
ediv(x1);
x1.addListener(ediv);

/* GSAP */

ScrollTrigger.matchMedia({
    "(min-width:1000px)": function() {


const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "main",
    scrub: 1,
    pin: true,
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
tl.to(".images", {backgroundColor: "black"});
tl.to(".images", {boxShadow: "0 0 0"}, "<");
tl.to(".image_8", {opacity:0}, "<");
tl.to(".image_8", {yPercent:-700});
tl.from(".chapitre_4", {opacity: 0});
tl.to(".chapitre_4", { yPercent: -400 }, "<");
tl.to(".image_8", {opacity:1}, "<");
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
tl.to(".image_8", {opacity:0}, "<");
tl.to(".chapitre_4", { opacity: 0 });
tl.to(".chapitre_4", { yPercent: -500 }, "<");
tl.to(".image_8", {yPercent:-800}, "<");
tl.to(".images", {backgroundColor: "#F4F4F4"});
tl.to(".images", {boxShadow: "13px 0 9px inset rgba(255, 138, 0, 0.25)"}, "<");
tl.from(".chapitre_5", {opacity: 0});
tl.to(".chapitre_5", { yPercent: -500 }, "<");
tl.to(".image_9", {yPercent:-800}, "<");
tl.addLabel("chapitre 5");
tl.to(".chapitre_5", {yPercent:-502});
tl.to(".chapitre_5", {yPercent:-600});
tl.to(".chapitre_5", {opacity:0}, "<");
tl.to(".fin", {yPercent:-600}, "<");

function labelToScroll(timeline, label) {
  let st = timeline.scrollTrigger;
  
  let val = (
    st.start +
    (st.end - st.start) * (timeline.labels[label] / timeline.duration())
  )

  return val ;
}

let link = document.querySelector("#link");
let chapter1 = document.querySelector("#chapter1")
let chapter2 = document.querySelector("#chapter2")
let chapter3 = document.querySelector("#chapter3")
let chapter4 = document.querySelector("#chapter4")
let chapter5 = document.querySelector("#chapter5")

link.addEventListener("click", (e) => {

  e.preventDefault();

  gsap.to(window, {
    scrollTo: labelToScroll(tl, "prologue"),
    duration: 2,
  });
});

chapter1.addEventListener("click", (e) => {
  e.preventDefault();

  gsap.to(window, {
    scrollTo: labelToScroll(tl, "chapitre 1"),
    duration: 2,
  });
});

chapter2.addEventListener("click", (e) => {
  e.preventDefault();

  gsap.to(window, {
    scrollTo: labelToScroll(tl, "chapitre 2"),
    duration: 2,
  });
});

chapter3.addEventListener("click", (e) => {
  e.preventDefault();

  gsap.to(window, {
    scrollTo: labelToScroll(tl, "chapitre 3"),
    duration: 2,
  });
});

chapter4.addEventListener("click", (e) => {
  e.preventDefault();

  gsap.to(window, {
    scrollTo: labelToScroll(tl, "chapitre 4"),
    duration: 2,
  });
});

chapter5.addEventListener("click", (e) => {
  e.preventDefault();

  gsap.to(window, {
    scrollTo: labelToScroll(tl, "chapitre 5"),
    duration: 2,
  });
});

        /* Ouverture livre */

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

          if (window.scrollY >= recuperateur && BurgerMenuButton.classList.contains("pc_version")) {
            BurgerMenuButton.classList.add("show")
          } else {
            BurgerMenuButton.classList.remove("show")
          }

       /* if ( window.scrollY >= labelToScroll(tl, "chapitre 3")) {
          Videos[0].setAttribute("autoplay", '');
        } */
    }
  
}

    }
})


}

if (main.classList.contains("ui-kit")) {
  let Texte = document.querySelector(".texte_police");
  let Texte1 = document.querySelector(".description_grand_titre");
  let Texte2 = document.querySelector(".description_titre");
  let Texte3 = document.querySelector(".description_sous_titre");
  let Texte4 = document.querySelector(".description_texte");

    

    function ddiv(x3) {       
      if (x3.matches ) { 
        Texte.innerHTML = "Police (Version Tablette)"
        Texte1.innerHTML = "101 pixels - Poltawsky Nowy - noir";
        Texte2.innerHTML = "68 pixels - Poltawsky Nowy - noir";
        Texte3.innerHTML = "45 pixels - Crimson Text - noir"
        Texte4.innerHTML = "20 pixels - Crimson text - noir"


          
          
          
      } 
    }
    let x3 = window.matchMedia("(max-width: 999px)");
    ddiv(x3);
    x3.addListener(ddiv);

    function gdiv(x5) {       
      if (x5.matches ) { 
        Texte.innerHTML = "Police (Version PC > 1000px)"
        Texte2.innerHTML = "36 pixels - Poltawsky Nowy - noir";
        Texte3.innerHTML = "24 pixels - Crimson Text - noir"
        Texte4.innerHTML = "16 pixels - Crimson text - noir"
    
    
          
          
          
      } 
    }
    let x5 = window.matchMedia("(max-width: 1599px)");
    gdiv(x5);
    x5.addListener(gdiv); 

    function cdiv(x) {       
      if (x.matches ) { 
        Texte.innerHTML = "Police (Version Tablette)"
        Texte1.innerHTML = "101 pixels - Poltawsky Nowy - noir";
        Texte2.innerHTML = "68 pixels - Poltawsky Nowy - noir";
        Texte3.innerHTML = "45 pixels - Crimson Text - noir"
        Texte4.innerHTML = "20 pixels - Crimson text - noir"


          
          
          
      } 
    }
    let x = window.matchMedia("(min-width: 700px)");
    cdiv(x);
    x.addListener(cdiv);
        

    
function ediv(x1) { 
    if (x1.matches) {
      Texte.innerHTML = "Police (Version Téléphone)"
      Texte1.innerHTML = "47 pixels - Poltawsky Nowy - noir";
      Texte2.innerHTML = "37 pixels - Poltawsky Nowy - noir";
      Texte3.innerHTML = "29 pixels - Crimson text - noir"
      Texte4.innerHTML = "18 pixels - Crimson text - noir"



    }
}
let x1 = window.matchMedia("(max-width: 699px)");
ediv(x1);
x1.addListener(ediv);



function bdiv(x2) {       
  if (x2.matches ) { 
    Texte.innerHTML = "Police (Version PC > 1000px)"
    Texte2.innerHTML = "36 pixels - Poltawsky Nowy - noir";
    Texte3.innerHTML = "24 pixels - Crimson Text - noir"
    Texte4.innerHTML = "16 pixels - Crimson text - noir"


      
      
      
  } 
}
let x2 = window.matchMedia("(min-width: 1000px)");
bdiv(x2);
x2.addListener(bdiv);


function fdiv(x4) {       
  if (x4.matches ) { 
    Texte.innerHTML = "Police (Version PC > 1600px)"
    Texte2.innerHTML = "41 pixels - Poltawsky Nowy - noir";
    Texte3.innerHTML = "27 pixels - Crimson Text - noir"
    Texte4.innerHTML = "18 pixels - Crimson text - noir"


      
      
      
  } 
}
let x4 = window.matchMedia("(min-width: 1600px)");
fdiv(x4);
x4.addListener(fdiv); 


}

