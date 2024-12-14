let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    
    const newTransform = `translateX(-${slideIndex * 100}%)`;
    document.querySelector('.carousel').style.transform = newTransform;
}

function moveSlide(step) {
    slideIndex += step;
    showSlide(slideIndex);
}

// Inicializa o carrossel com o primeiro slide
showSlide(slideIndex);

// Configura a mudança automática a cada 5 segundos
setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 8000);

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o link de "Novidade"
    const scrollLink = document.querySelector(".scroll-link");

    // Quando o link for clicado, rolar suavemente até a seção e adicionar fade-in
    scrollLink.addEventListener("click", function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link (rolagem imediata)

        const targetId = document.querySelector(scrollLink.getAttribute("href"));
        
        window.scrollTo({
            top: targetId.offsetTop,
            behavior: "smooth" // Rolagem suave
        });

        // Espera a rolagem terminar e aplica o fade-in
        setTimeout(function() {
            targetId.classList.add("visible");
        }, 500); // O fade-in ocorre após 500ms para permitir que a rolagem aconteça primeiro
    });
});

// Seleciona o botão
const backToTopButton = document.getElementById("backToTop");

// Adiciona um ouvinte para o scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // Exibe o botão se o scroll for maior que 300px
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Função para voltar ao topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Scroll suave
    });
}
