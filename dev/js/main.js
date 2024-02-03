// Enregistre l'heure de début au moment où le script est exécuté
const debutChargement = new Date();

window.addEventListener('load', () => {
    // Enregistre l'heure une fois que tout le site est chargé
    const finChargement = new Date();
    
    // Calcule la durée de chargement en millisecondes
    const dureeChargement = finChargement - debutChargement;
    
    // Convertit la durée en secondes
    const dureeEnSecondes = dureeChargement / 1000;
    
    console.log(`Le site a été entièrement chargé en ${dureeEnSecondes} secondes.`);
    
    const overlay = document.querySelector(".overlay");
    
    overlay.classList.add('hidden');
    
    overlay.addEventListener('transitionend', function() {
        overlay.remove();
    });
});

const wavesL = [...document.querySelectorAll('.wave__left div')].reverse();
const wavesR = document.querySelectorAll('.wave__right div');
const wavesLWrapper = document.querySelector('.wave__left');
const wavesRWrapper = document.querySelector('.wave__right');

const btnProjectHome = document.querySelector('.home__project');
const btnContact = document.querySelectorAll('.btnContact');
const btnGithub = document.querySelectorAll('.btnGit');

const project = document.querySelector('.project');
const home = document.querySelector('.home');
const header = document.querySelector('.header');
const homebtn = document.querySelector('.project__btn__home');

const linkToEnglish = document.querySelector(".eng");
const linkToFrench = document.querySelector(".fran");
const vFr = document.querySelectorAll(".v-fr");
const vEng = document.querySelectorAll(".v-engl");
const activeEng = document.querySelector('.v-engl .isActive');

let isPageHome = true
let getBtnToAboutToggle = true;

// Fonction de l'animation vers la partie my project
function goProject(){
    setTimeout(function() {
        project.style.display = "flex";
        home.style.display = "none";
        header.style.display = "none";
        if (window.innerWidth < 900) {
            window.scrollTo(0, 0);
        }
    }, 1000);
    isPageHome = false
}
//Fonction pour l'animation retour vers le home 
function goHome(){
    setTimeout(function() {
        project.style.display = "none";
        home.style.display = "flex";
        header.style.display = "flex";
    }, 1000);
    isPageHome = true
}

// Fonction pour cacher les waves 
function widthWaves(){
    wavesLWrapper.style.display = "block";
    wavesRWrapper.style.display = "block";

    setTimeout(() => {
        wavesLWrapper.style.display = "none";
        wavesRWrapper.style.display = "none";

    }, 2000);
}
// Fonction des animations des waves 
function animation() {
    gsap.to(wavesR, {
        xPercent: -100, // Animer la position à 0 pour chaque élément
        duration: 0.5, // Durée de l'animation
        stagger: 0.1, // Décalage entre chaque élément
        ease: "power2.out" // Courbe d'animation
    });

    gsap.to(wavesL, {
        xPercent: 100, // Animer la position à 0 pour chaque élément
        duration: 0.5, // Durée de l'animation
        stagger: 0.1, // Décalage entre chaque élément
        ease: "power2.out", // Courbe d'animation
        onComplete: function() {
            gsap.to(wavesR, {
                delay: .3,
                xPercent: -200, // Animer la position à 0 pour chaque élément
                duration: 0.5, // Durée de l'animation
                stagger: 0.1, // Décalage entre chaque élément
                ease: "power2.out" // Courbe d'animation
            });

            gsap.to(wavesL, {
                delay: .3,
                xPercent: 200, // Animer la position à 0 pour chaque élément
                duration: 0.5, // Durée de l'animation
                stagger: 0.1, // Décalage entre chaque élément
                ease: "power2.out", // Courbe d'animation
                onComplete: function() {
                    // Remettre les éléments à leur position de départ
                    gsap.set(wavesR, {
                        xPercent: 0,
                        right: '-100%'
                    });

                    gsap.set(wavesL, {
                        xPercent: 0,
                        left: '-100%'
                    });
                }
            });
        }
    });
}
// Fonction pour changer les langues
function changeFrToEng() {
    vFr.forEach(function(versionFr) {
        versionFr.classList.toggle("isActive");
    });
    vEng.forEach(function(versionEng){
        versionEng.classList.toggle("isActive");
    });
}
function changeEngToFr() {
    vFr.forEach(function(versionFr) {
        versionFr.classList.toggle("isActive");
    });
    vEng.forEach(function(versionEng){
        versionEng.classList.toggle("isActive");
    });
}
// lancement vers project depuis home
btnProjectHome.addEventListener("click", () => {
    animation();
    goProject();
    widthWaves()
});
// lancement btn contact 
btnContact.forEach(btnContactAll => {
    btnContactAll.addEventListener("click", () => {
        window.open('https://www.linkedin.com/in/zohaib-muhammad-a17aa3270/', '_blank');
    });
})
// lancement btn github
btnGithub.forEach(btnGithubAll => {
    btnGithubAll.addEventListener("click", () => {
        window.open('https://github.com/SvipersMHD', '_blank');
    });
})
// lancement vers home depuis project
homebtn.addEventListener("click", () => {
    animation();
    goHome()
    widthWaves()
});
document.addEventListener("mousedown", (e) => {
    if (e.button === 3 && isPageHome === false) {
        animation();
        goHome()
        widthWaves()
    }
});
// vers la version eng 
linkToEnglish.addEventListener("click", () => {
    if (!vEng.length || !vEng[0].classList.contains("isActive")) {
        animation()
        widthWaves()
        setTimeout(() => {
            linkToFrench.classList.toggle("isActive")
            linkToEnglish.classList.toggle("isActive")
            changeFrToEng()
        }, 1000);
    }

});
// vers la version fr 
linkToFrench.addEventListener("click", () => {
    if (!vFr.length || !vFr[0].classList.contains("isActive")) {
        animation()
        widthWaves()
        setTimeout(() => {
            linkToFrench.classList.toggle("isActive")
            linkToEnglish.classList.toggle("isActive")
            changeEngToFr()
        }, 1000);
    }
});

