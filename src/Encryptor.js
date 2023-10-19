// Encryptor.js
import React, { useState } from 'react';
import Blowfish from 'blowfish';

const Encryptor = () => {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  const handleEncrypt = () => {
    const bf = new Blowfish(key);
    const encrypted = bf.encrypt(text);
    setEncryptedText(encrypted);
  };

  return (
    <div>
      <h2>Encryptor</h2>
      <textarea
        placeholder="Enter text to encrypt"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter encryption key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <button onClick={handleEncrypt}>Encrypt</button>
      <h3>Encrypted Text:</h3>
      <textarea value={encryptedText} readOnly />
    </div>
  );
};

export default Encryptor;
