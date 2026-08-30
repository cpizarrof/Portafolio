// Función para activar/desactivar cada sección
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link'); // Seleccionamos todos los elementos con la clase 'nav-link'

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
        // Remover 'active' de todos los enlaces
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Agregar 'active' al enlace clikeado
        this.classList.add('active');
        });
    });
    });

// Proyectos
const proyectos = [
    {
    name: "Aerolíneas",
    img: "./assets/img/aerolineas.png",
    desc: "Sitio de una aerolínea hecho con HTML, CSS y Bootstrap.",
    github: "https://github.com/cpizarrof",
    },
    {
    name: "Calculadora",
    img: "./assets/img/calculadora.png",
    desc: "Calculadora en JavaScript, con operaciones básicas y manejo de eventos.",
    github: "https://github.com/cpizarrof",
    },
    {
    name: "Tiempo",
    img: "./assets/img/tiempo.png",
    desc: "Consulta del estado del tiempo a partir de una API externa.",
    github: "https://github.com/cpizarrof",
    },
];

// Función para definir cada modal
function modalcito(i) {
    const modal = document.querySelector("#exampleModal");
    const h1 = modal.querySelector("h1");
    h1.innerHTML = proyectos[i].name;
    const img = modal.querySelector("img");
    img.setAttribute("src", proyectos[i].img);
    const desc = modal.querySelector("#modalDescripcion");
    desc.innerHTML = proyectos[i].desc;
    const a = modal.querySelector("#modalEnlace");
    a.setAttribute("href", proyectos[i].github);
}

// Función de animación de escritura con la biblioteca Typed.js
document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typewriter", {
        strings: ["Ingeniería Estadística", "Análisis de datos", "R, Python y SQL"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    });
    });

// Función para enviar el formulario por correo
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#formContacto");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.querySelector("#inputName").value;
        const email = document.querySelector("#inputEmail").value;
        const asunto = document.querySelector("#inputSubject").value;
        const mensaje = document.querySelector("#inputMessage").value;

        const cuerpo = mensaje + "\n\n" + nombre + "\n" + email;

        window.location.href = "mailto:p.carlosignacio97@gmail.com" +
            "?subject=" + encodeURIComponent(asunto) +
            "&body=" + encodeURIComponent(cuerpo);
    });
    });
