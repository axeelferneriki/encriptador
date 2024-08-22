# Encriptador de Texto

Este proyecto es un encriptador de texto simple que permite cifrar y descifrar mensajes 
## Funcionalidades

* **Cifrar:** Permite cifrar un mensaje utilizando la clave proporcionada.
* **Descifrar:** Permite descifrar un mensaje cifrado utilizando la clave correcta.

# Página de Encriptado

Esta es una sencilla aplicación web que permite encriptar y desencriptar texto utilizando JavaScript. La página fue creada como parte de un ejercicio para aprender sobre la manipulación de cadenas de texto, codificación, y la implementación de una interfaz web básica.

## Descripción del Proyecto

La aplicación permite a los usuarios ingresar un texto en un área de texto, y mediante la selección de un botón, pueden encriptar o desencriptar el texto. El resultado se muestra en un área de salida debajo de los botones.

### Características

- **Encriptar Texto**: Convierte el texto ingresado en una cadena.
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

1. **Entrada de Texto**: El usuario ingresa el texto en un `<textarea>` con el id `miTextarea`.
2. **Botones de Encriptado y Desencriptado**:
   - Botón **Encriptar** con el id `encrypt-btn`: Cuando el usuario hace clic, se ejecuta la función `encriptarMensaje(mensaje) `, que convierte el texto a Base64.
   - Botón **Desencriptar** con el id `decrypt-btn`: Cuando el usuario hace clic, se ejecuta la función `desencriptarMensaje(mensaje) o decryptText()`, que convierte el texto Base64 de vuelta a su forma original.
3. **Salida de Texto**: El texto resultante (encriptado o desencriptado) se muestra en un párrafo `<p>` con el id `result__text`.
## Ejemplo
Ingresa el mensaje: Hola mundo
presionar botones y ver resultados: hola mundo(desencriptado) - hoberlai mufatndober (encriptado)

## Código

### HTML
```html
            <textarea class="form__input" name="mensaje" id="miTextarea" cols="30" rows="10"
                placeholder="Ingrese el texto aquí"></textarea>
            <div class="btn__container">
                <div class="alert__msj">
                    <img src="assets/Vectorspam.png" alt="alert" /><span>solo letras minúsculas y sin acento</span>
                </div>
            </div>
            <div class="submit__container">
                <input class="form__btn" type="submit" value="Encriptar" id="encriptarBtn" />
                <input class="form__btn--secondary" type="submit" value="Desencriptar" id="desencriptarBtn" />
            </div>

Créditos
Este proyecto fue desarrollado como parte de un ejercicio educativo. La página es un placeholder y puede ser reemplazada según la necesidad del proyecto.






