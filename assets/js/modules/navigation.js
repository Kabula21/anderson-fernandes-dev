const routes = ['inicio','sobre','projetos','contato'];
export function initNavigation({ onRouteChange = () => {} } = {}) {
  const panel = document.querySelector('[data-panel]');
  const backdrop = document.querySelector('[data-backdrop]');
  const scroll = document.querySelector('[data-panel-scroll]');
  const sections = [...document.querySelectorAll('[data-section]')];
  const panelName = document.querySelector('[data-panel-name]');
  let hideTimer = 0;
  let current = 'inicio';
  const routeFromHash = () => routes.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'inicio';
  function displayRoute(next) {
    if (!routes.includes(next)) return;
    current = next;
    clearTimeout(hideTimer);
    sections.forEach(section => { section.hidden = section.dataset.section !== next; });
    if (next === 'inicio') {
      panel.classList.remove('is-visible'); backdrop.classList.remove('is-visible');
      document.body.classList.remove('panel-open');
      hideTimer = setTimeout(() => { if (current === 'inicio') { panel.hidden = true; backdrop.hidden = true; document.body.classList.remove('has-overlay'); } }, 760);
    } else {
      panelName.textContent = next === 'sobre' ? 'SOBRE MIM' : next === 'projetos' ? 'PROJETOS' : 'CONTATO';
      panel.hidden = false; backdrop.hidden = false; document.body.classList.add('has-overlay','panel-open');
      scroll.scrollTop = 0;
      requestAnimationFrame(() => { panel.classList.add('is-visible'); backdrop.classList.add('is-visible'); });
    }
    onRouteChange(next);
  }
  function navigate(next) {
    if (!routes.includes(next)) return;
    if (next !== routeFromHash()) history.pushState({ route:next }, '', '#' + next);
    displayRoute(next);
  }
  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-route]');
    if (!trigger) return;
    const destination = trigger.dataset.route;
    if (!routes.includes(destination)) return;
    event.preventDefault();
    navigate(destination);
  });
  window.addEventListener('popstate', () => displayRoute(routeFromHash()));
  window.addEventListener('hashchange', () => displayRoute(routeFromHash()));
  backdrop.addEventListener('click', () => navigate('inicio'));
  document.querySelector('[data-close-panel]').addEventListener('click', () => navigate('inicio'));
  displayRoute(routeFromHash());
  return { navigate, getCurrent: () => current };
}
