

async function chargerContact() {

  try {
    const response = await fetch('data/constact.json');
    const data = await response.json();

    afficherHeader(data.coordonnees);
    afficherCoordonnees(data.coordonnees);
    afficherReseaux(data.reseaux);
    afficherHoraires(data.horaires);
    afficherFooter(data.reseaux);

  } catch (error) {

    console.error('Erreur lors du chargement des données de contact:', error);
    documents.getEllementsById('header-disponibilite').innerHTML = 
    '<span class="badge bg-danger"> Erreur de chargement</span>';
  }
}


function afficherHeader(coordonnees) {
  document.getElementById('header-disponibilite').textContent =
  coordonnees.disponibilite;
}

function afficherCoordonnees(coordonnees) {
  const container = document.getElementById('coordonnees-container');
  
  container.innerHTML = `
    <div class="info-box">
      <i class="bi bi-envelope-fill text-primary me-2"></i>
      <strong>Email:</strong><br>
      <a href="mailto:${coordonnees.email}" class="text-decoration-none">
        ${coordonnees.email}
      </a>
    </div>
    
    <div class="info-box">
      <i class="bi bi-telephone-fill text-primary me-2"></i>
      <strong>Téléphone:</strong><br>
      <a href="tel:${coordonnees.telephone.replace(/\s/g, '')}" class="text-decoration-none">
        ${coordonnees.telephone}
      </a>
    </div>
    
    <div class="info-box">
      <i class="bi bi-geo-alt-fill text-primary me-2"></i>
      <strong>Localisation:</strong><br>
      ${coordonnees.ville}, ${coordonnees.pays}
    </div>
  `;
}


function afficherReseaux(reseaux) {
  const container = document.getElementById('reseaux-container');
  
  reseaux.forEach(reseau => {
    const link = document.createElement('a');
    link.href = reseau.url;
    link.className = 'social-link';
    link.target = '_blank';
    link.title = `${reseau.nom} - ${reseau.username}`;
    link.innerHTML = `<i class="bi bi-${reseau.icone}"></i>`;
    
    container.appendChild(link);
  });
  
  // Liste détaillée sous les icônes
  const detailsList = document.createElement('div');
  detailsList.className = 'mt-3 w-100';
  
  reseaux.forEach(reseau => {
    const item = document.createElement('div');
    item.className = 'mb-2';
    item.innerHTML = `
      <i class="bi bi-${reseau.icone} text-primary me-2"></i>
      <strong>${reseau.nom}:</strong> 
      <a href="${reseau.url}" target="_blank" class="text-decoration-none">
        ${reseau.username}
      </a>
    `;
    detailsList.appendChild(item);
  });
  
  container.appendChild(detailsList);
}

function afficherHoraires(horaires) {
  const container = document.getElementById('horaires-container');
  
  container.innerHTML = `
    <p class="mb-2">
      <i class="bi bi-info-circle text-primary me-2"></i>
      ${horaires.description}
    </p>
    <p class="mb-1">
      <i class="bi bi-calendar-check text-primary me-2"></i>
      <strong>${horaires.jours}</strong>
    </p>
    <p class="mb-0">
      <i class="bi bi-clock text-primary me-2"></i>
      ${horaires.heures}
    </p>
  `;
  
  document.getElementById('horaires-titre').innerHTML = `
    <i class="bi bi-clock-fill text-primary me-2"></i>
    ${horaires.titre}
  `;
}

function afficherFooter(reseaux) {
  const container = document.getElementById('footer-reseaux');
  
  reseaux.forEach(reseau => {
    const link = document.createElement('a');
    link.href = reseau.url;
    link.className = 'text-white me-3';
    link.target = '_blank';
    link.innerHTML = `<i class="bi bi-${reseau.icone} fs-4"></i>`;
    
    container.appendChild(link);
  });
}

// Gestion du formulaire
function gererFormulaire() {
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const sujet = document.getElementById('sujet').value;
    const message = document.getElementById('message').value;
    
    // Simulation d'envoi (à remplacer par un vrai backend)
    const messageContainer = document.getElementById('form-message');
    
    messageContainer.innerHTML = `
      <div class="alert alert-info">
        <i class="bi bi-info-circle me-2"></i>
        <strong>Note:</strong> Formulaire en démonstration. 
        Pour l'instant, vous pouvez me contacter directement par email.
      </div>
    `;
    
    // Alternative : ouvrir le client email
    const mailtoLink = `mailto:matthieu@exemple.com?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(`Nom: ${nom}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
    
    // Réinitialiser le formulaire
    form.reset();
  });
}

// Charger les données au démarrage
document.addEventListener('DOMContentLoaded', () => {
  chargerContact();
  gererFormulaire();
});

