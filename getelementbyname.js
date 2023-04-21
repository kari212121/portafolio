function sumar()
{
   var num=document.getElementById("num").value;
   var num1=document.getElementById("num1").value;
   var resultado= parseInt(num1)+parseInt(num);
   document.getElementById("resultado").innerHTML= resultado;
}

function restar()
{
   var num=document.getElementById("num").value;
   var num1=document.getElementById("num1").value;
   var resultado= parseInt(num1)-parseInt(num);
   document.getElementById("resultado").innerHTML= resultado;
}

function multiplicar()
{
   var num=document.getElementById("num").value;
   var num1=document.getElementById("num1").value;
   var resultado= parseInt(num1)*parseInt(num);
   document.getElementById("resultado").innerHTML= resultado;
}

function dividir()
{
   var num=document.getElementById("num").value;
   var num1=document.getElementById("num1").value;
   var resultado= parseInt(num1)/parseInt(num);
   document.getElementById("resultado").innerHTML= resultado;
}