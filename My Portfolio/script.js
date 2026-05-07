// Select elements
const header = document.querySelector('.header');
const navBar = document.getElementById('nav-bar');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-bar li a');

// Handle scroll effect for navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Toggle mobile menu
mobileMenu.addEventListener('click', () => {
    navBar.classList.toggle('active');
    // Change icon based on state
    const icon = mobileMenu.querySelector('i');
    if (navBar.classList.contains('active')) {
        icon.classList.replace('bx-menu', 'bx-x');
    } else {
        icon.classList.replace('bx-x', 'bx-menu');
    }
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.replace('bx-x', 'bx-menu');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
