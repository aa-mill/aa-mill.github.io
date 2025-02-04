// function to load html components
async function loadComponent(elementId, path) {
  try {
    const response = await fetch(path);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
    
    // if this is the header, update active nav link
    if (elementId === 'header') {
      const currentPath = window.location.pathname;
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath) {
          link.classList.add('active');
        }
      });
    }
  } catch (error) {
    console.error(`Error loading ${path}:`, error);
  }
} 