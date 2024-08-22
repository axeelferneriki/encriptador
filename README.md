# Encriptador de Texto

Este proyecto es un encriptador de texto simple que permite cifrar y descifrar mensajes utilizando el algoritmo de [inserta el algoritmo que usaste].

## Funcionalidades

* **Cifrar:** Permite cifrar un mensaje utilizando la clave proporcionada.
* **Descifrar:** Permite descifrar un mensaje cifrado utilizando la clave correcta.

## Cómo usar

1. **Instalar las dependencias:** [Explica cómo instalar las dependencias necesarias para ejecutar el proyecto]
2. **Ejecutar el programa:** [Explica cómo ejecutar el programa, por ejemplo, "Ejecuta el archivo main.py"]
3. **Ingresar el mensaje:** [Explica cómo ingresar el mensaje que se quiere cifrar o descifrar]
4. **Ingresar la clave:** [Explica cómo ingresar la clave para cifrar o descifrar el mensaje]
5. **Ver el resultado:** [Explica cómo se muestra el resultado del cifrado o descifrado]

## Ejemplo
Ingresa el mensaje: Hola mundo
Ingresa la clave: 1234
Mensaje cifrado: [Muestra el mensaje cifrado]
Ingresa el mensaje cifrado: [Muestra el mensaje cifrado]
Ingresa la clave: 1234

# Página de Encriptado

Esta es una sencilla aplicación web que permite encriptar y desencriptar texto utilizando JavaScript. La página fue creada como parte de un ejercicio para aprender sobre la manipulación de cadenas de texto, codificación en Base64, y la implementación de una interfaz web básica.

## Descripción del Proyecto

La aplicación permite a los usuarios ingresar un texto en un área de texto, y mediante la selección de un botón, pueden encriptar o desencriptar el texto. El resultado se muestra en un área de salida debajo de los botones.

### Características

- **Encriptar Texto**: Convierte el texto ingresado en una cadena Base64.
- **Desencriptar Texto**: Convierte la cadena Base64 de vuelta al texto original.
- **Soporte para Unicode**: La aplicación maneja correctamente caracteres especiales y acentuados.

## Tecnologías Utilizadas

- **HTML**: Para la estructura de la página.
- **CSS**: Para el diseño y la disposición visual de los elementos.
- **JavaScript**: Para la lógica de encriptado y desencriptado.

## Estructura de Archivos

- `index.html`: Archivo principal que contiene la estructura HTML de la página.
- `styles.css`: Archivo CSS para los estilos visuales.
- `script.js`: Archivo JavaScript que maneja la lógica de la encriptación y desencriptación.
- `README.md`: Este archivo de documentación.

## Cómo Funciona

1. **Entrada de Texto**: El usuario ingresa el texto en un `<textarea>` con el id `text-input`.
2. **Botones de Encriptado y Desencriptado**:
   - Botón **Encriptar** con el id `encrypt-btn`: Cuando el usuario hace clic, se ejecuta la función `encryptText()`, que convierte el texto a Base64.
   - Botón **Desencriptar** con el id `decrypt-btn`: Cuando el usuario hace clic, se ejecuta la función `decryptText()`, que convierte el texto Base64 de vuelta a su forma original.
3. **Salida de Texto**: El texto resultante (encriptado o desencriptado) se muestra en un párrafo `<p>` con el id `output-text`.

## Código

### HTML
```html
<textarea id="text-input" placeholder="Ingresa el texto aquí"></textarea>
<button id="encrypt-btn" onclick="encryptText()">Encriptar</button>
<button id="decrypt-btn" onclick="decryptText()">Desencriptar</button>
<p id="output-text">Ningún mensaje fue encontrado</p>

Créditos
Este proyecto fue desarrollado como parte de un ejercicio educativo. La imagen utilizada en la página es un placeholder y puede ser reemplazada según la necesidad del proyecto.
### Explicación

- **Estructura del README**: Se incluye una introducción, la descripción del proyecto, la tecnología utilizada, una breve explicación de cómo funciona el código, y ejemplos del código relevante.
- **Captura de Pantalla**: En el README, puedes agregar una captura de pantalla del diseño final para ayudar a otros a visualizar la aplicación.
- **Ruta de la Imagen**: No olvides actualizar la ruta de la imagen en el README con la URL o la ruta correcta donde se almacena tu imagen.

Este README debería darte una buena base para documentar tu proyecto y compartirlo con otros.






