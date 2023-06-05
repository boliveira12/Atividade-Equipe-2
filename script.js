function calculateIMC() {
  var pesoInput = document.getElementById("peso");
  var alturaInput = document.getElementById("altura");
  var resultInput = document.getElementById("result");

  var peso = pesoInput.value;
  var altura = alturaInput.value; // Converter altura de cm para metros

  var imc = peso / (altura * altura);
  resultInput.value = imc.toFixed(2);
}