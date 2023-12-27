export function loading() {
  document.documentElement.style.overflow = 'hidden';

  window.addEventListener('load', () => {
    document.documentElement.style.overflow = 'visible';

    document.documentElement.classList.add('is-loaded');
  });
}
