// js/scripts.js

// Espera todo o HTML da página carregar antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    
    // Encontra o botão e o menu de navegação no HTML
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // Só executa o código se ambos os elementos existirem
    if (menuToggle && mainNav) {
        
        // 1. Funcionalidade de abrir/fechar o menu ao clicar no botão
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active'); // Usaremos a classe 'active'
        });

        // 2. Funcionalidade de fechar o menu ao clicar em um link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Se o menu estiver aberto (contém a classe 'active'), ele a remove para fechar
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            });
        });
    }
});