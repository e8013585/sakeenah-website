/* ---------------------------------------------------------------------------
 *  SITE CONFIGURATION
 *
 *  The values you are likely to change live in this one object. The same text
 *  is also written into index.html as a fallback for when scripts are blocked,
 *  so if you change a value here, search index.html for the old one too.
 * ------------------------------------------------------------------------- */

const SITE = {
  developer: "Unpossible Apps",
  appName: "Sakeenah",
  version: "1.0.1",

  // The Google Play listing. If emptied, the badges dim and a
  // "Coming soon to Google Play" note appears instead.
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.unpossibleapps.sakeenah",

  // The privacy policy is its own repository (e8013585/sakeenah-privacy-policy),
  // and the app's About screen links to the same address.
  privacyUrl: "https://e8013585.github.io/sakeenah-privacy-policy/",

  // Where "Contact" goes. The privacy policy names the same issue tracker.
  contactUrl: "https://github.com/e8013585/sakeenah-privacy-policy/issues"
};

/* --------------------------------------------------------------------------
 *  Wiring. You should not need to edit below this line.
 * ------------------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-site]").forEach((el) => {
    const value = SITE[el.getAttribute("data-site")];
    if (value) el.textContent = value;
  });

  document.querySelectorAll("[data-site-href]").forEach((el) => {
    const value = SITE[el.getAttribute("data-site-href")];
    if (value) el.setAttribute("href", value);
  });

  // Store links: the real listing when configured, inert when not. The badge
  // artwork is left alone (it may not be altered); plain text links say
  // "Coming soon" instead.
  document.querySelectorAll("[data-store-button]").forEach((el) => {
    if (SITE.playStoreUrl) {
      el.setAttribute("href", SITE.playStoreUrl);
      el.classList.remove("is-pending");
      el.removeAttribute("aria-disabled");
    } else {
      el.removeAttribute("href");
      el.classList.add("is-pending");
      el.setAttribute("aria-disabled", "true");
      if (!el.classList.contains("store-badge")) el.textContent = "Coming soon to Google Play";
    }
  });

  document.querySelectorAll("[data-store-note]").forEach((el) => {
    el.hidden = Boolean(SITE.playStoreUrl);
  });

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Theme toggle, remembered across visits when storage is available.
  const root = document.documentElement;
  document.querySelectorAll("[data-theme-toggle]").forEach((el) => {
    el.addEventListener("click", () => {
      const current =
        root.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* private mode */ }
    });
  });
});
