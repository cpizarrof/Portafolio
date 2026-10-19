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
    {
    name: "Gráfica Creativa SpA · Inicio",
    img: "./assets/img/web-inicio.jpg",
    desc: "Sitio de la imprenta familiar donde trabajo, con el catálogo por línea de productos y un formulario para pedir cotización. HTML, CSS y JavaScript, con las páginas generadas en Python y publicado en Netlify. Desarrollado con asistencia de IA.",
    github: "https://graficacreativaspa.cl",
    boton: "Ver el sitio",
    },
    {
    name: "Gráfica Creativa SpA · Trabajos realizados",
    img: "./assets/img/web-trabajos.jpg",
    desc: "Galería con 49 trabajos hechos para instituciones de todo Chile, con filtros por tipo de producto. Las fotos son de trabajos reales, recortadas para dejarlas sobre un fondo limpio.",
    github: "https://graficacreativaspa.cl/trabajos",
    boton: "Ver el sitio",
    },
    {
    name: "Gráfica Creativa SpA · Líneas de productos",
    img: "./assets/img/web-linea.jpg",
    desc: "Cada línea de productos tiene su propia página, pensada para aparecer en Google cuando una institución busca ese tipo de impresos.",
    github: "https://graficacreativaspa.cl/impresos-institucionales",
    boton: "Ver el sitio",
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
    modal.querySelector("#modalBoton").textContent = proyectos[i].boton || "GitHub";
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
