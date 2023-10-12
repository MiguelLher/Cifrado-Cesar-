
function cifrarTexto() {
    const texto = document.getElementById('texto').value;
    const clave = 'clave_secreta'; 
    const textoCifrado = CryptoJS.AES.encrypt(texto, clave).toString();
    document.getElementById('resultado').value = textoCifrado;
}

function descifrarTexto() {
    const textoCifrado = document.getElementById('resultado').value;
    const clave = 'clave_secreta'; 
    const bytesDecifrados = CryptoJS.AES.decrypt(textoCifrado, clave);
    const textoDescifrado = bytesDecifrados.toString(CryptoJS.enc.Utf8);
    document.getElementById('resultado').value = textoDescifrado;
}
function limpiarCampos() {
    document.getElementById('texto').value = '';
    document.getElementById('resultado').value = '';
}