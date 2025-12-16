import { useState } from "react";
import Input from "./components/Input";
import "./style.css";

export default function App() {
  const [password, setPassword] = useState("");
  const [passwordSize, setPasswordSize] = useState(12);
  const [showInput, setShowInput] = useState(false);
  const [copy, setCopy] = useState("Copiar");
  const [showPassword, setShowPassword] = useState(false);

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
    setShowPassword(true); // Corrigido aqui (estava showPassword)
  }

  function copyText() {
    if (password.length > 0) {
      navigator.clipboard.writeText(password);
      setCopy("Copiado!");
      // Volta o texto para "Copiar" após 2 segundos
      setTimeout(() => setCopy("Copiar"), 2000);
    }
  }

  return (
    <div className="container">
      <h1>Gerador de Senha</h1>

      <div className="options-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={showInput}
            onChange={() => setShowInput((show) => !show)}
          />
          Customizar tamanho
        </label>

        {showInput && (
          <div className="input-container">
            <label htmlFor="passwordSize">Tamanho: </label>
            <Input
              passwordSize={passwordSize}
              setPasswordSize={setPasswordSize}
            />
          </div>
        )}
      </div>

      <div className="button-grid">
        <button className="btn-generate" onClick={generate}>
          Gerar senha de {passwordSize} caracteres
        </button>

        <button className="btn-secondary" onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? "Ocultar senha" : "Mostrar senha"}
        </button>

        <button className="btn-secondary" onClick={copyText}>
          {copy}
        </button>
      </div>

      <div className="password-display">
        {showPassword ? (password || "Crie sua senha") : "••••••••••••"}
      </div>
    </div>
  );
}
