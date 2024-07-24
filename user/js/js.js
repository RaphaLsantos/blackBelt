//efeito navbar inicio
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuIcon");
    const navBar = document.querySelector(".nav_bar");

    menuIcon.addEventListener("click", function() {
        navBar.classList.toggle("active");
    });
});
//efeito navbar final



//efeito rotação automática da imagem
document.addEventListener("DOMContentLoaded", function() {
    const imgSobre = document.querySelector(".img_sobre");

    function rotateImage() {
        imgSobre.style.transform += " rotate(360deg)";
    }

    setInterval(rotateImage, 4000);
});
//efeito rotação automática da imagem final



//navbar ao descer a tela
const navBar = document.querySelector('.nav_bar');
let lastScrollTop = 0;
const delta = 5; 

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(lastScrollTop - scrollTop) <= delta)
        return; 

    if (scrollTop > lastScrollTop) {
        // Scroll para baixo
        navBar.classList.add('hidden');
    } else {
        // Scroll para cima
        navBar.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop;
});

//navbar ao descer a tela



//efeito voltar ao inicio
window.addEventListener('scroll', function() {
    const startInicio = document.getElementById('startInicio');
    if (window.scrollY > 200) { // Ajuste o valor conforme necessário
        startInicio.classList.add('show');
    } else {
        startInicio.classList.remove('show');
    }
});

document.getElementById('startInicio').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
//fim efeito voltar ao inicio



// inicio carrossel galeria lacrados
const track = document.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.next-btn');
        const prevButton = document.querySelector('.prev-btn');
        const slideWidth = slides[0].getBoundingClientRect().width;

        // Arrange the slides next to one another
        const setSlidePosition = (slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        };
        slides.forEach(setSlidePosition);

        const moveToSlide = (track, currentSlide, targetSlide) => {
            track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        };

        // Click right, move slides to the right
        nextButton.addEventListener('click', e => {
            const currentSlide = track.querySelector('.current-slide');
            let nextSlide = currentSlide.nextElementSibling;
            if (!nextSlide) {
                nextSlide = slides[0];
            }
            moveToSlide(track, currentSlide, nextSlide);
        });

        // Click left, move slides to the left
        prevButton.addEventListener('click', e => {
            const currentSlide = track.querySelector('.current-slide');
            let prevSlide = currentSlide.previousElementSibling;
            if (!prevSlide) {
                prevSlide = slides[slides.length - 1];
            }
            moveToSlide(track, currentSlide, prevSlide);
        });
// inicio carrossel galeria lacrados



// inicio carrossel galeria Seminovos Premium
const premiumTrack = document.querySelector('.premium-carousel-track');
const premiumSlides = Array.from(premiumTrack.children);
const premiumNextButton = document.querySelector('.premium-next-btn');
const premiumPrevButton = document.querySelector('.premium-prev-btn');
const premiumSlideWidth = premiumSlides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
const setPremiumSlidePosition = (slide, index) => {
    slide.style.left = premiumSlideWidth * index + 'px';
};
premiumSlides.forEach(setPremiumSlidePosition);

const moveToPremiumSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('premium-current-slide');
    targetSlide.classList.add('premium-current-slide');
};

// Click right, move slides to the right
premiumNextButton.addEventListener('click', e => {
    const currentSlide = premiumTrack.querySelector('.premium-current-slide');
    let nextSlide = currentSlide.nextElementSibling;
    if (!nextSlide) {
        nextSlide = premiumSlides[0];
    }
    moveToPremiumSlide(premiumTrack, currentSlide, nextSlide);
});

// Click left, move slides to the left
premiumPrevButton.addEventListener('click', e => {
    const currentSlide = premiumTrack.querySelector('.premium-current-slide');
    let prevSlide = currentSlide.previousElementSibling;
    if (!prevSlide) {
        prevSlide = premiumSlides[premiumSlides.length - 1];
    }
    moveToPremiumSlide(premiumTrack, currentSlide, prevSlide);
});
// inicio carrossel galeria Seminovos Premium



//inicio carousel clientes
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carouselClientes');
    const btnLeft = document.getElementById('btnLeft');
    const btnRight = document.getElementById('btnRight');

    btnLeft.addEventListener('click', function() {
        carousel.scrollBy({
            left: -carousel.clientWidth,
            behavior: 'smooth'
        });
    });

    btnRight.addEventListener('click', function() {
        carousel.scrollBy({
            left: carousel.clientWidth,
            behavior: 'smooth'
        });
    });
});
//final carousel clientes