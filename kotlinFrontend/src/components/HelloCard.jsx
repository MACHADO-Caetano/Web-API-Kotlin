import React from "react";

export default function HelloCard({ message }) {
  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>{message}</h2>
    </div>
  );
}
