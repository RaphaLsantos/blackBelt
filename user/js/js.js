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