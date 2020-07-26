(function (window, document, undefined) {
  if (!('localStorage' in window)) return;
  const nightMode = localStorage.getItem('gmtNightMode');
  if (nightMode) {
    document.documentElement.className += ' night-mode';
  }
}(window, document));

(function (window, document, undefined) {
  // Feature test
  if (!('localStorage' in window)) return;

  // Get our newly insert toggle
  const nightMode = document.querySelector('#night-mode');
  if (!nightMode) return;

  // When clicked, toggle night mode on or off
  nightMode.addEventListener('click', (event) => {
    event.preventDefault();
    document.documentElement.classList.toggle('night-mode');
    if (document.documentElement.classList.contains('night-mode')) {
      localStorage.setItem('gmtNightMode', true);
      return;
    }
    localStorage.removeItem('gmtNightMode');
  }, false);
}(window, document));
