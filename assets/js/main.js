// ===== Theme Toggle (Dark Mode) =====
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// 로컬스토리지에서 테마 불러오기
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

// 테마 토글 이벤트
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // 애니메이션 효과
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
});

// ===== Mobile Menu Toggle =====
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // 햄버거 메뉴 애니메이션
    mobileMenuToggle.classList.toggle('active');
});

// 메뉴 링크 클릭 시 모바일 메뉴 닫기
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // 네비게이션 높이만큼 오프셋
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // 스크롤 시 그림자 효과
    if (currentScroll > 50) {
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===== Scroll Animations with Intersection Observer =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 애니메이션을 적용할 요소들 선택
const animatedElements = document.querySelectorAll(`
    .contact-card,
    .project-card,
    .timeline-item,
    .about-text,
    .about-skills
`);

animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== GSAP Animations (if needed) =====
// GSAP이 로드되었는지 확인
if (typeof gsap !== 'undefined') {
    // Hero Section 애니메이션
    gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.hero-illustration', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });

    // Floating Cards 애니메이션
    gsap.to('.floating-card', {
        y: -20,
        duration: 2,
        ease: 'power1.inOut',
        stagger: 0.2,
        repeat: -1,
        yoyo: true
    });

    // ScrollTrigger 등록
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Contact Cards 애니메이션
        gsap.from('.contact-card', {
            scrollTrigger: {
                trigger: '.contact-grid',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
        });

        // Project Cards 애니메이션
        gsap.from('.project-card', {
            scrollTrigger: {
                trigger: '.projects-grid',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });

        // Timeline 애니메이션
        gsap.from('.timeline-item', {
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: -50,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });

        // About Section 애니메이션
        gsap.from('.about-text', {
            scrollTrigger: {
                trigger: '.about-content',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: 'power3.out'
        });

        gsap.from('.about-skills', {
            scrollTrigger: {
                trigger: '.about-content',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: 50,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out'
        });

        // Section Title 애니메이션
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 30,
                duration: 0.6,
                ease: 'power3.out'
            });
        });

        // Skill Tags Hover Animation
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            tag.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }
}

// ===== Active Nav Link Highlight =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// ===== Typing Effect for Hero Title (Optional) =====
// 원하시면 타이핑 효과도 추가할 수 있습니다
// const heroTitle = document.querySelector('.hero-title');
// const text = heroTitle.textContent;
// heroTitle.textContent = '';
// let i = 0;

// function typeWriter() {
//     if (i < text.length) {
//         heroTitle.textContent += text.charAt(i);
//         i++;
//         setTimeout(typeWriter, 100);
//     }
// }

// typeWriter();

// ===== Console Easter Egg =====
console.log('%c👋 안녕하세요!', 'font-size: 24px; font-weight: bold; color: #667eea;');
console.log('%c이 포트폴리오 사이트가 마음에 드시나요?', 'font-size: 16px; color: #4a5568;');
console.log('%c연락주세요! 😊', 'font-size: 16px; color: #667eea;');
