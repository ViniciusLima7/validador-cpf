console.log("Javascript Carregado");

function validarCPF(cpf) {
  return true;
}
function validacao() {
  console.log("Iniciando Validação CPF");
  //Recebe Dados digitados pelo usuario
  let cpf = document.getElementById("cpf_digitado").value;
  console.log(cpf);

  let resultadovalidacao = validarCPF(cpf);
  if (resultadovalidacao) {
    document.getElementById("success").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
  }
}
