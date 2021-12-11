import styled from 'styled-components';
import QRCode from 'qrcode.react';

const QrCode = () => {
  return (
    <QrCodeWrapper>
      <h2>Your QR-Code</h2>
      <QRCode
        value={window.location.href.toLowerCase().replace('qrcode', 'details')}
      />
      <span>*Open the camera on a different phone and scan the QR-Code</span>
    </QrCodeWrapper>
  );
};

const QrCodeWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 2rem;
  }

  span {
    margin-top: 2rem;
    max-width: 80%;
    text-align: center;
  }

  canvas {
    width: 40rem;
    height: 40rem;
  }
`;

export default QrCode;
