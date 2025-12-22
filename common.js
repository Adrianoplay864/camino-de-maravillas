// common.js - Funcionalidades compartilhadas entre todas as páginas

// 1. Carregar componentes HTML
function loadComponent(id, file) {
    return fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Erro ao carregar ${file}`);
            return response.text();
        })
        .then(data => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = data;
                return true;
            }
            return false;
        })
        .catch(error => {
            console.error(`Erro ao carregar ${file}:`, error);
            return false;
        });
}

// 2. Inicializar Header com menu mobile
function initializeHeader() {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const navLinks = document.getElementById("navLinks");
    
    if (!mobileMenuBtn || !navLinks) return;
    
    mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const icon = mobileMenuBtn.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-times");
        }
    });
    
    // Fechar menu ao clicar em links
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            const icon = mobileMenuBtn?.querySelector("i");
            if (icon) {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    });
}

// 3. Obter parâmetros da URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 4. Inicializar animações de scroll
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, observerOptions);
    
    // Observar elementos com classe fade-in
    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
}

// 5. Formulário de newsletter
function initializeNewsletter() {
    const form = document.querySelector('.newsletter-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Simular envio
        alert(`Obrigado por se inscrever! Em breve você receberá nossas ofertas em ${email}`);
        this.reset();
    });
}

// 6. Inicialização geral quando a página carrega
document.addEventListener("DOMContentLoaded", function() {
    // Inicializar animações
    initializeAnimations();
    
    // Inicializar newsletter
    initializeNewsletter();
    
    // Adicionar classe para indicar que JS está ativo
    document.body.classList.add('js-enabled');
    
    // Scroll suave para âncoras internas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 7. WhatsApp float button behavior
document.addEventListener('DOMContentLoaded', function() {
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
        whatsappFloat.addEventListener('click', function(e) {
            if (!this.href.includes('whatsapp')) {
                e.preventDefault();
                window.open('https://wa.me/573125493738', '_blank');
            }
        });
    }
});