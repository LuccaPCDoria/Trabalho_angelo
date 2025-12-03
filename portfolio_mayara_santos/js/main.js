document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            if(navMenu) navMenu.classList.remove('active'); 
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.hero__content, .bento-item, .card-projeto');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

function abrirDetalhes(id) {
    const gridProjetos = document.querySelector('.projetos__grid');
    const headerProjetos = document.querySelector('.projetos .section__header');
    const detalhe = document.getElementById(`detalhes-${id}`);
    
    if (gridProjetos && headerProjetos && detalhe) {
        gridProjetos.classList.add('hidden');
        headerProjetos.classList.add('hidden');
        detalhe.classList.remove('hidden');
        detalhe.scrollIntoView({ behavior: 'smooth' });
    }
}

function fecharDetalhes(id) {
    const gridProjetos = document.querySelector('.projetos__grid');
    const headerProjetos = document.querySelector('.projetos .section__header');
    const detalhe = document.getElementById(`detalhes-${id}`);
    
    if (gridProjetos && headerProjetos && detalhe) {
        detalhe.classList.add('hidden');
        gridProjetos.classList.remove('hidden');
        headerProjetos.classList.remove('hidden');
        document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' });
    }
}
