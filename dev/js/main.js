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


const aboutMe = document.querySelector('.aboutme__presentation__txt');
const btnToAbout = document.querySelector('.btnToAbout');
const btnToMe = document.querySelector('.btnToMe');
const toAboutTxt = document.querySelector('.toAboutTxt');
const txtToUp = document.querySelector('.toUpTxt');

const linkToEnglish = document.querySelector(".eng");
const linkToFrench = document.querySelector(".fran");
const vFr = document.querySelectorAll(".v-fr");
const vEng = document.querySelectorAll(".v-engl");
const activeEng = document.querySelector('.v-engl .isActive');

getBtnToAboutToggle = true;

btnToAbout.addEventListener(("click"),() => {
    if(getBtnToAboutToggle){
    gsap.to(aboutMe, {
        y: 0, 
        duration: 1.5, 
        ease: "power4.out", 
    })
    gsap.to(toAboutTxt, {
        y: -100 + "vh", 
        duration: 1.5, 
        ease: "power4.out", 
    })
    gsap.to(txtToUp, {
        y : 0,
        duration : 1.5,
        ease : "power4.out"
    })
    } else {
        gsap.to(aboutMe, {
            y: 100 + "vh", 
            duration: 1.5, 
            ease: "power4.out", 
        })
        gsap.to(txtToUp, {
            y : 100 + "vh",
            duration : 1.5,
            ease : "power4.in"
        },">-2")
        gsap.to(toAboutTxt, {
            y: 0, 
            duration: 1.5, 
            ease : "power4.out",
        },">-1")
    }
    getBtnToAboutToggle = !getBtnToAboutToggle
})


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

}
//Fonction pour l'animation retour vers le home 
function goHome(){
    setTimeout(function() {
        project.style.display = "none";
        home.style.display = "flex";
        header.style.display = "flex";
    }, 1000);
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
// lancement au bouton home 
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
// lancement btn my project 
homebtn.addEventListener("click", () => {
    animation();
    goHome()
    widthWaves()
    askScroll.classList.remove('isActive')
    setTimeout(function() {
        askScroll.style.opacity = 1;
    }, 1000);
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
// Partie project animation 
const slideLeft = document.querySelector(".fa-angle-left")
const slideRight = document.querySelector(".fa-angle-right")

const trainingTxt = document.querySelector(".project__txt .training")
const trainingImg = document.querySelector(".project__screen .training")
const trainingTech = document.querySelector(".project__tech .training")

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
// Fonction pour les screens + tech utilisé 
function imgAndTechAnim(img, imgnNext, tech, techNext) {
    gsap.to(img, {
        duration: 0.5,
        x: -200 + "vw",
        ease: "power2.inOut",
    });
    gsap.to(imgnNext, {
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
        x: 0,
        ease: "power2.inOut",
    });
    gsap.to(imgnNext, {
        duration: 0.5,
        x: 100 + "vw",
        ease: "power2.inOut",
    });
    gsap.to(tech, {
        duration: 0.5,
        x: 0,
        ease: "power2.inOut",
    });
    gsap.to(techNext, {
        duration: 0.5,
        x: -200 + "vw",
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
// Fonction pour les animations + retour 
// function action1() {
//     animationTexteY(trainingTxt,100,newsTxt,0)
//     imgAndTechAnim(trainingImg,newsImg,trainingTech,newsTech)
// }
// function action1Reverse() {
//     animationTexteY(trainingTxt,0,newsTxt,-200)
//     imgAndTechAnimReverse(trainingImg,newsImg,trainingTech,newsTech)
// }
// function action2() {
//     animationTexteX(newsTxt,200,todoTxt,0)
//     imgAndTechAnim(newsImg,todoImg,newsTech,todoTech)
// }
// function action2Reverse() {
//     animationTexteX(newsTxt,0,todoTxt,-200)
//     imgAndTechAnimReverse(newsImg,todoImg,newsTech,todoTech)
// }
// function action3() {
//     animationTexteY(todoTxt,-200,convertorTxt,0)
//     imgAndTechAnim(todoImg,convertorImg,todoTech,convertorTech)
// }
// function action3Reverse() {
//     animationTexteY(todoTxt,0,convertorTxt,200)
//     imgAndTechAnimReverse(todoImg,convertorImg,todoTech,convertorTech)
// }
// function action4() {
//     animationTexteX(convertorTxt,-200,food52Txt,0)
//     imgAndTechAnim(convertorImg,food52Img,convertorTech,food52Tech)
// }
// function action4Reverse() {
//     animationTexteX(convertorTxt,0,food52Txt,200)
//     imgAndTechAnimReverse(convertorImg,food52Img,convertorTech,food52Tech)
// }
// function actionY(textActif,textActifPos,textNext,textNextPos){
//     animationTexteY(textActif,textActifPos,textNext,textNextPos)
//     imgAndTechAnim(trainingImg,newsImg,trainingTech,newsTech)
// }
// function actionX(textActif,textActifPos,textNext,textNextPos){
//     animationTexteX(textActif,textActifPos,textNext,textNextPos)
//     imgAndTechAnim(trainingImg,newsImg,trainingTech,newsTech)
// }
// // Lancement des animations + conditions pour effet retour 
// let isAction1 = false;
// let isAction2 = false;
// let isAction3 = false;
// let isAction4 = false;

// slideRight.addEventListener("click", () => {
//     if (isAction1) {
//         actionX(newsTxt,200,todoTxt,0);
//         isAction1 = false;
//         isAction2 = true;
//         isAction3 = false;
//         isAction4 = false;
//     } else if (isAction2) {
//         actionY(todoTxt,-200,convertorTxt,0);
//         isAction1 = false;
//         isAction2 = false;
//         isAction3 = true;
//         isAction4 = false;
//     } else if (isAction3) {
//         actionX(convertorTxt,-200,food52Txt,0);
//         isAction1 = false;
//         isAction2 = false;
//         isAction3 = false;
//         isAction4 = true;
//         slideRight.classList.add("isActive")
//     } else if(isAction4) {
//     }
//     else {
//         actionY(trainingTxt,100,newsTxt,0);
//         isAction1 = true;
//         isAction2 = false;
//         isAction3 = false;
//         isAction4 = false;
//         slideLeft.classList.remove("isActive")
//     }
// });
// slideLeft.addEventListener("click", () => {
//     if (isAction4) {
//         action4Reverse();
//         isAction4 = false;
//         isAction3 = true;
//         isAction2 = false;
//         isAction1 = false;
//         slideRight.classList.remove("isActive")
//     } else if (isAction3) {
//         action3Reverse();
//         isAction3 = false;
//         isAction2 = true;
//         isAction1 = false;
//     } else if (isAction2) {
//         action2Reverse();
//         isAction2 = false;
//         isAction1 = true;
//         isAction3 = false;
//     } else if (isAction1) {
//         action1Reverse();
//         isAction1 = false;
//         isAction2 = false;
//         isAction3 = false;
//         slideLeft.classList.add("isActive")
//     }
// });


// Créez un tableau avec vos éléments et leurs paramètres
// const actions = [
//     { 
//         pos: "y",
//         textActif: trainingTxt,
//         textActifPos: 100,
//         textNext: newsTxt,
//         textNextPos: 0,
//         imgAndTechAnimFunc: () => imgAndTechAnim(trainingImg, newsImg, trainingTech, newsTech),
//         imgAndTechAnimReverseFunc: () => imgAndTechAnimReverse(trainingImg, newsImg, trainingTech, newsTech),
//     },
//     {
//         pos: "x",
//         textActif: newsTxt,
//         textActifPos: 200,
//         textNext: todoTxt,
//         textNextPos: 0,
//         imgAndTechAnimFunc: () => imgAndTechAnim(newsImg, todoImg, newsTech, todoTech),
//         imgAndTechAnimReverseFunc: () => imgAndTechAnimReverse(newsImg, todoImg, newsTech, todoTech),
//     },
//     {
//         pos: "y",
//         textActif: todoTxt,
//         textActifPos: -200,
//         textNext: convertorTxt,
//         textNextPos: 0,
//         imgAndTechAnimFunc: () => imgAndTechAnim(todoImg, convertorImg, todoTech, convertorTech),
//         imgAndTechAnimReverseFunc: () => imgAndTechAnimReverse(todoImg, convertorImg, todoTech, convertorTech),
//     },
//     {
//         pos: "x",
//         textActif: convertorTxt,
//         textActifPos: -200,
//         textNext: food52Txt,
//         textNextPos: 0,
//         imgAndTechAnimFunc: () => imgAndTechAnim(convertorImg, food52Img, convertorTech, food52Tech),
//         imgAndTechAnimReverseFunc: () => imgAndTechAnimReverse(convertorImg, food52Img, convertorTech, food52Tech),
//     },
// ];
const actions = [
    {
        pos: "y",
        textActif: trainingTxt,
        textActifPos: 100,
        textNextPos: 0,
    },
    {
        pos: "x",
        textActif: newsTxt,
        textActifPos: 200,
        textNextPos: 0,
    },
    {
        pos: "y",
        textActif: todoTxt,
        textActifPos: -200,
        textNextPos: 0,
    },
    {
        pos: "x",
        textActif: convertorTxt,
        textActifPos: -200,
        textNextPos: 0,
    },
    {
        pos: "x",
        textActif: food52Txt,
        textActifPos: -200,
        textNextPos: 0,
    },
];

function actionY(textActif,textActifPos,textNext,textNextPos){
    animationTexteY(textActif,textActifPos,textNext,textNextPos)
    imgAndTechAnim(trainingImg,newsImg,trainingTech,newsTech)
}
function actionX(textActif,textActifPos,textNext,textNextPos){
    animationTexteX(textActif,textActifPos,textNext,textNextPos)
    imgAndTechAnim(trainingImg,newsImg,trainingTech,newsTech)
}

let actionActuelle = 0

slideRight.addEventListener("click", () => {
    const currentAction = actions[actionActuelle];
    // fait defiler le contenu
    if(currentAction.pos === "y"){
        const nextAction = actions[actionActuelle + 1];
        actionY(currentAction.textActif, currentAction.textActifPos, nextAction.textActif, nextAction.textNextPos);
    } else {
        actionX(currentAction.textActif, currentAction.textActifPos, currentAction.textNext, currentAction.textNextPos);
    }
    // desactive la flèche à droite à la fin du tableau 
    if(actionActuelle === actions.length-1){
        slideRight.classList.add("isActive")
    }
    // +1 au tableau 
    if(actionActuelle < actions.length - 1){
        actionActuelle ++
    }
    else {
        actionActuelle = actions.length;
    } 
    // active la flèche vers la gauche
    if(actionActuelle > 0){
        slideLeft.classList.remove("isActive")
    }
})
slideLeft.addEventListener("click", () => {

    const currentAction = actions[actionActuelle];
    console.log(currentAction);
    // fait defiler le contenu
    if (currentAction.pos === "y") {
        actionY(currentAction.textNext, currentAction.textNextPos, currentAction.textActif, currentAction.textActifPos);
    } else {
        actionX(currentAction.textNext, currentAction.textNextPos, currentAction.textActif, currentAction.textActifPos);
    }
    // desactive la flèche à gauche à la fin du tableau 
    if(actionActuelle === 0){
        slideRight.classList.add("isActive")
    }
    // +1 au tableau 
    if(actionActuelle > 0){
        actionActuelle --
    }
    else {
        actionActuelle = actions.length;
    } 
    // active la flèche vers la droite
    if(actionActuelle === length-2){
        slideLeft.classList.remove("isActive")
    }
})





