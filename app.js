(function(){
var d=document,root=d.documentElement;
var $=function(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s))};
var LOGO='<svg class="w-logo" viewBox="0 0 124 24" role="img" aria-label="nine mile" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M69.496 9.747h-3.63v13.41h3.63V9.747zm28.026-3.608h-3.63v17.018h3.63V6.14zm0-6.139h-3.63v3.63h3.63V0z"/><path d="M69.475 6.14v3.63h6.409c.447 0 .81.363.81.81v12.577h3.63V12.303a6.163 6.163 0 0 0-6.163-6.164h-4.686z"/><path d="M79.78 6.14v3.63h6.408c.448 0 .811.363.811.81v12.577h3.63V12.303a6.163 6.163 0 0 0-6.163-6.164H79.78zM104.465 0h-3.63v23.157h3.63V0zm11.107 5.77c-4.859 0-8.501 3.853-8.501 8.941 0 5.089 3.731 8.944 8.59 8.944 3.919 0 6.983-2.165 7.938-5.211h-3.952c-.591.963-1.89 1.792-3.956 1.792-2.652 0-4.519-1.997-4.889-4.066h13.081c.076-.476.119-.962.119-1.459 0-4.938-3.57-8.942-8.428-8.942h-.002zm-4.78 7.302c.336-2.256 2.203-4.012 4.78-4.012 2.38 0 4.315 1.613 4.607 4.012h-9.387zM21.433 6.139h-3.63v17.018h3.63V6.14zm0-6.139h-3.63v3.63h3.63V0zM3.643 6.14v3.63h6.409c.447 0 .81.363.81.81v12.577h3.63V12.303A6.163 6.163 0 0 0 8.33 6.139H3.643zm24.71 0v3.63h6.408c.448 0 .811.363.811.81v12.577h3.63V12.303a6.163 6.163 0 0 0-6.163-6.164h-4.687zm21.956-.37c-4.859 0-8.5 3.853-8.5 8.941 0 5.089 3.73 8.944 8.59 8.944 3.918 0 6.982-2.165 7.938-5.211h-3.953c-.59.963-1.89 1.792-3.956 1.792-2.652 0-4.519-1.997-4.889-4.066h13.082c.076-.476.118-.962.118-1.459 0-4.938-3.57-8.942-8.428-8.942h-.002zm-4.78 7.302c.336-2.256 2.203-4.012 4.78-4.012 2.38 0 4.315 1.613 4.607 4.012h-9.387z"/><path d="M28.374 9.747h-3.63v13.41h3.63V9.747zm-24.744 0H0v13.41h3.63V9.747z"/></g></svg>';
var TPL={
nav:function(el){var act=el.getAttribute('data-active')||'';var lk=function(k,l,h){return h?'<a href="'+h+'"'+(act===k?' aria-current="page"':'')+'>'+l+'</a>':'<span>'+l+'</span>'};return '<header class="w-nav"><div class="w-wrap w-nav__in"><a class="w-logo-link" data-home href="#variant-a" aria-label="Nine Mile home">'+LOGO+'</a><nav class="w-nav__links" aria-label="Wireframe navigation">'+lk('services','Services','#page-services')+lk('about','About','#page-about')+lk('careers','Careers')+lk('insights','Insights')+'</nav><div class="w-nav__right"><span class="btn btn--s">'+(el.getAttribute('data-cta')||'Talk to our team')+'</span><span class="w-cap w-burger" aria-label="Menu">☰</span></div></div></header>'},
logos:function(){return '<div class="w-row"><p class="w-eyebrow">Recently appointed by</p><div class="logos"><i>PERENNIAL</i></div><p class="w-cap">External market maker for the Perennial Income Generator Active ETF · Nov 2026</p></div><p class="note">B3: add more issuer logos, each with the issuer\'s permission.</p>'},

footer:function(el){return '<footer class="w-sec w-sec--tight w-foot w-rule"><div class="w-wrap"><div class="w-foot__note"><div class="w-stack w-stack--s"><p class="w-h3">Not Ready to Talk? Get the Desk Note</p><p class="w-cap">A short monthly read on ETF liquidity in Australia and Asia. No sales calls.</p></div><div class="w-row"><span class="field">Work email</span><span class="btn btn--ghost">Subscribe</span></div></div><p class="note" style="margin-bottom:2rem">One footer on every page. N3: who writes the desk note and who owns the list. Careers and Insights have no wireframe in this set yet. ABN, AFSL and the final disclaimer from compliance (I4).</p><div class="w-g w-foot__cols"><div class="w-stack"><a class="w-logo-link" data-home href="#variant-a" aria-label="Nine Mile home">'+LOGO+'</a><p class="w-cap">Making not just the market, but the future.</p><span class="lk">LinkedIn</span></div><div><h4>Company</h4><ul class="list-reset"><li><a data-home href="#variant-a">Home</a></li><li><a href="#page-about">About</a></li><li>Careers</li><li>Insights</li><li><a href="#" data-contact="other">Contact</a></li></ul></div><div><h4>Services</h4><ul class="list-reset"><li><a href="#page-services">All services</a></li><li><a href="#page-service-detail" data-set-tab="svc:mm">ETF market making</a></li><li><a href="#page-service-detail" data-set-tab="svc:dl">Direct liquidity</a></li></ul></div><div><h4>Contact</h4><ul class="list-reset"><li><a href="#" data-contact="issuer">Business Development</a> · contact@nmftrading.com · +61 413 503 881</li><li><a href="#" data-contact="desk">Trading desk</a> · trading@nmftrading.com · +61 2 8043 9645</li><li>Careers · careers@nmftrading.com · +61 423 777 874</li></ul></div><div><h4>Offices</h4><ul class="list-reset"><li>Sydney (HQ) · Level 11, 39 Martin Place, NSW 2000</li><li>Shanghai · Suite 2904, Chong Hing Financial Center, No. 288 Nanjing West Road, Shanghai 200003</li><li>Amsterdam · Opening Q1 2027</li></ul></div></div><div class="w-foot__legal"><span style="max-width:60ch">Information on this website is general in nature and does not take into account your objectives, financial situation or needs. It is not financial advice.</span><span>© 2026 Nine Mile Financial Pty Ltd · Privacy Policy · Security · Cookie settings</span></div></div></footer>'}
};
$('[data-tpl]').forEach(function(el){var f=TPL[el.getAttribute('data-tpl')];if(f)el.outerHTML=f(el)});

