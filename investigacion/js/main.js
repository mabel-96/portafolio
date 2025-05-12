document.addEventListener('DOMContentLoaded', function () {
    // Menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    }

    // Carrusel
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const prevBtn = document.querySelector('.carousel-btn.prev');

    let index = 0;

    function updateCarousel() {
        const width = items[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${index * width}px)`;
    }

    if (track && items.length > 0 && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            index = (index + 1) % items.length;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            index = (index - 1 + items.length) % items.length;
            updateCarousel();
        });

        window.addEventListener('resize', updateCarousel);
        updateCarousel(); // inicial
    }
    setInterval(() => {
        index = (index + 1) % items.length;
        updateCarousel();
    }, 9000); // cada 5 segundos
    // acordeon
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
    
            // Cierra otros abiertos
            document.querySelectorAll('.accordion-content').forEach(c => {
                if (c !== content) c.style.display = 'none';
            });
    
            // Toggle actual
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
    
    
});
