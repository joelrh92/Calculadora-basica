function agregar (valor) {
  document.getElementById("pantalla").value += valor
}

function borrar (){
document.getElementById("pantalla").value = ''
}

function calcular(){
const calculo = document.getElementById("pantalla").value
const result = eval(calculo)
document.getElementById("pantalla").value = result
}
