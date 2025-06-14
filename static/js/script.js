gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    setupNavigation();
    setupMobileMenu();
    setupScrollEffects();
});

function initAnimations() {
    const tl = gsap.timeline();
    
    tl.to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out'
    })
    .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8')
    .to('.glass-panel', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .to('.cta-button', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.4');

    gsap.to('.adobe-element', {
        y: -30,
        scale: 1.1,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 2
    });
}

function setupScrollEffects() {
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.fromTo(title, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.fromTo(card, {
            opacity: 0,
            y: 100,
            scale: 0.8
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            },
            delay: index * 0.2
        });
    });

    gsap.utils.toArray('.skill-item').forEach((skill, index) => {
        gsap.fromTo(skill, {
            opacity: 0,
            y: 30,
            scale: 0.9
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: skill,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            delay: index * 0.1
        });
    });

    gsap.fromTo('.about-image', {
        opacity: 0,
        x: -100
    }, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-image',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.fromTo('.about-content', {
        opacity: 0,
        x: 100
    }, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const portfolioSection = document.querySelector('#portfolio');
            if (portfolioSection) {
                const offsetTop = portfolioSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

function setupMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuLinks = mobileMenu.querySelectorAll('a');
    
    let isMenuOpen = false;
    
    menuBtn.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            gsap.to(mobileMenu, {
                x: 0,
                duration: 0.3,
                ease: 'power3.out'
            });
            menuBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            gsap.to(mobileMenu, {
                x: '100%',
                duration: 0.3,
                ease: 'power3.out'
            });
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            isMenuOpen = false;
            gsap.to(mobileMenu, {
                x: '100%',
                duration: 0.3,
                ease: 'power3.out'
            });
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.floating-elements');
    
    if (parallax) {
        const speed = scrolled * 0.1;
        parallax.style.transform = `translateY(${speed}px)`;
    }

    const timelineOverlay = document.querySelector('.timeline-overlay');
    if (timelineOverlay) {
        const progress = Math.min(scrolled / (document.body.scrollHeight - window.innerHeight), 1);
        timelineOverlay.style.background = `linear-gradient(90deg, 
            #eab308 0%, 
            #22c55e ${progress * 25}%, 
            #fbbf24 ${progress * 50}%, 
            #22c55e ${progress * 75}%, 
            #eab308 100%)`;
    }
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        gsap.to(this, {
            rotation: 360,
            duration: 0.6,
            ease: 'power2.out'
        });
        
        // Add yellow glow effect
        this.style.boxShadow = '0 0 20px rgba(234, 179, 8, 0.6)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
        }
    });
}, observerOptions);

document.querySelectorAll('.loading').forEach(el => {
    observer.observe(el);
});

// Enhanced hover effects for skill items
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        const icon = this.querySelector('i');
        gsap.to(icon, {
            scale: 1.3,
            rotation: 360,
            duration: 0.5,
            ease: 'power2.out'
        });
        
        this.style.boxShadow = '0 10px 30px rgba(234, 179, 8, 0.4)';
    });
    
    skill.addEventListener('mouseleave', function() {
        const icon = this.querySelector('i');
        gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
        
        this.style.boxShadow = '';
    });
});
