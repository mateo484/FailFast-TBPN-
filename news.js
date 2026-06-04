/* ============================================================================
   FAIL FAST — NEWS TICKER
   ----------------------------------------------------------------------------
   Edit the news that scrolls along the bottom ticker here. No need to touch
   failfast-overlay.html — just update the list below and refresh the overlay.

   Each news item is shown as:   [ company logo ]  the headline   TAG

   Fields:
     logo  → the company logo image. A web URL or a local file in this folder.
             Logos are auto-tinted white to match the dark ticker.
     t     → the headline text that scrolls past (the actual news)
     d     → the small tag on the right (e.g. '€75B', '$36B', 'LIVE')
     up    → color of that tag: 1 = green, 0 = red

   To add a headline: copy a block, paste it, edit it, keep the commas.
   To remove one: delete its { ... } block.
   ========================================================================= */

const items = [
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg',
    t: 'Anthropic files for IPO at $965B valuation after $65B funding round',
    d: 'NUEVO',
    up: 1,
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    t: 'Build 2026: Project Polaris, Windows Agent Framework y Agent Mode para Office 365',
    d: 'LIVE',
    up: 1,
  },
  {
    logo: 'softbank.png',
    t: 'SoftBank anuncia €75B en data centers de IA en Francia — mayor inversión de infraestructura IA en Europa',
    d: '€75B',
    up: 1,
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    t: 'GitHub Copilot cambia a facturación por tokens — modelo de suscripción plana eliminado',
    d: '1 JUN',
    up: 0,
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    t: 'Apollo y Blackstone cierran deal de $36B en TPUs de Google para Anthropic',
    d: '$36B',
    up: 1,
  },
];
