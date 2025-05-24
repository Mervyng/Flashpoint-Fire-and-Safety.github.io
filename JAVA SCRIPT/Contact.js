document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  // Toggle navigation menu on small screens
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.classList.toggle('open');
  });

  // Simple form validation feedback (optional enhancement)
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', (e) => {
    // Example: check if name and email are filled (HTML required does this already, but for demonstration)
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    if (!name || !email) {
      e.preventDefault();
      alert('Please fill out your name and email before submitting.');
    }
  });
});
