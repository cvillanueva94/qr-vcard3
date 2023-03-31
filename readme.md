# vCard 3.0 QR Code Generator

Este paquete npm te permite generar códigos QR con datos de vCard 3.0 utilizando Node.js.

## Instalación

Para instalar el paquete, utiliza el siguiente comando:

```bash
yarn add qr-vcard3
```

## Uso

Para utilizar el paquete, primero importa la función `generateQRCode`:

```javascript
const { generateQRCode } = require("qr-vcard3");
Luego, llama a la función generateQRCode con los datos de vCard y las opciones de código QR opcionales:

const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Doe;John;;;
FN:John Doe
TEL;TYPE=CELL:(123) 456-7890
EMAIL:johndoe@example.com
END:VCARD`;

const options = {
  errorCorrectionLevel: "H",
  width: 512,
  margin: 8,
  color: "#ff0000",
  background: "#000000",
};

generateQRCode(vcardData, options)
  .then((url) => {
    console.log(url);
  })
  .catch((error) => {
    console.error(error);
  });
  ```
La función generateQRCode devuelve una promesa que se resuelve con una URL del código QR generado. Puedes utilizar esta URL para mostrar el código QR en tu aplicación.

## Opciones

La función generateQRCode acepta las siguientes opciones de configuración:

errorCorrectionLevel: El nivel de corrección de errores para el código QR. Puede ser uno de los siguientes valores: "L" (bajo), "M" (medio), "Q" (alto) o "H" (muy alto). El valor predeterminado es "M".
width: La anchura del código QR en píxeles. El valor predeterminado es 256.
margin: El margen alrededor del código QR en píxeles. El valor predeterminado es 4.
color: El color del módulo del código QR. Puede ser una cadena que represente un color CSS válido (por ejemplo, "#000000" para negro o "rgb(255, 255, 255)" para blanco). El valor predeterminado es "#000000".
background: El color de fondo del código QR. Puede ser una cadena que represente un color CSS válido. El valor predeterminado es "#ffffff".

## Ejemplo de vCard 3.0

Ejemplo de vCard 3.0 que incluye información básica de contacto:

```
BEGIN:VCARD
VERSION:3.0
N:Gonzalez;Juan
FN:Juan Gonzalez
ORG:Acme Corp.
TITLE:Developer
TEL;TYPE=WORK,VOICE:(555) 555-1212
TEL;TYPE=HOME,VOICE:(555) 555-3434
ADR;TYPE=WORK:;;123 Main St.;Anytown;CA;91921;USA
EMAIL;TYPE=PREF,INTERNET:juan.gonzalez@acme.com
URL:http://www.acme.com
END:VCARD
```

En este ejemplo, se incluyen los siguientes campos:

VERSION: La versión de vCard (en este caso, 3.0).
N: El nombre del contacto (en este caso, "Gonzalez" es el apellido y "Juan" es el nombre).
FN: El nombre completo del contacto.
ORG: La organización del contacto.
TITLE: El título del contacto dentro de la organización.
TEL: El número de teléfono del contacto, con etiquetas que indican si es personal o de trabajo.
ADR: La dirección del contacto, con etiquetas que indican si es personal o de trabajo.
EMAIL: La dirección de correo electrónico del contacto, con una etiqueta que indica que es la preferida.
URL: La dirección URL del sitio web de la organización del contacto.

## Contribuciones
Siéntete libre de enviar pull requests o abrir issues en el repositorio de GitHub.

## Licencia
Este paquete está licenciado bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.