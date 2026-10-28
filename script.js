const $ = s => document.querySelector(s), S = SITE;
let lang = "id";
try { lang = localStorage.getItem("lang") || S.defaultLang || "id"; } catch (e) { lang = S.defaultLang || "id"; }
const qp = new URLSearchParams(location.search);
document.documentElement.dataset.theme = qp.get("theme") || S.theme || "biru";
document.documentElement.dataset.layout = qp.get("layout") || S.layout || "side";
const t = x => (x && typeof x === "object" && !Array.isArray(x) && ("id" in x || "en" in x)) ? (x[lang] ?? x.id ?? "") : x;
const ui = k => UI[lang][k];
const btn = (txt, h, c = "", ext = true) => h ? `<a class="btn ${c}" href="${h}" ${ext ? 'target="_blank" rel="noopener"' : ""}>${txt}</a>` : "";
const tags = a => `<div class="tags">${a.map(x => `<span>${t(x)}</span>`).join("")}</div>`;

function render() {
  document.documentElement.lang = lang;
  document.title = `${S.name} – ${S.role}`;
  $("#logo").textContent = S.name; $("#name").textContent = S.name; $("#role").textContent = S.role;
  $("#tagline").textContent = t(S.tagline);
  $("#menu").innerHTML = ["projects", "experience", "skills", "contact"].map(i => `<a href="#${i}">${ui(i)}</a>`).join("");
  $("#lang").innerHTML = ["id", "en"].map(l => `<button data-l="${l}" aria-pressed="${l === lang}" aria-label="${l === "id" ? "Bahasa Indonesia" : "English"}">${l.toUpperCase()}</button>`).join("");
  $("#heroBtns").innerHTML = btn(ui("viewProjects"), "#projects", "main", false) + btn(ui("cv"), S.cv, "", false);
  ["about", "projects", "experience", "skills", "contact"].forEach(k => $(`#${k} h2`).textContent = ui(k));
  $("#awards h2").textContent = ui("awards");
  $("#aboutText").innerHTML = S.about.map(p => `<p>${t(p)}</p>`).join("");
  $("#stats").innerHTML = S.stats.map(s => `<div class="stat"><b>${s.n}</b><span>${t(s.l)}</span></div>`).join("");
  $("#projectGrid").innerHTML = S.projects.map((p, i) => `
    <article class="card" tabindex="0" role="button" data-p="${i}" aria-label="${ui("details")}: ${t(p.title)}"><div class="media">${p.icon || "⚙️"}${p.images?.[0] ? `<img src="${p.images[0]}" alt="" loading="lazy" onerror="this.remove()">` : ""}</div>
    <div class="body"><h3>${t(p.title)}</h3>${tags(p.tags)}<p>${t(p.desc)}</p><span class="more">${ui("details")}</span></div></article>`).join("");
  $("#expList").innerHTML = S.experience.map((e, i) => `<div class="item"><small>${t(e.when)}</small><h3>${t(e.title)}</h3><em>${e.org}</em><ul>${t(e.points).map(x => `<li>${x}</li>`).join("")}</ul>${e.file ? `<button class="btn cbtn" data-c="exp:${i}">${ui("viewCert")}</button>` : ""}</div>`).join("");
  $("#skillList").innerHTML = S.skills.map(k => `<div class="skillrow"><h3>${t(k.title)}</h3><div class="chips">${k.items.map(x => `<span>${t(x)}</span>`).join("")}</div></div>`).join("");
  const isPdf = f => /\.pdf($|\?)/i.test(f);
  const col = (g, h, a) => `<div><h3>${h}</h3><ul>${a.map((x, i) => x.file
    ? `<li class="has" tabindex="0" role="button" data-c="${g}:${i}"><span class="cthumb">${isPdf(x.file) ? "📄" : `<img src="${x.file}" alt="" loading="lazy" onerror="this.remove()">`}</span><span>${t(x.title)}<small>${t(x.sub)}</small><span class="cview">${ui("viewCert")} →</span></span></li>`
    : `<li>${t(x.title)}<small>${t(x.sub)}</small></li>`).join("")}</ul></div>`;
  $("#eduCols").innerHTML = col("edu", ui("edu"), S.education) + col("awd", ui("awd"), S.awards) + col("cert", ui("cert"), S.certs);
  $("#contactText").textContent = `${ui("cta")} ${ui("loc")}: ${S.location}.`;
  $("#contactBtns").innerHTML = btn("Email", S.email && `mailto:${S.email}`, "main") + btn("WhatsApp", S.whatsapp && `https://wa.me/${S.whatsapp}`) + btn("LinkedIn", S.linkedin) + btn("GitHub", S.github) + btn("Instagram", S.instagram);
  $("#footer").textContent = `© ${new Date().getFullYear()} ${S.name}`;
  $("#close").setAttribute("aria-label", ui("close"));
}

const ph = $("#photo");
ph.textContent = S.name.split(" ").map(w => w[0]).join("");
const probe = new Image(); probe.onload = () => { ph.style.backgroundImage = `url(${S.photo})`; ph.textContent = ""; }; probe.src = S.photo;

const modal = $("#modal");
const open = i => {
  const p = S.projects[i];
  $("#modalBody").innerHTML = `<div class="panel" role="dialog" aria-modal="true"><h3>${t(p.title)}</h3>${tags(p.tags)}
    <h4>${ui("myRole")}</h4><p>${t(p.role) || ""}</p><h4>${ui("aboutProj")}</h4><p>${t(p.detail) || t(p.desc)}</p>
    ${(p.images || []).length ? `<div class="shots">${p.images.map(src => `<img src="${src}" alt="${t(p.title)}" loading="lazy" onerror="this.remove()">`).join("")}</div>` : ""}
    ${p.video ? `<video src="${p.video}" controls preload="metadata" playsinline></video>` : ""}
    ${p.link ? `<div class="btns">${btn(ui("openLink"), p.link, "main")}</div>` : ""}</div>`;
  modal.classList.add("open"); document.body.style.overflow = "hidden"; $("#close").focus();
};
const openCert = k => {
  const [g, i] = k.split(":"), x = ({ exp: S.experience, edu: S.education, awd: S.awards, cert: S.certs })[g][i];
  $("#modalBody").innerHTML = `<div class="panel" role="dialog" aria-modal="true"><h3>${t(x.title)}</h3><p>${t(x.sub ?? x.org)}</p>
    ${/\.pdf($|\?)/i.test(x.file) ? `<iframe src="${x.file}" title="${t(x.title)}"></iframe>` : `<img class="cert" src="${x.file}" alt="${t(x.title)}">`}
    <div class="btns">${btn(ui("openNew"), x.file, "main")}</div></div>`;
  modal.classList.add("open"); document.body.style.overflow = "hidden"; $("#close").focus();
};
const shut = () => { modal.classList.remove("open"); $("#modalBody").innerHTML = ""; document.body.style.overflow = ""; };
document.addEventListener("click", e => {
  const l = e.target.closest("[data-l]"), c = e.target.closest("[data-p]"), ce = e.target.closest("[data-c]");
  if (l) { lang = l.dataset.l; try { localStorage.setItem("lang", lang); } catch (x) {} render(); }
  else if (c) open(c.dataset.p);
  else if (ce) openCert(ce.dataset.c);
  else if (e.target === modal || e.target.id === "close") shut();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") shut();
  if (e.key === "Enter" && e.target.dataset.p !== undefined) open(e.target.dataset.p);
  if (e.key === "Enter" && e.target.dataset.c !== undefined) openCert(e.target.dataset.c);
});
render();
