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

const btnProjectHome = document.querySelector('.home__project');
const btnContact = document.querySelector('.home__contact');

const project = document.querySelector('.project');
const home = document.querySelector('.home');
const header = document.querySelector('.header');
const homebtn = document.querySelector('.project__homebtn');

window.addEventListener('scroll', () => {
    
    if (document.querySelector(".project")) {
        askScroll.classList.add('isActive')
    }
    setTimeout(function() {
        askScroll.style.opacity = 0;
    }, 1000);
});


function goProject(){
    setTimeout(function() {
        project.style.display = "block";
        home.style.display = "none";
        header.style.display = "none";
    }, 1000);
}

function goHome(){
    setTimeout(function() {
        project.style.display = "none";
        home.style.display = "flex";
        header.style.display = "block";
    }, 900);
}

btnProjectHome.addEventListener("click", () => {
    animation();
    goProject();
});

btnContact.addEventListener("click", () => {
    animation();
});

homebtn.addEventListener("click", () => {
    animation();
    goHome()
    askScroll.classList.remove('isActive')
    setTimeout(function() {
        askScroll.style.opacity = 1;
    }, 1000);
});



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



