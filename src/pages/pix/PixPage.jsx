import './PixPage.css';
import React, { useState } from 'react';
import { QrCodePix } from 'qrcode-pix';
import createElement from '../../CreateElement';

export default function PixPage() {
  const [valor, setValor] = useState(0);
  const [qrcodeVisible, setQrcodeVisible] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const pix = QrCodePix({
      version: '01',
      key: 'xongspix@gmail.com',
      value: parseFloat(valor),
    });

    const qrcodePix = await pix.base64();
    const payload = pix.payload();

    setQrcodeVisible(true);

    const qrcodeDiv = document.getElementById('qrcode');
    const qrcodeImg = createElement('img', { 'src': qrcodePix });
    qrcodeDiv.innerHTML = '';
    qrcodeDiv.appendChild(qrcodeImg);

    console.log('Código QR Pix gerado:', qrcodePix);
    console.log('Payload Pix gerado:', payload);
  };

  const copyToClipboard = () => {
    const payload = QrCodePix({
      version: '01',
      key: 'xongspix@gmail.com',
      value: parseFloat(valor),
    }).payload();

    navigator.clipboard.writeText(payload);
    console.log('Payload copiado para a área de transferência:', payload);
  };

  return (
    <div className="pix">
      <form className="pixForm" onSubmit={handleFormSubmit}>
        <label htmlFor="valorPix">VALOR DO PIX</label>
        <br />
        <input
          type="number"
          name="valorPix"
          placeholder="Quanto deseja me mandar?"
          required
          onChange={(e) => setValor(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">GERAR QRCODE</button>

        <br />
        <br />

        {qrcodeVisible && (
          <>
            <button id="copiaCola" onClick={copyToClipboard}>
              PIX COPIA E COLA
            </button>
            <br />
            <br />
          </>
        )}

        <div id="qrcode"></div>
      </form>
    </div>
  );
}
