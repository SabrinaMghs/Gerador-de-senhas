import { useState } from "react"
import "./style.css"

export default function App(){
  const[password, setPassword] = useState("");
  const[copy, setCopy] = useState("Copiar")

function generate() {
  const characters = "1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
  const length = 12;
  let newPassword = "";

  for (let i = 0; i < length; i++) {
    const position = Math.floor(Math.random() * characters.length);
    newPassword += characters[position];
  };
    setPassword(newPassword);
    setCopy("Copiar");
};

function copyText() {
  window.navigator.clipboard.writeText(password);
  setCopy("Copiado");
  
}
  return(
    <div className="container">
      <h1>Gerador de senhas</h1>
      <div className="button-group">
      <button onClick={generate}>Gerar!</button>
      <button onClick={copyText}>{copy}</button>
      </div>
      <div className="password-box">{password}</div>
    </div>
  );
};