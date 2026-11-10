import { projects } from '../data/projects.js';
import { escapeHtml } from './ui.js';

/** Grade editorial e cases de estudos conceituais, sem dependências externas. */
export function initPortfolio() {
  const grid = document.querySelector('[data-project-grid]');
  const filters = [...document.querySelectorAll('[data-filter]')];
  const modal = document.querySelector('[data-project-modal]');
  const modalInner = modal.querySelector('.project-modal-inner');
  const modalContent = document.querySelector('[data-modal-content]');
  const closeButton = document.querySelector('[data-close-modal]');
  let previousFocus = null;
  let hideTimer = 0;

  const safe = value => escapeHtml(value);
  // Arquivos otimizados em duas densidades; as artes originais continuam no pacote.
  const crispImage = image => image.replace(/\.jpg$/i, '-clear.webp');
  const crispImage2x = image => image.replace(/\.jpg$/i, '-clear@2x.webp');

  function createCard(project, position, editorial) {
    const style = editorial && position === 0 ? ' project-card--featured' :
      editorial && position === projects.length - 1 ? ' project-card--wide' : '';
    const chips = project.features.slice(0, 2).map(feature => `<span>${safe(feature)}</span>`).join('');
    return `
      <button class="project-card${style}" type="button" data-project-id="${safe(project.id)}" aria-label="Explorar estudo conceitual: ${safe(project.title)}">
        <div class="project-art">
          <img src="${safe(crispImage(project.image))}" srcset="${safe(crispImage(project.image))} 1x, ${safe(crispImage2x(project.image))} 2x" width="1140" height="720" alt="${safe(project.imageAlt)}" loading="lazy" decoding="async">
          <span class="project-art-count">${safe(project.index)} <i>/</i> 04</span>
          <span class="project-art-view" aria-hidden="true">VER ESTUDO <b>↗</b></span>
        </div>
        <div class="project-card-info">
          <div class="project-card-overline"><span class="project-card-tag">${safe(project.tag)}</span><span class="project-card-number">AF — ${safe(project.index)}</span></div>
          <div class="project-card-title">${safe(project.title)} <b aria-hidden="true">↗</b></div>
          <p class="project-card-desc">${safe(project.description)}</p>
          <div class="project-card-chips">${chips}</div>
        </div>
      </button>`;
  }

  function render(filter = 'todos') {
    const data = filter === 'todos' ? projects : projects.filter(project => project.category === filter);
    grid.innerHTML = data.map((project, i) => createCard(project, i, filter === 'todos')).join('');
    grid.setAttribute('aria-label', `${data.length} estudos conceituais exibidos`);
  }

  function makeCase(project) {
    const decisionRows = project.decisions.map((decision, i) => `
      <li><span class="case-decision-count">0${i + 1}</span><div><strong>${safe(decision.title)}</strong><p>${safe(decision.text)}</p></div></li>`).join('');
    const flow = project.flow.map((stage, i) => `
      <li><span class="case-flow-index">0${i + 1}</span><strong>${safe(stage)}</strong></li>`).join('');
    const palette = project.palette.map((color, i) => `
      <div class="case-swatch"><span style="background:${safe(color)}" aria-hidden="true"></span><small>${safe(color.toUpperCase())}</small></div>`).join('');
    const next = projects[(projects.indexOf(project) + 1) % projects.length];

    return `
      <article class="case-study">
        <div class="case-header">
          <p class="case-eyebrow"><span>ESTUDO ${safe(project.index)} / 04</span><span class="case-eyebrow-divider">/</span>${safe(project.tag)}</p>
          <h3 id="modal-title">${safe(project.title)}<span aria-hidden="true">.</span></h3>
          <p class="case-intro">${safe(project.intro)}</p>
        </div>
        <figure class="case-cover">
          <img src="${safe(crispImage(project.image))}" srcset="${safe(crispImage(project.image))} 1x, ${safe(crispImage2x(project.image))} 2x" width="1140" height="720" alt="${safe(project.imageAlt)}" decoding="async">
          <figcaption><span>EXPLORAÇÃO VISUAL</span><span>${safe(project.conceptName)}</span></figcaption>
        </figure>
        <div class="case-facts">
          <div><span>FORMATO</span><strong>${safe(project.type)}</strong></div>
          <div><span>ABORDAGEM</span><strong>${safe(project.direction)}</strong></div>
          <div><span>NATUREZA</span><strong>Conceito independente</strong></div>
        </div>
        <section class="case-chapter" aria-labelledby="case-challenge">
          <p class="case-chapter-label">01 / O DESAFIO</p>
          <div><h4 id="case-challenge">${safe(project.challengeTitle)}</h4><p>${safe(project.challenge)}</p></div>
        </section>
        <section class="case-chapter" aria-labelledby="case-approach">
          <p class="case-chapter-label">02 / A ABORDAGEM</p>
          <div><h4 id="case-approach">${safe(project.approachTitle)}</h4><p>${safe(project.approach)}</p></div>
        </section>
        <section class="case-direction" aria-labelledby="case-direction-heading">
          <div class="case-board" style="--case-a:${safe(project.palette[0])};--case-b:${safe(project.palette[1])};--case-c:${safe(project.palette[2])};--case-ink:${safe(project.signatureInk)}">
            <span class="case-board-kicker">DIREÇÃO VISUAL <i>✳</i></span>
            <strong>${safe(project.signature)}</strong>
            <span class="case-board-footer">CONCEITO ${safe(project.index)} <span>↗</span></span>
          </div>
          <div class="case-direction-description">
            <p class="case-chapter-label">03 / LINGUAGEM VISUAL</p>
            <h4 id="case-direction-heading">Uma identidade para a proposta.</h4>
            <p>Paleta e composição exploradas neste estudo. São escolhas visuais ilustrativas, não um sistema de marca contratado.</p>
            <div class="case-palette" aria-label="Paleta visual do conceito">${palette}</div>
          </div>
        </section>
        <section class="case-decisions" aria-labelledby="case-decisions-heading">
          <div class="case-section-heading"><p class="case-chapter-label">04 / DECISÕES DE INTERFACE</p><h4 id="case-decisions-heading">Detalhes com intenção.</h4></div>
          <ol>${decisionRows}</ol>
        </section>
        <section class="case-experience" aria-labelledby="case-experience-heading">
          <div class="case-section-heading"><p class="case-chapter-label">05 / JORNADA PROPOSTA</p><h4 id="case-experience-heading">Do primeiro contato à próxima ação.</h4></div>
          <ol class="case-flow">${flow}</ol>
        </section>
        <p class="case-disclaimer"><span aria-hidden="true">ⓘ</span> Este material é uma exploração conceitual. Não representa um cliente real, uma implementação publicada ou resultados comprovados.</p>
        <div class="case-footer">
          <div><span>GOSTOU DESSA DIREÇÃO?</span><h4>Vamos criar algo com a sua identidade.</h4><button class="button button-lime" type="button" data-modal-contact>Conversar sobre meu projeto <span aria-hidden="true">↗</span></button></div>
          <button class="case-next" type="button" data-next-project="${safe(next.id)}" aria-label="Ver próximo conceito: ${safe(next.title)}"><span>PRÓXIMO ESTUDO</span><strong>${safe(next.title)}</strong><span class="case-next-arrow" aria-hidden="true">↗</span></button>
        </div>
      </article>`;
  }

  function showProject(project, resetFocus = true) {
    clearTimeout(hideTimer);
    if (resetFocus) previousFocus = document.activeElement;
    modalContent.innerHTML = makeCase(project);
    modal.hidden = false;
    document.body.classList.add('has-overlay');
    modalInner.scrollTop = 0;
    requestAnimationFrame(() => modal.classList.add('is-visible'));
    closeButton.focus();
  }

  function closeModal({ restoreFocus = true } = {}) {
    if (modal.hidden || !modal.classList.contains('is-visible')) return;
    clearTimeout(hideTimer);
    modal.classList.remove('is-visible');
    hideTimer = setTimeout(() => {
      modal.hidden = true;
      if (!document.body.classList.contains('panel-open') && !document.body.classList.contains('menu-open')) document.body.classList.remove('has-overlay');
      if (restoreFocus && previousFocus?.isConnected) previousFocus.focus();
    }, 290);
  }

  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(item => {
      item.classList.toggle('is-active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    render(button.dataset.filter);
  }));

  grid.addEventListener('click', event => {
    const card = event.target.closest('[data-project-id]');
    if (!card) return;
    const project = projects.find(item => item.id === card.dataset.projectId);
    if (project) showProject(project);
  });

  modal.addEventListener('click', event => {
    const nextButton = event.target.closest('[data-next-project]');
    if (nextButton) {
      const nextProject = projects.find(item => item.id === nextButton.dataset.nextProject);
      if (nextProject) showProject(nextProject, false);
      return;
    }
    if (event.target.closest('[data-modal-contact]')) {
      closeModal({ restoreFocus: false });
      document.querySelector('[data-route="contato"]')?.click();
      return;
    }
    if (event.target === modal) closeModal();
  });

  closeButton.addEventListener('click', () => closeModal());
  document.addEventListener('keydown', event => {
    if (modal.hidden || !modal.classList.contains('is-visible')) return;
    if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); closeModal(); return; }
    if (event.key !== 'Tab') return;
    const focusable = [...modal.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')]
      .filter(element => element.getClientRects().length > 0);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && (document.activeElement === first || !modal.contains(document.activeElement))) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !modal.contains(document.activeElement))) {
      event.preventDefault(); first.focus();
    }
  });

  render();
  return { closeModal };
}
