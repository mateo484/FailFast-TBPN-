/* ============================================================================
   FAIL FAST — VALUATION TICKER
   ----------------------------------------------------------------------------
   Edit the companies that scroll along the bottom ticker here. No need to touch
   failfast-overlay.html — just update the list below and refresh the overlay.

   Each item is shown as:   [ company logo ]  NAME   $VALUATION ▲/▼

   Fields:
     logo → relative path to the company logo image inside the images/ folder
            (e.g. 'images/apple.png'). Drop a PNG with that name in the folder.
            The ticker renders logos as uniform white silhouettes.
     name → the company display name
     val  → the valuation text on the right (e.g. '$3.10T', '$885B')
     up   → direction color: 1 = green ▲ (up), 0 = red ▼ (down)

   NOTE: these valuations are illustrative placeholders, not real market data.

   To add a company: copy a block, paste it, edit it, keep the commas.
   To remove one: delete its { ... } block.
   ========================================================================= */

const items = [
  { logo: 'images/apple.png',             name: 'Apple',         val: '$3.10T', up: 1 },
  { logo: 'images/microsoft.png',         name: 'Microsoft',     val: '$2.94T', up: 1 },
  { logo: 'images/nvidia.png',            name: 'Nvidia',        val: '$2.71T', up: 1 },
  { logo: 'images/google.png',            name: 'Alphabet',      val: '$2.05T', up: 0 },
  { logo: 'images/amazon.png',            name: 'Amazon',        val: '$1.83T', up: 1 },
  { logo: 'images/meta.png',              name: 'Meta',          val: '$1.29T', up: 1 },
  { logo: 'images/tesla.png',             name: 'Tesla',         val: '$812B',  up: 0 },
  { logo: 'images/tsmc.png',              name: 'TSMC',          val: '$702B',  up: 1 },
  { logo: 'images/broadcom.png',          name: 'Broadcom',      val: '$635B',  up: 1 },
  { logo: 'images/berkshire.png',         name: 'Berkshire',     val: '$885B',  up: 0 },
  { logo: 'images/lilly.png',             name: 'Eli Lilly',     val: '$758B',  up: 1 },
  { logo: 'images/jpmorgan.png',          name: 'JPMorgan',      val: '$588B',  up: 1 },
  { logo: 'images/visa.png',              name: 'Visa',          val: '$542B',  up: 0 },
  { logo: 'images/mastercard.png',        name: 'Mastercard',    val: '$431B',  up: 1 },
  { logo: 'images/oracle.png',            name: 'Oracle',        val: '$392B',  up: 1 },
  { logo: 'images/salesforce.png',        name: 'Salesforce',    val: '$289B',  up: 1 },
  { logo: 'images/netflix.png',           name: 'Netflix',       val: '$308B',  up: 1 },
  { logo: 'images/adobe.png',             name: 'Adobe',         val: '$274B',  up: 0 },
  { logo: 'images/amd.png',               name: 'AMD',           val: '$258B',  up: 0 },
  { logo: 'images/qualcomm.png',          name: 'Qualcomm',      val: '$214B',  up: 1 },
  { logo: 'images/intel.png',             name: 'Intel',         val: '$187B',  up: 0 },
  { logo: 'images/palantir.png',          name: 'Palantir',      val: '$118B',  up: 1 },
  { logo: 'images/uber.png',              name: 'Uber',          val: '$152B',  up: 1 },
  { logo: 'images/shopify.png',           name: 'Shopify',       val: '$128B',  up: 1 },
  { logo: 'images/airbnb.png',            name: 'Airbnb',        val: '$94B',   up: 0 },
  { logo: 'images/paypal.png',            name: 'PayPal',        val: '$85B',   up: 0 },
  { logo: 'images/spotify.png',           name: 'Spotify',       val: '$77B',   up: 1 },
  { logo: 'images/snowflake.png',         name: 'Snowflake',     val: '$61B',   up: 0 },
  { logo: 'images/coinbase.png',          name: 'Coinbase',      val: '$57B',   up: 1 },
  { logo: 'images/spacex.png',            name: 'SpaceX',        val: '$358B',  up: 1 },
];
