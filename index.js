const QRCode = require("qrcode");
const vCard = require("vcard-parser");

/**
 * Genera un código QR con datos de vCard 3.0.
 *
 * @param {string} vcardData Los datos de vCard en formato de cadena.
 * @param {object} options Las opciones de configuración para la generación de código QR (opcional).
 * @param {string} options.errorCorrectionLevel El nivel de corrección de errores para el código QR. Puede ser "L" (bajo), "M" (medio), "Q" (alto) o "H" (muy alto). El valor predeterminado es "M".
 * @param {number} options.width La anchura del código QR en píxeles. El valor predeterminado es 256.
 * @param {number} options.margin El margen alrededor del código QR en píxeles. El valor predeterminado es 4.
 * @param {string} options.color El color del módulo del código QR. Puede ser una cadena que represente un color CSS válido (por ejemplo, "#000000" para negro o "rgb(255, 255, 255)" para blanco). El valor predeterminado es "#000000".
 * @param {string} options.background El color de fondo del código QR. Puede ser una cadena que represente un color CSS válido. El valor predeterminado es "#ffffff".
 * @returns {Promise<string>} Una promesa que se resuelve con una URL del código QR generado.
 */
const generateQRCode = (vcardData, options = {}) => {
  const vcard = vCard.parse(vcardData);
  const formattedData = vCard.generate(vcard);

  return new Promise((resolve, reject) => {
    QRCode.toDataURL(formattedData, options, (error, url) => {
      if (error) {
        reject(error);
      } else {
        resolve(url);
      }
    });
  });
};
  

module.exports = {
  generateQRCode,
};