import React, { useState } from "react";

function ClientCommandes() {
  const [description, setDescription] = useState("");
  const [adresse, setAdresse] = useState("");
  const [montant, setMontant] = useState("");
  const [message, setMessage] = useState("");

  const handleCreateOrder = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      // ✅ Correction : on appelle bien la route /api/orders/create
      const response = await fetch("http://localhost:4000/api/orders/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          description,
          adresse,
          montant,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Commande créée avec succès !");
        setDescription("");
        setAdresse("");
        setMontant("");

        // Optionnel : afficher les infos dans la console
        console.log("Commande créée :", data.order);
        alert(`Commande créée !
Description : ${data.order.description}
Adresse : ${data.order.adresse}
Montant : ${data.order.montant} DZD`);
      } else {
        setMessage(`❌ ${data.message || "Erreur lors de la création"}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Erreur de connexion au serveur");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Créer une commande</h2>

        <form onSubmit={handleCreateOrder}>
          <input
            type="text"
            placeholder="Description (ex: Livraison de vêtements)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Adresse de livraison"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Montant (DZD)"
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Créer la commande
          </button>
        </form>

        {message && (
          <p
            style={{
              color: message.startsWith("✅") ? "green" : "red",
              marginTop: "15px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    padding: "35px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    width: "400px",
  },
  title: {
    textAlign: "center",
    marginBottom: "25px",
    color: "black",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#FFD700",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default ClientCommandes;
