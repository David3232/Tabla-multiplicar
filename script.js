// Variables
var num_usr = 0
var condicion = true
var num = 1
// Estructuras de repeticion
while (condicion==true) {
  num_usr=parseInt(prompt("Tabla multiplicar del",""));
  if (isNaN(num_usr)) {
    alert("Error, introduce un numero");
  }else if (num_usr<=100 && num_usr>=1) {
      condicion=false;
  }
}
  while (num<=10) {
    console.log (num_usr + "*" + num + "=" + (num_usr*num) );
    num++;
  }
