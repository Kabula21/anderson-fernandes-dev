export function initRotator() {
  const element = document.querySelector('[data-rotator]');
  if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const phrases = ['sistemas sob medida', 'sites profissionais', 'experiências digitais', 'soluções para negócios'];
  let index = 0;
  setInterval(() => {
    element.classList.add('changing');
    setTimeout(() => { index = (index + 1) % phrases.length; element.textContent = phrases[index]; element.classList.remove('changing'); }, 180);
  }, 3200);
}
