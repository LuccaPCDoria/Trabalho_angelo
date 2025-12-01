// Script consolidado: navegação, animações por classe, parallax otimizado, lazyload e validação
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    const navLinks = document.querySelectorAll('.nav__link');

    // Navegação mobile: toggles e fechamento
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            const spans = navToggle.querySelectorAll('span');
            if (spans.length >= 3) {
                const active = navMenu.classList.contains('active');
                spans[0].style.transform = active ? 'rotate(-45deg) translate(-5px, 6px)' : '';
                spans[1].style.opacity = active ? '0' : '1';
                spans[2].style.transform = active ? 'rotate(45deg) translate(-5px, -6px)' : '';
            }
        });

        navLinks.forEach(link => link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            if (spans.length >= 3) {
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        }));

        document.addEventListener('click', function (e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                if (spans.length >= 3) {
                    spans[0].style.transform = '';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = '';
                }
            }
        });
    }

    // Smooth scroll para âncoras internas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        });
    });

    // Criar botão voltar ao topo se não existir
    let scrollTopBtn = document.querySelector('.scroll-top');
    if (!scrollTopBtn) {
        scrollTopBtn = document.createElement('button');
        scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollTopBtn.className = 'scroll-top';
        document.body.appendChild(scrollTopBtn);
    }
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // IntersectionObserver para animações: adiciona classe e para de observar
    const animObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

    // Preparar elementos animáveis
    const animatedElements = document.querySelectorAll('.projeto-card, .sobre__content, .contato__info, .contato__form, .hero__content');
    animatedElements.forEach(el => {
        if (!el.classList.contains('animate')) el.classList.add('animate');
        animObserver.observe(el);
    });

    // Validação do formulário de contato
    const form = document.querySelector('.contato__form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const nomeField = form.querySelector('input[type="text"]');
            const emailField = form.querySelector('input[type="email"]');
            const mensagemField = form.querySelector('textarea');
            const nome = nomeField ? nomeField.value.trim() : '';
            const email = emailField ? emailField.value.trim() : '';
            const mensagem = mensagemField ? mensagemField.value.trim() : '';
            if (!nome || !email || !mensagem) { alert('Por favor, preencha todos os campos.'); return; }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) { alert('Por favor, insira um email válido.'); return; }
            alert('Obrigado pela mensagem! Entrarei em contato em breve.');
            form.reset();
        });
    }

    // Lazy loading para imagens (IntersectionObserver)
    const lazyImages = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window && lazyImages.length) {
        const imageObserver = new IntersectionObserver((entries, io) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    io.unobserve(img);
                }
            });
        });
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Parallax e atualização de estado no scroll (rAF batching)
    const parallaxEl = document.querySelector('.hero');
    const sections = document.querySelectorAll('section[id]');
    const navLinksList = document.querySelectorAll('.nav__link');
    let ticking = false;

    function updateActiveLink() {
        let current = '';
        const offset = 100;
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
            const height = section.clientHeight;
            if (window.pageYOffset >= top && window.pageYOffset < top + height) {
                current = section.getAttribute('id');
            }
        });
        navLinksList.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
    }

    function handleScroll() {
        // mostrar/esconder botão topo
        if (window.pageYOffset > 300) scrollTopBtn.classList.add('active');
        else scrollTopBtn.classList.remove('active');

        // parallax otimizado
        if (parallaxEl) {
            const scrolled = window.pageYOffset;
            const speed = scrolled * 0.12; // velocidade reduzida
            parallaxEl.style.transform = `translate3d(0, ${speed}px, 0)`;
            parallaxEl.style.willChange = 'transform';
        }

        updateActiveLink();
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => { handleScroll(); ticking = false; });
            ticking = true;
        }
    }, { passive: true });

    // executar uma vez para inicializar estado
    handleScroll();
});

document.querySelectorAll('.carrossel').forEach(carrossel => {
    const imagens = carrossel.querySelectorAll('.carrossel-img');
    let idx = 0;

    function showImage(i) {
        imagens.forEach((img, j) => {
            img.classList.toggle('active', j === i);
        });
    }

    carrossel.querySelector('.carrossel-btn.prev').onclick = () => {
        idx = (idx - 1 + imagens.length) % imagens.length;
        showImage(idx);
    };
    carrossel.querySelector('.carrossel-btn.next').onclick = () => {
        idx = (idx + 1) % imagens.length;
        showImage(idx);
    };
});