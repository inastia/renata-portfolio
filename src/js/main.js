import '../css/styles.css';

const header = document.querySelector('.site-header');
const toggle = header?.querySelector('.nav-toggle-label');
const menu = header?.querySelector('.nav-menu');

if (toggle && menu) {
  const desktop = window.matchMedia('(min-width: 768px)');
  const links = [...menu.querySelectorAll('a[href]')];
  const logo = header.querySelector('.logo');
  let open = false;
  let scrollY = 0;
  let bodyStyle = null;
  let background = [];

  function closeMenu(restoreFocus = true) {
    if (!open) return;
    open = false;
    header.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    for (const [element, wasInert] of background) element.inert = wasInert;
    if (bodyStyle === null) document.body.removeAttribute('style');
    else document.body.setAttribute('style', bodyStyle);
    window.scrollTo({ top: scrollY, behavior: 'instant' });
    if (restoreFocus) toggle.focus({ preventScroll: true });
  }

  function openMenu() {
    if (desktop.matches || open) return;
    scrollY = window.scrollY;
    bodyStyle = document.body.getAttribute('style');
    background = [...document.body.children]
      .filter(element => element !== header && !['SCRIPT', 'STYLE'].includes(element.tagName));
    if (logo) background.push(logo);
    background = background.map(element => [element, element.inert]);
    for (const [element] of background) element.inert = true;
    Object.assign(document.body.style, {
      position: 'fixed', top: `-${scrollY}px`, width: '100%', overflow: 'hidden',
    });
    open = true;
    header.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation');
    (links[0] || toggle).focus({ preventScroll: true });
  }

  toggle.addEventListener('click', () => open ? closeMenu() : openMenu());
  for (const link of links) link.addEventListener('click', () => closeMenu());

  document.addEventListener('keydown', event => {
    if (!open) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
    } else if (event.key === 'Tab') {
      const controls = [toggle, ...links];
      const index = controls.indexOf(document.activeElement);
      event.preventDefault();
      const next = (index + (event.shiftKey ? -1 : 1) + controls.length) % controls.length;
      controls[next].focus();
    }
  });

  document.addEventListener('focusin', event => {
    if (open && event.target !== toggle && !menu.contains(event.target)) {
      (links[0] || toggle).focus();
    }
  });

  desktop.addEventListener('change', () => {
    if (desktop.matches && open) {
      closeMenu(false);
      (links[0] || logo)?.focus({ preventScroll: true });
    }
  });
}
