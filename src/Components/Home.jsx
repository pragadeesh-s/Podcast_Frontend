import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    axios.get("https://podcast-backend-8zkh.onrender.com/podcasts").then((resp) => {
      setPodcasts(resp.data);
    });
  }, []);

  return (
    <div style={{ background: "#f3f7fc", minHeight: "100vh", padding: "40px", textAlign: "center" }}>
      <h1 style={{ color: "#28a745", marginBottom: "30px" }}>🎧 Podcast Playlist</h1>

      {podcasts.length > 0 ? (
        podcasts.map((p) => (
          <div key={p.id} style={{
            background: "#fff",
            padding: "20px",
            margin: "10px auto",
            borderRadius: "10px",
            width: "60%",
            boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          }}>
            <h2>{p.title}</h2>
            <p>
              <strong>Host:</strong> {p.host}<br />
              <strong>Genre:</strong> {p.genre}<br />
              <strong>Status:</strong>{" "}
              <span style={{ color: p.status === "Completed" ? "green" : "orange" }}>{p.status}</span>
            </p>
          </div>
        ))
      ) : (
        <h3>No podcasts found</h3>
      )}
    </div>
  );
}

export default Home;
