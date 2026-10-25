/* Novus HQ — theme toggle and privacy-page table of contents. */

(function () {
  const root = document.documentElement;

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('novus-theme', theme); } catch (e) {}
  }

  document.querySelectorAll('.theme-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  });

  /* Highlight the current section in a privacy policy's table of contents. */
  const tocLinks = document.querySelectorAll('.toc-link');
  if (!tocLinks.length) return;
  const sections = document.querySelectorAll('.doc-section[id]');
  const onScroll = () => {
    let current = '';
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    tocLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
