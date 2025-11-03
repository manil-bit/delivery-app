import React, { useState } from 'react';

function Inscription({ allerVersConnexion }) {
  const [userType, setUserType] = useState('client');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    if (!nom || !email || !telephone || !password || !confirmPassword) {
      setMessage('⚠️ Veuillez remplir tous les champs');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('❌ Les mots de passe ne correspondent pas');
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: nom,
          email: email,
          phone: telephone,
          password: password,
          role: userType,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Inscription réussie !");
        setNom('');
        setEmail('');
        setTelephone('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setMessage(`❌ Erreur : ${data.message}`);
      }
    } catch (error) {
      console.error("Erreur de connexion :", error);
      setMessage("⚠️ Impossible de se connecter au serveur");
    }
  };

  return (
    <div style={{
      backgroundColor: 'black',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{ maxWidth: '400px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{
            backgroundColor: '#FFD700',
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '40px'
          }}>
            📦
          </div>
          <h1 style={{ color: 'white', fontSize: '36px', margin: '0 0 10px 0' }}>
            DeliveryApp
          </h1>
          <p style={{ color: '#888' }}>Créez votre compte</p>
        </div>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
          <button
            onClick={() => setUserType('client')}
            style={{
              flex: 1,
              padding: '15px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              backgroundColor: userType === 'client' ? '#FFD700' : '#333',
              color: userType === 'client' ? 'black' : 'white',
              transition: 'all 0.3s'
            }}
          >
            👤 Client
          </button>
          <button
            onClick={() => setUserType('livreur')}
            style={{
              flex: 1,
              padding: '15px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              backgroundColor: userType === 'livreur' ? '#FFD700' : '#333',
              color: userType === 'livreur' ? 'black' : 'white',
              transition: 'all 0.3s'
            }}
          >
            📦 Livreur
          </button>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '30px',
          boxShadow: '0 10px 40px rgba(255,215,0,0.2)'
        }}>
          <h2 style={{ marginTop: 0, marginBottom: '25px', color: 'black' }}>
            Inscription {userType === 'client' ? 'Client' : 'Livreur'}
          </h2>

          <input placeholder="Nom complet" value={nom} onChange={(e) => setNom(e.target.value)} style={inputStyle} />
          <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
          <input placeholder="Téléphone" value={telephone} onChange={(e) => setTelephone(e.target.value)} style={inputStyle} />
          <input placeholder="Mot de passe" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
          <input placeholder="Confirmer le mot de passe" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={inputStyle} />

          {userType === 'livreur' && (
            <div style={{
              marginBottom: '20px',
              padding: '15px',
              backgroundColor: '#FFF9E6',
              borderRadius: '8px',
              border: '2px solid #FFD700'
            }}>
              <p style={{ margin: '0 0 10px 0', fontWeight: 'bold', color: '#333' }}>
                📋 Documents requis pour livreurs :
              </p>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#666' }}>
                <li>Permis de conduire</li>
                <li>Carte d'identité</li>
                <li>Photo d'identité</li>
              </ul>
            </div>
          )}

          <button
            onClick={handleSignup}
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: '#FFD700',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(255,215,0,0.3)'
            }}
          >
            S'inscrire
          </button>

          {message && (
            <p style={{ textAlign: 'center', marginTop: '20px', color: message.startsWith('✅') ? 'green' : 'red' }}>
              {message}
            </p>
          )}

          <div style={{
            textAlign: 'center',
            marginTop: '20px',
            paddingTop: '20px',
            borderTop: '1px solid #eee'
          }}>
            <p style={{ color: '#666', marginBottom: '15px' }}>
              Déjà un compte ?
            </p>
            <button
              onClick={allerVersConnexion}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Se connecter
            </button>
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '20px',
          color: '#666',
          fontSize: '14px'
        }}>
          © 2024 DeliveryApp - Tous droits réservés
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  border: '2px solid #ddd',
  borderRadius: '8px',
  fontSize: '16px',
  boxSizing: 'border-box',
  marginBottom: '15px'
};

export default Inscription;
