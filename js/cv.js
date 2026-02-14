async function chargerCV() {
  try {
    const response = await fetch('data/cv.json');
    const cv = await response.json();
    
    afficherFormation(cv.Formation);
    afficherExperiences(cv.Experiences);
  } catch (error) {
    console.error('Erreur lors du chargement du CV:', error);
    document.getElementById('formation-container').innerHTML = 
      '<div class="alert alert-danger">Erreur de chargement</div>';
  }
}

function afficherFormation(formations) {
  const container = document.getElementById('formation-container');
  
  formations.forEach(formation => {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    
    div.innerHTML = `
      <h5 class="mb-1">${formation.Diplome}</h5>
      <p class="text-muted mb-1">
        <i class="bi bi-building"></i> ${formation.Etablissement}
      </p>
      <p class="text-muted mb-1">
        <i class="bi bi-calendar3"></i> ${formation.Date} | 
        <i class="bi bi-geo-alt"></i> ${formation.Ville}
      </p>
      <span class="badge bg-success">${formation.Mention}</span>
    `;
    
    container.appendChild(div);
  });
}

function afficherExperiences(experiences) {
  const container = document.getElementById('experiences-container');
  
  experiences.forEach(exp => {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    
    div.innerHTML = `
      <h5 class="mb-1">${exp.Poste}</h5>
      <p class="text-primary fw-bold mb-1">
        <i class="bi bi-building"></i> ${exp.Entreprise}
      </p>
      <p class="text-muted mb-2">
        ${exp.Date ? `<i class="bi bi-calendar3"></i> ${exp.Date}` : ''} 
        ${exp.Ville ? `| <i class="bi bi-geo-alt"></i> ${exp.Ville}` : ''}
      </p>
      ${exp.Technologies ? `
        <div class="mb-2">
          ${exp.Technologies.map(tech => 
            `<span class="badge bg-primary me-1">${tech}</span>`
          ).join('')}
        </div>
      ` : ''}
    `;
    
    container.appendChild(div);
  });
}

// Charger au démarrage
document.addEventListener('DOMContentLoaded', chargerCV);