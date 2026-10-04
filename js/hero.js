function renderTitle(hero) {
  return `
    <span class="hero__title-line">${escapeHtml(hero.titleBefore)}</span>
    <span class="hero__title-line"><em>${escapeHtml(hero.titleAccent)}</em> ${escapeHtml(hero.titleAfter)}</span>
  `;
}

function contactButton(site) {
  const href = site.contactLink;
  if (!href) return "";
  const external = /^https?:/i.test(href);
  const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
  return `<a class="button button--secondary" href="${escapeHtml(href)}"${attrs}>${escapeHtml(site.hero.secondaryCta.label)}</a>`;
}

function servicesMarkup(services) {
  if (!services || !services.length) return "";
  const items = services
    .map(
      (item) => `
        <li>
          <span>${escapeHtml(item.title)}</span>
          ${item.short ? `<small>${escapeHtml(item.short)}</small>` : ""}
        </li>
      `
    )
    .join("");
  return `<ul class="hero__services">${items}</ul>`;
}

function renderHero(site) {
  const { hero, portrait } = site;
  const main = document.querySelector("#main");
  const section = document.createElement("section");
  section.className = "hero";
  section.id = "top";
  section.setAttribute("aria-labelledby", "hero-title");

  section.innerHTML = `
    <div class="hero__layout">
      <p class="hero__eyebrow"><span>Предприниматель</span><span class="hero__eyebrow-sep" aria-hidden="true">·</span><span>AI-специалист</span></p>
      <figure class="portrait">
        <div class="portrait__frame">
          <img
            class="portrait__image"
            alt="${escapeHtml(portrait.alt)}"
            width="900"
            height="1200"
          />
          <div class="portrait__fallback" role="img" aria-label="Место для портрета Екатерины Нестеренко">
            <span class="portrait__mark" aria-hidden="true">ЕН</span>
            <span class="portrait__hint">Портрет</span>
          </div>
        </div>
      </figure>
      <div class="hero__body">
        <h1 class="hero__title" id="hero-title">${renderTitle(hero)}</h1>
        <p class="hero__lead">${escapeHtml(hero.lead)}</p>
        <div class="hero__actions">
          <a class="button button--primary" href="${escapeHtml(hero.primaryCta.href)}">${escapeHtml(hero.primaryCta.label)}</a>
          ${contactButton(site)}
        </div>
        ${servicesMarkup(site.services)}
      </div>
    </div>
  `;

  const frame = section.querySelector(".portrait__frame");
  const image = section.querySelector(".portrait__image");
  const fallback = section.querySelector(".portrait__fallback");
  const probe = new Image();

  probe.onload = () => {
    image.src = portrait.src;
    frame.classList.add("is-ready");
    fallback.hidden = true;
  };

  probe.onerror = () => {
    frame.classList.add("is-missing");
    image.alt = "";
  };

  probe.src = portrait.src;
  main.appendChild(section);
}
