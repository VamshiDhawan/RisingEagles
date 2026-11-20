# Sunrisers Fans Official (RisingEagles)

Static website. No build step and no dependencies. Open `index.html` in a browser (fonts load from Google Fonts, so you need internet).

## How to edit
Search for **`#replace here`** in `index.html` and `css/styles.css`. Every spot you can change is marked.

## Files
- `index.html`: all page content (Home, About, News, Fanzone, Network, Promotions, Shop, Sponsors, Contact)
- `css/styles.css`: colours, fonts and hero background at the top (`:root`), picture shapes in the "Pictures" section
- `js/script.js`: menu, active link, embers, contact form message
- `images/`: every picture used on the site

## Image slots (overwrite the file with the same name)
| File | Where it shows | Best size |
|---|---|---|
| `hero-background.jpg` | Home full background | 1920 x 800+ |
| `hero-main.jpg` | Home photo card | 1200 x 800 |
| `news-1.jpg` / `news-2.jpg` / `news-3.jpg` | News cards | 1200 x 800 / 900 x 600 |
| `fanzone-1.jpg` to `fanzone-3.jpg` | Fanzone cards | 900 x 600 |
| `promo-1.jpg` to `promo-3.jpg` | Promotions banners (square) | 1000 x 1000 |
| `product-1.png` to `product-4.png` | Shop products | about 700 x 900, transparent PNG is best |
| `sponsor-1.jpg` | Title Partner (sponsors 2 and 3 are still grey placeholders) | 657 x 465 |
| `rising-eagles-logo.png`, `srh-logo.png` | Top bar, hero, footer | keep as is |

Keep photos under about 300 KB each so the site loads fast.

## Before you launch
- Shop: products and prices are examples. Put your store or payment link in each Buy now button.
- Contact form: `js/script.js` only shows a message. Connect it to an inbox or form service.
- Contact Us: replace the email, Instagram and Telegram placeholders.
- Replace every "placeholder" text with your own.
- Keep the footer line saying this is a fan-run site not affiliated with Sunrisers Hyderabad, the BCCI or the IPL.
- Upload the whole folder to your host.
