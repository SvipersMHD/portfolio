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


ScrollReveal().reveal('.headline');

if (document.querySelector(".project")) {
    window.addEventListener("scroll", function() {     
        const mouseScroll = document.querySelector(".ask__scroll");
        let opacity = 1;
        const delay = 1000;
        const interval = 50;
        const fadeOut = setInterval(() => {
            opacity -= 0.1;
            mouseScroll.style.opacity = opacity;
            if (opacity <= 0) {
                clearInterval(fadeOut);
                mouseScroll.style.display = 'none';
            }
        }, interval);
        setTimeout(() => {
            fadeOut;
        }, delay);
    });
}
