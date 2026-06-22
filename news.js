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
  { logo: 'images/apple.png',      name: 'Apple',      val: '$4.41T', up: 1 },
  { logo: 'images/microsoft.png',  name: 'Microsoft',  val: '$2.82T', up: 1 },
  { logo: 'images/nvidia.png',     name: 'Nvidia',     val: '$5.11T', up: 1 },
  { logo: 'images/google.png',     name: 'Alphabet',   val: '$4.47T', up: 1 },
  { logo: 'images/amazon.png',     name: 'Amazon',     val: '$2.63T', up: 1 },
  { logo: 'images/meta.png',       name: 'Meta',       val: '$1.47T', up: 1 },
  { logo: 'images/tesla.png',      name: 'Tesla',      val: '$1.50T', up: 1 },
  { logo: 'images/tsmc.png',       name: 'TSMC',       val: '$2.40T', up: 1 },
  { logo: 'images/broadcom.png',   name: 'Broadcom',   val: '$1.96T', up: 1 },
  { logo: 'images/berkshire.png',  name: 'Berkshire',  val: '$1.06T', up: 0 },
  { logo: 'images/lilly.png',      name: 'Eli Lilly',  val: '$1.04T', up: 0 },
  { logo: 'images/jpmorgan.png',   name: 'JPMorgan',   val: '$871B',  up: 0 },
  { logo: 'images/visa.png',       name: 'Visa',       val: '$617B',  up: 0 },
  { logo: 'images/mastercard.png', name: 'Mastercard', val: '$434B',  up: 0 },
  { logo: 'images/oracle.png',     name: 'Oracle',     val: '$530B',  up: 1 },
  { logo: 'images/salesforce.png', name: 'Salesforce', val: '$124B',  up: 0 },
  { logo: 'images/netflix.png',    name: 'Netflix',    val: '$326B',  up: 1 },
  { logo: 'images/adobe.png',      name: 'Adobe',      val: '$106B',  up: 0 },
  { logo: 'images/amd.png',        name: 'AMD',        val: '$876B',  up: 1 },
  { logo: 'images/qualcomm.png',   name: 'Qualcomm',   val: '$239B',  up: 1 },
  { logo: 'images/intel.png',      name: 'Intel',      val: '$673B',  up: 1 },
  { logo: 'images/palantir.png',   name: 'Palantir',   val: '$308B',  up: 0 },
  { logo: 'images/uber.png',       name: 'Uber',       val: '$146B',  up: 1 },
  { logo: 'images/shopify.png',    name: 'Shopify',    val: '$143B',  up: 0 },
  { logo: 'images/airbnb.png',     name: 'Airbnb',     val: '$80B',   up: 0 },
  { logo: 'images/paypal.png',     name: 'PayPal',     val: '$38B',   up: 0 },
  { logo: 'images/spotify.png',    name: 'Spotify',    val: '$110B',  up: 1 },
  { logo: 'images/snowflake.png',  name: 'Snowflake',  val: '$82B',   up: 1 },
  { logo: 'images/coinbase.png',   name: 'Coinbase',   val: '$43B',   up: 0 },
  { logo: 'images/spacex.png',     name: 'SpaceX',     val: '$2.42T', up: 0 },
]
