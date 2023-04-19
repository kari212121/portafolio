function suma()
{
    var num1,num2,total;
    num1=prompt("Escribe un número :","" );
    num2=prompt("Escribe otro número :","" );
    total=parseInt(num1)+parseInt(num2);
    alert("La suma es: " +total);
}

function resta()
{
    var num1,num2,total;
    num1=prompt("Escribe un número :","" );
    num2=prompt("Escribe otro número :","" );
    total=parseInt(num1)-parseInt(num2);
    alert("La resta es: " +total);
}

function multi()
{
    var num1,num2,total;
    num1=prompt("Escribe un número :","" );
    num2=prompt("Escribe otro número :","" );
    total=parseInt(num1)*parseInt(num2);
    alert("La multiplicación es: " +total);
}

function divi()
{
    var num1,num2,total;
    num1=prompt("Escribe un número :","" );
    num2=prompt("Escribe otro número :","" );
    total=parseInt(num1)/parseInt(num2);
    alert("La división es: " +total);
}

function posionega()
{
    var num1;
    num1=prompt("Escribe un número :","" );
    if(parseInt(num1)<0)
    alert("El número es negativo");
    else
    if(parseInt(num1)>0)
    alert("El número es positivo");
}




