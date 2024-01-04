//const numerosintrododucidos=document.getElementById("numerosintroducidos");
const resultado=document.getElementById("resultado");


function myFunction() {
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const numero3 = parseInt(document.getElementById('numero3').value);
    const numero4 = parseInt(document.getElementById('numero4').value);

    var numeros = [numero1, numero2, numero3, numero4];

    numeros.sort(function(a, b) { return b - a; }); //codigo para ordenar los numero de mayor a menor

    resultado.textContent = `EL ORDEN DE MAYOR A MENOR DE LOS NÚMEROS INTRODUCIDOS ES: ${numeros.join(', ')}`; 
}
