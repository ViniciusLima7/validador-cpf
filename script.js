console.log("Javascript Carregado");

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return false;
  } else {
    var numerosCPF = cpf.substring(0, 9);
    var digitoCPF = cpf.substring(9);
    var soma = 0;

    for (var i = 10; i > 1; i--) {
      soma += numerosCPF.charAt(10 - i) * i;
    }

    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    // Validação do Primeiro Digito
    if (resultado != digitoCPF.charAt(0)) {
      return false;
    }

    soma = 0;
    numerosCPF = cpf.substring(0, 10);
    for (var k = 11; k > 1; k--) {
      soma += numerosCPF.charAt(11 - k) * k;
    }
    resultado = soma % 11 > 2 ? 0 : 11 - (soma % 11);

    // Validação do Segundo Digito
    if (resultado != digitoCPF.charAt(1)) {
      return false;
    }
    return true;
  }
}
function validacao() {
  console.log("Iniciando Validação CPF");
  //Limpar Mensagem
  document.getElementById("success").style.display = "none";
  document.getElementById("error").style.display = "none";

  //Recebe Dados digitados pelo usuario
  let cpf = document.getElementById("cpf_digitado").value;

  let resultadovalidacao = validarCPF(cpf);
  // Mostra Resultado em  Tela
  if (resultadovalidacao) {
    document.getElementById("success").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
  }
}
