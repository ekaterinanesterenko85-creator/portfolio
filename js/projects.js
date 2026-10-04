function caseLink(item, prominent) {
  if (!item.href) return "";
  const label = item.linkLabel || "Открыть сайт";
  const className = prominent
    ? "button button--primary case__link case__link--prominent"
    : "button button--secondary case__link";
  return `<a class="${className}" href="${escapeHtml(item.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`;
}

function pointsMarkup(points) {
  if (!points || !points.length) return "";
  const items = points.map((point) => `<li>${escapeHtml(point)}</li>`).join("");
  return `<ol class="case__points">${items}</ol>`;
}

function roleMarkup(role) {
  if (!role) return "";
  return `<p class="case__role"><span>Что сделано</span> ${escapeHtml(role)}</p>`;
}

function titleMarkup(item) {
  if (item.titleLines && item.titleLines.length) {
    return item.titleLines
      .map((line) => `<span class="case__title-line">${escapeHtml(line)}</span>`)
      .join("");
  }
  return escapeHtml(item.title);
}

function coverMarkup(item) {
  const text = item.cover || item.summary;
  return `
    <div class="cover">
      <p class="cover__kicker">${escapeHtml(item.kicker)}</p>
      <p class="cover__title">${escapeHtml(item.title)}</p>
      <p class="cover__text">${escapeHtml(text)}</p>
    </div>
  `;
}

function shotMarkup(item) {
  return `
    <figure class="shot" data-src="${escapeHtml(item.file)}" hidden>
      <div class="shot__frame">
        <img class="shot__image" alt="${escapeHtml(item.caption)}" width="1280" height="800" />
      </div>
      <figcaption>${escapeHtml(item.caption)}</figcaption>
    </figure>
  `;
}

function renderCase(item) {
  const layout = item.layout || "system";
  const prominent = layout === "feature";
  const stacked = layout === "stack";
  const media = (item.media || []).slice(0, 4);
  const lead = stacked ? null : media[0];
  const rest = stacked ? media : media.slice(1);
  return `
    <article class="case case--${escapeHtml(layout)}" id="${escapeHtml(item.id)}">
      <div class="case__top">
        <div class="case__copy">
          <p class="case__kicker">${escapeHtml(item.kicker)}</p>
          <h3 class="case__title">${titleMarkup(item)}</h3>
          ${item.summary ? `<p class="case__summary">${escapeHtml(item.summary)}</p>` : ""}
          ${pointsMarkup(item.points)}
          ${roleMarkup(item.role)}
          ${caseLink(item, prominent)}
        </div>
        ${
          lead
            ? `<div class="case__lead">${coverMarkup(item)}${shotMarkup(lead)}</div>`
            : ""
        }
      </div>
      ${rest.length ? `<div class="case__gallery">${rest.map(shotMarkup).join("")}</div>` : ""}
    </article>
  `;
}

function hydrateMedia(section) {
  section.querySelectorAll(".case").forEach((article) => {
    const shots = [...article.querySelectorAll(".shot")];
    const cover = article.querySelector(".cover");
    const lead = article.querySelector(".case__lead");
    if (!shots.length) return;

    let pending = shots.length;
    let ready = 0;

    const finish = () => {
      pending -= 1;
      if (pending > 0) return;

      const gallery = article.querySelector(".case__gallery");
      if (lead && !lead.querySelector(".shot") && gallery) {
        const next = gallery.querySelector(".shot");
        if (next) lead.appendChild(next);
      }
      if (gallery && !gallery.querySelector(".shot")) gallery.remove();

      if (ready > 0 && cover) {
        cover.hidden = true;
        article.classList.add("has-images");
      }
    };

    shots.forEach((shot) => {
      const probe = new Image();
      probe.onload = () => {
        const image = shot.querySelector(".shot__image");
        image.src = shot.getAttribute("data-src");
        shot.hidden = false;
        ready += 1;
        finish();
      };
      probe.onerror = () => {
        shot.remove();
        finish();
      };
      probe.src = shot.getAttribute("data-src");
    });
  });
}

function renderProjects(site) {
  const section = document.createElement("section");
  section.id = "projects";
  section.className = "projects";
  section.setAttribute("aria-labelledby", "projects-title");
  section.innerHTML = `
    <div class="projects__inner">
      <header class="projects__intro">
        <h2 id="projects-title">Избранные проекты</h2>
        ${site.projectsLead ? `<p>${escapeHtml(site.projectsLead)}</p>` : ""}
      </header>
      ${site.featured.map(renderCase).join("")}
      ${
        site.projectsMore && site.projectsMore.href
          ? `<p class="projects__more"><a href="${escapeHtml(site.projectsMore.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(site.projectsMore.label)}</a></p>`
          : ""
      }
    </div>
  `;
  document.querySelector("#main").appendChild(section);
  hydrateMedia(section);
}
