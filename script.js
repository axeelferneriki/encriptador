/* En todos los lugares donde están dos diagonales no he logrado que se componga
como por ejemplo no he logrado que se quite la imagen de donde debería ir el texto,
tampoco he logrado que aparezca el logo de Batman cuando se esté escribiendo y no he
logrado que los mensajes del resultado se coloquen así como entre otras cosas más
*/

const d = document;
const textarea = d.getElementById("miTextarea");
const muneco = d.querySelector(".result__img");
const carga = d.querySelector(".loader");
const resultadotext = d.getElementById("result__text");
const resulttitle = d.getElementById("result__title");
const buttonencrip = d.getElementById("encriptarBtn");
const buttondesencrip = d.getElementById("desencriptarBtn");
const buttoncopiar = d.getElementById("copiarBtn");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
    ["a", "ai"],
];

function encriptarMensaje(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < llaves.length; j++) {
            if (letra === llaves[j][0]) {
                encriptada = llaves[j][1];
                break;
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje;

    for (let i = 0; i < llaves.length; i++) {
        let regex = new RegExp(llaves[i][1], "g");
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }

    return mensajeDesencriptado;
}

// Tendría que ocultar los elementos pero no lo hace
textarea.addEventListener("input", (e) => {
    muneco.style.display = "none";
    carga.classList.remove("hidden");
    resulttitle.textContent = "capturando mensaje";
    resultadotext.textContent = "";
});

// Si funciona el botón encriptar pero no aparece el mensaje "el resultado es:" y no se oculta la imagen ni el texto del recuadro
buttonencrip.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textarea.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    resultadotext.textContent = mensajeEncriptado;
    buttoncopiar.classList.remove("hidden");
    resulttitle.textContent = "el resultado es:";
});

buttondesencrip.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textarea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadotext.textContent = mensajeDesencriptado;
    buttoncopiar.classList.remove("hidden");
});

buttoncopiar.addEventListener("click", () => {
    let textoCopiado = resultadotext.textContent;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        muneco.style.display = "block";
        carga.classList.add("hidden");
        resulttitle.textContent = "el texto se copió";
    });
});


//////////////////////Boton de encriptar//////////////////////////
//const botonEncriptar = document.getElementById('botonEncriptar');
//botonEncriptar.addEventListener("click", () => {
//    const texto = ingresoTexto.value.toLowerCase();
//    if (texto != "") {
//        function encriptar(newText) {
//            for (let i = 0; i < remplazar.length; i++) {
//                if (newText.includes(remplazar[i][0])) {
//                    newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
//                };


//            };
//            return newText;
//        };

//    } else {
//        alert("ingrese texto a encriptar")
//    }
//    remplace(encriptar(texto));
    //const textoEncriptado=encriptar(texto);

    //mensajeFinal.innerHTML = textoEncriptado;

    //munheco.style.display ="none";


//});




//////////////////////Boton de Desencriptar//////////////////////////
////function boton_Desencriptar_Texto() {
////    reinicio_Boton();
////    let texto_base = document.querySelector("#texto_base").value;
////    if (filtradoDeCaracteres(texto_base)) {
////        let textoDesencriptado = desencriptador(texto_base);
   ////     document.querySelector("#texto_copiado").value = textoDesencriptado;
////    } else {
 ////       document.querySelector("#texto_copiado").value = "Error revise que su texto no tenga caracteres especiales ni asentos";
////    }

////}

////function palabras(palabra) {
////    switch (palabra) {
////        case "ai":
////            return "a";
////        case "enter":
////            return "e";
  ////      case "imes":
  ////          return "i";
  ////      case "ober":
  ////          return "o";
  ////      case "ufat":
   ////         return "u"
  ////      default:
  ////          return palabra;
  ////  }
////}

////function copiar_Texto() {
////    let textoCopiado = document.querySelector("#texto_copiado").value;
  ////  let button = document.getElementById('copiar');

 ////   navigator.clipboard.writeText(textoCopiado);
 ////   button.textContent = 'Copiado'

////}
////reinicioOcultacion();

////function reinicioOcultacion() {
 ////   document.querySelector('.main__section__2').style.display = 'none';
////}

//const inputText = document.getElementById('input-text');
//const encryptBtn = document.getElementById ('encrypt-btn');
//const decryptBtn = document.getElementById('decrypt-btn');
//const message =document.getElementById('message');

//encryptBtn.addEventListener('click', () => {
//    e.preventDefault();
//    const text = inputText.value.trim();
//    if (text === '') {
//        alert('Ningún mensaje fue encontrado');
//    } else {
//        const encryptedText = encrypt(text);

//        window.location.href =  `encrypted.html?text=${encryptedText}`;
// TO DO: implement encryption logic here

//    }
//});
//function encrypt(text) {
// TO DO: implement encryption logic here
//    return text.toUpperCase(); // example: simple uppercase encryption
//}
//function decrypt(text) {
//    // TO DO: implement decryption logic here
//    return text.toLowerCase(); // example: simple lowercase decryption
//}

//decryptBtn.addEventListener('click', (e) => {
//    e.preventDefault();
//    const text = inputText.value.trim();
//    if (text === '') {
//        resultTextarea.value = 'Ningún mensaje fue encontrado';
//    } else {
//        const decryptedText = decrypt(text);
// TO DO: implement decryption logic here
//        resultTextarea.value = decryptedText;
//    }
//});

//
//document.getElementById('encryptButton').addEventListener('click', function () {
//    let inputText = document.getElementById('inputText').value;
//    let encryptedText = encrypt(inputText);
//    document.getElementById('resultText').innerText = `Texto encriptado: ${encryptedText}`;
//});

//document.getElementById('decryptButton').addEventListener('click', function () {
//    let inputText = document.getElementById('inputText').value;
//    let decryptedText = decrypt(inputText);
//    document.getElementById('resultText').innerText = `Texto desencriptado: ${decryptedText}`;
//});

//function encrypt(text) {
// Lógica de encriptación (por ejemplo, cifrado César)
//    let shift = 3;
//    return text.split('').map(char =>
//        String.fromCharCode((char.charCodeAt(0) - 97 + shift) % 26 + 97)
//    ).join('');
//}

//function decrypt(text) {
// Lógica de desencriptación (por ejemplo, cifrado César)
//    let shift = 3;
//    return text.split('').map(char =>
//        String.fromCharCode((char.charCodeAt(0) - 97 - shift + 26) % 26 + 97)
//    ).join('');
//}
