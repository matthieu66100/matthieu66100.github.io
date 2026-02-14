async function chargerAbout() {
  try {
    const response = await fetch('data/about.json');
    const data = await response.json();
    
    afficherPresentation(data.presentation);
    afficherCompetences(data.competences);
    afficherCentresInteret(data.centresInteret);
    afficherFooter(data.presentation);
    
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
    document.getElementById('hero-titre').textContent = 'Erreur de chargement';
    document.getElementById('hero-description').innerHTML = 
      '<span class="badge bg-danger">Impossible de charger les données</span>';
  }
}

function afficherPresentation(presentation) {
  // Navbar
  document.getElementById('nav-nom').textContent = presentation.nom;
  
  // Hero section
  document.getElementById('hero-titre').textContent = 
    `Salut ! Je m'appelle ${presentation.nom}`;
  
  document.getElementById('hero-description').textContent = 
    `J'ai ${presentation.age} ans et je suis un ingénieur développeur en ${presentation.pays} actuellement basé à ${presentation.ville}. ${presentation.description}`;
  
  const langagesText = presentation.langagesPrincipaux
    .map(lang => `<strong>${lang}</strong>`)
    .join(', ');
  document.getElementById('hero-langages').innerHTML = 
    `Actuellement, je programme en ${langagesText}.`;
  
  // Photo
  const photo = document.getElementById('hero-photo');
  photo.src = presentation.photo;
  photo.alt = presentation.nom;
  photo.style.display = 'block';
  
  // Gestion d'erreur si l'image n'existe pas
  photo.onerror = function() {
    this.style.display = 'none';
  };
}

function afficherCompetences(competences) {
  // Langages
  const langagesContainer = document.getElementById('langages-container');
  competences.langages.forEach(langage => {
    const badge = document.createElement('span');
    badge.className = 'badge bg-primary skill-badge';
    badge.textContent = langage;
    langagesContainer.appendChild(badge);
  });
  
  // Technologies
  const techContainer = document.getElementById('technologies-container');
  competences.technologies.forEach(tech => {
    const badge = document.createElement('span');
    badge.className = 'badge bg-success skill-badge';
    badge.textContent = tech;
    techContainer.appendChild(badge);
  });
  
  // Soft Skills
  const softSkillsContainer = document.getElementById('softskills-container');
  competences.softSkills.forEach(skill => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="bi bi-check-circle-fill text-warning me-2"></i>${skill}`;
    softSkillsContainer.appendChild(li);
  });
  
  // Langues
  const languesContainer = document.getElementById('langues-container');
  competences.langues.forEach(langue => {
    const li = document.createElement('li');
    li.innerHTML = `
      <i class="bi bi-flag-fill text-danger me-2"></i>${langue.langue} 
      <small class="text-muted">(${langue.niveau})</small>
    `;
    languesContainer.appendChild(li);
  });
}

function afficherCentresInteret(interets) {
  const container = document.getElementById('interets-container');
  
  const couleurs = ['primary', 'success', 'warning'];
  
  interets.forEach((interet, index) => {
    const col = document.createElement('div');
    col.className = 'col-md-4';
    
    const couleur = couleurs[index % couleurs.length];
    
    col.innerHTML = `
      <i class="bi bi-${interet.icone} display-1 text-${couleur} mb-3"></i>
      <h5>${interet.titre}</h5>
      <p class="text-muted">${interet.description}</p>
    `;
    
    container.appendChild(col);
  });
}

function afficherFooter(presentation) {
  // Nom dans le footer
  document.getElementById('footer-nom').textContent = presentation.nom;
  
  // Réseaux sociaux
  const reseauxContainer = document.getElementById('footer-reseaux');
  
  if (presentation.reseaux.github) {
    const github = document.createElement('a');
    github.href = presentation.reseaux.github;
    github.className = 'text-white me-3';
    github.target = '_blank';
    github.innerHTML = '<i class="bi bi-github fs-4"></i>';
    reseauxContainer.appendChild(github);
  }
  
  if (presentation.reseaux.linkedin) {
    const linkedin = document.createElement('a');
    linkedin.href = presentation.reseaux.linkedin;
    linkedin.className = 'text-white me-3';
    linkedin.target = '_blank';
    linkedin.innerHTML = '<i class="bi bi-linkedin fs-4"></i>';
    reseauxContainer.appendChild(linkedin);
  }
  
  if (presentation.reseaux.email) {
    const email = document.createElement('a');
    email.href = `mailto:${presentation.reseaux.email}`;
    email.className = 'text-white';
    email.innerHTML = '<i class="bi bi-envelope fs-4"></i>';
    reseauxContainer.appendChild(email);
  }
}

// Charger les données au démarrage
document.addEventListener('DOMContentLoaded', chargerAbout);
