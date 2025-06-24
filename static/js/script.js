gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    setupNavigation();
    setupMobileMenu();
    setupScrollEffects();
    setupProjectCardHover();
    setupSocialLinkHover();
    setupSkillItemHover();
    setupIntersectionObserver();
});
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const erschaffe = document.querySelector('.erschaffe-text');
        if (erschaffe) erschaffe.classList.add('visible');
    }, 1800);
});

function initAnimations() {
    const tl = gsap.timeline();

    tl.to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 1.8,
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
        y: -40,
        scale: 1.1,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
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

    gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.tabs', 
  {opacity: 0, y: 30}, 
  {
    opacity: 1, y: 0, 
    duration: 1, 
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.tabs-container',
      start: 'top 90%',
      toggleActions: 'play none none reverse',
     
    }
  }
);


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
    if (!menuBtn || !mobileMenu) return;
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

    const menu = document.querySelector('.menu');
    const menuMobile = document.querySelector('.menu-mobile');
    if (menu) {
        if (window.scrollY > 200) {
            menu.classList.add('visible', 'opacity-100');
            menu.classList.remove('opacity-0');
        } else {
            menu.classList.remove('visible', 'opacity-100');
            menu.classList.add('opacity-0');
        }
    }
    if (menuMobile) {
        if (window.scrollY > 200) {
            menuMobile.classList.add('visible', 'opacity-100');
            menuMobile.classList.remove('opacity-0');
        } else {
            menuMobile.classList.remove('visible', 'opacity-100');
            menuMobile.classList.add('opacity-0');
        }
    }
});

function setupProjectCardHover() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
            const playIcon = this.querySelector('.fa-play-circle');
            if (playIcon) {
                gsap.to(playIcon, {
                    scale: 1.2,
                    color: "#e53935",
                    filter: "drop-shadow(0 0 16px #e53935cc)",
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
            const playIcon = this.querySelector('.fa-play-circle');
            if (playIcon) {
                gsap.to(playIcon, {
                    scale: 1,
                    color: "#e53935",
                    filter: "none",
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    });
}

function setupSocialLinkHover() {
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            gsap.to(this, {
                rotation: 360,
                duration: 0.6,
                ease: 'power2.out'
            });
            this.style.boxShadow = '0 0 20px rgba(234, 193, 8, 0.6)';
        });
        link.addEventListener('mouseleave', function() {
            gsap.to(this, {
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
            this.style.boxShadow = '';
        });
    });
}

function setupSkillItemHover() {
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
}

function setupIntersectionObserver() {
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

    gsap.fromTo(
        ".cinematic-question",
        { scale: 0.85, opacity: 0 },
        {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".cinematic-question",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
}

document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const projects = document.querySelectorAll('#projects-container > .project-card');

  function setActiveTab(activeBtn) {
    tabButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category.toLowerCase();
      setActiveTab(btn);

      projects.forEach(project => {
        const projCat = project.dataset.category.toLowerCase();
        if (category === 'all' || projCat === category) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });

  if (tabButtons.length > 0) {
    tabButtons[0].click();
  }
});


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('youtube-modal');
    const iframe = document.getElementById('youtube-iframe');
    const closeBtn = document.getElementById('youtube-modal-close');

    document.querySelectorAll('.project-image[data-youtube-id]').forEach(el => {
        el.addEventListener('click', () => {
            const videoId = el.dataset.youtubeId;
            if (!videoId) return;

            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            modal.classList.remove('opacity-0', 'pointer-events-none');
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.add('opacity-0', 'pointer-events-none');
        iframe.src = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBtn.click();
        }
    });
});

const overlay = document.getElementById('overlay');
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    overlay.style.opacity = '1';
    card.classList.add('highlighted');
  });

  card.addEventListener('mouseleave', () => {
    overlay.style.opacity = '0';
    card.classList.remove('highlighted');
  });
});

const homeSection = document.getElementById('portfolio_frames');
const latrakaEffect = document.querySelector('.latraka-effect');

homeSection.addEventListener('mousemove', e => {
  const rect = homeSection.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const xPercent = (x / rect.width) * 100 + '%';
  const yPercent = (y / rect.height) * 100 + '%';

  latrakaEffect.style.setProperty('--mouse-x', xPercent);
  latrakaEffect.style.setProperty('--mouse-y', yPercent);
});


function getAverageBrightness(img, callback) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  img.crossOrigin = 'Anonymous';  

  img.onload = () => {
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let total = 0;
    const length = imageData.data.length / 4;  
    for (let i = 0; i < imageData.data.length; i += 4) {
      const r = imageData.data[i];
      const g = imageData.data[i + 1];
      const b = imageData.data[i + 2];
      total += (r + g + b) / 3;  
    }

    const avgBrightness = total / length;
    callback(avgBrightness);
  };

  img.onerror = () => {
    callback(null);
  };

  if (img.complete && img.naturalWidth !== 0) {
    img.onload();
  }
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-image img').forEach(img => {
    getAverageBrightness(img, (brightness) => {
      const overlay = img.parentElement.querySelector('.video-overlay');
      if (!overlay) return;

      if (brightness !== null) {
        if (brightness > 180) {
          overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        } else {
          overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        }
      }
    });
  });
});
document.querySelectorAll('.skill-item.puzzle').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const text = item.getAttribute('data-text');
    const display = document.getElementById('skill-text-display');
    if (display) {
      display.textContent = text;
    }
  });

  item.addEventListener('mouseleave', () => {
    const display = document.getElementById('skill-text-display');
    if (display) {
      display.textContent = '';
    }
  });
});

