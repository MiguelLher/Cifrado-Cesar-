// Decryptor.js
import React, { useState } from 'react';
import Blowfish from 'blowfish';

const Decryptor = () => {
  const [encryptedText, setEncryptedText] = useState('');
  const [key, setKey] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleDecrypt = () => {
    const bf = new Blowfish(key);
    const decrypted = bf.decrypt(encryptedText);
    setDecryptedText(decrypted);
  };

  return (
    <div>
      <h2>Decryptor</h2>
      <textarea
        placeholder="Enter encrypted text to decrypt"
        value={encryptedText}
        onChange={(e) => setEncryptedText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter decryption key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <button onClick={handleDecrypt}>Decrypt</button>
      <h3>Decrypted Text:</h3>
      <textarea value={decryptedText} readOnly />
    </div>
  );
};

export default Decryptor;
