renderHeader(SITE);
renderHero(SITE);
renderProjects(SITE);

function emphasizeBrand(text) {
  const brand = "CAPRIZNAYA MODA";
  const index = text.indexOf(brand);
  if (index < 0) return escapeHtml(text);
  return `${escapeHtml(text.slice(0, index))}<strong>${escapeHtml(brand)}</strong>${escapeHtml(text.slice(index + brand.length))}`;
}

function renderAbout(site) {
  if (!site.aboutLead || !site.aboutLead.length) return;
  const paragraphs = site.aboutLead
    .map((text) => `<p>${emphasizeBrand(text)}</p>`)
    .join("");
  const steps = (site.aboutMethod || [])
    .map((step, index) => {
      const number = String(index + 1).padStart(2, "0");
      return `<li><span class="about__num">${number}</span><div><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.text)}</p></div></li>`;
    })
    .join("");
  const section = document.createElement("section");
  section.id = "about";
  section.className = "about";
  section.setAttribute("aria-labelledby", "about-title");
  section.innerHTML = `
    <div class="about__inner">
      <h2 id="about-title">${escapeHtml(site.aboutTitle || "Обо мне")}</h2>
      <div class="about__grid">
        <div class="about__story">
          <p class="about__accent"><span>${escapeHtml(site.aboutAccentMark || "")}</span><br> ${escapeHtml(site.aboutAccent || "")}</p>
          <div class="about__copy">${paragraphs}</div>
        </div>
        ${
          steps
            ? `<div class="about__method"><p class="about__label">${escapeHtml(site.aboutMethodTitle || "")}</p><ol class="about__steps">${steps}</ol></div>`
            : ""
        }
      </div>
    </div>
  `;
  document.querySelector("#main").appendChild(section);
}

function renderContact(site) {
  if (!site.contacts || !site.contacts.length) return;
  const items = site.contacts
    .map((item) => {
      const external = /^https?:/i.test(item.href);
      const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<li><span>${escapeHtml(item.label)}</span><a href="${escapeHtml(item.href)}"${attrs}>${escapeHtml(item.value)}</a></li>`;
    })
    .join("");
  const section = document.createElement("section");
  section.id = "contact";
  section.className = "contact";
  section.setAttribute("aria-labelledby", "contact-title");
  section.innerHTML = `
    <div class="contact__inner">
      <h2 id="contact-title">${escapeHtml(site.contactsTitle || "Контакты")}</h2>
      ${site.contactsLead ? `<p>${escapeHtml(site.contactsLead)}</p>` : ""}
      <ul class="contact__list">${items}</ul>
    </div>
  `;
  document.querySelector("#main").appendChild(section);
}

function renderClose(site) {
  if (!site.channels || !site.channels.length) return;
  const links = site.channels
    .map(
      (item) =>
        `<a href="${escapeHtml(item.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.label)}</a>`
    )
    .join("");
  const section = document.createElement("section");
  section.className = "close";
  section.setAttribute("aria-labelledby", "channels-title");
  section.innerHTML = `
    <div class="close__inner">
      <h2 id="channels-title">${escapeHtml(site.channelsTitle || "Каналы")}</h2>
      ${site.channelsLead ? `<p>${escapeHtml(site.channelsLead)}</p>` : ""}
      <div class="close__links">${links}</div>
    </div>
  `;
  document.querySelector("#main").appendChild(section);
}

renderAbout(SITE);
renderContact(SITE);
renderClose(SITE);
