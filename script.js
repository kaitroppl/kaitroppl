/* =========================================================
   EDIT THESE BLOCKS TO CUSTOMIZE THE SITE
   ========================================================= */

// 1) Social links — set the real URLs/handles here.
const SOCIAL_LINKS = {
  instagram: "https://instagram.com/kai.trpl",
  instagramHandle: "@kai.trpl",
  tiktok: "https://tiktok.com/@kai.trpl",
  email: "hello@kaitroppl.com",
};

// 1b) Comp card — drop the PDF/image in the project folder (e.g. next to
//     index.html or in images/) and point this at it. The download link in
//     Contact is hidden until this is set to a real file.
const COMPCARD_URL = "";

// 2) Gallery — replace `src` with a real image path (e.g. "images/shoot-01.jpg")
//    to swap out a placeholder. Leave src empty to keep the placeholder block.
//    shape controls the crop: "portrait" | "landscape" | "square"
//    category: "modeling" | "50mm" | "polaroids"
const GALLERY_ITEMS = [
  { category: "modeling", shape: "portrait", src: "images/gabrielron-01.jpg", titleEn: "Look 09", titleJp: "ルック 09" },
  { category: "modeling", shape: "portrait", src: "images/gabrielron-02.jpg", titleEn: "Look 10", titleJp: "ルック 10" },
  { category: "modeling", shape: "portrait", src: "images/gabrielron-03.jpg", titleEn: "Look 11", titleJp: "ルック 11" },
  { category: "modeling", shape: "portrait", src: "images/gabrielron-04.jpg", titleEn: "Look 12", titleJp: "ルック 12" },
  { category: "modeling", shape: "portrait", src: "images/gabrielron-05.jpg", titleEn: "Look 13", titleJp: "ルック 13" },
  { category: "modeling", shape: "portrait", src: "images/gabrielron-06.jpg", titleEn: "Look 14", titleJp: "ルック 14" },
  { category: "modeling", shape: "portrait", src: "images/gabrielron-07.jpg", titleEn: "Look 15", titleJp: "ルック 15" },
  { category: "modeling", shape: "portrait", src: "images/gabrielron-08.jpg", titleEn: "Look 16", titleJp: "ルック 16" },
  { category: "modeling", shape: "portrait", src: "images/gabrielron-09.jpg", titleEn: "Look 17", titleJp: "ルック 17" },
  { category: "modeling", shape: "portrait", src: "images/gabrielron-10.jpg", titleEn: "Look 18", titleJp: "ルック 18" },
  { category: "modeling", shape: "portrait", src: "images/gabrielron-11.jpg", titleEn: "Look 19", titleJp: "ルック 19" },
  { category: "modeling", shape: "portrait", src: "images/gabrielron-12.jpg", titleEn: "Look 20", titleJp: "ルック 20" },
  { category: "modeling", shape: "portrait", src: "images/gabrielron-13.jpg", titleEn: "Look 21", titleJp: "ルック 21" },
  { category: "modeling", shape: "portrait", src: "images/gabrielron-14.jpg", titleEn: "Look 22", titleJp: "ルック 22" },
  { category: "modeling", shape: "portrait", src: "images/gabrielron-15.jpg", titleEn: "Look 23", titleJp: "ルック 23" },
  { category: "modeling", shape: "portrait", src: "images/modeling-01.jpg", titleEn: "Look 01", titleJp: "ルック 01" },
  { category: "modeling", shape: "portrait", src: "images/modeling-02.jpg", titleEn: "Look 02", titleJp: "ルック 02" },
  { category: "modeling", shape: "portrait", src: "images/modeling-03.jpg", titleEn: "Look 03", titleJp: "ルック 03" },
  { category: "modeling", shape: "portrait", src: "images/modeling-04.jpg", titleEn: "Look 04", titleJp: "ルック 04" },
  { category: "modeling", shape: "portrait", src: "images/modeling-05.jpg", titleEn: "Look 05", titleJp: "ルック 05" },
  { category: "modeling", shape: "portrait", src: "images/modeling-06.jpg", titleEn: "Look 06", titleJp: "ルック 06" },
  { category: "modeling", shape: "portrait", src: "images/modeling-07.jpg", titleEn: "Look 07", titleJp: "ルック 07" },
  { category: "modeling", shape: "landscape", src: "images/modeling-08.jpg", titleEn: "Look 08", titleJp: "ルック 08" },
  { category: "50mm", shape: "auto wide", ratio: "2000/1125", src: "images/photography-02.jpg", titleEn: "Frame 02", titleJp: "フレーム 02" },
  { category: "50mm", shape: "auto", ratio: "1125/2000", src: "images/photography-03.jpg", titleEn: "Frame 03", titleJp: "フレーム 03" },
  { category: "50mm", shape: "auto wide", ratio: "2000/1125", src: "images/photography-04.jpg", titleEn: "Frame 04", titleJp: "フレーム 04" },
  { category: "50mm", shape: "auto", ratio: "1240/2000", src: "images/photography-05.jpg", titleEn: "Frame 05", titleJp: "フレーム 05" },
  { category: "50mm", shape: "auto wide", ratio: "2000/1125", src: "images/photography-06.jpg", titleEn: "Frame 06", titleJp: "フレーム 06" },
  { category: "50mm", shape: "auto wide", ratio: "2000/1212", src: "images/photography-07.jpg", titleEn: "Frame 07", titleJp: "フレーム 07" },
  { category: "50mm", shape: "auto wide", ratio: "2000/1125", src: "images/photography-08.jpg", titleEn: "Frame 08", titleJp: "フレーム 08" },
  { category: "50mm", shape: "auto", ratio: "1501/2000", src: "images/photography-09.jpg", titleEn: "Frame 09", titleJp: "フレーム 09" },
  { category: "50mm", shape: "auto wide", ratio: "2000/1501", src: "images/photography-10.jpg", titleEn: "Frame 10", titleJp: "フレーム 10" },
  { category: "50mm", shape: "auto", ratio: "1501/2000", src: "images/photography-11.jpg", titleEn: "Frame 11", titleJp: "フレーム 11" },
  { category: "50mm", shape: "auto wide", ratio: "2000/1501", src: "images/photography-12.jpg", titleEn: "Frame 12", titleJp: "フレーム 12" },
  { category: "50mm", shape: "auto wide", ratio: "2000/1501", src: "images/photography-13.jpg", titleEn: "Frame 13", titleJp: "フレーム 13" },
  { category: "50mm", shape: "auto", ratio: "1501/2000", src: "images/photography-14.jpg", titleEn: "Frame 14", titleJp: "フレーム 14" },
  { category: "50mm", shape: "auto", ratio: "1501/2000", src: "images/photography-15.jpg", titleEn: "Frame 15", titleJp: "フレーム 15" },
  { category: "50mm", shape: "auto wide", ratio: "2000/1125", src: "images/photography-16.jpg", titleEn: "Frame 16", titleJp: "フレーム 16" },
  { category: "50mm", shape: "auto wide", ratio: "2000/1125", src: "images/photography-17.jpg", titleEn: "Frame 17", titleJp: "フレーム 17" },
  { category: "50mm", shape: "auto wide", ratio: "2000/1125", src: "images/photography-18.jpg", titleEn: "Frame 18", titleJp: "フレーム 18" },
  { category: "50mm", shape: "auto wide", ratio: "2000/1125", src: "images/photography-19.jpg", titleEn: "Frame 19", titleJp: "フレーム 19" },
  { category: "50mm", shape: "auto wide", ratio: "2000/1125", src: "images/photography-20.jpg", titleEn: "Frame 20", titleJp: "フレーム 20" },
  { category: "modeling", shape: "auto wide", ratio: "2000/1333", src: "images/brand-02.jpg", titleEn: "AIUA 02", titleJp: "AIUA 02" },
  { category: "modeling", shape: "auto wide", ratio: "2000/1333", src: "images/brand-03.jpg", titleEn: "AIUA 03", titleJp: "AIUA 03" },
  { category: "modeling", shape: "auto", ratio: "1599/2000", src: "images/brand-04.jpg", titleEn: "AIUA 04", titleJp: "AIUA 04" },
  { category: "modeling", shape: "auto wide", ratio: "2000/1333", src: "images/brand-05.jpg", titleEn: "AIUA 05", titleJp: "AIUA 05" },
  { category: "modeling", shape: "auto wide", ratio: "2000/1333", src: "images/brand-06.jpg", titleEn: "AIUA 06", titleJp: "AIUA 06" },
  { category: "modeling", shape: "auto", ratio: "1428/2000", src: "images/brand-07.jpg", titleEn: "AIUA 07", titleJp: "AIUA 07" },
  { category: "modeling", shape: "auto", ratio: "1333/2000", src: "images/brand-09.jpg", titleEn: "AIUA 09", titleJp: "AIUA 09" },
  { category: "modeling", shape: "auto wide", ratio: "2000/1333", src: "images/brand-10.jpg", titleEn: "AIUA 10", titleJp: "AIUA 10" },
  { category: "modeling", shape: "auto", ratio: "1599/2000", src: "images/brand-11.jpg", titleEn: "AIUA 11", titleJp: "AIUA 11" },
  { category: "modeling", shape: "auto wide", ratio: "2000/1333", src: "images/brand-12.jpg", titleEn: "AIUA 12", titleJp: "AIUA 12" },
];

