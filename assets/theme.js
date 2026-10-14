(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  var dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.setAttribute('data-theme', dark ? 'dark' : 'light');

  document.addEventListener('DOMContentLoaded', function () {
    // Pages may provide their own #theme-toggle; otherwise a floating one is added.
    var btn = document.getElementById('theme-toggle');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'theme-toggle';
      btn.type = 'button';
      btn.className = 'theme-toggle theme-toggle-floating';
      btn.setAttribute('aria-label', 'Toggle dark mode');
      document.body.appendChild(btn);
    }
    function label() {
      btn.textContent = root.getAttribute('data-theme') === 'dark' ? 'Light mode' : 'Dark mode';
    }
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      label();
    });
    label();
  });
})();
