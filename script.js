// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');

if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.right = '0';
            nav.style.backgroundColor = '#ffffff';
            nav.style.padding = '1rem';
            nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (window.innerWidth < 768 && nav) {
                nav.style.display = 'none';
            }
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // In a real application, you would send this data to a server
        // For now, we'll just show a success message
        alert('Thank you for your quote request! We will contact you shortly.');
        
        // Reset the form
        contactForm.reset();
    });
}

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Add transition to header
if (header) {
    header.style.transition = 'transform 0.3s ease-in-out';
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards, testimonial cards, and stat cards
const animatedElements = document.querySelectorAll('.service-card, .testimonial-card, .stat-card, .about-feature');

animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth < 768 && nav && mobileMenuBtn) {
        if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            nav.style.display = 'none';
        }
    }
});

// Close mobile menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && nav) {
        nav.style.display = '';
        nav.style.flexDirection = '';
        nav.style.position = '';
        nav.style.top = '';
        nav.style.left = '';
        nav.style.right = '';
        nav.style.backgroundColor = '';
        nav.style.padding = '';
        nav.style.boxShadow = '';
    }
});
