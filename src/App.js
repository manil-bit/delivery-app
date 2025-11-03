import React, { useState } from "react"; // ✅ ajout du useState ici
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import ClientHome from "./pages/ClientHome";
import ClientCommandes from "./pages/ClientCommandes";
import LivreurCommandes from "./pages/LivreurCommandes";

function App() {
  const [page, setPage] = useState("connexion");
  const [userType, setUserType] = useState(null);

  const handleLogin = (type) => {
    setUserType(type);
    if (type === "client") {
      setPage("clientHome");
    } else if (type === "livreur") {
      setPage("livreurHome");
    }
  };

  const handleLogout = () => {
    setUserType(null);
    setPage("connexion");
  };

  if (page === "connexion") {
    return (
      <Connexion
        allerVersInscription={() => setPage("inscription")}
        seConnecter={handleLogin}
      />
    );
  } else if (page === "inscription") {
    return <Inscription allerVersConnexion={() => setPage("connexion")} />;
  } else if (page === "clientHome") {
    return (
      <ClientHome
        seDeconnecter={handleLogout}
        allerVersCommandes={() => setPage("clientCommandes")}
      />
    );
  } else if (page === "clientCommandes") {
    return (
      <ClientCommandes
        revenirAccueil={() => setPage("clientHome")}
        seDeconnecter={handleLogout}
      />
    );
  } else if (page === "livreurHome") {
    return (
      <LivreurCommandes
        seDeconnecter={handleLogout}
      />
    );
  } else {
    return (
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
        }}
      >
        Dashboard Livreur - À venir...
      </div>
    );
  }
}

export default App;
