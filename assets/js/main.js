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
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -50,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            clearProps: 'all'
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

// ===== Accordion Toggle for Experience Timeline =====
function toggleAccordion(header) {
    const accordionItem = header.closest('.accordion-item');
    const body = accordionItem.querySelector('.timeline-body');
    const isOpen = body.classList.contains('open');

    // 모든 아코디언 닫기
    document.querySelectorAll('.timeline-body').forEach(item => {
        item.classList.remove('open');
    });
    document.querySelectorAll('.timeline-header').forEach(item => {
        item.classList.remove('active');
    });

    // 클릭한 아코디언만 열기 (이미 열려있지 않았다면)
    if (!isOpen) {
        body.classList.add('open');
        header.classList.add('active');
    }
}

// ===== Project Modal =====
const projectData = {
    hoit: {
        title: 'Hoit',
        period: '2025.08 - 2025.09',
        role: 'Infra, Backend',
        tech: ['AWS', 'FastAPI', 'PostgreSQL', 'Terraform'],
        description: 'AWS 기반 인프라 구축 및 FastAPI 백엔드 개발 프로젝트',
        troubleshooting: [
            {
                title: 'CloudFront Loop',
                problem: '커스텀 도메인(ho-it.site)을 CloudFront에 붙인 직후 /api/* 호출이 301 루프를 돌다가 502로 떨어졌습니다. 배포 직후 정상 동작했지만 몇 분 후부터 헬스체크까지 모두 실패해 사용자가 API를 전혀 쓰지 못했습니다.',
                analysis: 'curl -I https://ho-it.site/api/health 결과가 Via: CloudFront 헤더를 반복 출력하는 것을 보고, 오리진이 다시 CloudFront 자신을 가리키며 순환 요청이 발생한다고 판단했습니다.',
                solution: 'CloudFront 오리진을 ALB의 DNS(aws_lb.main.dns_name)로 되돌리고, ALB와는 HTTP로만 통신하도록 명시해 루프를 근본적으로 차단했습니다.',
                result: '오류율 100%였던 API 엔드포인트가 즉시 정상화되었고, CloudWatch에서 5xx 빈도가 0으로 떨어졌습니다.'
            },
            {
                title: 'ML Networking',
                problem: 'Fargate API에서 GPU EC2에 배포한 ML 모델 서버로 요청을 보내면 무조건 curl: (7) Failed to connect to 10.0.10.42:8080으로 터졌습니다.',
                analysis: '새 GPU 서버는 포트 8001에 서비스를 띄우도록 설정했는데 ECS 태스크 환경변수는 여전히 이전 포트(8080)를 바라보고 있었습니다.',
                solution: 'ML 서버와의 포트를 8001로 정착시키고 이름도 MODEL_SERVER_URL로 통일했습니다. ECS SG → ML SG 인바운드 규칙도 8001로 맞춰 재구성했습니다.',
                result: '수정 직후 /api/jobs 처리 시간이 8초대에서 1.6초로 감소했고, ML 파이프라인이 다시 하루 50건 이상을 안정적으로 소화했습니다.'
            },
            {
                title: 'ML 서버 셋팅 의존성 문제',
                problem: 'AMI에 사전 설치된 라이브러리와 음성 분석 모델 간의 의존성 충돌 발생, 시스템 드라이버(CUDA), 파이썬 라이브러리 호환성 문제 발생',
                solution: '라이브러리 버전 고정 (의존성 지옥에 따른 60개의 의존성 해결 버전 구축 및 검증된 버전으로 통일)'
            }
        ]
    },
    pintos: {
        title: 'Pintos',
        period: '2025.07 - 2025.08',
        role: '개인 프로젝트',
        tech: ['C', 'Operating System'],
        description: '교육용 운영체제 pintos의 thread, system call, virtual memory를 구현',
        troubleshooting: [
            {
                title: '페이지 폴트 시 스택 확장',
                problem: '가상 메모리 시스템 구현 중, 사용자 스택 영역에 접근할 때 해당 페이지가 존재하지 않으면 페이지 폴트가 발생했습니다. 처음에는 현재의 rsp부터 참조 주소 addr까지 모든 영역을 새로 할당해야 한다고 생각했으나, 이는 잘못된 접근이었습니다.',
                solution: '스택 접근으로 판단되는 경우(addr이 rsp보다 높으면서, addr이 USER_STACK 이하이며, addr이 rsp - 8 이상의 범위에 있을 때)에 한해, addr이 속한 페이지 단 한 페이지만 새로 할당하도록 구현했습니다.',
                result: '해당 수정 이후 pt-grow-stack, pt-write-code2 테스트를 모두 통과하며, 정상적인 스택 확장 동작을 확인했습니다.'
            }
        ],
        image: 'assets/images/stack_growth.gif'
    },
    safety: {
        title: '근로자를 위한 실시간 안전 모니터링 시스템',
        period: '2024.07 - 2024.08',
        role: 'Backend & Vision Pipeline',
        tech: ['Python', 'OpenCV', 'YOLO', 'TensorFlow', 'Elasticsearch', 'AWS S3', 'ffmpeg'],
        description: '산업·사무 환경 CCTV를 GPU 기반 YOLO 복수 모델로 동시 추론해 화재·추락·안전모 미착용을 감지하고 시각화한 뒤 HLS 스트림으로 재생성, Elasticsearch로 이벤트 메트릭을 적재하는 실시간 파이프라인을 구축했습니다.',
        troubleshooting: [
            {
                title: 'YOLO 모델 병렬 처리',
                problem: 'YOLO 탐지와 세그멘테이션 모델을 연이어 호출하면서 프레임 지연이 과도하게 발생했습니다.',
                solution: '동일 프레임을 대상으로 스레드 풀을 구성해 모델별 추론을 병렬 실행하고 프레임 간 결과를 캐시했습니다.',
                result: '평균 처리 시간 30% 단축, 초당 처리 프레임이 안정화되었습니다.'
            },
            {
                title: 'Elasticsearch 인덱싱 오류',
                problem: 'Elasticsearch 단건 인덱싱 중 413 Payload Too Large 오류가 발생하며 스트림 지표 적재가 끊겼습니다.',
                solution: 'NDJSON 버퍼를 90MB 기준으로 배치 전송하고 실패 시 재시도 로직을 분리했습니다.',
                result: '인덱싱 실패율 0%로 감소, 운영 알람 해소.'
            },
            {
                title: 'Facecam 심박 계산 안정성',
                problem: 'Facecam 심박 계산이 조도 변화에 민감해 스트레스 지수가 급등락했습니다.',
                solution: '전처리 버퍼를 초기화하고 대역 통과 필터·RMSSD 기반 스트레스 산식을 도입했습니다.',
                result: 'BPM 표준편차가 40% 감소해 모니터링 신뢰도가 개선되었습니다.'
            }
        ]
    }
};

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectData[projectId];

    if (!project) return;

    let troubleshootingHTML = '';
    project.troubleshooting.forEach(item => {
        troubleshootingHTML += `
            <div class="troubleshooting-item">
                <h4>🔧 ${item.title}</h4>
                ${item.problem ? `<p><strong>문제:</strong> ${item.problem}</p>` : ''}
                ${item.analysis ? `<p><strong>분석:</strong> ${item.analysis}</p>` : ''}
                <p><strong>해결:</strong> ${item.solution}</p>
                ${item.result ? `<p><strong>성과:</strong> ${item.result}</p>` : ''}
            </div>
        `;
    });

    const imageHTML = project.image ? `<img src="${project.image}" alt="${project.title}" style="max-width: 100%; border-radius: 8px; margin: 20px 0;">` : '';

    modalBody.innerHTML = `
        <h2 class="modal-project-title">${project.title}</h2>
        <div class="modal-project-meta">
            <div class="modal-meta-item">📅 ${project.period}</div>
            <div class="modal-meta-item">👤 ${project.role}</div>
        </div>

        <div class="modal-section">
            <h3>프로젝트 개요</h3>
            <p>${project.description}</p>
        </div>

        <div class="modal-section">
            <h3>사용 기술 스택</h3>
            <div class="modal-tech-stack">
                ${project.tech.map(t => `<span class="modal-tech-badge">${t}</span>`).join('')}
            </div>
        </div>

        ${imageHTML}

        <div class="modal-section">
            <h3>트러블슈팅</h3>
            ${troubleshootingHTML}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// 모달 외부 클릭 시 닫기
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
    }
};

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjectModal();
    }
});

// ===== Console Easter Egg =====
console.log('%c👋 안녕하세요!', 'font-size: 24px; font-weight: bold; color: #667eea;');
console.log('%c이 포트폴리오 사이트가 마음에 드시나요?', 'font-size: 16px; color: #4a5568;');
console.log('%c연락주세요! 😊', 'font-size: 16px; color: #667eea;');
