async function chargerProjets() {
  try {
    const response = await fetch('../data/projects.json');
    const projets = await response.json();
    afficherProjets(projets);
  } catch (error) {
    console.error('Erreur:', error);
    document.getElementById('projets-container').innerHTML = 
      '<div class="alert alert-danger">Erreur de chargement des projets</div>';
  }
}

function afficherProjets(projets) {
  const container = document.getElementById('projets-container');
  
  projets.forEach(projet => {
    const col = document.createElement('div');
    col.className = 'col';
    
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${projet.image}" class="card-img-top" alt="${projet.titre}" style="height: 200px; object-fit: cover;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${projet.titre}</h5>
          <p class="card-text">${projet.description}</p>
          <div class="mb-3">
            ${projet.technologies.map(tech => 
              `<span class="badge bg-primary me-1">${tech}</span>`
            ).join('')}
          </div>
          <div class="mt-auto">
            <button type="button" class="btn btn-primary btn-sm me-2" data-bs-toggle="modal" data-bs-target="#inProgressModal">
              <i class="bi bi-eye"></i> Voir le projet
            </button>
            ${projet.github ? 
              `<a href="${projet.github}" class="btn btn-outline-secondary btn-sm" target="_blank">
                <i class="bi bi-github"></i> GitHub
              </a>` : ''
            }
          </div>      
        </div>
      </div>
    `;
    
    container.appendChild(col);
  });
}

// Charger au démarrage
document.addEventListener('DOMContentLoaded', chargerProjets);