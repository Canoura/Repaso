const numerosintrododucidos=document.getElementById("numerosintroducidos");
const resultado=document.getElementById("resultado");


function myFunction() {
    let numero1 = prompt("Introduce El primer número");
    let numero2 = prompt("Introduce El segundo número");
    let numero3 = prompt("Introduce El tercer número");

    numerosintrododucidos.textContent=`los números introducidos son ${numero1}, ${numero2}, ${numero3}`;

if(numero1>=numero2 && numero1>=numero3 && numero2>=numero3){
    resultado.textContent = `El orden es: ${numero1}, ${numero2}, ${numero3}`;
}else if(numero1>=numero2 && numero1>=numero3 && numero2<=numero3){
    resultado.textContent = `El orden es: ${numero1}, ${numero3}, ${numero2}`;

}else if(numero2>=numero1 && numero2>=numero3 && numero1>=numero3){
    resultado.textContent = `El orden es: ${numero2}, ${numero1}, ${numero3}`;
}else if(numero2>=numero1 && numero2>=numero3 && numero1<=numero3){
    resultado.textContent = `El orden es: ${numero2}, ${numero3}, ${numero1}`;

}else if(numero3>=numero1 && numero3>=numero2 && numero1>=numero2){
    resultado.textContent = `El orden es: ${numero3}, ${numero1}, ${numero2}`;
}else if(numero3>=numero1 && numero3>=numero2 && numero1<=numero2){
    resultado.textContent = `El orden es: ${numero3}, ${numero2}, ${numero1}`;
}
}
