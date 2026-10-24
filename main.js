const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const spotlight = document.querySelector('.spotlight');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let pointerX = 0;
let pointerY = 0;
let spotlightFrame = null;

function hideSpotlight() {
  if (spotlightFrame !== null) cancelAnimationFrame(spotlightFrame);
  spotlightFrame = null;
  spotlight.style.opacity = '0';
}

window.addEventListener('pointermove', (event) => {
  if (!finePointer.matches || reducedMotion.matches) return;
  pointerX = event.clientX;
  pointerY = event.clientY;
  if (spotlightFrame !== null) return;
  spotlightFrame = requestAnimationFrame(() => {
    spotlight.style.setProperty('--x', `${pointerX}px`);
    spotlight.style.setProperty('--y', `${pointerY}px`);
    spotlight.style.opacity = '1';
    spotlightFrame = null;
  });
}, { passive: true });
document.documentElement.addEventListener('pointerleave', hideSpotlight);
window.addEventListener('blur', hideSpotlight);
finePointer.addEventListener('change', hideSpotlight);
reducedMotion.addEventListener('change', hideSpotlight);

const sections = [...document.querySelectorAll('main > section[id]')];
const links = [...document.querySelectorAll('.navigation a')];
let navigationPending = false;

function updateNavigation() {
  const readingPosition = window.innerHeight * 0.3;
  let active = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= readingPosition) active = section;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) {
    active = sections[sections.length - 1];
  }
  for (const link of links) {
    if (link.hash === `#${active.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  navigationPending = false;
}

window.addEventListener('scroll', () => {
  if (navigationPending) return;
  navigationPending = true;
  requestAnimationFrame(updateNavigation);
}, { passive: true });
window.addEventListener('resize', updateNavigation);
window.addEventListener('load', updateNavigation);
updateNavigation();

// Fit the pinned desktop profile to the viewport without nested scrolling.
const sidebar = document.querySelector('.sidebar');
const profile = document.querySelector('.sidebar-content');
function updateSidebarPosition() {
  profile.style.removeProperty('--profile-scale');
  if (window.innerWidth <= 800) return;
  const availableHeight = window.innerHeight - 36;
  let scale = 1;
  while (sidebar.getBoundingClientRect().height > availableHeight && scale > 0.4) {
    scale = Math.max(0.4, scale - 0.025);
    profile.style.setProperty('--profile-scale', scale.toFixed(3));
  }
}
window.addEventListener('resize', updateSidebarPosition);
window.addEventListener('load', updateSidebarPosition);
updateSidebarPosition();
