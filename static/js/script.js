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

    gsap.to('.floating-element', {
        y: -30,
        rotation: 360,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 1
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
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: targetSection,
                        offsetY: 80
                    },
                    ease: 'power3.inOut'
                });
            }
        });
    });

    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            gsap.to(window, {
                duration: 1.5,
                scrollTo: {
                    y: '#portfolio',
                    offsetY: 80
                },
                ease: 'power3.inOut'
            });
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
        const speed = scrolled * 0.2;
        parallax.style.transform = `translateY(${speed}px)`;
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
