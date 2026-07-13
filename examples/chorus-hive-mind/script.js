const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const dialog = document.querySelector('.apply-dialog');
const form = document.querySelector('.apply-form');
const success = document.querySelector('.form-success');

document.querySelector('[data-year]').textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  header.classList.toggle('is-fixed', window.scrollY > 120);
}, { passive: true });

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open', !isOpen);
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a, button')) {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }
});

document.querySelectorAll('[data-open-apply]').forEach((button) => {
  button.addEventListener('click', () => {
    form.hidden = false;
    success.hidden = true;
    form.reset();
    dialog.showModal();
    dialog.querySelector('input')?.focus();
  });
});

document.querySelector('[data-close-apply]').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  const bounds = dialog.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) dialog.close();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.hidden = true;
  success.hidden = false;
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  revealObserver.observe(element);
});

const heroArt = document.querySelector('.hero-art');
if (window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
  document.querySelector('.hero').addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 8;
    const y = (event.clientY / window.innerHeight - 0.5) * 6;
    heroArt.style.transform = `scale(1.015) translate(${x}px, ${y}px)`;
  });
  document.querySelector('.hero').addEventListener('pointerleave', () => {
    heroArt.style.transform = 'scale(1) translate(0, 0)';
  });
}
