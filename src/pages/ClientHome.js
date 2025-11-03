import React, { useState } from 'react';

function ClientHome({ seDeconnecter }) {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [pickupAddress, setPickupAddress] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [packageSize, setPackageSize] = useState('small');
  const [activeTab, setActiveTab] = useState('home');

  const handleCreateOrder = () => {
    if (pickupAddress && deliveryAddress) {
      alert('Commande créée !\n\nRécupération : ' + pickupAddress + '\nLivraison : ' + deliveryAddress + '\nTaille : ' + packageSize);
      setShowOrderForm(false);
      setPickupAddress('');
      setDeliveryAddress('');
    } else {
      alert('Veuillez remplir les deux adresses');
    }
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
            <span>👤 Client</span>
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

      {/* Navigation Tabs */}
      <div style={{ backgroundColor: 'white', borderBottom: '2px solid #eee' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '0' }}>
          <button
            onClick={() => setActiveTab('home')}
            style={{
              padding: '15px 30px',
              border: 'none',
              backgroundColor: activeTab === 'home' ? '#FFD700' : 'white',
              color: activeTab === 'home' ? 'black' : '#666',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderBottom: activeTab === 'home' ? '3px solid #FFD700' : 'none'
            }}
          >
            🏠 Accueil
          </button>
          <button
            onClick={() => setActiveTab('history')}
            style={{
              padding: '15px 30px',
              border: 'none',
              backgroundColor: activeTab === 'history' ? '#FFD700' : 'white',
              color: activeTab === 'history' ? 'black' : '#666',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderBottom: activeTab === 'history' ? '3px solid #FFD700' : 'none'
            }}
          >
            📋 Historique
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            style={{
              padding: '15px 30px',
              border: 'none',
              backgroundColor: activeTab === 'profile' ? '#FFD700' : 'white',
              color: activeTab === 'profile' ? 'black' : '#666',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderBottom: activeTab === 'profile' ? '3px solid #FFD700' : 'none'
            }}
          >
            👤 Profil
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {activeTab === 'home' && (
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
            
            {/* Carte simulée */}
            <div>
              <div style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <div style={{ position: 'relative', height: '400px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center', color: 'white' }}>
                    <div style={{ fontSize: '64px', marginBottom: '20px' }}>📍</div>
                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Carte interactive</p>
                    <p style={{ fontSize: '14px', opacity: 0.8 }}>Paris, Île-de-France</p>
                  </div>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '20px', height: '20px', backgroundColor: '#FFD700', borderRadius: '50%', boxShadow: '0 0 0 10px rgba(255,215,0,0.3)', animation: 'pulse 2s infinite' }}></div>
                </div>

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', backgroundColor: 'black', color: 'white' }}>
                  <div style={{ padding: '20px', textAlign: 'center' }}>
                    <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#FFD700', margin: '0 0 5px 0' }}>12</p>
                    <p style={{ fontSize: '14px', margin: 0, opacity: 0.8 }}>Livreurs actifs</p>
                  </div>
                  <div style={{ padding: '20px', textAlign: 'center', borderLeft: '1px solid #333', borderRight: '1px solid #333' }}>
                    <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#FFD700', margin: '0 0 5px 0' }}>~15min</p>
                    <p style={{ fontSize: '14px', margin: 0, opacity: 0.8 }}>Temps d'attente</p>
                  </div>
                  <div style={{ padding: '20px', textAlign: 'center' }}>
                    <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#FFD700', margin: '0 0 5px 0' }}>4.8★</p>
                    <p style={{ fontSize: '14px', margin: 0, opacity: 0.8 }}>Note moyenne</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel de commande */}
            <div>
              {!showOrderForm ? (
                <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '25px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                  <h2 style={{ marginTop: 0, marginBottom: '15px' }}>Nouvelle livraison</h2>
                  <p style={{ color: '#666', marginBottom: '25px' }}>
                    Faites livrer vos colis en moins d'une heure
                  </p>
                  
                  <button
                    onClick={() => setShowOrderForm(true)}
                    style={{
                      width: '100%',
                      padding: '15px',
                      backgroundColor: '#FFD700',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(255,215,0,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px'
                    }}
                  >
                    <span style={{ fontSize: '20px' }}>📦</span>
                    Commander une livraison
                  </button>

                  <div style={{ marginTop: '25px' }}>
                    <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>Tarifs</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px', borderLeft: '4px solid #FFD700' }}>
                        <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>📦 Petit colis</p>
                        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Jusqu'à 5kg - À partir de 8€</p>
                      </div>
                      <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px', borderLeft: '4px solid #FFD700' }}>
                        <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>📦 Moyen colis</p>
                        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>5-15kg - À partir de 15€</p>
                      </div>
                      <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px', borderLeft: '4px solid #FFD700' }}>
                        <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>📦 Gros colis</p>
                        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>15-30kg - À partir de 25€</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '25px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                  <h2 style={{ marginTop: 0, marginBottom: '20px' }}>Nouvelle commande</h2>

                  <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', marginBottom: '8px' }}>
                      <span style={{ color: 'green', fontSize: '18px' }}>📍</span>
                      Point de récupération (A)
                    </label>
                    <input
                      type="text"
                      value={pickupAddress}
                      onChange={(e) => setPickupAddress(e.target.value)}
                      placeholder="Adresse de récupération"
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '14px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', marginBottom: '8px' }}>
                      <span style={{ color: 'red', fontSize: '18px' }}>📍</span>
                      Point de livraison (B)
                    </label>
                    <input
                      type="text"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder="Adresse de livraison"
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '14px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>
                      Taille du colis
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                      <button
                        onClick={() => setPackageSize('small')}
                        style={{
                          padding: '12px',
                          border: packageSize === 'small' ? '2px solid #FFD700' : '2px solid #ddd',
                          backgroundColor: packageSize === 'small' ? '#FFF9E6' : 'white',
                          borderRadius: '8px',
                          fontWeight: 'bold',
                          cursor: 'pointer'
                        }}
                      >
                        Petit
                      </button>
                      <button
                        onClick={() => setPackageSize('medium')}
                        style={{
                          padding: '12px',
                          border: packageSize === 'medium' ? '2px solid #FFD700' : '2px solid #ddd',
                          backgroundColor: packageSize === 'medium' ? '#FFF9E6' : 'white',
                          borderRadius: '8px',
                          fontWeight: 'bold',
                          cursor: 'pointer'
                        }}
                      >
                        Moyen
                      </button>
                      <button
                        onClick={() => setPackageSize('large')}
                        style={{
                          padding: '12px',
                          border: packageSize === 'large' ? '2px solid #FFD700' : '2px solid #ddd',
                          backgroundColor: packageSize === 'large' ? '#FFF9E6' : 'white',
                          borderRadius: '8px',
                          fontWeight: 'bold',
                          cursor: 'pointer'
                        }}
                      >
                        Grand
                      </button>
                    </div>
                  </div>

                  <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 'bold' }}>Prix estimé :</span>
                      <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#FFD700' }}>
                        {packageSize === 'small' ? '8€' : packageSize === 'medium' ? '15€' : '25€'}
                      </span>
                    </div>
                    <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#666' }}>
                      Temps estimé : 20-30 min
                    </p>
                  </div>

                  <button
                    onClick={handleCreateOrder}
                    style={{
                      width: '100%',
                      padding: '15px',
                      backgroundColor: '#FFD700',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      marginBottom: '10px'
                    }}
                  >
                    Confirmer la commande
                  </button>
                  <button
                    onClick={() => setShowOrderForm(false)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: '#f5f5f5',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      color: '#666'
                    }}
                  >
                    Annuler
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginTop: 0 }}>Historique des commandes</h2>
            <p style={{ color: '#666' }}>Aucune commande pour le moment</p>
          </div>
        )}

        {activeTab === 'profile' && (
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginTop: 0 }}>Mon profil</h2>
            <p style={{ color: '#666' }}>Informations du compte à venir...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClientHome;