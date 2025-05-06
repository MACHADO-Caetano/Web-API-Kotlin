import React, { useEffect, useState } from "react";
import api from "../api/message";
import HelloCard from "../components/HelloCard";

export default function MessageList() {
  const [message, setMessage] = useState([]);

  const fetchMessages= (  ) => {
    api.get("/message")
      .then(res => setMessage(res.data))
      .catch(err => {
        console.error("Erro ao buscar dados:", err);
        setMessage("Erro ao buscar mensagem");
      });
  }; 

  
  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      {/* <MessageForm onMessageCreated={fetchMessages} /> */}

      {message.length > 0 ? (
        message.map(msg => (
          <HelloCard key={msg.id} message={msg.text} />
        ))
    ) : (
      <p>Nenhuma mensagem cadastrada.</p>
    )}
    </div>  
  );
}
