import React, { useState, useEffect } from "react";

function LivreurCommandes() {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("");

  const fetchOrders = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:4000/api/orders/all", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (response.ok) {
        setOrders(data);
      } else {
        setMessage("❌ Erreur de chargement des commandes");
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Erreur de connexion au serveur");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`http://localhost:4000/api/orders/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Statut mis à jour !");
        fetchOrders(); // recharge les commandes
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Erreur de mise à jour du statut");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>📦 Commandes disponibles</h2>
        {message && (
          <p style={{ color: message.startsWith("✅") ? "green" : "red" }}>{message}</p>
        )}
        {orders.length === 0 ? (
          <p>Aucune commande disponible</p>
        ) : (
          orders.map((order) => (
            <div key={order._id} style={styles.order}>
              <p><strong>Description :</strong> {order.description}</p>
              <p><strong>Adresse :</strong> {order.adresse}</p>
              <p><strong>Montant :</strong> {order.montant} DZD</p>
              <p><strong>Statut :</strong> {order.status}</p>
              <div style={styles.buttons}>
                <button
                  onClick={() => handleStatusChange(order._id, "en cours")}
                  style={styles.btnPrimary}
                >
                  🚚 En cours
                </button>
                <button
                  onClick={() => handleStatusChange(order._id, "livrée")}
                  style={styles.btnSuccess}
                >
                  ✅ Livrée
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "30px",
    width: "600px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  order: {
    borderBottom: "1px solid #ddd",
    paddingBottom: "15px",
    marginBottom: "15px",
  },
  buttons: {
    display: "flex",
    gap: "10px",
  },
  btnPrimary: {
    backgroundColor: "#FFD700",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  btnSuccess: {
    backgroundColor: "green",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default LivreurCommandes;
