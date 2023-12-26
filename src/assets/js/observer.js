import { SetObserver } from './libs/setObserver';

export function observer() {
  const footerCta = document.getElementById('js-footerCta');

  const heroObserve = (entries) => {
    if (!entries[0].isIntersecting) {
      document.documentElement.classList.add('is-heroOver');
      footerCta.classList.add('is-visible');
    } else {
      document.documentElement.classList.remove('is-heroOver');
      footerCta.classList.remove('is-visible');
    }
  };

  const footerObserve = (entries) => {
    if (entries[0].isIntersecting) {
      footerCta.classList.remove('is-visible');
    } else if (document.documentElement.classList.contains('is-heroOver')) {
      footerCta.classList.add('is-visible');
    }
  };

  new SetObserver('#js-hero', heroObserve);
  new SetObserver('#js-footer', footerObserve, { threshold: 0.5 });
}
