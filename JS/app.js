function participar(){
    window.location.href = "participar.html";
}

function donar(){
    window.location.href = "donar.html";
}

function proyectos(){
    window.location.href = "proyectos.html";
}

// Muestra o esconde el botón según el scroll
window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Función para volver al inicio de la página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

