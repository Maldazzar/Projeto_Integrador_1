/*
* Validações realizadas:
*
* 1. O campo "Nome" não pode estar vazio.
* 2. O campo "Email" não pode estar vazio e deve seguir um formato válido de email.
* 3. O campo "Mensagem" não pode estar vazio.
* 4. Adição da função em AJAX que realiza o envio do formulário.
* 5. Adição da mensagem de agradecimento após o envio do formulário.
*
*/

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.cadastro-form');

    // Adiciona estilos para as mensagens de erro e sucesso via JavaScript
    const style = document.createElement('style');
    style.textContent = `
        .error-message {
            color: #ff0000; /* Cor vermelha para a mensagem de erro */
            font-size: 0.875rem; /* Tamanho da fonte menor */
            margin-top: 0.25rem; /* Espaçamento acima da mensagem */
            display: block; /* Mensagem em bloco para quebrar a linha */
        }
        .input-error {
            border-color: #ff0000; /* Borda vermelha ao redor do campo com erro */
        }
        .feedback-message {
            margin-top: 1rem;
            font-size: 1rem;
            font-weight: bold;
        }
        .success-message {
            color: #008000; /* Cor verde para a mensagem de sucesso */
        }
        .error-feedback-message {
            color: #ff0000; /* Cor vermelha para a mensagem de erro de envio */
        }
    `;
    document.head.appendChild(style);

    form.addEventListener('submit', function (event) {
        // Impede o envio do formulário até que todas as validações sejam feitas
        event.preventDefault();

        // Seleciona os campos do formulário
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // Limpa mensagens de erro anteriores
        clearErrors();

        // Limpa mensagem de feedback anterior
        clearFeedbackMessage();

        // Variável de controle para verificar se todas as validações foram bem-sucedidas
        let isValid = true;

        // Validação 1: O campo "Nome" não pode estar vazio
        if (name.value.trim() === '') {
            showError(name, 'O nome é obrigatório.');
            isValid = false;
        }

        // Validação 2: O campo "Email" não pode estar vazio e deve seguir um formato válido de email
        if (email.value.trim() === '') {
            showError(email, 'O email é obrigatório.');
            isValid = false;
        } else if (!validateEmail(email.value)) {
            showError(email, 'Por favor, insira um email válido.');
            isValid = false;
        }

        // Validação 3: O campo "Mensagem" não pode estar vazio
        if (message.value.trim() === '') {
            showError(message, 'A mensagem é obrigatória.');
            isValid = false;
        }

        // Se todas as validações forem bem-sucedidas, envia o formulário via AJAX
        if (isValid) {
            sendForm(name.value, email.value, message.value);
        } else {
            // Se houver erros, exibe mensagem de erro
            showFeedbackMessage('Existem dados incorretos no formulário. Por favor, corrija antes de enviar.', 'error');
        }
    });

    // Função para validar o formato do email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Função para exibir mensagem de erro
    function showError(element, message) {
        const error = document.createElement('span');
        error.className = 'error-message';
        error.textContent = message;
        element.parentElement.appendChild(error);
        element.classList.add('input-error');
    }

    // Função para limpar mensagens de erro anteriores
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function (error) {
            error.remove();
        });

        const errorInputs = document.querySelectorAll('.input-error');
        errorInputs.forEach(function (input) {
            input.classList.remove('input-error');
        });
    }

    // Função para exibir mensagem de feedback (sucesso ou erro)
    function showFeedbackMessage(message, type) {
        const feedback = document.createElement('p');
        feedback.className = `feedback-message ${type === 'success' ? 'success-message' : 'error-feedback-message'}`;
        feedback.textContent = message;
        form.appendChild(feedback);
    }

    // Função para limpar a mensagem de feedback anterior
    function clearFeedbackMessage() {
        const feedbackMessage = document.querySelector('.feedback-message');
        if (feedbackMessage) {
            feedbackMessage.remove();
        }
    }

    // Função para enviar o formulário via AJAX
    function sendForm(name, email, message) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'seu-endereco-de-envio.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // Trata a resposta da requisição AJAX
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    showFeedbackMessage('Sua mensagem foi enviada com sucesso! Obrigado pelo contato.', 'success');
                    form.reset(); // Limpa o formulário após o envio bem-sucedido
                } else {
                    showFeedbackMessage('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.', 'error');
                }
            }
        };

        // Envia os dados do formulário
        xhr.send(`name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`);
    }
});
