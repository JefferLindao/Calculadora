var opera;
var operb;
var oper;

function init(){
var resultado = document.getElementById("resultado");
var division = document.getElementById("division");
var multi = document.getElementById("multi");
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var reset = document.getElementById("reset");
var igual = document.getElementById("igual");
var cero = document.getElementById("cero");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
// eventos
  uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1";
  }
  dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
  }
  tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
  }
  cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
  }
  cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
  }
  seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
  }
  siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
  }
  ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
  }
  nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
  }
  cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
  }
  reset.onclick = function(e){
    rese();
  }
  suma.onclick = function(e){
    opera = resultado.textContent;
    oper = "+";
    limpiar();
  }
  resta.onclick = function(e){
    opera = resultado.textContent;
    oper = "-"
    limpiar();
  }
  multi.onclick = function(e){
    opera = resultado.textContent;
    oper = "*";
    limpiar();
  }
  division.onclick = function(e){
    opera = resultado.textContent;
    oper = "/";
    limpiar();
  }
  igual.onclick = function(e){
   operb = resultado.textContent;
   ejecutar();
  }
}
function limpiar(){
  resultado.textContent = "";
}
function rese(){
  resultado.textContent = "";
  opera = 0;
  operb = 0;
  oper = "";
}
function ejecutar() {
  var res = 0;
  switch(oper){
    case "+":
      res = parseFloat(opera) + parseFloat(operb);
      break;
    case "-":
      res = parseFloat(opera) - parseFloat(operb);
      break;
    case "*":
      res = parseFloat(opera) * parseFloat(operb);
      break;
    case "/":
      res = parseFloat(opera) / parseFloat(operb);
      break;
  }
  rese();
  resultado.textContent = res;
}
