document.addEventListener('DOMContentLoaded', () => {
    // Contenedor principal de Bootstrap
    const container = document.createElement('div');
    container.className = 'container mt-5';

    // titulo
    const titulo = document.createElement('h1');
    titulo.className = 'text-center mb-4';
    titulo.textContent = 'Ordenación de Números de Mayor a Menor';
    container.appendChild(titulo);

    // subtitulo
    const titulo2 = document.createElement('h2');
    titulo2.className = 'text-center mb-4';
    titulo2.textContent = 'Utilizando DOM';
    container.appendChild(titulo2);

    // Función para crear y agregar campos de entraDa
    const crearInput = (id) => {
        const formGroup = document.createElement('div');
        formGroup.className = 'mb-3';

        const inputLabel = document.createElement('label');
        inputLabel.setAttribute('for', `numero${id}`);
        inputLabel.className = 'form-label';
        inputLabel.textContent = `Número ${id}:`;
        formGroup.appendChild(inputLabel);

        const inputField = document.createElement('input');
        inputField.type = 'number';
        inputField.id = `numero${id}`;
        inputField.className = 'form-control';
        formGroup.appendChild(inputField);

        container.appendChild(formGroup);
    };

    // Crea campos de entrada
    for (let i = 1; i <= 4; i++) {
        crearInput(i);
    }

    // Crea y agrega el botón de ordenar con clases de Bootstrap
    const botonOrdenar = document.createElement('button');
    botonOrdenar.className = 'btn btn-primary w-100 my-3';
    botonOrdenar.textContent = 'Ordenar Números';
    botonOrdenar.onclick = ordenarNumeros; // para que vaya a  la Función para ordenar números al darke click 
    container.appendChild(botonOrdenar);

    // Crea y agrega el espacio para el resultado
    const resultado = document.createElement('p');
    resultado.id = 'resultado';
    resultado.className = 'text-center mt-3';
    container.appendChild(resultado);

    // Agrega el contenedor 
    document.body.appendChild(container);
});
// Función para ordenar los números y mostrar el resultado
function ordenarNumeros() {
    let numeros = [];

    // Obtiene los valores de los campos de entrada
    for (let i = 1; i <= 4; i++) {
        numeros.push(parseInt(document.getElementById(`numero${i}`).value, 10));
    }

    // Ordena los números de mayor a menor
    numeros.sort((a, b) => b - a);

    // Muestra el resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `El orden de mayor a menor de los números introducidos es: ${numeros.join(' ')}`;
}