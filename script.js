// script.js
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
  
      // Toggle the answer's visibility
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });

  let lastScrollY = window.scrollY;

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

// Fecha o menu se clicar fora dele
document.addEventListener('click', (event) => {
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.menu-btn');

    // Verifica se o clique foi fora do menu e do botão de menu
    if (!navbar.contains(event.target) && !menuBtn.contains(event.target)) {
        navbar.classList.remove('active');
    }
});

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > lastScrollY) {
        // Rolando para baixo - esconde o menu e fecha a lista
        header.classList.add("hide");
        navbar.classList.remove('active');
    } else {
        // Rolando para cima - mostra o menu
        header.classList.remove("hide");
    }
    lastScrollY = window.scrollY;
});


document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');
  const faqAnswers = document.querySelectorAll('.faq-answer');

  // Função para fechar todas as respostas
  function closeAllAnswers() {
    faqAnswers.forEach(answer => {
      answer.style.display = 'none';
    });
  }

  // Abrir/fechar a pergunta clicada
  faqQuestions.forEach(question => {
    question.addEventListener('click', (e) => {
      // Impede o clique de fechar imediatamente a resposta
      e.stopPropagation();

      // Fecha todas as outras respostas
      closeAllAnswers();

      // Alterna a exibição da resposta correspondente
      const answer = question.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Fecha todas as respostas ao clicar fora do FAQ
  document.addEventListener('click', () => {
    closeAllAnswers();
  });
});
