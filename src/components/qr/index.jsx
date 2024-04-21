import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
    const [input, setInput]= useState("");
    const [qrCode, setQrCode]= useState("");
     function handleGenerator() {
       setQrCode(input);
       setInput("");
    }
    return(
        <div>
        <input placeholder="add your input" onChange={(e)=> setInput(e.target.value)} name="qr" value={input}/>
        <button onClick={handleGenerator}>Generate</button><br/><br/>
          <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
        </div>
    )
}