// 3) Text — every data-i18n="key" element in index.html pulls from here.
const TRANSLATIONS = {
  en: {
    navWork: "Work",
    navAbout: "About",
    navContact: "Contact",
    heroRole: "Model — Photographer",
    heroTagline: "Capturing and being captured.",
    heroCta: "View Work",
    statHeight: "Height",
    statChest: "Chest",
    statWaist: "Waist",
    statHips: "Hips",
    statInseam: "Inseam",
    statShoe: "Shoe",
    filterModeling: "Portfolio",
    filterPhotography: "50mm",
    filterPolaroids: "Polaroids",
    galleryEmpty: "Coming soon.",
    aboutHeading: "About Me",
    aboutBody: "I work across editorial, commercial, and personal projects. Open to collaborations, bookings, and new ideas.",
    aboutLabelBased: "Based in",
    aboutLabelBasedVal: "Seattle",
    aboutLabelFocus: "Focus",
    aboutLabelFocusVal: "Editorial · Portrait · Fashion",
    contactHeading: "Contact",
    contactBody: "For bookings, collaborations, or just to say hello.",
    compcardLabel: "Download Comp Card",
    footerRights: "All work © Kai Tröppl. All rights reserved.",
  },
  jp: {
    navWork: "作品",
    navAbout: "プロフィール",
    navBrands: "ブランド",
    navContact: "連絡先",
    heroRole: "モデル ― フォトグラファー",
    heroTagline: "撮る、そして撮られる。",
    heroCta: "作品を見る",
    statHeight: "身長",
    statChest: "チェスト",
    statWaist: "ウエスト",
    statHips: "ヒップ",
    statInseam: "股下",
    statShoe: "靴",
    filterModeling: "ポートフォリオ",
    filterPhotography: "50mm",
    filterPolaroids: "ポラロイド",
    galleryEmpty: "近日公開。",
    aboutHeading: "プロフィール",
    aboutBody: "エディトリアル、広告、個人制作まで幅広く手がけています。お仕事のご依頼・コラボレーションのご相談はお気軽にどうぞ。",
    aboutLabelBased: "拠点",
    aboutLabelBasedVal: "シアトル",
    aboutLabelFocus: "得意分野",
    aboutLabelFocusVal: "エディトリアル・ポートレート・ファッション",
    contactHeading: "連絡先",
    contactBody: "お仕事のご依頼、コラボレーション、またお気軽なご挨拶まで。",
    compcardLabel: "コンプカードをダウンロード",
    footerRights: "All work © Kai Tröppl. All rights reserved.",
  },
};

/* =========================================================
   Below this line: wiring. No need to edit for basic use.
   ========================================================= */

const ICONS = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.5 2h2.9c.2 1.9 1.4 3.5 3.1 4.2v3c-1.4 0-2.7-.4-3.9-1.1v6.7c0 3.4-2.7 6.2-6.2 6.2S4.2 17.2 4.2 13.8c0-3.3 2.6-6 5.9-6.2v3.1c-1.6.2-2.8 1.5-2.8 3.1 0 1.7 1.4 3.1 3.1 3.1s3.1-1.4 3.1-3.1V2z"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
};

let currentLang = "en";
let currentFilter = "modeling";
let lightboxIndex = 0;

function applyTranslations() {
  const dict = TRANSLATIONS[currentLang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.documentElement.lang = currentLang === "jp" ? "ja" : "en";
  document.body.classList.toggle("lang-jp", currentLang === "jp");
  document.querySelectorAll(".gallery-item").forEach((el, i) => {
    const item = GALLERY_ITEMS[i];
    const caption = el.querySelector(".gallery-caption span:first-child");
    if (caption) caption.textContent = currentLang === "jp" ? item.titleJp : item.titleEn;
  });
  if (document.getElementById("lightbox").classList.contains("open")) {
    updateLightboxCaption();
  }
}

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  applyTranslations();
}

