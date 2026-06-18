/* ============================================================================
   FAIL FAST — VALUATION TICKER
   ----------------------------------------------------------------------------
   Edit the companies that scroll along the bottom ticker here. No need to touch
   failfast-overlay.html — just update the list below and refresh the overlay.

   Each item is shown as:   [ company logo ]  NAME   $VALUATION ▲/▼

   Fields:
     domain → the company domain (e.g. 'apple.com'). The logo is fetched
              automatically from this domain, so you don't need a logo file.
     name   → the company display name
     val    → the valuation text on the right (e.g. '$3.10T', '$885B')
     up     → direction color: 1 = green ▲ (up), 0 = red ▼ (down)

   NOTE: these valuations are illustrative placeholders, not real market data.

   To add a company: copy a block, paste it, edit it, keep the commas.
   To remove one: delete its { ... } block.
   ========================================================================= */

const items = [
  { domain: 'apple.com',             name: 'Apple',         val: '$3.10T', up: 1 },
  { domain: 'microsoft.com',         name: 'Microsoft',     val: '$2.94T', up: 1 },
  { domain: 'nvidia.com',            name: 'Nvidia',        val: '$2.71T', up: 1 },
  { domain: 'google.com',            name: 'Alphabet',      val: '$2.05T', up: 0 },
  { domain: 'amazon.com',            name: 'Amazon',        val: '$1.83T', up: 1 },
  { domain: 'meta.com',              name: 'Meta',          val: '$1.29T', up: 1 },
  { domain: 'tesla.com',             name: 'Tesla',         val: '$812B',  up: 0 },
  { domain: 'tsmc.com',              name: 'TSMC',          val: '$702B',  up: 1 },
  { domain: 'broadcom.com',          name: 'Broadcom',      val: '$635B',  up: 1 },
  { domain: 'berkshirehathaway.com', name: 'Berkshire',     val: '$885B',  up: 0 },
  { domain: 'lilly.com',             name: 'Eli Lilly',     val: '$758B',  up: 1 },
  { domain: 'jpmorganchase.com',     name: 'JPMorgan',      val: '$588B',  up: 1 },
  { domain: 'visa.com',              name: 'Visa',          val: '$542B',  up: 0 },
  { domain: 'mastercard.com',        name: 'Mastercard',    val: '$431B',  up: 1 },
  { domain: 'oracle.com',            name: 'Oracle',        val: '$392B',  up: 1 },
  { domain: 'salesforce.com',        name: 'Salesforce',    val: '$289B',  up: 1 },
  { domain: 'netflix.com',           name: 'Netflix',       val: '$308B',  up: 1 },
  { domain: 'adobe.com',             name: 'Adobe',         val: '$274B',  up: 0 },
  { domain: 'amd.com',               name: 'AMD',           val: '$258B',  up: 0 },
  { domain: 'qualcomm.com',          name: 'Qualcomm',      val: '$214B',  up: 1 },
  { domain: 'intel.com',             name: 'Intel',         val: '$187B',  up: 0 },
  { domain: 'palantir.com',          name: 'Palantir',      val: '$118B',  up: 1 },
  { domain: 'uber.com',              name: 'Uber',          val: '$152B',  up: 1 },
  { domain: 'shopify.com',           name: 'Shopify',       val: '$128B',  up: 1 },
  { domain: 'airbnb.com',            name: 'Airbnb',        val: '$94B',   up: 0 },
  { domain: 'paypal.com',            name: 'PayPal',        val: '$85B',   up: 0 },
  { domain: 'spotify.com',           name: 'Spotify',       val: '$77B',   up: 1 },
  { domain: 'snowflake.com',         name: 'Snowflake',     val: '$61B',   up: 0 },
  { domain: 'coinbase.com',          name: 'Coinbase',      val: '$57B',   up: 1 },
  { domain: 'spacex.com',            name: 'SpaceX',        val: '$358B',  up: 1 },
];
