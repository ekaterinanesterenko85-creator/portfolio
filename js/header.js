function renderHeader(site) {
  const header = document.querySelector("#header");
  const links = site.nav
    .map(
      (item) =>
        `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`
    )
    .join("");

  if (site.nav.length < 2) header.classList.add("header--compact");

  header.innerHTML = `
    <div class="header__inner">
      <a class="brand" href="#top">${escapeHtml(site.hero.name)}</a>
      <button
        class="nav-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="site-nav"
      >
        Меню
      </button>
      <nav class="site-nav" id="site-nav" aria-label="Разделы сайта">
        ${links}
      </nav>
    </div>
  `;

  const toggle = header.querySelector(".nav-toggle");
  const nav = header.querySelector("#site-nav");
  const desktop = window.matchMedia("(min-width: 880px)");

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.textContent = open ? "Закрыть" : "Меню";
  }

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!open);
    if (!open) {
      const firstLink = nav.querySelector("a");
      if (firstLink) firstLink.focus();
    }
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  desktop.addEventListener("change", (event) => {
    if (event.matches) setOpen(false);
  });

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
