import { useState } from "react";
import Input from "./components/Input";
import "./style.css"

export default function App() {
  const [password, setPassword] = useState("");
  const [passwordSize, setPasswordSize] = useState(12);
  const [showInput, setShowInput] = useState(false);
  const [copy, setCopy] = useState("Copiar");

  function generate() {
    const characters =
      "1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";

    let newPassword = "";

    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }

    setPassword(newPassword);
    setCopy("Copiar");
  }

  function copyText() {
    navigator.clipboard.writeText(password);
    setCopy("Copiado");
  }

return (
  <div className="container">
    <h1>Gerador de Senha</h1>

    <div className="config-row">
      <input
        type="checkbox"
        id="showInput"
        checked={showInput}
        onChange={() => setShowInput((show) => !show)}
      />
      <label htmlFor="showInput">Customizar tamanho</label>
    </div>

    {showInput && (
      <div className="input-container">
        <label htmlFor="passwordSize">Tamanho: </label>
        <Input
          passwordSize={passwordSize}
          setPasswordSize={setPasswordSize}
        />
      </div>
    )}

    <div className="actions">
      <button onClick={generate}>Gerar ({passwordSize} chars)</button>
      <button onClick={copyText}>{copy}</button>
    </div>

    <div className="result">{password || "Clique em Gerar"}</div>
  </div>
);
}