var views=$('.view'),routes={},shown=[];
['a','b','c','d'].forEach(function(x){var v=d.getElementById('view-variant-'+x);if(!v)return;var c=d.querySelector('.pk-card--'+x),hid=!!(c&&c.hidden),lab=(v.getAttribute('data-label')||x).toLowerCase();
  if(hid){routes['archived-'+x]=v.id}else{routes['variant-'+lab]=v.id;shown.push({id:x,lab:lab})}v._lab=lab;});
$('.wf[data-page]').forEach(function(v){routes['page-'+v.getAttribute('data-page')]=v.id;v._lab='';});
$('.view.wf').forEach(function(v){
  var l=v.getAttribute('data-letter');
  var sw=shown.map(function(s){return '<a href="#variant-'+s.lab+'"'+(s.id===l?' aria-current="page"':'')+' aria-label="Option '+s.lab.toUpperCase()+'">'+s.lab.toUpperCase()+'</a>'}).join('');
  v.insertAdjacentHTML('afterbegin','<div class="w-strip"><div class="w-wrap w-strip__in"><a href="#home">← All options</a><span class="w-strip__name">'+(l?'Option '+v._lab.toUpperCase():'Page')+' · '+v.getAttribute('data-name')+' · wireframe</span><nav class="w-strip__sw" aria-label="Switch option">'+sw+'</nav></div></div>');
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

var lastHome='#variant-a';
d.addEventListener('click',function(ev){var x=ev.target.closest&&ev.target.closest('[data-set-tab]');if(!x)return;var p=x.getAttribute('data-set-tab').split(':');var btn=d.querySelector('[data-tabs="'+p[0]+'"] [data-tab="'+p[1]+'"]');if(btn)btn.click();if(location.hash===x.getAttribute('href'))window.scrollTo(0,0)});
/* shared contact form */
var modal=d.getElementById('contact-modal'),lastFocus=null;
function cfOpen(type){if(!modal)return;lastFocus=d.activeElement;modal.querySelector('[data-cf="form"]').hidden=false;modal.querySelector('[data-cf="done"]').hidden=true;var b=modal.querySelector('[data-tabs="cf"] [data-tab="'+type+'"]');if(b)b.click();modal.hidden=false;root.classList.add('modal-open');modal.querySelector('.modal__x').focus()}
function cfClose(){if(!modal||modal.hidden)return;modal.hidden=true;root.classList.remove('modal-open');if(lastFocus&&lastFocus.focus)lastFocus.focus()}
var CTA=[[/business development|talk to our team|book a call|talk to us early|issuer pack|due diligence pack/i,'issuer'],[/call the desk|call back|call \+61/i,'desk']];
d.addEventListener('click',function(ev){
  var t=ev.target;if(!t.closest)return;
  if(modal&&!modal.hidden){if(t===modal||t.closest('[data-close]')){cfClose();return}var s=t.closest('[data-send]');if(s){modal.querySelector('[data-cf-to]').textContent=s.getAttribute('data-send');modal.querySelector('[data-cf="form"]').hidden=true;modal.querySelector('[data-cf="done"]').hidden=false;modal.querySelector('.modal__panel').scrollTop=0}return}
  var dc=t.closest('[data-contact]');if(dc&&!dc.closest('.thumb-stage')){ev.preventDefault();cfOpen(dc.getAttribute('data-contact'));return}
  var el=t.closest('.wf .btn, .wf .lk');if(!el||el.getAttribute('href')||el.closest('.thumb-stage'))return;
  var txt=el.textContent;for(var i=0;i<CTA.length;i++){if(CTA[i][0].test(txt)){cfOpen(CTA[i][1]);return}}
});
d.addEventListener('keydown',function(ev){if(ev.key==='Escape')cfClose()});
d.addEventListener('click',function(ev){var b=ev.target.closest&&ev.target.closest('[data-tscroll]');if(!b)return;var tr=b.closest('.w-wrap').querySelector('[data-ttrack]');if(tr)tr.scrollBy({left:+b.getAttribute('data-tscroll')*(tr.clientWidth+24)/3*1,behavior:'smooth'})});
/* router: #home, #variant-a..d, or an anchor inside the proposal */
function route(){
  cfClose();
  var h=(location.hash||'').replace('#',''),m=!!routes[h],id=m?routes[h]:'view-home';
  var changed=false;
  views.forEach(function(v){var show=v.id===id;if(v.hidden===show)changed=true;v.hidden=!show});
  pill.hidden=!m;
  var cur=d.getElementById(id);d.title=!m?'Nine Mile Homepage Variants':cur.getAttribute('data-page')?'Nine Mile · '+cur.getAttribute('data-name')+' (wireframe)':'Nine Mile home · Option '+cur._lab.toUpperCase()+' (wireframe)';
  if(m&&cur.getAttribute('data-letter')){lastHome='#'+h;$('[data-home]').forEach(function(x){x.setAttribute('href',lastHome)})}
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
