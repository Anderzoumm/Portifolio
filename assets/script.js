// Aguarda o conteúdo do DOM ser totalmente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- EFEITO DE DIGITAÇÃO NA PÁGINA INICIAL ---
    const typingElement = document.querySelector('.typing-effect');
    const words = ["Desenvolvedor Web", "Programador Python", "Analista de dados"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        // Pega a palavra atual
        const currentWord = words[wordIndex];
        // Pega a parte da palavra a ser exibida
        const currentChar = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);

        // Atualiza o texto no elemento
        if (typingElement) {
            typingElement.textContent = currentChar;
        }

        // Lógica para avançar ou retroceder na digitação
        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        // Define a velocidade da digitação
        const typingSpeed = isDeleting ? 100 : 200;
        setTimeout(type, charIndex === currentWord.length ? 1500 : typingSpeed);
    }
    // Inicia a função de digitação se o elemento existir
    if (typingElement) {
        type();
    }


    // --- BOTÃO DE VOLTAR AO TOPO ---
    const backToTopButton = document.getElementById('back-to-top');

    // Mostra ou esconde o botão baseado na posição da rolagem
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // btao de clique para rolar suavemente para o topo
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // --- BOTÃO DE TROCA DE TEMA (LIGHT/DARK) ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
    }

    // Ação de clique para trocar o tema
    themeToggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme'); // Salva a preferência
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme'); // Salva a preferência
        }
    });

});
    // --- FUNCIONALIDADE: FORMULÁRIO PARA WHATSAPP (MÉTODO ATUALIZADO) ---
    const sendButton = document.getElementById('send-whatsapp');

    if (sendButton) {
        sendButton.addEventListener('click', function() {
            const phoneNumber = '5583982173372';

            // Pega os valores dos campos do formulário
            const name = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('mensagem').value;

            // O HTML já tem 'required', então o navegador deve impedir o envio se os campos estiverem vazios.
            // Se algum campo estiver vazio, a função para aqui.
            if (name === '' || email === '' || message === '') {
                return;
            }

            // Monta a mensagem que será enviada
            const whatsappMessage = `Olá! Meu nome é ${name}.\n\nE-mail: ${email}\n\nMensagem: ${message}`;

            // Codifica a mensagem para ser usada em uma URL
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Cria o link do WhatsApp
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Abre o link em uma nova aba
            window.open(whatsappURL, '_blank');
        });
    }

;
