/** Native scrolling and progressive enhancement: content works without JavaScript. */
export function initPortfolio() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll<HTMLElement>('.reveal').forEach(el => {
      el.classList.add('will-reveal');
      observer.observe(el);
    });
  }
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('[data-section-link]');
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px' });
  document.querySelectorAll('section[id]').forEach(section => sectionObserver.observe(section));
  let opener: HTMLButtonElement | null = null;
  const closeDialog = (dialog: HTMLDialogElement) => {
    document.body.classList.toggle('dialog-open', Boolean(document.querySelector('.case-dialog[open]')));
    opener?.focus({ preventScroll: true });
    if (location.hash === `#${dialog.id}`) history.replaceState(null, '', location.pathname + location.search + '#work');
  };
  document.querySelectorAll<HTMLButtonElement>('[data-case]').forEach(button => {
    button.addEventListener('click', () => {
      const dialog = document.getElementById(`case-${button.dataset.case}`) as HTMLDialogElement | null;
      if (!dialog) return;
      opener = button;
      dialog.showModal();
      document.body.classList.add('dialog-open');
      history.replaceState(null, '', `#${dialog.id}`);
    });
  });
  document.querySelectorAll<HTMLDialogElement>('.case-dialog').forEach(dialog => {
    dialog.addEventListener('close', () => closeDialog(dialog));
    dialog.addEventListener('click', event => {
      if (event.target === dialog) {
        const rect = dialog.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
      }
    });
  });
  const openFromHash = () => {
    const dialog = document.getElementById(location.hash.slice(1));
    if (dialog instanceof HTMLDialogElement && !dialog.open) {
      document.querySelectorAll<HTMLDialogElement>('.case-dialog[open]').forEach(open => open.close());
      dialog.showModal(); document.body.classList.add('dialog-open');
    }
  };
  openFromHash();
  window.addEventListener('hashchange', openFromHash);
  const copy = document.querySelector<HTMLButtonElement>('[data-copy-email]');
  copy?.addEventListener('click', async () => {
    const label = copy.querySelector('span');
    const feedback = document.querySelector<HTMLElement>('[data-copy-feedback]');
    try {
      await navigator.clipboard.writeText(copy.dataset.copyEmail!);
      if (label) label.textContent = copy.dataset.copiedLabel!;
      if (feedback) feedback.textContent = copy.dataset.copiedLabel!;
      window.setTimeout(() => { if (label) label.textContent = copy.dataset.copyLabel!; }, 2500);
    } catch {
      if (feedback) feedback.textContent = document.documentElement.lang === 'es' ? 'No se pudo copiar. Podés seleccionar el email o abrir el enlace.' : 'Could not copy. Select the email or open the link.';
    }
  });
}
