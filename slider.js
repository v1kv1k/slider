let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const playPauseButton = document.querySelector('.play-pause-button');

let isPlaying = true;

let autoPlayInterval;

function updateSlider() {
    const offset = -currentSlide * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function toggleAutoPlay() {
    if (isPlaying) {
        clearInterval(autoPlayInterval);
        playPauseButton.textContent = '▶';
    } else {
        autoPlayInterval = setInterval(nextSlide, 3000);
        playPauseButton.textContent = '⏸';
    }
    isPlaying = !isPlaying;
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
playPauseButton.addEventListener('click', toggleAutoPlay);

autoPlayInterval = setInterval(nextSlide, 3000);