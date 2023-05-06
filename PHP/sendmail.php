<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = strip_tags(trim($_POST["name"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $message = trim($_POST["message"]);

  $recipient = "iagofranco2000@gmail.com";
  $subject = "Nova mensagem de $name";
  $email_content = "Nome: $name\n";
  $email_content .= "E-mail: $email\n\n";
  $email_content .= "Mensagem:\n$message\n";

  $headers = "From: $name <$email>";

  if (mail($recipient, $subject, $email_content, $headers)) {
    http_response_code(200);
    echo "Obrigado! Sua mensagem foi enviada.";
  } else {
    http_response_code(500);
    echo "Oops! Algo deu errado e não conseguimos enviar sua mensagem.";
  }

} else {
  http_response_code(403);
  echo "Ocorreu um problema com o seu envio. Por favor, tente novamente.";
}