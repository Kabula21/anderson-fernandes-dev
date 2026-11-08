/** Entrada da aplicação — HTML/CSS/JavaScript puro, módulos ES. */
import { initNavigation } from './modules/navigation.js';
import { initMenu } from './modules/menu.js';
import { initTheme } from './modules/theme.js';
import { initRotator } from './modules/rotator.js';
import { initPortfolio } from './modules/portfolio.js';
import { initForms } from './modules/forms.js';

const menu = initMenu();
const portfolio = initPortfolio();
initNavigation({ onRouteChange: () => { if (menu.isOpen()) menu.close(); portfolio.closeModal(); } });
initTheme();
initRotator();
initForms();

// Fechar painéis pelo teclado.
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape' || menu.isOpen()) return;
  const panel = document.querySelector('[data-panel]');
  const modal = document.querySelector('[data-project-modal]');
  if (!modal.hidden) return;
  if (!panel.hidden) document.querySelector('[data-close-panel]').click();
});
