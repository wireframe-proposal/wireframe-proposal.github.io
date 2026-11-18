(function(){
var d=document,root=d.documentElement;
var $=function(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s))};
var LOGO='<svg class="w-logo" viewBox="0 0 124 24" role="img" aria-label="nine mile" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M69.496 9.747h-3.63v13.41h3.63V9.747zm28.026-3.608h-3.63v17.018h3.63V6.14zm0-6.139h-3.63v3.63h3.63V0z"/><path d="M69.475 6.14v3.63h6.409c.447 0 .81.363.81.81v12.577h3.63V12.303a6.163 6.163 0 0 0-6.163-6.164h-4.686z"/><path d="M79.78 6.14v3.63h6.408c.448 0 .811.363.811.81v12.577h3.63V12.303a6.163 6.163 0 0 0-6.163-6.164H79.78zM104.465 0h-3.63v23.157h3.63V0zm11.107 5.77c-4.859 0-8.501 3.853-8.501 8.941 0 5.089 3.731 8.944 8.59 8.944 3.919 0 6.983-2.165 7.938-5.211h-3.952c-.591.963-1.89 1.792-3.956 1.792-2.652 0-4.519-1.997-4.889-4.066h13.081c.076-.476.119-.962.119-1.459 0-4.938-3.57-8.942-8.428-8.942h-.002zm-4.78 7.302c.336-2.256 2.203-4.012 4.78-4.012 2.38 0 4.315 1.613 4.607 4.012h-9.387zM21.433 6.139h-3.63v17.018h3.63V6.14zm0-6.139h-3.63v3.63h3.63V0zM3.643 6.14v3.63h6.409c.447 0 .81.363.81.81v12.577h3.63V12.303A6.163 6.163 0 0 0 8.33 6.139H3.643zm24.71 0v3.63h6.408c.448 0 .811.363.811.81v12.577h3.63V12.303a6.163 6.163 0 0 0-6.163-6.164h-4.687zm21.956-.37c-4.859 0-8.5 3.853-8.5 8.941 0 5.089 3.73 8.944 8.59 8.944 3.918 0 6.982-2.165 7.938-5.211h-3.953c-.59.963-1.89 1.792-3.956 1.792-2.652 0-4.519-1.997-4.889-4.066h13.082c.076-.476.118-.962.118-1.459 0-4.938-3.57-8.942-8.428-8.942h-.002zm-4.78 7.302c.336-2.256 2.203-4.012 4.78-4.012 2.38 0 4.315 1.613 4.607 4.012h-9.387z"/><path d="M28.374 9.747h-3.63v13.41h3.63V9.747zm-24.744 0H0v13.41h3.63V9.747z"/></g></svg>';
var TPL={
nav:function(el){return '<header class="w-nav"><div class="w-wrap w-nav__in">'+LOGO+'<nav class="w-nav__links" aria-label="Wireframe navigation"><span>Services</span><span>About</span><span>Careers</span><span>Insights</span></nav><div class="w-nav__right"><span class="btn btn--s">'+(el.getAttribute('data-cta')||'Talk to our team')+'</span><span class="w-cap w-burger" aria-label="Menu">☰</span></div></div></header>'},
logos:function(){return '<div class="w-row"><p class="w-eyebrow">Market maker for</p><div class="logos"><i>ISSUER LOGO</i><i>ISSUER LOGO</i><i>ISSUER LOGO</i><i>ISSUER LOGO</i><i>ISSUER LOGO</i><i>ISSUER LOGO</i></div></div><p class="note">B3: issuer logos need each partner\'s permission (e.g. Perennial).</p>'},
footer:function(el){var dn=el.getAttribute('data-desknote')?'<div class="w-foot__note"><div class="w-stack w-stack--s"><p class="w-h3">Not ready to talk? Get the desk note.</p><p class="w-cap">One short email a month on ETF liquidity. No sales calls.</p></div><div class="w-row"><span class="field">Work email</span><span class="btn btn--ghost">Subscribe</span></div></div><p class="note" style="margin-bottom:2rem">N3: who writes it and who owns the list. Catches leads that are not ready for BD. Moved from Short answers to the footer.</p>':'';return '<footer class="w-sec w-sec--tight w-foot w-rule"><div class="w-wrap">'+dn+'<div class="w-g" style="--n:4"><div class="w-stack">'+LOGO+'<p class="w-cap">Making not just the market, but the future.</p><span class="lk">LinkedIn</span></div><div><h4>Company</h4><ul class="list-reset"><li>Services</li><li>About</li><li>Careers</li><li>Insights</li><li>Contact</li></ul></div><div><h4>Contact</h4><ul class="list-reset"><li>Business Development · [email] · [phone]</li><li>Trading desk · +61 2 8043 9645 · trading@nmftrading.com</li><li>Careers · careers@nmftrading.com</li><li>General · contact@nmftrading.com</li></ul></div><div><h4>Offices</h4><ul class="list-reset"><li>Sydney (HQ) · Level 11, 39 Martin Place, NSW 2000</li><li>Shanghai · Suite 2904, Chong Hing Financial Center, 288 Nanjing West Road</li><li>Amsterdam · Opening [Q1 2027]</li></ul></div></div><div class="w-foot__legal"><span>[Disclaimer and general advice warning, from compliance]</span><span>© 2026 Nine Mile Financial Pty Ltd · ABN [xx xxx xxx xxx] · AFSL [if held] · Privacy Policy · Cookie settings</span></div></div></footer>'}
};
$('[data-tpl]').forEach(function(el){var f=TPL[el.getAttribute('data-tpl')];if(f)el.outerHTML=f(el)});

