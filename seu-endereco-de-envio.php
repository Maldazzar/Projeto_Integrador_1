<?php
// Verifica se a requisição é do tipo POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recebe os dados enviados pelo formulário
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';

    // Variável de controle para verificar se há erros
    $errors = [];

    // Validações no lado do servidor (também feitas no JS)
    if (empty($name)) {
        $errors[] = 'O nome é obrigatório.';
    }

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Por favor, insira um email válido.';
    }

    if (empty($message)) {
        $errors[] = 'A mensagem é obrigatória.';
    }

    // Se houver erros, retorna uma mensagem de erro
    if (count($errors) > 0) {
        // Configura o cabeçalho HTTP como erro
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => implode(" ", $errors)]);
        exit;
    }

    // Caso contrário, processa os dados (ex: enviar por email, salvar em um banco de dados, etc.)
    // Exemplo: enviar email
    $to = "fredericog2009@gmail.com"; // Substitua pelo seu email
    $subject = "Nova mensagem de contato de $name";
    $body = "Nome: $name\nEmail: $email\n\nMensagem:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        // Retorna sucesso se o email foi enviado
        echo json_encode(["status" => "success", "message" => "Sua mensagem foi enviada com sucesso!"]);
    } else {
        // Retorna erro se houve falha no envio do email
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente."]);
    }
} else {
    // Se não for POST, retorna erro 405 (Método não permitido)
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Método de requisição não permitido."]);
}
