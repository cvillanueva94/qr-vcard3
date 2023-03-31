const { generateQRCode } = require('../');

describe('generateQRCode', () => {
  it('genera un código QR con datos de vCard', async () => {

    const vcardData = `BEGIN:VCARD
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
END:VCARD`

    const options = {
      errorCorrectionLevel: 'H',
      width: 512,
      margin: 8,
      color: '#ff0000',
      background: '#000000',
    };

    const url = await generateQRCode(vcardData, options);
console.log(url)
    expect(url).toBeDefined();
    expect(url).toMatch(/^data:image\/png;base64,/);
  });

  it('genera un código QR con datos de vCard utilizando opciones predeterminadas', async () => {
    const vcardData = `BEGIN:VCARD
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
END:VCARD`
    const url = await generateQRCode(vcardData);

    expect(url).toBeDefined();
    expect(url).toMatch(/^data:image\/png;base64,/);
  });
});