// Backend Server
import express from 'express';
import { URL } from 'url';
import cors from 'cors'; // Import cors middleware
import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';

const app = express();
const port = 5173;

app.use(express.json());
app.use(cors()); // Use cors middleware

app.post('/connect', async (req, res) => {
  try {
    console.log("hello")
    const connector = new WalletConnect({
      bridge: 'https://bridge.walletconnect.org',
      qrcodeModal: QRCodeModal,
    });
    connector.createSession();
    res.status(200).json({ message: 'Session created' });
  } catch (error) {
    console.error('Error creating WalletConnect session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
