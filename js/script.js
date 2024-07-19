document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    const burgerButton = document.getElementById('burger-button');
    const mobileNav = document.getElementById('mobile-nav');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle mobile menu
    burgerButton.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
        burgerButton.classList.toggle('open');
        if (burgerButton.classList.contains('open')) {
            burgerButton.innerHTML = '<i class="fas fa-times text-2xl"></i>';
        } else {
            burgerButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
        }
    });

    // Toggle dropdown menu on click
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const content = dropdown.querySelector('.dropdown-content');
        const icon = link.querySelector('.fas');

        link.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('open');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });

    // Close dropdown menu when clicking outside
    document.addEventListener('click', (e) => {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                const content = dropdown.querySelector('.dropdown-content');
                const icon = dropdown.querySelector('a .fas');
                if (dropdown.classList.contains('open')) {
                    dropdown.classList.remove('open');
                    icon.classList.add('fa-chevron-down');
                    icon.classList.remove('fa-chevron-up');
                }
            }
        });
    });

    // Make header fixed on scroll with transition
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// *****************************_________________________________________ 

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('.accordion-icon');
        const isOpen = content.style.display === 'block';

        // Close all accordions
        document.querySelectorAll('.accordion-content').forEach(item => {
            item.style.display = 'none';
        });
        document.querySelectorAll('.accordion-icon').forEach(icon => {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        });

        // Toggle current accordion
        if (!isOpen) {
            content.style.display = 'block';
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        }
    });
});

// *****************************_________________________________________ 
// TESTIMONIALS NEXT AND PREV 

const testimonialsContainer = document.getElementById('testimonials-container');
const testimonials = document.getElementById('testimonials');
const dots = document.querySelectorAll('.dot');
let currentSlideIndex = 0;
const slides = testimonials.children.length;
let slideWidth = testimonialsContainer.clientWidth;

function showSlide(index) {
    testimonials.style.transform = `translateX(-${index * slideWidth}px)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('dot-active', i === index);
    });
}

document.getElementById('prev').addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex === 0) ? slides - 1 : currentSlideIndex - 1;
    showSlide(currentSlideIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex === slides - 1) ? 0 : currentSlideIndex + 1;
    showSlide(currentSlideIndex);
});

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(index);
}

window.addEventListener('resize', () => {
    slideWidth = testimonialsContainer.clientWidth;
    showSlide(currentSlideIndex);
});

showSlide(currentSlideIndex);

// ******************************_________________________________________ 
// SECTION DES TéMOIGNAGES VIDEO 

document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.play-button');
    const videoPopup = document.querySelector('.video-popup');
    const videoPopupClose = document.querySelector('.video-popup-close');

    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            videoPopup.classList.add('active');
        });
    });

    videoPopupClose.addEventListener('click', () => {
        videoPopup.classList.remove('active');
    });

    videoPopup.addEventListener('click', (event) => {
        if (event.target === videoPopup) {
            videoPopup.classList.remove('active');
        }
    });
});

