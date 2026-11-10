// Éléments communs : fond, menu, pied de page, fiches projets, thème
const PAGES=[['index.html','Accueil'],['parcours.html','Parcours'],['projets.html','Projets'],['stages.html','Stages'],['veille.html','Veille & certifs'],['contact.html','Contact']];
const here=location.pathname.split('/').pop()||'index.html';
const CV='https://b8944da5-3a46-46f8-9c9c-79ed593a7901.filesusr.com/ugd/f2fdee_c101a44639b84573ae16478eda0ac586.pdf';
const LI='https://www.linkedin.com/in/alexis-leclerc-b70463195/';

document.body.insertAdjacentHTML('afterbegin',`
<div class="bg"><div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div></div>
<nav><div class="wrap">
  <a class="logo" href="index.html"><span class="mono">AL</span>Alexis Leclerc</a>
  <button class="iconbtn" id="menu" aria-label="Menu">☰</button>
  <div class="links" id="links">${PAGES.map(([h,t])=>`<a href="${h}"${h===here?' class="on"':''}>${t}</a>`).join('')}</div>
  <button class="iconbtn" id="theme" aria-label="Changer de thème">◐</button>
</div></nav>`);
document.body.insertAdjacentHTML('beforeend',`
<footer><div class="wrap"><span>© ${new Date().getFullYear()} Alexis Leclerc — Portfolio BTS SIO</span>
<span><a href="${LI}" target="_blank" rel="noopener">LinkedIn</a> · <a href="mailto:leclercalexis@icloud.com">Email</a> · <a href="${CV}" target="_blank" rel="noopener">CV</a></span></div></footer>
<dialog id="dlg"><div class="dlg"><button class="close" aria-label="Fermer">×</button><div id="dc"></div></div></dialog>`);
document.getElementById('menu').onclick=()=>document.getElementById('links').classList.toggle('open');

const root=document.documentElement;
try{const t=localStorage.getItem('theme');if(t)root.dataset.theme=t}catch(e){}
document.getElementById('theme').onclick=()=>{const dark=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;root.dataset.theme=dark?'light':'dark';try{localStorage.setItem('theme',root.dataset.theme)}catch(e){}};

const all=[];
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const card=p=>{all.push(p);return `<button class="card reveal" data-i="${all.length-1}"><div class="thumb"><img loading="lazy" src="${W+p.img}" alt=""></div><div class="body"><div class="code">${p.c}</div><h3>${esc(p.t)}</h3><p>${esc(p.s)}</p><div class="more">Voir le détail →</div></div></button>`};
function groups(id,G){const el=document.getElementById(id);if(el)el.innerHTML=G.map(g=>`<div class="group"><h3 class="gt">${g.g}</h3><div class="grid">${g.items.map(card).join('')}</div></div>`).join('')}
function fill(id,html){const el=document.getElementById(id);if(el)el.innerHTML=html}

fill('xp',XP.map(x=>`<div class="item glass reveal"><div class="date">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join(''));
groups('proj',P);groups('stg',S);
fill('vei',V.map(card).join(''));

const dlg=document.getElementById('dlg');
dlg.querySelector('.close').onclick=()=>dlg.close();
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
document.addEventListener('click',e=>{const b=e.target.closest('.card');if(!b)return;const p=all[b.dataset.i];
  document.getElementById('dc').innerHTML=`<div class="eyebrow">${p.c}</div><h2>${esc(p.t)}</h2><p>${esc(p.d)}</p>`+
  p.k.map(k=>`<h4>${C[k][0]}</h4><ul>${C[k][1].map(x=>`<li>${x}</li>`).join('')}</ul>`).join('')+
  `<div class="gal">${[p.img,...p.gal].map(i=>`<a href="${W+i}" target="_blank" rel="noopener"><img loading="lazy" src="${W+i}" alt=""></a>`).join('')}</div>`;
  dlg.showModal();dlg.querySelector('.dlg').scrollTop=0;});

// Apparition douce au défilement
const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08}):null;
document.querySelectorAll('.reveal').forEach(el=>io?io.observe(el):el.classList.add('in'));
