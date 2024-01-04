//const numerosintrododucidos=document.getElementById("numerosintroducidos");
const resultado=document.getElementById("resultado");


function myFunction() {
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const numero3 = parseInt(document.getElementById('numero3').value);
    
if(numero1>=numero2 && numero1>=numero3 && numero2>=numero3){
    resultado.textContent = `EL ORDEN DE MAYOR A MENOR DE LOS NÚMEROS INTRODUCIDOS ES: ${numero1}, ${numero2}, ${numero3}`;
}else if(numero1>=numero2 && numero1>=numero3 && numero2<=numero3){
    resultado.textContent = `EL ORDEN DE MAYOR A MENOR DE LOS NÚMEROS INTRODUCIDOS ES: ${numero1}, ${numero3}, ${numero2}`;

}else if(numero2>=numero1 && numero2>=numero3 && numero1>=numero3){
    resultado.textContent = `EL ORDEN DE MAYOR A MENOR DE LOS NÚMEROS INTRODUCIDOS ES: ${numero2}, ${numero1}, ${numero3}`;
}else if(numero2>=numero1 && numero2>=numero3 && numero1<=numero3){
    resultado.textContent = `EL ORDEN DE MAYOR A MENOR DE LOS NÚMEROS INTRODUCIDOS ES: ${numero2}, ${numero3}, ${numero1}`;

}else if(numero3>=numero1 && numero3>=numero2 && numero1>=numero2){
    resultado.textContent = `EL ORDEN DE MAYOR A MENOR  DE LOS NÚMEROS INTRODUCIDOS ES: ${numero3}, ${numero1}, ${numero2}`;
}else if(numero3>=numero1 && numero3>=numero2 && numero1<=numero2){
    resultado.textContent = `EL ORDEN DE MAYOR A MENOR DE LOS NÚMEROS INTRODUCIDOS ES: ${numero3}, ${numero2}, ${numero1}`;
}
}
