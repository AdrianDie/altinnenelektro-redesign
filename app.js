'use strict';

// === SERVICE DATA ===
const privatTjenester = [
  { title: 'Solcellepanel', img: 'assets/produkter/solcelle5998.jpg', desc: 'Moderne solcelleinstallasjoner for boliger og hytter. Vi hjelper deg med alt fra planlegging til ferdig anlegg.' },
  { title: 'Belysning', img: 'assets/produkter/Belysningc44a.jpg', desc: 'Vi skaper den rette atmosfæren til din bolig. Ute- og innendørsbelysning, LED-teknologi og energieffektivisering.' },
  { title: 'Sikkerhet', img: 'assets/produkter/Sikkerhet972e.jpg', desc: 'Er ditt hjem og elektriske anlegg godt nok kontrollert og sikret? Vi hjelper deg med trygge løsninger.' },
  { title: 'Nybygg', img: 'assets/produkter/nybygg19e7.jpg', desc: 'Vi virkeliggjør dine ideer til enebolig, rekkehus eller hytte. Integrert og profesjonell elektro fra start.' },
  { title: 'Service og vedlikehold', img: 'assets/produkter/Service2f84.jpg', desc: 'Service- og vedlikeholdsoppdrag er vår spesialitet. Gode råd om belysning, varme og installasjon.' },
  { title: 'Energioptimalisering / enøk', img: 'assets/produkter/energioptimalisering4c89.jpg', desc: 'Spar penger og miljøet. Vi kartlegger og gjennomfører enøk-tiltak tilpasset din bolig.' },
  { title: 'Varmestyring', img: 'assets/produkter/varmestyring15fe.jpg', desc: 'Styringssystemer, ENOVA-støtte og ENØK-tiltak. Vi finner de riktige løsningene til ditt hjem.' },
  { title: 'EKOM-spesialist', img: 'assets/produkter/ekom-spesialistb2b5.jpg', desc: 'Autorisert EKOM-installasjon for alle typer kommunikasjonsinstallasjoner i bolig.' },
  { title: 'Elbillading', img: 'assets/produkter/elbil-lader5b65.jpg', desc: 'Installasjon av elbil-lader hjemme. Vi hjelper deg med riktig løsning, pluggtyper og ladekabler.' },
  { title: 'Smarthus', img: 'assets/produkter/Smarthusb68b.jpg', desc: 'Styring av lys, varme og hele huset fra nettbrett eller mobil. KNX, xComfort, Dali og Z-Wave.' },
  { title: 'Varmepumpe', img: 'assets/produkter/Varmepumpe5023.jpg', desc: 'Vi installerer og kobler til varmepumper. Sertifiserte elektrikere for en trygg og effektiv installasjon.' },
];

const naringTjenester = [
  { title: 'Belysning for næringslivet', img: 'assets/produkter/belysning-naeringsliv136d.jpg', desc: 'Vi skaper et godt arbeidsmiljø med energieffektive løsninger som kutter strømutgifter.' },
  { title: 'Service og vedlikehold', img: 'assets/produkter/Service2f84.jpg', desc: 'Gode rutiner for det elektriske anlegget er viktig for sikkerheten. Service- og vedlikeholdsoppdrag er vår spesialitet.' },
  { title: 'Internkontroll og serviceavtaler', img: 'assets/produkter/Internkontroll6673.jpg', desc: 'Vi hjelper deg å navigere i jungelen av sikkerhetsforskrifter, kontrollkrav og dokumentasjonspålegg.' },
  { title: 'Nybygg for næring', img: 'assets/produkter/nybygg19e7.jpg', desc: 'La oss være en integrert del av byggeprosessen for næringsbygg, kontor og industri.' },
  { title: 'Automasjon-industri', img: 'assets/produkter/Automasjond208.jpg', desc: 'Vår erfaring innen et bredt spekter av industrier gir deg stabilitet i produksjonen.' },
  { title: 'EKOM-spesialist for næring', img: 'assets/produkter/ekom-spesialistb2b5.jpg', desc: 'Installasjon av EKOM-løsninger krever sertifisering og erfarne fagfolk. Vi har det som trengs.' },
  { title: 'Smarthus-teknologi for næring', img: 'assets/produkter/Smarthusb68b.jpg', desc: 'Smarte løsninger for brann, tyveri, porttelefon og styring av lys, varme og persienner.' },
  { title: 'Elbillading for næringslivet', img: 'assets/produkter/elbil-lader5b65.jpg', desc: 'Elbil-ladeanlegg for bedrifter, parkeringsplasser og næringsbygg. Skalerbare løsninger.' },
];

function renderCards(items, containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = items.map(item => `
    <article class="service-card">
      <img class="service-card__img" src="${item.img}" alt="${item.title}" loading="lazy">
      <div class="service-card__body">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </article>
  `).join('');
}

// === TABS ===
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('tab--active'));
      tab.classList.add('tab--active');

      const target = tab.dataset.target;
      document.querySelectorAll('.service-grid').forEach(g => {
        g.classList.toggle('service-grid--hidden', g.id !== target);
      });
    });
  });
}

// === MOBILE DRAWER ===
function initDrawer() {
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('drawerClose');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    burger.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', () => {
    drawer.classList.contains('open') ? closeDrawer() : openDrawer();
  });
  overlay.addEventListener('click', closeDrawer);
  closeBtn.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });
}

// === HEADER SCROLL ===
function initHeaderScroll() {
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

// === SCROLL REVEALS ===
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, Math.min(i * 60, 300));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
}

// === GSAP HERO ENTRANCE ===
function initHero() {
  if (!window.gsap) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl
    .from('.hero__label', { opacity: 0, y: 30, duration: 0.8, delay: 0.2 })
    .from('.hero__content h1', { opacity: 0, y: 40, duration: 0.8 }, '-=0.4')
    .from('.hero__lead', { opacity: 0, y: 30, duration: 0.7 }, '-=0.5')
    .from('.hero__actions .btn', { opacity: 0, y: 20, stagger: 0.12, duration: 0.6 }, '-=0.4')
    .from('.hero__scroll-hint', { opacity: 0, duration: 0.5 }, '-=0.2');
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
  renderCards(privatTjenester, 'privat');
  renderCards(naringTjenester, 'naring');
  initTabs();
  initDrawer();
  initHeaderScroll();
  initReveal();
});

window.addEventListener('load', () => {
  initHero();
});
