function rfc()
{
    var name=document.getElementById("nombre").value;
    var resultado=name.toUpperCase().charAt(0);
    var paterno1=document.getElementById("paterno").value;
    var resultado1=paterno1.toUpperCase().substring(0,2);
    var materno1=document.getElementById("materno").value;
    var resultado2=materno1.toUpperCase().substring(0,1);
    var anio=document.getElementById("año").value;
    var resultado3=anio.substring(2,4);
    var month=document.getElementById("mes").value;
    var resultado4=month.substring(0,2);
    var day=document.getElementById("dia").value;
    var resultado5=day.substring(0,2);
    var resultadofinal=resultado1+resultado2+resultado+resultado3+resultado4+resultado5;
    document.getElementById("resultado").innerHTML=resultadofinal;
}