import React, { useState } from "react";
import api from "../api/message";

export default function MessageForm({ onMessageCreated }) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setStatus("Mensagem não pode estar vazia.");
      return;
    }

    try {
      const response = await api.post("/message", { text });
      setStatus("Mensagem enviada com sucesso!");
      setText("");
      if (onMessageCreated) onMessageCreated(response.data);
    } catch (err) {
      console.error("Erro ao enviar mensagem:", err);
      setStatus("Erro ao enviar mensagem.");
    }

    if (onMessageCreated) onMessageCreated();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite sua mensagem"
        rows={4}
        cols={40}
        style={{ display: "block", marginBottom: "0.5rem" }}
      />
      <button type="submit">Enviar</button>
      {status && <p>{status}</p>}
    </form>
  );
}
