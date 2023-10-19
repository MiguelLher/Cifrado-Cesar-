document.addEventListener('DOMContentLoaded', function () {
    const mensajeTextarea = document.getElementById('mensaje');
    const claveInput = document.getElementById('clave');
    const resultadoTextarea = document.getElementById('resultado');
    const cifrarButton = document.getElementById('cifrar');
    const descifrarButton = document.getElementById('descifrar');

    cifrarButton.addEventListener('click', function () {
        const mensaje = mensajeTextarea.value;
        const vueltas = parseInt(claveInput.value);

        if (mensaje && vueltas > 0) {
            resultadoTextarea.value = cifrarEscitale(mensaje, vueltas);
        } else {
            alert('Por favor, ingrese un mensaje y un número válido de vueltas.');
        }
    });

    descifrarButton.addEventListener('click', function () {
        const mensajeCifrado = resultadoTextarea.value;
        const vueltas = parseInt(claveInput.value);

        if (mensajeCifrado && vueltas > 0) {
            resultadoTextarea.value = descifrarEscitale(mensajeCifrado, vueltas);
        } else {
            alert('Por favor, ingrese un mensaje cifrado y un número válido de vueltas.');
        }
    });

    function cifrarEscitale(mensaje, vueltas) {
        let mensajeCifrado = '';
        for (let i = 0; i < vueltas; i++) {
            for (let j = i; j < mensaje.length; j += vueltas) {
                mensajeCifrado += mensaje[j];
            }
        }
        return mensajeCifrado;
    }

    function descifrarEscitale(mensajeCifrado, vueltas) {
        const filas = Math.ceil(mensajeCifrado.length / vueltas);
        const columnas = vueltas;
        const celdas = filas * columnas;

        const mensajeOriginal = Array(celdas).fill('');

        for (let i = 0; i < mensajeCifrado.length; i++) {
            const fila = i % filas;
            const columna = Math.floor(i / filas);
            const indice = fila * columnas + columna;
            mensajeOriginal[indice] = mensajeCifrado[i];
        }

        return mensajeOriginal.join('');
    }
});