function renderSocialLinks() {
  const row = document.getElementById("socialRow");
  const entries = [
    { key: "instagram", href: SOCIAL_LINKS.instagram, label: SOCIAL_LINKS.instagramHandle },
    { key: "tiktok", href: SOCIAL_LINKS.tiktok },
    { key: "email", href: `mailto:${SOCIAL_LINKS.email}` },
  ];
  row.innerHTML = entries
    .map((e) =>
      e.label
        ? `<li><a href="${e.href}" target="_blank" rel="noopener noreferrer" class="social-link-labeled">${ICONS[e.key]}<span>${e.label}</span></a></li>`
        : `<li><a href="${e.href}" target="_blank" rel="noopener noreferrer" aria-label="${e.key}">${ICONS[e.key]}</a></li>`
    )
    .join("");

  const emailLink = document.getElementById("contactEmail");
  emailLink.href = `mailto:${SOCIAL_LINKS.email}`;
  emailLink.textContent = SOCIAL_LINKS.email;

  const compcardLink = document.getElementById("compcardLink");
  if (COMPCARD_URL) {
    compcardLink.href = COMPCARD_URL;
    compcardLink.style.display = "";
  } else {
    compcardLink.style.display = "none";
  }
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = GALLERY_ITEMS.map((item, i) => {
    const ratioStyle = item.ratio ? ` style="aspect-ratio:${item.ratio}"` : "";
    const media = item.src
      ? `<img src="${item.src}" alt="${item.titleEn}" loading="lazy"${ratioStyle}>`
      : `<div class="placeholder-box" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.3"/><circle cx="9" cy="10.5" r="1.6" stroke="currentColor" stroke-width="1.3"/><path d="m5 17 4.5-4.5 3 3L18 10" stroke="currentColor" stroke-width="1.3"/></svg>
        </div>`;
    return `
      <figure class="gallery-item ${item.shape}" data-category="${item.category}" data-index="${i}">
        ${media}
        <figcaption class="gallery-caption">
          <span>${item.titleEn}</span>
          <span class="gallery-tag">${item.category}</span>
        </figcaption>
      </figure>`;
  }).join("");

  grid.querySelectorAll(".gallery-item").forEach((el) => {
    el.addEventListener("click", () => openLightbox(Number(el.dataset.index)));
  });

  // "auto"-shaped photos size themselves from the real image, so their
  // height (and therefore masonry row-span) is only known once it loads.
  grid.querySelectorAll("img").forEach((img) => {
    if (img.complete) return;
    img.addEventListener("load", layoutMasonry);
  });
}

// True masonry: give each item a grid-row-end matching its actual rendered
// height (in --gallery-row units) so items pack tightly with no dead space,
// instead of every item in a row being forced to the tallest one's height.
function layoutMasonry() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  const style = getComputedStyle(grid);
  const rowUnit = parseFloat(style.getPropertyValue("--gallery-row")) || 4;
  const gap = parseFloat(style.rowGap) || 0;
  grid.querySelectorAll(".gallery-item:not(.hidden)").forEach((item) => {
    const height = item.getBoundingClientRect().height;
    if (height <= 0) return;
    // Each spanned row actually consumes (rowUnit + gap) of vertical space
    // (the grid adds one gap between every pair of row tracks), so the gap
    // has to factor into the span count or items fall short of their real height.
    const span = Math.ceil((height + gap) / (rowUnit + gap));
    item.style.gridRowEnd = `span ${span}`;
  });
}

function applyFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === filter);
  });
  document.querySelectorAll(".gallery-item").forEach((el) => {
    el.classList.toggle("hidden", el.dataset.category !== filter);
  });
  document.getElementById("galleryEmpty").hidden = visibleIndices().length > 0;
  layoutMasonry();
}

function visibleIndices() {
  return GALLERY_ITEMS.map((item, i) => i).filter(
    (i) => GALLERY_ITEMS[i].category === currentFilter
  );
}

function openLightbox(index) {
  lightboxIndex = index;
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  renderLightbox();
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderLightbox() {
  const item = GALLERY_ITEMS[lightboxIndex];
  const stage = document.getElementById("lightboxStage");
  stage.innerHTML = item.src
    ? `<img src="${item.src}" alt="${item.titleEn}">`
    : `<div class="placeholder-box" aria-hidden="true">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.3"/><circle cx="9" cy="10.5" r="1.6" stroke="currentColor" stroke-width="1.3"/><path d="m5 17 4.5-4.5 3 3L18 10" stroke="currentColor" stroke-width="1.3"/></svg>
      </div>`;
  updateLightboxCaption();
}

function updateLightboxCaption() {
  const item = GALLERY_ITEMS[lightboxIndex];
  document.getElementById("lightboxCaption").textContent =
    currentLang === "jp" ? item.titleJp : item.titleEn;
}

function stepLightbox(dir) {
  const visible = visibleIndices();
  const pos = visible.indexOf(lightboxIndex);
  const next = (pos + dir + visible.length) % visible.length;
  lightboxIndex = visible[next];
  renderLightbox();
}

function initNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

function init() {
  renderSocialLinks();
  renderGallery();
  applyFilter(currentFilter);
  applyTranslations();
  initNav();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layoutMasonry, 150);
  });

  document.querySelectorAll(".lang-switch button").forEach((btn) =>
    btn.addEventListener("click", () => setLang(btn.dataset.lang))
  );

  document.querySelectorAll(".filter-btn").forEach((btn) =>
    btn.addEventListener("click", () => applyFilter(btn.dataset.filter))
  );

  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => stepLightbox(-1));
  document.getElementById("lightboxNext").addEventListener("click", () => stepLightbox(1));
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (!document.getElementById("lightbox").classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });
}

document.addEventListener("DOMContentLoaded", init);
