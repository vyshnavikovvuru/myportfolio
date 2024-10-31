// Scroll animation to make sections fade in as you scroll
const sections = document.querySelectorAll('.section');

// Function to fade in sections as they come into view
const fadeInSection = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {
            section.classList.add('visible');
        }
    });
};

// Function to fill skill bars on page load
const fillSkillBars = () => {
    const skillBars = document.querySelectorAll('.progress-bar');

    skillBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = '0'; // Reset width for animation
        setTimeout(() => {
            bar.style.width = width; // Animate to the specified width
        }, 500); // Delay for smoother appearance
    });
};

// Smooth scrolling for navigation links
const smoothScroll = () => {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};

// Event listeners for scroll and load
window.addEventListener('scroll', fadeInSection);
window.addEventListener('load', () => {
    fadeInSection(); // Fade in sections on page load
    fillSkillBars(); // Fill skill bars on page load
});

// Initialize smooth scrolling
smoothScroll();

