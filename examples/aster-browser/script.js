const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
const dialog = document.querySelector('.waitlist-dialog');
const form = document.querySelector('.waitlist-form');
const success = document.querySelector('.waitlist-success');
const storyTitle = document.querySelector('[data-story-title]');
const storyLabel = document.querySelector('[data-story-label]');
const browser = document.querySelector('.browser-shell');

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('is-open', !expanded);
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a, button')) {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }
});

document.querySelectorAll('[data-open-waitlist]').forEach((button) => {
  button.addEventListener('click', () => {
    form.hidden = false;
    success.hidden = true;
    form.reset();
    dialog.showModal();
    dialog.querySelector('input[type="email"]')?.focus();
  });
});

document.querySelector('[data-close-waitlist]').addEventListener('click', () => dialog.close());
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

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    storyTitle.innerHTML = tab.dataset.title.replace(': ', ':<br />');
    storyLabel.textContent = tab.dataset.label;
  });
});

document.querySelector('[data-reading-mode]').addEventListener('click', (event) => {
  const pressed = event.currentTarget.getAttribute('aria-pressed') === 'true';
  event.currentTarget.setAttribute('aria-pressed', String(!pressed));
  browser.classList.toggle('is-dim', !pressed);
});