// fonction pour le random img 
const photoWrapper = document.querySelector(".role__photo__img__wrapper")

const imgRandom = {
    img1 : "./img/photo_profil.png",
    img2 : "./img/photo_profil3.jpg",
}
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}
// console.log(getRandomIndex(2));
function getRandomImg() {
    window.addEventListener("load", () => {
        const randomIndex = getRandomIndex(2); 
        
        let imgBalise;
        
        if (randomIndex === 0) {
            imgBalise = `<img src="${imgRandom.img1}" alt="">`;
        } else {
            imgBalise = `<img src="${imgRandom.img2}" alt="">`;
        }
        
        photoWrapper.innerHTML = imgBalise;
    });
}
getRandomImg()

// Partie project animation 
const slideLeft = document.querySelector(".prev_btn")
const slideRight = document.querySelector(".next_btn")

const afopTxt = document.querySelector(".project__txt .afop")
const afopImg = document.querySelector(".project__screen .afop")
const afopTech = document.querySelector(".project__tech .afop")

const trainingTxt = document.querySelector(".project__txt .training")
const trainingImg = document.querySelector(".project__screen .training")
const trainingTech = document.querySelector(".project__tech .training")

const dofusTxt = document.querySelector(".project__txt .dofus")
const dofusImg = document.querySelector(".project__screen .dofus")
const dofusTech = document.querySelector(".project__tech .dofus")

const pomanderTxt = document.querySelector(".project__txt .pomander")
const pomanderImg = document.querySelector(".project__screen .pomander")
const pomanderTech = document.querySelector(".project__tech .pomander")

const mfmTxt = document.querySelector(".project__txt .mfm")
const mfmImg = document.querySelector(".project__screen .mfm")
const mfmTech = document.querySelector(".project__tech .mfm")

const keylegalTxt = document.querySelector(".project__txt .keylegal")
const keylegalImg = document.querySelector(".project__screen .keylegal")
const keylegalTech = document.querySelector(".project__tech .keylegal")

const newsTxt = document.querySelector(".project__txt .news")
const newsImg = document.querySelector(".project__screen .news")
const newsTech = document.querySelector(".project__tech .news")

const todoTxt = document.querySelector(".project__txt .todo")
const todoImg = document.querySelector(".project__screen .todo")
const todoTech = document.querySelector(".project__tech .todo")

const convertorTxt = document.querySelector(".project__txt .convertor")
const convertorImg = document.querySelector(".project__screen .convertor")
const convertorTech = document.querySelector(".project__tech .convertor")

const food52Txt = document.querySelector(".project__txt .food52")
const food52Img = document.querySelector(".project__screen .food52")
const food52Tech = document.querySelector(".project__tech .food52")

const portfolioTxt = document.querySelector(".project__txt .portfolio")
const portfolioImg = document.querySelector(".project__screen .portfolio")
const portfolioTech = document.querySelector(".project__tech .portfolio")

