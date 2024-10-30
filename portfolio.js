// Scroll animation to make sections fade in as you scroll
const sections = document.querySelectorAll('.section');

const fadeInSection = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        
        if (sectionTop < screenHeight - 100) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInSection);

// Initialize skill bars
const skillBars = document.querySelectorAll('.progress-bar');

const fillSkillBars = () => {
    skillBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = '0'; // Reset width for animation
        setTimeout(() => {
            bar.style.width = width; // Animate the width fill
        }, 500); // Delay for smoother appearance
    });
};

window.addEventListener('load', () => {
    fillSkillBars(); // Animate skill bars on page load
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
window.addEventListener('load', () => {
    fadeInSection();
    fillSkillBars(); // Also animate skill bars on page load
});
