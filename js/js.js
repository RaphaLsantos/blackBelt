////////////////////efeito navbar inicio///////////////
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const navBar = document.querySelector(".nav_bar");

    menuIcon.addEventListener("click", function () {
        navBar.classList.toggle("active");
    });
});
/////////////////////efeito navbar final//////////////////



//////////////////efeito rotação automática da imagem///////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const imgSobre = document.querySelector(".img_sobre");

    function rotateImage() {
        imgSobre.style.transform += " rotate(360deg)";
    }

    setInterval(rotateImage, 4000);
});
//////////////////efeito rotação automática da imagem fina//////////////////



//////////////////////navbar ao descer a tela///////////////////
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

///////////////////navbar ao descer a tela//////////////////



//////////////////////////efeito voltar ao inicio///////////////////////////////////////
window.addEventListener('scroll', function () {
    const startInicio = document.getElementById('startInicio');
    if (window.scrollY > 200) { // Ajuste o valor conforme necessário
        startInicio.classList.add('show');
    } else {
        startInicio.classList.remove('show');
    }
});

document.getElementById('startInicio').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
///////////////////////////fim efeito voltar ao inicio/////////////////////////////////



/////////////////// inicio carrossel galeria lacrados///////////////////////
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');
let slideWidth = slides[0].getBoundingClientRect().width;

// Ajusta a largura de cada slide
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// Atualiza a largura do slide ao redimensionar a janela
window.addEventListener('resize', () => {
    slideWidth = slides[0].getBoundingClientRect().width;
    slides.forEach(setSlidePosition);
});

// Clique para mover os slides para a direita
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;
    if (!nextSlide) {
        nextSlide = slides[0];
    }
    moveToSlide(track, currentSlide, nextSlide);
});

// Clique para mover os slides para a esquerda
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;
    if (!prevSlide) {
        prevSlide = slides[slides.length - 1];
    }
    moveToSlide(track, currentSlide, prevSlide);
});

//////////////////////// inicio carrossel galeria lacrados///////////////////////////



/////////////////// inicio carrossel galeria Seminovos Premium ///////////////////////
const premiumTrack = document.querySelector('.carousel-track');
const premiumSlides = Array.from(premiumTrack.children);
const premiumNextButton = document.querySelector('.next-btn');
const premiumPrevButton = document.querySelector('.prev-btn');
const carouselTrackContainer = document.querySelector('.carousel-track-container');
let premiumSlideWidth = premiumSlides[0].getBoundingClientRect().width;

// Ajusta a largura de cada slide
const setPremiumSlidePosition = (slide, index) => {
    slide.style.left = premiumSlideWidth * index + 'px';
};
premiumSlides.forEach(setPremiumSlidePosition);

const moveToPremiumSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// Atualiza a largura do slide ao redimensionar a janela
window.addEventListener('resize', () => {
    premiumSlideWidth = premiumSlides[0].getBoundingClientRect().width;
    premiumSlides.forEach(setPremiumSlidePosition);
});

// Clique para mover os slides para a direita
premiumNextButton.addEventListener('click', () => {
    const currentSlide = premiumTrack.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;
    if (!nextSlide) {
        nextSlide = premiumSlides[0];
    }
    moveToPremiumSlide(premiumTrack, currentSlide, nextSlide);
});

// Clique para mover os slides para a esquerda
premiumPrevButton.addEventListener('click', () => {
    const currentSlide = premiumTrack.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;
    if (!prevSlide) {
        prevSlide = premiumSlides[premiumSlides.length - 1];
    }
    moveToPremiumSlide(premiumTrack, currentSlide, prevSlide);
});
///////////////// fim carrossel galeria Seminovos Premium////////////////




///////////////////inicio carousel clientes//////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carouselClientes');
    const cards = carousel.querySelectorAll('.card');
    let currentIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            card.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    document.getElementById('btnLeft').addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
        showCard(currentIndex);
    });

    document.getElementById('btnRight').addEventListener('click', function () {
        currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
        showCard(currentIndex);
    });

    showCard(currentIndex); // Inicializa o carrossel com o primeiro card visível
});

/////////////////////final carousel clientes////////////////////




/////////////////////evento play do vídeo////////////////////
function showPlayIcon() {
    const playIcon = document.querySelector('#play_icon');
    const videoIcon = document.querySelector('#video_icon');

    // Suavemente oculta o ícone de vídeo e exibe o ícone de play
    playIcon.style.opacity = 0;
    videoIcon.style.opacity = 1;
}

function hidePlayIcon() {
    const playIcon = document.querySelector('#play_icon');
    const videoIcon = document.querySelector('#video_icon');

    // Suavemente exibe o ícone de vídeo e oculta o ícone de play
    playIcon.style.opacity = 1;
    videoIcon.style.opacity = 0;
}

function openModal() {
    const modal = document.querySelector('#modal');
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.querySelector('#modal');
    modal.style.display = 'none';
}

/////////////////////evento play do vídeo////////////////////