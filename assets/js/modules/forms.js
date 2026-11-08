import { siteConfig } from '../config.js';
import { escapeHtml } from './ui.js';

/** Redireciona o formulário validado para uma conversa WhatsApp pré-preenchida.
 *  Importante: o usuário precisa confirmar o envio dentro do WhatsApp.
 */
export function initForms() {
  const { contact } = siteConfig;
  const whatsapp = (contact.whatsapp || '').replace(/\D/g, '');
  const links = document.querySelector('[data-contact-links]');
  const form = document.querySelector('[data-contact-form]');
  const message = document.querySelector('[data-form-feedback]');
  const button = form.querySelector('[data-submit-label]');
  const note = form.querySelector('.form-footnote');

  const items = [];
  
  if (contact.email) items.push(`<a href="mailto:${encodeURIComponent(contact.email)}">E-MAIL <span>↗</span></a>`);
  for (const key of ['github','linkedin','instagram']) {
    const url = contact[key];
    if (url && /^https:\/\//i.test(url)) items.push(`<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${key.toUpperCase()} <span>↗</span></a>`);
  }
  links.innerHTML = items.join('');
  if (whatsapp) {
    button.innerHTML = 'Enviar pelo WhatsApp <span aria-hidden="true">↗</span>';
    note.textContent = 'Ao clicar, você será direcionado ao WhatsApp com seus dados e sua mensagem. Confirme o envio no aplicativo.';
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (!whatsapp) {
      message.textContent = 'O WhatsApp ainda não está configurado.';
      return;
    }
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const kind = String(data.get('kind') || '').trim();
    const idea = String(data.get('message') || '').trim();
    const text = [
      'Olá, Anderson! Vim pelo seu portfólio e gostaria de conversar sobre um projeto.',
      '',
      `*Nome:* ${name}`,
      `*E-mail:* ${email}`,
      `*Tipo de projeto:* ${kind}`,
      '',
      '*Minha ideia / necessidade:*',
      idea
    ].join('\n');
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`;
    message.textContent = 'Abrindo WhatsApp com os dados do seu projeto. Confirme o envio na conversa.';
    // Evento de submit é uma ação do usuário, então a nova aba não deve ser bloqueada.
    // Em navegadores que bloqueiam pop-ups, usar a aba atual como fallback.
    const opened = window.open(url, '_blank');
    if (opened) {
      try { opened.opener = null; } catch (_) {}
    } else {
      window.location.assign(url);
    }
  });
}
