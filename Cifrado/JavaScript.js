function cifrarDescifrar(texto, clave, cifrar = true) {
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[a-zA-Z]/)) {
            let isUpperCase = char === char.toUpperCase();
            let offset = isUpperCase ? 65 : 97;
            let shift = cifrar ? clave : -clave;
            char = String.fromCharCode(((char.charCodeAt(0) - offset + shift + 26) % 26) + offset);
        }
        resultado += char;
    }

    return resultado;
}

function cifrar() {
    const texto = document.getElementById('texto').value;
    const clave = 5;
    const resultado = cifrarDescifrar(texto, clave, true);
    document.getElementById('resultado').value = resultado;
}

function descifrar() {
    const texto = document.getElementById('texto').value;
    const clave = 5;
    const resultado = cifrarDescifrar(texto, clave, false);
    document.getElementById('resultado').value = resultado;
}


        function limpiar() {
            document.getElementById('texto').value = ''; // Limpiar el campo de texto de entrada
            document.getElementById('resultado').value = ''; // Limpiar el campo de resultado
    }
