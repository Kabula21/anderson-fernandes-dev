import { projects } from '../data/projects.js';
import { escapeHtml } from './ui.js';
export function initPortfolio() {
  const grid = document.querySelector('[data-project-grid]');
  const filters = [...document.querySelectorAll('[data-filter]')];
  const modal = document.querySelector('[data-project-modal]');
  const modalContent = document.querySelector('[data-modal-content]');
  const closeButton = document.querySelector('[data-close-modal]');
  let previousFocus;
  function createCard(project) {
    return `<button class="project-card" type="button" data-project-id="${escapeHtml(project.id)}" aria-label="Ver conceito: ${escapeHtml(project.title)}"><div class="project-art"><img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" loading="lazy" decoding="async"></div><div class="project-card-info"><span class="project-card-tag">${escapeHtml(project.tag)}</span><div class="project-card-title">${escapeHtml(project.title)} <b aria-hidden="true">↗</b></div><p class="project-card-desc">${escapeHtml(project.description)}</p></div></button>`;
  }
  function render(filter='todos') {
    const data = filter === 'todos' ? projects : projects.filter(p => p.category === filter);
    grid.innerHTML = data.map(createCard).join('');
  }
  function closeModal() {
    if (modal.hidden) return;
    modal.classList.remove('is-visible');
    setTimeout(() => { modal.hidden = true; if (!document.body.classList.contains('panel-open')) document.body.classList.remove('has-overlay'); if (previousFocus?.isConnected) previousFocus.focus(); }, 290);
  }
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(item => { item.classList.toggle('is-active',item===button); item.setAttribute('aria-pressed',String(item===button)); });
    render(button.dataset.filter);
  }));
  grid.addEventListener('click', event => {
    const card = event.target.closest('[data-project-id]');
    if (!card) return;
    const p = projects.find(item => item.id === card.dataset.projectId);
    if (!p) return;
    previousFocus = document.activeElement;
    modalContent.innerHTML = `<div class="modal-project-image"><img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.imageAlt)}"></div><p class="modal-category">${escapeHtml(p.tag)}</p><h3 id="modal-title">${escapeHtml(p.title)}</h3><p>${escapeHtml(p.details)}</p><p class="demo-notice">Conceito ilustrativo. Aqui entra o case real, com tecnologias utilizadas, imagens e resultados.</p><button type="button" class="button button-lime" data-modal-contact>Vamos criar algo assim <span>↗</span></button>`;
    modal.hidden=false; document.body.classList.add('has-overlay');
    requestAnimationFrame(() => modal.classList.add('is-visible'));
    closeButton.focus();
  });
  modal.addEventListener('click', event => { if (event.target === modal || event.target.closest('[data-modal-contact]')) { const contact = Boolean(event.target.closest('[data-modal-contact]')); closeModal(); if (contact) document.querySelector('[data-route="contato"]').click(); } });
  closeButton.addEventListener('click',closeModal);
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) closeModal(); });
  render();
  return { closeModal };
}
