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

<<<<<<< HEAD
// inicio carrossel galeria
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
=======



//carousel clientes
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel_clientes');
    const btnLeft = document.getElementById('btnLeft');
    const btnRight = document.getElementById('btnRight');

    btnLeft.addEventListener('click', function() {
        carousel.scrollBy({
            left: -carousel.offsetWidth, // Desloca para a esquerda pela largura do carousel
            behavior: 'smooth' // Adiciona um efeito suave de deslizamento
        });
    });

    btnRight.addEventListener('click', function() {
        carousel.scrollBy({
            left: carousel.offsetWidth, // Desloca para a direita pela largura do carousel
            behavior: 'smooth' // Adiciona um efeito suave de deslizamento
        });
    });
});
//carousel clientes
>>>>>>> 050d000627560f3019265ebc82f1df384074e0e2
