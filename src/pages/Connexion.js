import React, { useState } from "react";

function Connexion({ allerVersInscription, seConnecter }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("⏳ Connexion en cours...");

    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        setMessage("✅ Connexion réussie !");
        setTimeout(() => {
          seConnecter(data.user.role); // ✅ navigation gérée par App.js
        }, 800);
      } else {
        setMessage(`❌ ${data.message || "Identifiants invalides"}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Erreur de connexion au serveur");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Connexion</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Se connecter
          </button>
        </form>

        {message && (
          <p
            style={{
              textAlign: "center",
              color: message.startsWith("✅")
                ? "green"
                : message.startsWith("⚠️")
                ? "orange"
                : "red",
            }}
          >
            {message}
          </p>
        )}

        <div style={styles.footer}>
          <p>Pas encore de compte ?</p>
          <button onClick={allerVersInscription} style={styles.linkBtn}>
            Créer un compte
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "black",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "30px",
    width: "350px",
    boxShadow: "0 10px 40px rgba(255,215,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "2px solid #ddd",
    borderRadius: "8px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#FFD700",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
  },
  linkBtn: {
    backgroundColor: "black",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },
};

export default Connexion;
