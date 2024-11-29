let currentIndex = 0;
const sliders = document.querySelectorAll('.slider');
const btnCTA = document.querySelector('.btn-cta');
const targetSection = document.querySelector('#services'); // Sélectionne la section avec l'ID 'services'
const titles = ["Dev Web", "SysNet", "Blog et Journal"]; // Titres correspondants
const totalSliders = sliders.length;
const titleElement = document.querySelector('.slider-container h1'); // Le titre à changer

function moveSlide(step) {
  // Mettre à jour l'index actuel
  currentIndex = (currentIndex + step + totalSliders) % totalSliders;

  // Mettre à jour l'affichage des sliders
  sliders.forEach((slider, index) => {
    if (index === currentIndex) {
      slider.style.display = 'flex';  // Affiche le slider actif
    } else {
      slider.style.display = 'none';  // Cache les autres sliders
    }
  });

  // Mettre à jour le titre
  titleElement.textContent = titles[currentIndex];
}

// Initialisation : afficher uniquement le premier slider et le titre
document.addEventListener('DOMContentLoaded', () => {
  sliders.forEach((slider, index) => {
    if (index !== currentIndex) {
      slider.style.display = 'none';
    } else {
      slider.style.display = 'flex';
    }
  });

  // Mettre à jour le titre initial
  titleElement.textContent = titles[currentIndex];
});
btnCTA.addEventListener('click', (event) => {
  event.preventDefault(); // Empêcher le comportement par défaut du lien
  
  // Utiliser scrollIntoView pour un défilement fluide vers la section
  targetSection.scrollIntoView({
    behavior: 'smooth',  // Animation fluide
    block: 'start'       // Défilement vers le début de la section
  });
});