// Fonction pour les screens + tech utilisé 
function imgAndTechAnim(img, imgNext, tech, techNext) {
    gsap.to(img, {
        duration: 0.5,
        x: -200 + "vw",
        ease: "power2.inOut",
    });
    gsap.to(imgNext, {
        duration: 0.5,
        x: 0,
        ease: "power2.inOut",
    });
    gsap.to(tech, {
        duration: 0.5,
        x: 200 + "vw",
        ease: "power2.inOut",
    });
    gsap.to(techNext, {
        duration: 0.5,
        x: 0,
        ease: "power2.inOut",
    });
}
// Fonction retour pour les screens + tech utilisé 
function imgAndTechAnimReverse(img, imgnNext, tech, techNext) {
    gsap.to(img, {
        duration: 0.5,
        x: 200 + "vw",
        ease: "power2.inOut",
    });
    gsap.to(imgnNext, {
        duration: 0.5,
        x: 0,
        ease: "power2.inOut",
    });
    gsap.to(tech, {
        duration: 0.5,
        x: -200 + "vw",
        ease: "power2.inOut",
    });
    gsap.to(techNext, {
        duration: 0.5,
        x: 0,
        ease: "power2.inOut",
    });
}
// fonction pour animé les textes 
function animationTexteY(txtOld,slidingFrom,txtNew,slidingReverse){
    gsap.to(txtOld, {
        duration: 0.5,
        y: slidingFrom + "vh",
        ease: "power2.inOut",
    });
    gsap.to(txtNew, {
        duration: 0.5,
        y: slidingReverse + "vh",
        ease: "power2.inOut",
    });
}
function animationTexteX(txtOld,slidingFrom,txtNew,slidingReverse){
    gsap.to(txtOld, {
        duration: 0.5,
        x: slidingFrom + "vw",
        ease: "power2.inOut",
    });
    gsap.to(txtNew, {
        duration: 0.5,
        x: slidingReverse + "vw",
        ease: "power2.inOut",
    });
}

// tableau avec chaque projet 
const actions = [
    {
        pos: "x",
        textActif: afopTxt,
        textActifPos: 200,
        textNextPos: 0,
        textReversePos: -200,
        img: afopImg,
        tech: afopTech
    },
    {
        pos: "y",
        textActif: trainingTxt,
        textActifPos: 200,
        textNextPos: 0,
        textReversePos: -200,
        img: trainingImg,
        tech: trainingTech
    },
    {
        pos: "x",
        textActif: dofusTxt,
        textActifPos: 200,
        textNextPos: 0,
        textReversePos: -200,
        img: dofusImg,
        tech: dofusTech
    },
    {
        pos: "y",
        textActif: pomanderTxt,
        textActifPos: -200,
        textNextPos: 0,
        textReversePos: -200,
        img: pomanderImg,
        tech: pomanderTech
    },
    {
        pos: "x",
        textActif: mfmTxt,
        textActifPos: -200,
        textNextPos: 0,
        textReversePos: 200,
        img: mfmImg,
        tech: mfmTech
    },
    {
        pos: "y",
        textActif: keylegalTxt,
        textActifPos: 200,
        textNextPos: 0,
        textReversePos: 200,
        img: keylegalImg,
        tech: keylegalTech
    },
    {
        pos: "x",
        textActif: newsTxt,
        textActifPos: 200,
        textNextPos: 0,
        textReversePos: -200,
        img: newsImg,
        tech: newsTech
    },
    {
        pos: "y",
        textActif: todoTxt,
        textActifPos: -200,
        textNextPos: 0,
        textReversePos: -200,
        img: todoImg,
        tech: todoTech
    },
    {
        pos: "x",
        textActif: convertorTxt,
        textActifPos: -200,
        textNextPos: 0,
        textReversePos: 200,
        img: convertorImg,
        tech: convertorTech
    },
    {
        pos: "y",
        textActif: food52Txt,
        textActifPos: -200,
        textNextPos: 0,
        textReversePos: 200,
        img: food52Img,
        tech: food52Tech
    },
    {
        pos: "x",
        textActif: portfolioTxt,
        textActifPos: 200,
        textNextPos: 0,
        textReversePos: 200,
        img: portfolioImg,
        tech: portfolioTech
    },
];

let reverse = true

