import React, { useState } from 'react';

function LivreurHome({ seDeconnecter }) {
  const [disponible, setDisponible] = useState(false);
  const [activeTab, setActiveTab] = useState('commandes');
  
  // Commandes simulées
  const [commandes] = useState([
    {
      id: 1,
      pointA: 'Bonne nouvelle 75002',
      pointB: '21 rue des étudiants 92400',
      taille: 'small',
      prix: '8€',
      distance: '2.5 km',
      temps: '15 min'
    },
    {
      id: 2,
      pointA: '45 Avenue des Champs 75008',
      pointB: '12 Boulevard Voltaire 75011',
      taille: 'medium',
      prix: '15€',
      distance: '4.2 km',
      temps: '20 min'
    },
    {
      id: 3,
      pointA: '8 Rue de la Paix 75002',
      pointB: '33 Rue du Commerce 75015',
      taille: 'large',
      prix: '25€',
      distance: '6.8 km',
      temps: '30 min'
    }
  ]);

  const handleAcceptOrder = (commande) => {
    alert('Commande acceptée !\n\nDe : ' + commande.pointA + '\nVers : ' + commande.pointB + '\nGain : ' + commande.prix);
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ backgroundColor: 'black', color: 'white', padding: '15px 20px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ backgroundColor: '#FFD700', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
              📦
            </div>
            <h1 style={{ margin: 0, fontSize: '24px' }}>DeliveryApp</h1>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <span>📦 Livreur</span>
            <button
              onClick={seDeconnecter}
              style={{
                padding: '8px 16px',
                backgroundColor: '#FFD700',
                color: 'black',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Déconnexion
            </button>
          </div>
        </div>
      </div>

      {/* Status Disponibilité */}
      <div style={{ backgroundColor: disponible ? '#4CAF50' : '#f44336', padding: '20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white' }}>
          <div>
            <h2 style={{ margin: '0 0 5px 0', fontSize: '24px' }}>
              {disponible ? '🟢 Vous êtes disponible' : '🔴 Vous êtes indisponible'}
            </h2>
            <p style={{ margin: 0, opacity: 0.9 }}>
              {disponible ? 'Vous recevez des commandes' : 'Activez-vous pour recevoir des commandes'}
            </p>
          </div>
          <button
            onClick={() => setDisponible(!disponible)}
            style={{
              padding: '15px 40px',
              backgroundColor: 'white',
              color: disponible ? '#4CAF50' : '#f44336',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
          >
            {disponible ? 'Me mettre indisponible' : 'Me rendre disponible'}
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{ backgroundColor: 'white', borderBottom: '2px solid #eee' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '0' }}>
          <button
            onClick={() => setActiveTab('commandes')}
            style={{
              padding: '15px 30px',
              border: 'none',
              backgroundColor: activeTab === 'commandes' ? '#FFD700' : 'white',
              color: activeTab === 'commandes' ? 'black' : '#666',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderBottom: activeTab === 'commandes' ? '3px solid #FFD700' : 'none'
            }}
          >
            📦 Commandes disponibles
          </button>
          <button
            onClick={() => setActiveTab('encours')}
            style={{
              padding: '15px 30px',
              border: 'none',
              backgroundColor: activeTab === 'encours' ? '#FFD700' : 'white',
              color: activeTab === 'encours' ? 'black' : '#666',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderBottom: activeTab === 'encours' ? '3px solid #FFD700' : 'none'
            }}
          >
            🚚 En cours
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            style={{
              padding: '15px 30px',
              border: 'none',
              backgroundColor: activeTab === 'stats' ? '#FFD700' : 'white',
              color: activeTab === 'stats' ? 'black' : '#666',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderBottom: activeTab === 'stats' ? '3px solid #FFD700' : 'none'
            }}
          >
            📊 Statistiques
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        
        {/* Onglet Commandes */}
        {activeTab === 'commandes' && (
          <div>
            {!disponible && (
              <div style={{ backgroundColor: '#fff3cd', padding: '20px', borderRadius: '12px', marginBottom: '20px', border: '2px solid #FFD700' }}>
                <p style={{ margin: 0, fontWeight: 'bold', color: '#856404' }}>
                  ⚠️ Vous devez être disponible pour voir les commandes
                </p>
              </div>
            )}
            
            {disponible && (
              <div style={{ display: 'grid', gap: '20px' }}>
                {commandes.map(commande => (
                  <div key={commande.id} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '25px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', border: '2px solid #eee' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '20px', alignItems: 'start' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                          <span style={{ 
                            padding: '5px 12px', 
                            backgroundColor: commande.taille === 'small' ? '#e3f2fd' : commande.taille === 'medium' ? '#fff3e0' : '#fce4ec',
                            color: commande.taille === 'small' ? '#1976d2' : commande.taille === 'medium' ? '#f57c00' : '#c2185b',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: 'bold'
                          }}>
                            {commande.taille === 'small' ? 'PETIT' : commande.taille === 'medium' ? 'MOYEN' : 'GRAND'}
                          </span>
                          <span style={{ color: '#666', fontSize: '14px' }}>
                            📍 {commande.distance} • ⏱️ {commande.temps}
                          </span>
                        </div>
                        
                        <div style={{ marginBottom: '10px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                            <span style={{ fontSize: '20px' }}>🟢</span>
                            <div>
                              <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>Point A - Récupération</p>
                              <p style={{ margin: 0, fontWeight: 'bold' }}>{commande.pointA}</p>
                            </div>
                          </div>
                          <div style={{ marginLeft: '10px', borderLeft: '3px dashed #ddd', height: '20px' }}></div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '20px' }}>🔴</span>
                            <div>
                              <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>Point B - Livraison</p>
                              <p style={{ margin: 0, fontWeight: 'bold' }}>{commande.pointB}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#FFD700', margin: '0 0 10px 0' }}>
                          {commande.prix}
                        </p>
                        <button
                          onClick={() => handleAcceptOrder(commande)}
                          style={{
                            padding: '12px 30px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            fontSize: '16px',
                            boxShadow: '0 4px 15px rgba(76,175,80,0.3)'
                          }}
                        >
                          Accepter
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Onglet En cours */}
        {activeTab === 'encours' && (
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '40px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>📦</div>
            <h2 style={{ color: '#666' }}>Aucune livraison en cours</h2>
            <p style={{ color: '#999' }}>Acceptez une commande pour commencer</p>
          </div>
        )}

        {/* Onglet Statistiques */}
        {activeTab === 'stats' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '30px' }}>
              <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '25px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#FFD700', margin: '0 0 10px 0' }}>150</p>
                <p style={{ margin: 0, color: '#666', fontWeight: 'bold' }}>Livraisons totales</p>
              </div>
              <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '25px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#4CAF50', margin: '0 0 10px 0' }}>2,450€</p>
                <p style={{ margin: 0, color: '#666', fontWeight: 'bold' }}>Gains totaux</p>
              </div>
              <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '25px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#2196F3', margin: '0 0 10px 0' }}>4.8★</p>
                <p style={{ margin: 0, color: '#666', fontWeight: 'bold' }}>Note moyenne</p>
              </div>
            </div>

            <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <h3 style={{ marginTop: 0 }}>Cette semaine</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                  <p style={{ margin: '0 0 5px 0', color: '#666' }}>Livraisons</p>
                  <p style={{ margin: 0, fontSize: '32px', fontWeight: 'bold', color: '#FFD700' }}>23</p>
                </div>
                <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                  <p style={{ margin: '0 0 5px 0', color: '#666' }}>Gains</p>
                  <p style={{ margin: 0, fontSize: '32px', fontWeight: 'bold', color: '#4CAF50' }}>345€</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LivreurHome;