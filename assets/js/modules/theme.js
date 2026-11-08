export function initTheme() {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  try { const saved = localStorage.getItem('af-theme'); if (saved === 'dark' || saved === 'light') root.dataset.theme = saved; } catch (_) {}
  function update() {
    const light = root.dataset.theme === 'light';
    toggle.querySelector('.theme-icon').textContent = light ? '☾' : '☼';
    toggle.setAttribute('aria-label', light ? 'Ativar modo escuro' : 'Ativar modo claro');
  }
  update();
  toggle.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('af-theme',root.dataset.theme); } catch (_) {}
    update();
  });
}
