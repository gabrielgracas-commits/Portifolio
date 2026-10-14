document.addEventListener('DOMContentLoaded', () => {

  // Seleciona o formulário de contato
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const nomeInput = document.getElementById('nome');
      const nomeValido = nomeInput && nomeInput.value.trim() !== '' ? nomeInput.value.trim() : 'Visitante';

      alert(`Obrigado pelo contato, ${nomeValido}! Sua mensagem foi enviada com sucesso.`);

      contactForm.reset();
    });
  }

  // Animação de rolagem suave para as seções da página
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      
      // Valida se o link começa com # e não é apenas "#" isolado
      if (targetId && targetId.startsWith('#') && targetId.length > 1) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

});