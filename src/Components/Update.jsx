import React, { useState } from "react";
import axios from "axios";
import styles from "../styles";

function Update() {
  const [msg, setMsg] = useState(null);
  const [podcast, setPodcast] = useState({
    id: "",
    title: "",
    host: "",
    genre: "",
    status: "",
  });

  const handleUpdate = async () => {
    try {
      const resp = await axios.put(`http://localhost:3000/podcasts/${podcast.id}`, podcast);
      setMsg(resp.data.msg);
    } catch (e) {
      setMsg("Error: " + e.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={{ color: "#ff9800" }}>🔧 Update Podcast</h1>
        <input type="number" style={styles.input} placeholder="Podcast ID"
          value={podcast.id} onChange={(e) => setPodcast({ ...podcast, id: e.target.value })} />
        <input type="text" style={styles.input} placeholder="Title"
          value={podcast.title} onChange={(e) => setPodcast({ ...podcast, title: e.target.value })} />
        <input type="text" style={styles.input} placeholder="Host"
          value={podcast.host} onChange={(e) => setPodcast({ ...podcast, host: e.target.value })} />
        <input type="text" style={styles.input} placeholder="Genre"
          value={podcast.genre} onChange={(e) => setPodcast({ ...podcast, genre: e.target.value })} />
        <input type="text" style={styles.input} placeholder="Status"
          value={podcast.status} onChange={(e) => setPodcast({ ...podcast, status: e.target.value })} />

        <button style={{ ...styles.button, background: "#ff9800" }} onClick={handleUpdate}>
          Update Podcast
        </button>
        {msg && <p>{msg}</p>}
      </div>
    </div>
  );
}

export default Update;
