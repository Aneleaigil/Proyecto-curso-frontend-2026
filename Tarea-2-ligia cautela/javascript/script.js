const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider__dot');
const nextBtn = document.querySelector('.slider__control--next');
const prevBtn = document.querySelector('.slider__control--prev');

let currentSlide = 0;

function updateSlider(index) {
    // 1. Quitar clase active de slide y dot actual
    document.querySelector('.slider__item--active').classList.remove('slider__item--active');
    document.querySelector('.slider__dot--active').classList.remove('slider__dot--active');

    // 2. Agregar clase active al nuevo index
    slides[index].classList.add('slider__item--active');
    dots[index].classList.add('slider__dot--active');
    
    currentSlide = index;
}

nextBtn.addEventListener('click', () => {
    let index = (currentSlide + 1) % slides.length;
    updateSlider(index);
});

prevBtn.addEventListener('click', () => {
    let index = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider(index);
});

// Evento para los puntos (dots)
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => updateSlider(i));
});

