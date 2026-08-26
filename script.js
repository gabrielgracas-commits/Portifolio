// Aguarda o carregamento completo do DOM antes de executar os scripts
document.addEventListener('DOMContentLoaded', () => {

  // Seleciona o formulário de contato
  const contactForm = document.querySelector('.contact-form');

  // Adiciona evento de submissão do formulário
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      // Impede o comportamento padrão de recarregar a página
      event.preventDefault();

      // Obtém o nome digitado pelo usuário
      const nomeInput = document.getElementById('nome');
      const nome = nomeInput ? nomeInput.value : 'Visitante';

      // Mensagem de confirmação amigável
      alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`);

      // Reseta os campos do formulário após o envio
      contactForm.reset();
    });
  }

  // Animação de rolagem suave para as seções da página
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      
      // Verifica se o link é para uma seção interna (#)
      if (targetId.startsWith('#')) {
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