function actionY(textActif,textActifPos,textNext,textNextPos,img,imgNext,tech,nextTech){
    animationTexteY(textActif,textActifPos,textNext,textNextPos)
    if(reverse) {
        imgAndTechAnim(img,imgNext,tech,nextTech)
    } else {
        imgAndTechAnimReverse(img,imgNext,tech,nextTech)
    }
}
function actionX(textActif,textActifPos,textNext,textNextPos,img,imgNext,tech,nextTech){
    animationTexteX(textActif,textActifPos,textNext,textNextPos)
    if(reverse) {
        imgAndTechAnim(img,imgNext,tech,nextTech)
    } else {
        imgAndTechAnimReverse(img,imgNext,tech,nextTech)
    }
}

let actionActuelle = 0

slideRight.addEventListener("click", () => {
    const currentAction = actions[actionActuelle];
    const nextAction = actions[actionActuelle + 1];
    // fait defiler le contenu
    reverse = true 
    if(currentAction.pos === "y"){
        actionY(currentAction.textActif, currentAction.textActifPos, nextAction.textActif, nextAction.textNextPos, currentAction.img, nextAction.img, currentAction.tech,  nextAction.tech);
    } else {
        actionX(currentAction.textActif, currentAction.textActifPos, nextAction.textActif, nextAction.textNextPos, currentAction.img, nextAction.img, currentAction.tech,  nextAction.tech);
    }
    // desactive la flèche à droite à la fin du tableau 
    if(actionActuelle === actions.length-1){
        slideRight.classList.add("isActive")
    }
    // +1 au tableau 
    if(actionActuelle < actions.length - 1){
        actionActuelle ++
    } else {
        actionActuelle = actions.length;
    } 
    slideRight.classList.toggle("isActive", actionActuelle === actions.length - 1);
    // active la flèche vers la gauche
    slideLeft.classList.remove("isActive")
})
slideLeft.addEventListener("click", () => {
    reverse = false 
    const currentAction = actions[actionActuelle];
    const nextAction = actions[actionActuelle - 1];
    // fait defiler le contenu
    if(nextAction.pos === "y"){
        actionY(currentAction.textActif, currentAction.textReversePos, nextAction.textActif, nextAction.textNextPos, currentAction.img, nextAction.img, currentAction.tech,  nextAction.tech);
    } else {
        actionX(currentAction.textActif, currentAction.textReversePos, nextAction.textActif, nextAction.textNextPos, currentAction.img, nextAction.img, currentAction.tech,  nextAction.tech);
    }
    // -1 au tableau 
    if(actionActuelle > 0){
        actionActuelle -= 1
    }
    // desactive la flèche à gauche à la fin du tableau 
    if(actionActuelle === 0){
        slideLeft.classList.add("isActive")
    }
    if(actionActuelle != actions.length -1) {
        slideRight.classList.remove("isActive")
    }
})

// fancybox (lightbox) 

Fancybox.bind("[data-fancybox]", {
    buttons: ["thumbs"],
    Toolbar: {
        display: {
            left: [],
            middle: ["prev", "infobar", "next"],
            right: ["close"],
        },
    },
    thumbs: {
        open: true, // Ouvrir la galerie de vignettes par défaut
        count: 2, 
    },
    carousel: {
        open: true, // Ouvrir le carroussel par défaut
    },
});
new Carousel(
    document.getElementById('myCarousel'),
    {
        Dots: false,
    },
    {
        Thumbs,
    }
    );
new Carousel(
    document.getElementById('myCarousel2'),
    {
        Dots: false,
    },
    {
        Thumbs,
    }
    );
new Carousel(
    document.getElementById('myCarousel3'),
    {
        Dots: false,
    },
    {
        Thumbs,
    }
    );
new Carousel(
    document.getElementById('myCarousel4'),
    {
        Dots: false,
    },
    {
        Thumbs,
    }
    );
new Carousel(
    document.getElementById('myCarousel5'),
    {
        Dots: false,
    },
    {
        Thumbs,
    }
    );
new Carousel(
    document.getElementById('myCarousel6'),
    {
        Dots: false,
    },
    {
        Thumbs,
    }
    );
new Carousel(
    document.getElementById('myCarousel7'),
    {
        Dots: false,
    },
    {
        Thumbs,
    }
    );
new Carousel(
    document.getElementById('myCarousel8'),
    {
        Dots: false,
    },
    {
        Thumbs,
    }
    );
new Carousel(
    document.getElementById('myCarousel9'),
    {
        Dots: false,
    },
    {
        Thumbs,
    }
    );
new Carousel(
    document.getElementById('myCarousel10'),
    {
        Dots: false,
    },
    {
        Thumbs,
    }
    );
new Carousel(
    document.getElementById('myCarousel11'),
    {
        Dots: false,
    },
    {
        Thumbs,
    }
    );