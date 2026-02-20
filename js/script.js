// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't close for internal page navigation
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Set active link based on current page
    setActiveNavLink();
});

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards when page loads
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.stat-card, .event-card, .insight-card, .feature-card, .logo-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
});

// Add active class to navbar on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Counter animation for stats
function animateCounters() {
    const statCards = document.querySelectorAll('.stat-card h3');
    const speed = 200;

    statCards.forEach(card => {
        const target = parseInt(card.innerText.replace(/\D/g, ''));
        let current = 0;
        const increment = target / speed;

        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                card.innerText = target + '+';
                clearInterval(counter);
            } else {
                card.innerText = Math.ceil(current) + '+';
            }
        }, 10);
    });
}

// Trigger counter animation when stats section is visible
document.addEventListener('DOMContentLoaded', function() {
    const highlightsSection = document.querySelector('.highlights');
    if (highlightsSection) {
        let hasAnimated = false;
        const highlightsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    animateCounters();
                    hasAnimated = true;
                    highlightsObserver.unobserve(entry.target);
                }
            });
        });
        highlightsObserver.observe(highlightsSection);
    }
});

// Form handling (if forms are present)
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Simulate form submission
    console.log('Form submitted with data:', Object.fromEntries(formData));
    alert('Thank you for your submission! We will contact you soon.');
    form.reset();
}

// Add event listeners to forms
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
});

// Navigate between pages (for pages that need it)
function navigateTo(page) {
    window.location.href = page;
}

// Utility function to highlight current section
function highlightCurrentSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightCurrentSection);
