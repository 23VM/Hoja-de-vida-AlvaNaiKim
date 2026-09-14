document.addEventListener("DOMContentLoaded", () => {
    
    // PARTÍCULAS
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 55, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": ["#ff7f50", "#ff9a8b", "#ffffff"] },
            "shape": { "type": ["circle", "edge"] }, 
            "opacity": { "value": 0.6, "anim": { "enable": true, "speed": 1.2, "opacity_min": 0.2 } },
            "size": { "value": 5, "random": true, "anim": { "enable": true, "speed": 2, "size_min": 2 } },
            "line_linked": { "enable": false },
            "move": { "enable": true, "speed": 2, "direction": "top-right", "random": true, "out_mode": "out" }
        },
        "interactivity": {
            "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": false } },
            "modes": { "bubble": { "distance": 150, "size": 10, "duration": 2, "opacity": 1 } }
        },
        "retina_detect": true
    });

    // NAVEGACIÓN
    const btnComenzar = document.getElementById("btn-comenzar");
    const btnVolver = document.getElementById("btn-volver");
    const sectionCaratula = document.getElementById("section-caratula");
    const sectionDetalles = document.getElementById("section-detalles");

    btnComenzar.addEventListener("click", () => {
        sectionCaratula.classList.remove("active-page");
        sectionCaratula.classList.add("hidden-page");
        setTimeout(() => {
            sectionDetalles.classList.remove("hidden-page");
            sectionDetalles.classList.add("active-page");
        }, 500); 
    });

    btnVolver.addEventListener("click", () => {
        sectionDetalles.classList.remove("active-page");
        sectionDetalles.classList.add("hidden-page");
        setTimeout(() => {
            sectionCaratula.classList.remove("hidden-page");
            sectionCaratula.classList.add("active-page");
        }, 500);
    });

    // ESFERA Y SELECTOR DE INTEGRANTES
    const members = [
        { name: "Anahí Alvarado", photo: "foto_anahi_alvarado.jpg", qr: "qr_anahi_alvarado.png" },
        { name: "Naima de León", photo: "foto_naima.jpg", qr: "qr_naima.png" },
        { name: "Kimberly Espinosa", photo: "foto_kimberly.jpg", qr: "qr_kimberly.png" }
    ];

    const selectorBtns = document.querySelectorAll(".selector-btn");
    const magicBall = document.getElementById("magic-ball");
    const closeBallBtn = document.getElementById("close-ball");
    
    const ballNameEl = document.getElementById("ball-name");
    const cardNameEl = document.getElementById("card-name");
    const cardPhotoEl = document.getElementById("card-photo");
    const cardQrEl = document.getElementById("card-qr");

    selectorBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            selectorBtns.forEach(b => b.classList.remove("active-sel"));
            btn.classList.add("active-sel");

            if (magicBall.classList.contains("expanded")) {
                magicBall.classList.remove("expanded");
            }

            setTimeout(() => {
                const index = btn.getAttribute("data-index");
                const data = members[index];

                ballNameEl.textContent = data.name;
                cardNameEl.textContent = data.name;
                
                cardPhotoEl.src = data.photo;
                cardPhotoEl.setAttribute("data-caption", `Fotografía de ${data.name}`);
                
                cardQrEl.src = data.qr;
                cardQrEl.setAttribute("data-caption", `Código QR - ${data.name}`);
            }, 300);
        });
    });

    magicBall.addEventListener("click", () => {
        if (!magicBall.classList.contains("expanded")) {
            magicBall.classList.add("expanded");
        }
    });

    closeBallBtn.addEventListener("click", (e) => {
        e.stopPropagation(); 
        magicBall.classList.remove("expanded");
    });

    // MODAL DE ZOOM
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("imagen-ampliada");
    const captionText = document.getElementById("caption");
    
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("zoom-trigger")) {
            modal.classList.add("show");
            modalImg.src = e.target.src;
            captionText.innerText = e.target.getAttribute("data-caption");
        }
    });

    document.querySelector(".close-modal").addEventListener("click", () => modal.classList.remove("show"));
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("show"); });
});