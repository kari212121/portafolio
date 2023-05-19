function cumpleaños()
{
    var mes = document.getElementById("fecha").value;
    var x = mes.charAt(5);
    x = x+mes.charAt(6);

    var mayo = parseInt(x);

    if(mayo==5)
    {
        document.getElementById("resultado").innerHTML=("FELICIDADES OBTUVISTE UN DESCUENTO 2X1 ;)");
        document.getElementById("resultado2").innerHTML= "<img src=2x1.jpg>"
    }
    else
    {
        document.getElementById("resultado").innerHTML=("NO OBTUVISTE NINGÚN DESCUENTO, GRACIAS POR PARTICIPAR :(");
        
    }

}