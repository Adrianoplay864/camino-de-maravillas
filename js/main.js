// main.js
// Newsletter
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    alert(
      `Obrigado por se inscrever! Em breve enviaremos nossas melhores ofertas para: ${emailInput.value}`
    );
    emailInput.value = "";
  });
}

// Função para gerar mensagem personalizada para WhatsApp
function generateWhatsAppMessage(destination, price) {
  return `Olá! Tenho interesse no pacote para ${destination} no valor de ${price}. Poderia me enviar mais informações?`;
}

// Event listener para rolagem suave (se houver âncoras na mesma página)
document.addEventListener('DOMContentLoaded', function() {
  // Rolagem suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Só aplica rolagem suave para âncoras na mesma página
      if (href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Ajuste para o header fixo
            behavior: 'smooth'
          });
        }
      }
    });
  });
});