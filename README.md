# Sakeenah — website

The developer website for Sakeenah, served by GitHub Pages at
<https://e8013585.github.io/sakeenah-website/> from the `main` branch, root folder. It is
the website listed on Google Play. Static files, no build step.

```
index.html                 the page: introduction, screenshots, features, privacy, details, sources
site.css                   styles, light and dark, using the app's palette
site.js                    configuration (store link, version, policy and contact URLs) and wiring
img/                       icons, Play badge, Open Graph image, screenshots (webp)
fonts/                     Amiri Quran subset to the letters of سكينة (SIL OFL 1.1)
.nojekyll                  serve files as-is
```

## Updating

- **Version, store link, policy or contact URL:** edit the `SITE` object in `site.js`. The
  same values appear literally in `index.html` as a no-script fallback; update both.
- **Feature or privacy claims:** keep them in step with the app and with the privacy policy
  (`e8013585/sakeenah-privacy-policy`). The page says the app has one banner ad, no accounts
  and no analytics; if that changes, change the page.
- **Screenshots:** made from `marketing/play-store/screenshots/*.png` in the app repo,
  resized to 540×960 and saved as webp (quality 80).
- **Icons and Open Graph image:** from `marketing/play-store/app-icon_512.png` and
  `feature-graphic_1024x500.png`.

## Not here

`app-ads.txt` is read by AdMob from the domain root, so it lives in the
`e8013585/e8013585.github.io` repository, not in this one.

## Publishing

Commit and push to `main`; Pages redeploys within a couple of minutes.
