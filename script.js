// Show year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle
const btn = document.getElementById('themeToggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Simple form feedback
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  msg.textContent = "Thanks! Your message has been received.";
  form.reset();
});
