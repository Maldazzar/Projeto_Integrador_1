// ---------- VALIDAÇÃO FORMULÁRIO PACIENTE ---------- //
let pacienteNomeInput = document.getElementById("nomeCompleto");
let pacienteNomeLabel = document.querySelector('label[for="nomeCompleto"]');
let pacienteNomeHelper = document.getElementById("nomeCompleto-helper");

let pacienteEmailInput = document.getElementById("emailFornecido");
let pacienteEmailLabel = document.querySelector("label[for='emailFornecido']");
let pacienteEmailHelper = document.getElementById("emailFornecido-helper");

// Mostrar popup de campo obrigatório para nome do paciente
pacienteNomeInput.addEventListener("focus", () => {
  pacienteNomeLabel.classList.add("required-popup");
});

// Ocultar popup de campo obrigatório para nome do paciente
pacienteNomeInput.addEventListener("blur", () => {
  pacienteNomeLabel.classList.remove("required-popup");
});

// Validar valor do input nome do paciente
pacienteNomeInput.addEventListener("input", (evento) => {
  const valor = evento.target.value;
  let mensagem;
  let nomeValido = valor.length >= 3;

  if (nomeValido) {
    mensagem = "Nome inserido válido";
    pacienteNomeInput.style.borderColor = "green";
    pacienteNomeHelper.style.color = "green";
    pacienteNomeHelper.innerText = mensagem;
    pacienteNomeHelper.style.display = "block";
  } else {
    mensagem = "Nome inserido deve conter ao menos 3 caracteres";
    pacienteNomeInput.style.borderColor = "red";
    pacienteNomeHelper.style.color = "red";
    pacienteNomeHelper.innerText = mensagem;
    pacienteNomeHelper.style.display = "block";
  }
  console.log(mensagem);
});

// Função para validar o e-mail
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Validação do email do paciente
pacienteEmailInput.addEventListener("input", (evento) => {
  const valor = evento.target.value;
  let mensagem;
  let emailValido = validarEmail(valor);

  if (emailValido) {
    mensagem = "E-mail válido";
    pacienteEmailInput.style.borderColor = "green";
    pacienteEmailHelper.style.color = "green";
    pacienteEmailHelper.innerText = mensagem;
    pacienteEmailHelper.style.display = "block";
  } else {
    mensagem = "Endereço deve ser um e-mail válido";
    pacienteEmailInput.style.borderColor = "red";
    pacienteEmailHelper.style.color = "red";
    pacienteEmailHelper.innerText = mensagem;
    pacienteEmailHelper.style.display = "block";
  }
  console.log(mensagem);
});

// ---------- VALIDAÇÃO FORMULÁRIO DOADOR ---------- //
let doadorNomeInput = document.getElementById("nomeCompletoD");
let doadorNomeLabel = document.querySelector('label[for="nomeCompletoD"]');
let doadorNomeHelper = document.getElementById("nomeCompletoD-helper");

let doadorEmailInput = document.getElementById("emailFornecidoD");
let doadorEmailLabel = document.querySelector("label[for='emailFornecidoD']");
let doadorEmailHelper = document.getElementById("emailFornecidoD-helper");

// Mostrar popup de campo obrigatório para nome do doador
doadorNomeInput.addEventListener("focus", () => {
  doadorNomeLabel.classList.add("required-popup");
});

// Ocultar popup de campo obrigatório para nome do doador
doadorNomeInput.addEventListener("blur", () => {
  doadorNomeLabel.classList.remove("required-popup");
});

// Validar valor do input nome do doador
doadorNomeInput.addEventListener("input", (evento) => {
  const valor = evento.target.value;
  let mensagem;
  let nomeValido = valor.length >= 3;

  if (nomeValido) {
    mensagem = "Nome inserido válido";
    doadorNomeInput.style.borderColor = "green";
    doadorNomeHelper.style.color = "green";
    doadorNomeHelper.innerText = mensagem;
    doadorNomeHelper.style.display = "block";
  } else {
    mensagem = "Nome inserido deve conter ao menos 3 caracteres";
    doadorNomeInput.style.borderColor = "red";
    doadorNomeHelper.style.color = "red";
    doadorNomeHelper.innerText = mensagem;
    doadorNomeHelper.style.display = "block";
  }
  console.log(mensagem);
});

// Validação do email do doador
doadorEmailInput.addEventListener("input", (evento) => {
  const valor = evento.target.value;
  let mensagem;
  let emailValido = validarEmail(valor);

  if (emailValido) {
    mensagem = "E-mail válido";
    doadorEmailInput.style.borderColor = "green";
    doadorEmailHelper.style.color = "green";
    doadorEmailHelper.innerText = mensagem;
    doadorEmailHelper.style.display = "block";
  } else {
    mensagem = "Endereço deve ser um e-mail válido";
    doadorEmailInput.style.borderColor = "red";
    doadorEmailHelper.style.color = "red";
    doadorEmailHelper.innerText = mensagem;
    doadorEmailHelper.style.display = "block";
  }
  console.log(mensagem);
});
