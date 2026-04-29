async function chargerContact() {
  try {
    const response = await fetch('data/contact.json');
    const data = await response.json();
    
    afficherHeader(data);
    afficherLiens(data.liens);
    
  } catch (error) {
    console.error('Erreur lors du chargement des données de contact:', error);
    document.getElementById('liens-container').innerHTML = `
      <div class="alert alert-danger">
        <i class="bi bi-exclamation-triangle me-2"></i>
        Erreur de chargement des liens de contact
      </div>
    `;
  }
}

function afficherHeader(data) {
  document.getElementById('header-titre').textContent = data.titre;
  document.getElementById('header-soustitre').textContent = data.soustitre;
  document.getElementById('header-disponibilite').innerHTML = `
    <i class="bi bi-check-circle-fill me-2"></i>
    ${data.disponibilite}
  `;
}

function afficherLiens(liens) {
  const container = document.getElementById('liens-container');
  
  liens.forEach(lien => {
    const btn = document.createElement('a');
    btn.href = lien.url;
    btn.target = lien.url.startsWith('mailto:') ? '_self' : '_blank';
    btn.className = 'contact-btn';
    btn.style.setProperty('--btn-color', lien.couleur);
    
    // Effet de couleur au survol
    btn.addEventListener('mouseenter', function() {
      this.style.background = lien.couleur;
      this.style.color = 'white';
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.background = 'white';
      this.style.color = '#333';
    });
    
    btn.innerHTML = `
      <div class="contact-btn-icon">
        <i class="bi bi-${lien.icone}"></i>
        <div class="contact-btn-text">
          <h4>${lien.nom}</h4>
          <p>${lien.description}</p>
        </div>
      </div>
      <div class="contact-btn-arrow">
        <i class="bi bi-arrow-right"></i>
      </div>
    `;
    
    container.appendChild(btn);
  });
}


// Charger les données au démarrage
document.addEventListener('DOMContentLoaded', chargerContact);