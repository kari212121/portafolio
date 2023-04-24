function iniciar(){
var boton=document.getElementById('guardar');
boton.addEventListener('click', nuevoitem, false);
mostrar();
}
function nuevoitem(){
var clave=document.getElementById('titulo').value;
var valor=document.getElementById('contenido').value;
localStorage.setItem(clave,valor);
mostrar();
document.getElementById('titulo').value='';
document.getElementById('contenido').value='';
}
function mostrar(){
var cajadatos=document.getElementById('cajadatos');
cajadatos.innerHTML='';
for(var f=0;f<localStorage.length;f++){
var clave=localStorage.key(f);
var valor=localStorage.getItem(clave);
cajadatos.innerHTML+='<div>'+clave+' - '+valor+'</div>';
}
}
window.addEventListener('load', iniciar, false);
function elimina()
{

	if(confirm('Está Seguro?')){
		localStorage.clear();
		mostrar();
		}
}