var views=$('.view'),letters=['a','b','c','d'];
$('.wf').forEach(function(v){
  var l=v.getAttribute('data-letter');
  var sw=letters.map(function(x){return '<a href="#variant-'+x+'"'+(x===l?' aria-current="page"':'')+' aria-label="Variant '+x.toUpperCase()+'">'+x.toUpperCase()+'</a>'}).join('');
  v.insertAdjacentHTML('afterbegin','<div class="w-strip"><div class="w-wrap w-strip__in"><a href="#home">← All variants</a><span class="w-strip__name">Variant '+l.toUpperCase()+' · '+v.getAttribute('data-name')+' · wireframe</span><nav class="w-strip__sw" aria-label="Switch variant">'+sw+'</nav></div></div>');
});

/* thumbnails: first screen of each wireframe, scaled */
$('[data-thumb]').forEach(function(t){
  var v=d.getElementById('view-variant-'+t.getAttribute('data-thumb'));if(!v)return;
  var stage=d.createElement('div');stage.className='thumb-stage wf';stage.setAttribute('inert','');
  var kids=$(':scope > .w-nav, :scope > .w-sec',v).slice(0,7);
  kids.forEach(function(k){var c=k.cloneNode(true);$('[id]',c).forEach(function(n){n.removeAttribute('id')});$('.note',c).forEach(function(n){n.remove()});$('[data-beat="0"],[data-from="0"],.rail li:first-child',c).forEach(function(n){n.classList.add('is-on')});stage.appendChild(c)});
  t.appendChild(stage);
  var fit=function(){stage.style.transform='scale('+(t.clientWidth/1440)+')'};
  fit();if(window.ResizeObserver)new ResizeObserver(fit).observe(t);else window.addEventListener('resize',fit);
});

/* tabs */
$('[data-tabs]').forEach(function(g){
  var name=g.getAttribute('data-tabs');
  $('[data-tab]',g).forEach(function(b){b.addEventListener('click',function(){
    var view=g.closest('.view')||d;
    $('[data-tab]',g).forEach(function(x){x.setAttribute('aria-selected',x===b?'true':'false')});
    $('[data-panel^="'+name+':"]',view).forEach(function(p){p.hidden=p.getAttribute('data-panel')!==name+':'+b.getAttribute('data-tab')});
  })});
});

/* scroll scenes */
var scenes=$('[data-scene]');
function tick(){
  scenes.forEach(function(s){
    if(!s.offsetParent)return;
    var n=parseInt(getComputedStyle(s).getPropertyValue('--beats'),10)||1;
    var r=s.getBoundingClientRect(),total=s.offsetHeight-window.innerHeight;
    var p=total>0?Math.min(1,Math.max(0,-r.top/total)):0,i=Math.min(n-1,Math.floor(p*n));
    if(s._i===i)return;s._i=i;
    $('[data-beat]',s).forEach(function(b){b.classList.toggle('is-on',+b.getAttribute('data-beat')===i)});
    $('[data-from]',s).forEach(function(b){b.classList.toggle('is-on',+b.getAttribute('data-from')<=i)});
    $('.rail li',s).forEach(function(li,k){li.classList.toggle('is-on',k===i);li.classList.toggle('is-done',k<i)});
  });
}
var raf=0;window.addEventListener('scroll',function(){if(!raf)raf=requestAnimationFrame(function(){raf=0;tick()})},{passive:true});
window.addEventListener('resize',tick);

/* notes toggle */
var pill=d.createElement('button');pill.type='button';pill.className='notes-pill';pill.hidden=true;pill.innerHTML='Notes <b>Off</b>';
pill.addEventListener('click',function(){var on=root.classList.toggle('notes-on');pill.querySelector('b').textContent=on?'On':'Off';pill.setAttribute('aria-pressed',on)});
d.body.appendChild(pill);

/* router: #home, #variant-a..d, or an anchor inside the proposal */
function route(){
  var h=(location.hash||'').replace('#',''),m=/^variant-[a-d]$/.test(h),id=m?'view-'+h:'view-home';
  var changed=false;
  views.forEach(function(v){var show=v.id===id;if(v.hidden===show)changed=true;v.hidden=!show});
  pill.hidden=!m;
  d.title=m?'Nine Mile home · Variant '+h.slice(-1).toUpperCase()+' (wireframe)':'Nine Mile Homepage Variants';
  scenes.forEach(function(s){s._i=-1});
  var target=!m&&h&&h!=='home'?d.getElementById(h):null;
  if(target){target.scrollIntoView({behavior:changed?'auto':'smooth',block:'start'})}
  else if(changed){window.scrollTo(0,0)}
  tick();
}
window.addEventListener('hashchange',route);
route();

/* reveals */
requestAnimationFrame(function(){root.classList.add('is-ready')});
var cards=$('.pk-card');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -5% 0px'});cards.forEach(function(c){io.observe(c)})}
else cards.forEach(function(c){c.classList.add('is-in')});
setTimeout(function(){cards.forEach(function(c){c.classList.add('is-in')})},2500);
})();
