export function audioSwitcher() {
  const switcher = document.getElementById('js-soundSwitcher');
  const switcherText = switcher.querySelector('.p-soundSwitcher__text');
  const audioEl = document.getElementById('js-audio');

  switcher.addEventListener('click', () => {
    if (audioEl.paused) {
      audioEl.play();
      switcherText.textContent = 'Sound On';
    } else {
      audioEl.pause();
      switcherText.textContent = 'Sound Off';
    }
  });
}
