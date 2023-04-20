  /*    a - ai
        e - enter
        i - imes
        o - ober
        u - ufat*/
   //i para afectar tanto mayusculas como minusculas
   //g para afectar toda la linea u oracion
   //m para afectar a multiple lineas o parrafos*/

function encriptatexto() {
   var texto=document.getElementById("inputTexto").value.toLowerCase();//.value.toLowercase()
   var TextoCifrado = texto.replace(/e/igm,"enter");
   var TextoCifrado = TextoCifrado.replace(/o/igm,"ober");
   var TextoCifrado = TextoCifrado.replace(/i/igm,"imes");
   var TextoCifrado = TextoCifrado.replace(/a/igm,"ai");
   var TextoCifrado = TextoCifrado.replace(/u/igm,"ufat");

   document.getElementById("imgDer").style.display = "none";
   document.getElementById("texto").style.display = "none";
   document.getElementById("texto2").innerHTML=TextoCifrado;
   document.getElementById("copiar").style.display="show";
   document.getElementById("copiar").style.display="inherit";
}

function desencriptatexto() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var TextoCifrado = texto.replace (/enter/igm,"e");
    var TextoCifrado = TextoCifrado.replace (/ober/igm,"o");
    var TextoCifrado = TextoCifrado.replace (/imes/igm,"i");
    var TextoCifrado = TextoCifrado.replace (/ai/igm,"a");
    var TextoCifrado = TextoCifrado.replace (/ufat/igm,"u");
 
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML=TextoCifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
 }
 
 function copiar() {
    var contenido=document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("Texto Copiado");
 }