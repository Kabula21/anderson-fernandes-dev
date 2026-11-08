
import { siteConfig } from '../config.js';
import { escapeHtml } from './ui.js';

/**
 * Formulário de contato — Anderson Fernandes
 *
 * - Exibe somente o GitHub na área de links.
 * - Não mostra o número do WhatsApp na página.
 * - Envia os dados preenchidos para uma conversa no WhatsApp.
 * - O visitante confirma o envio no aplicativo.
 */

export function initForms() {
  const { contact } = siteConfig;

  const whatsapp = (contact.whatsapp || '').replace(/\D/g, '');

  const links = document.querySelector('[data-contact-links]');
  const form = document.querySelector('[data-contact-form]');
  const message = document.querySelector('[data-form-feedback]');

  if (!form) return;

  const button = form.querySelector('[data-submit-label]');
  const note = form.querySelector('.form-footnote');

  // Exibir somente o GitHub na seção de contato
  const items = [];

  if (contact.github && /^https:\/\//i.test(contact.github)) {
    items.push(`
      <a
        href="${escapeHtml(contact.github)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visitar meu GitHub"
      >
        GITHUB <span aria-hidden="true">↗</span>
      </a>
    `);
  }

  if (links) {
    links.innerHTML = items.join('');
  }

  // Configuração visual do formulário
  if (whatsapp) {
    if (button) {
      button.innerHTML =
        'Enviar pelo WhatsApp <span aria-hidden="true">↗</span>';
    }

    if (note) {
      note.textContent =
        'Ao clicar, você será direcionado ao WhatsApp com seus dados e sua mensagem. Confirme o envio no aplicativo.';
    }
  }

  // Envio do formulário
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Validação dos campos obrigatórios
    if (!form.reportValidity()) return;

    if (!whatsapp) {
      if (message) {
        message.textContent =
          'O WhatsApp ainda não está configurado.';
      }
      return;
    }

    // Capturar informações do visitante
    const data = new FormData(form);

    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const kind = String(data.get('kind') || '').trim();
    const idea = String(data.get('message') || '').trim();

    // Preparar mensagem para o WhatsApp
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

    // Gerar link com a mensagem preenchida
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`;

    if (message) {
      message.textContent =
        'Abrindo WhatsApp com os dados do seu projeto. Confirme o envio na conversa.';
    }

    // Abrir WhatsApp em uma nova aba
    const opened = window.open(url, '_blank');

    if (opened) {
      try {
        opened.opener = null;
      } catch (_) {}
    } else {
      // Alternativa caso o navegador bloqueie a nova aba
      window.location.assign(url);
    }
  });
}
