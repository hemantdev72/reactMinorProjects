import React, { useState } from "react";
import QRCode from "react-qr-code";

function QrCode() {
  const [input, setInput] = useState("");
  const [qr, setQr] = useState("");

  return (
    <div>
      <h1>Qr Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Enter your name"
        />
        <button>Generate</button>
      </div>
      <QrCode size={400} />
    </div>
  );
}

export default QrCode;
