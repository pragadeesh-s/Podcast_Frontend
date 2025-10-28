import React, { useState } from "react";
import axios from "axios";
import styles from "../styles";

function Delete() {
  const [msg, setMsg] = useState(null);
  const [id, setId] = useState("");

  const handleDelete = async () => {
    try {
      const resp = await axios.delete(`http://localhost:3000/podcasts/${id}`);
      setMsg(resp.data.msg);
    } catch (e) {
      setMsg("Error: " + e.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={{ color: "#dc3545" }}>🗑️ Delete Podcast</h1>
        <input type="number" style={styles.input} placeholder="Podcast ID"
          value={id} onChange={(e) => setId(e.target.value)} />
        <button style={{ ...styles.button, background: "#dc3545" }} onClick={handleDelete}>
          Delete
        </button>
        {msg && <p>{msg}</p>}
      </div>
    </div>
  );
}

export default Delete;
