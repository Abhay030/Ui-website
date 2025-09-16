const video = document.getElementById('demoVideo');
const playIcon = document.getElementById('playButton');

// Play - Pause on video click
video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playIcon.classList.add('hide');
    } else {
        video.pause();
        playIcon.classList.remove('hide');
    }
});

// Play on clicking the play button image
playIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    video.play();
    playIcon.classList.add('hide');
});

// Reset when video ends
video.addEventListener('ended', () => {
    video.currentTime = 0; 
    video.pause(); 
    playIcon.classList.remove('hide');
});

// This is for the testimonial slider
// It cycles through testimonials every 5 seconds and allows manual navigation via dots
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.testimonial-dots .dot');
const totalSlides = slides.length;
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.src = i === index ? '../assets/grey-circle.png' : '../assets/blue-circle.png';
    });
    currentIndex = index;
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        showSlide(parseInt(dot.dataset.index));
    });
});

// Auto-slide every 5 seconds
setInterval(() => {
    let nextIndex = (currentIndex + 1) % totalSlides;
    showSlide(nextIndex);
}, 5000);


// This is for the contact form modal
// It shows a modal when the form is submitted and allows closing the modal
const form = document.getElementById("contactForm");
const modal = document.getElementById("successModal");
const closeBtn = document.querySelector(".close-button");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});

window.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

