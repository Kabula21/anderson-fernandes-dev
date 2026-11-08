# Anderson Fernandes — Helio Inspired V12

Portfólio pessoal de Anderson Fernandes, com navegação em painéis inspirada na experiência visual do Helio. HTML, CSS e JavaScript nativos e separados por responsabilidade. O projeto não depende de arquivos proprietários do template Helio.

## Atualização V12 — fundo branco e GitHub

- **Tema claro:** fundo branco sólido, inclusive na navbar; removido o degradê branco que invadia a fotografia. A imagem dark permanece no painel direito, com divisão clara entre as áreas.
- **Tema escuro:** preservado, com a mesma fotografia e efeitos.
- **GitHub:** link para `https://github.com/Kabula21` na tela inicial, no menu expandido e na seção Contato (configuração em `assets/js/config.js`).
- Mantidas a experiência Helio em painéis, as imagens de portfólio, a navegação e o formulário de WhatsApp.

## Composição visual

A home mantém os **dois painéis Helio**. No modo claro, o fundo da apresentação e a barra superior são `#ffffff` sólido; não há degradê branco sobre o painel fotográfico. No tema escuro, a apresentação permanece grafite. A arte tecnológica do retrato é idêntica nos dois temas.

No celular, o conteúdo aparece primeiro e o painel fotográfico logo abaixo. Links do GitHub aparecem na home, no menu expandido e no contato.

## Estrutura principal

```
anderson-fernandes-helio-v12/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   ├── tokens.css
    │   ├── base.css
    │   ├── components.css
    │   ├── layout.css
    │   ├── panels.css
    │   ├── responsive.css
    │   ├── navigation.css
    │   ├── hero-image.css
    │   ├── theme-accessibility.css
    │   ├── project-images.css
    │   ├── hero-tech.css
    │   └── hero-reference.css   # composição Helio e ajustes dos temas
    ├── img/
    │   ├── hero-reference-dark.webp
    │   ├── hero-reference-mobile-dark.webp
    │   ├── af-monogram.svg / af-monogram-light.svg / favicon.svg
    │   └── projects/            # quatro artes conceituais distintas
    └── js/
        ├── config.js
        ├── data/projects.js
        ├── main.js
        └── modules/             # menu, navegação, tema, formulário, etc.
```

## Executar

Abra a pasta pelo Live Server do VS Code ou execute dentro da pasta:

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000`. Módulos JavaScript não devem ser testados abrindo o HTML diretamente por `file://`.

## Contato

O WhatsApp está configurado como **(79) 99996-8293** em `assets/js/config.js` (`5579999968293`). O formulário recolhe nome, e-mail, tipo de projeto e descrição, e abre a conversa com o texto pré-preenchido. **O visitante confirma o envio dentro do WhatsApp**. Não há backend nem envio automático de mensagens.

## Projetos e personalização

As quatro imagens do portfólio são **referências conceituais**, não trabalhos reais. Ajuste os itens em `assets/js/data/projects.js` quando tiver imagens dos seus projetos. Informações e links pessoais adicionais ficam em `assets/js/config.js`.

Para ajustes futuros no enquadramento da arte da home, prefira alterar os arquivos `hero-reference-*.webp` e o arquivo `assets/css/hero-reference.css`, em vez de ampliar a fotografia com `transform: scale()`.

## Verificações

- Sintaxe verificada nos 10 módulos JavaScript com `node --check`;
- Todos os caminhos de imagens e recursos do HTML verificados;
- Arte renderizada em navegador isolado em desktop e mobile, temas claro e escuro, com prévias estáticas;
- Teste completo de navegação em um servidor HTTP local não concluído neste ambiente, porque o navegador bloqueia acesso à porta local. Recomenda-se testar menu, painéis e WhatsApp em um navegador normal antes da publicação.
