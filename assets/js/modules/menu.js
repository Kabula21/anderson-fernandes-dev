export function initMenu() {
  const menu = document.querySelector('[data-fullscreen-menu]');
  const trigger = document.querySelector('[data-menu-trigger]');
  const links = menu.querySelectorAll('[data-route]');
  const label = trigger.querySelector('[data-menu-text]');
  let timer;
  function close() {
    clearTimeout(timer);
    menu.classList.remove('is-visible'); trigger.classList.remove('is-open');
    trigger.setAttribute('aria-expanded','false'); trigger.setAttribute('aria-label','Abrir menu'); label.textContent = 'MENU';
    document.body.classList.remove('menu-open');
    if (!document.body.classList.contains('panel-open')) document.body.classList.remove('has-overlay');
    timer = setTimeout(() => { menu.hidden = true; }, 480);
  }
  function open() {
    clearTimeout(timer); menu.hidden = false;
    document.body.classList.add('menu-open','has-overlay');
    trigger.classList.add('is-open'); trigger.setAttribute('aria-expanded','true'); trigger.setAttribute('aria-label','Fechar menu'); label.textContent = 'FECHAR';
    requestAnimationFrame(() => menu.classList.add('is-visible'));
  }
  trigger.addEventListener('click', () => menu.hidden ? open() : close());
  links.forEach(link => link.addEventListener('click', () => close()));
  menu.addEventListener('click', event => { if (event.target === menu) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) { close(); trigger.focus(); } });
  return { close, isOpen: () => !menu.hidden };
}
