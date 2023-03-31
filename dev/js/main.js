const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
})

const askScroll = document.querySelector('.ask__scroll');
const wavesL = [...document.querySelectorAll('.wave__left div')].reverse();
const wavesR = document.querySelectorAll('.wave__right div');
const wavesLWrapper = document.querySelector('.wave__left');
const wavesRWrapper = document.querySelector('.wave__right');

const btnProjectHome = document.querySelector('.home__project');
const btnContact = document.querySelector('.home__contact');

const project = document.querySelector('.project');
const home = document.querySelector('.home');
const header = document.querySelector('.header');
const homebtn = document.querySelector('.project__homebtn');

const linkToEnglish = document.querySelector(".eng");
const linkToFrench = document.querySelector(".fran");
const vFr = document.querySelectorAll(".v-fr");
const vEng = document.querySelectorAll(".v-engl");
const activeEng = document.querySelector('.v-engl .isActive');


// animation vers la partie my project
function goProject(){
    setTimeout(function() {
        project.style.display = "block";
        home.style.display = "none";
        header.style.display = "none";
        if (window.innerWidth < 900) {
            window.scrollTo(0, 0);
        }
    }, 1000);
    
}
// animation retour vers le home 
function goHome(){
    setTimeout(function() {
        project.style.display = "none";
        home.style.display = "flex";
        header.style.display = "flex";
    }, 1000);
}
// function pour cacher les waves 
function widthWaves(){
    wavesLWrapper.style.display = "block";
    wavesRWrapper.style.display = "block";
    
    setTimeout(() => {
        wavesLWrapper.style.display = "none";
        wavesRWrapper.style.display = "none";
        
    }, 2000);
}
// animation des waves 
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
btnContact.addEventListener("click", () => {
    animation();
    widthWaves();
});
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

// animation invitation au scroll 
window.addEventListener('scroll', () => { 
    if (document.querySelector(".project")) {
        askScroll.classList.add('isActive')
    }
    setTimeout(function() {
        askScroll.style.opacity = 0;
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
