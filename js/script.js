// Animação de rolagem suave para os links de navegação
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animação de aparecimento dos elementos ao rolar a página
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const elementsToAnimate = entry.target.querySelectorAll('.skill-card, .timeline-item, .education-card, .project-card');
            
            elementsToAnimate.forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '0';
                    element.style.animation = 'fadeIn 0.8s forwards';
                    element.style.animationDelay = `${index * 0.2}s`;
                }, 100);
            });
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar as seções para animação
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Mudança de cor do menu ao rolar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(23, 42, 69, 0.9)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'var(--medium-blue)';
        header.style.backdropFilter = 'none';
    }
});