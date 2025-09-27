// Jahr im Footer automatisch setzen
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Navigation toggeln
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('site-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Smooth Scrolling für Anker-Links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

window.addEventListener('scroll', function() {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 40) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});