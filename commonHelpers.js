(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const H=async(n,r,s)=>await(await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=Z85ENznHLZiiD4emV1glh7STR86oVhNw&keyword=${encodeURIComponent(n)}&countryCode=${r}&page=${s}`)).json(),u=document.querySelector(".hero__input"),T=document.querySelector(".cards__list"),m=document.querySelector(".hero__country"),b=document.querySelector(".cards__schedule");let d=0,l=1,C=[];async function S(n=0){var r,s,t;try{const e=await H((u==null?void 0:u.value)||"",(m==null?void 0:m.value)||"",n),o=((r=e==null?void 0:e._embedded)==null?void 0:r.events)||[];l=((s=e==null?void 0:e.page)==null?void 0:s.totalPages)>50?50:((t=e==null?void 0:e.page)==null?void 0:t.totalPages)||1,d=n,C=o;const i=o.map(a=>{var g,f,p,_,y,v,h;return`
        <li class="cards__item" data-id="${a.id}">
            <img src="${((f=(g=a.images)==null?void 0:g[0])==null?void 0:f.url)||"/img/placeholderimg.png"}" 
                 alt="${a.name}"
                 class="cards__img">
            <div class="cards__item-contentb">
                <h1 class="cards__title">${a.name}</h1>
                <h2 class="cards__subtitle">${((_=(p=a.dates)==null?void 0:p.start)==null?void 0:_.localDate)||""}</h2>
                <p class="cards__text">
                    <svg class="cards__svg"><use href="/img/symbol-defs.svg#icon-arrow"></use></svg>
                    ${((h=(v=(y=a._embedded)==null?void 0:y.venues)==null?void 0:v[0])==null?void 0:h.name)||"Unknown Venue"}
                </p>
            </div>
        </li>`}).join("");T.innerHTML=i,N()}catch(e){console.error("Error:",e),T.innerHTML="<p>Error</p>",b.innerHTML=""}}function N(){if(b.innerHTML="",l<=1)return;let n,r;l<=5?(n=0,r=l):d<=2?(n=0,r=5):d+2>=l?(n=l-5,r=l):(n=d-2,r=d+3);for(let s=n;s<r;s+=1){const t=document.createElement("li");t.className=`cards__schedule-item ${s===d?"active-page":""}`,t.innerHTML=`<p class="cards__schedule-text">${s+1}</p>`,t.addEventListener("click",()=>{s!==d&&(window.scrollTo({top:0,behavior:"smooth"}),S(s))}),b.appendChild(t)}}S(0);u==null||u.addEventListener("change",()=>S(0));m==null||m.addEventListener("change",()=>S(0));const q=document.querySelector(".backdrop"),$=document.querySelector(".modal__close"),x=document.querySelector(".cards__list"),M=document.querySelector(".modal__img"),D=document.querySelector(".modal__image"),E=document.querySelector(".title"),I=document.querySelector(".date"),O=document.querySelector(".venue"),V=document.querySelector(".description"),U=document.querySelector(".pstandart"),j=document.querySelector(".pvip");function k(){q.classList.toggle("is__hidden"),document.body.classList.toggle("no-scroll")}function R(n){var g,f,p,_,y,v,h,P,w;const r=n.target.closest(".cards__item");if(!r)return;const s=r.dataset.id,t=C.find(c=>c.id===s);if(!t)return;M.src=((f=(g=t.images)==null?void 0:g[0])==null?void 0:f.url)||"/img/placeholderimg.png",D.src=((_=(p=t.images)==null?void 0:p[0])==null?void 0:_.url)||"/img/placeholderimg.png",E.textContent=t.name,I.textContent=((v=(y=t.dates)==null?void 0:y.start)==null?void 0:v.localDate)||"Unknown date",O.textContent=((w=(P=(h=t._embedded)==null?void 0:h.venues)==null?void 0:P[0])==null?void 0:w.name)||"Unknown venue",V.textContent=t.info||t.pleaseNote||"No additional information";const e=t.priceRanges||[],o=e.find(c=>{var L;return((L=c.type)==null?void 0:L.toLowerCase())==="standard"}),i=e.find(c=>{var L;return((L=c.type)==null?void 0:L.toLowerCase())==="vip"});function a(c){return c?c.min===c.max?`${c.min} ${c.currency}`:`${c.min}–${c.max} ${c.currency}`:"Not available"}U.innerHTML=`
    <svg class="modal__svg">
      <use href="./img/symbol-defs.svg#icon-ticket"></use>
    </svg>
    Standart ${a(o)}
  `,j.innerHTML=`
    <svg class="modal__svg">
      <use href="./img/symbol-defs.svg#icon-ticket"></use>
    </svg>
    VIP ${a(i)}
  `}x.addEventListener("click",n=>{n.target.closest(".cards__item")&&(R(n),k())});$==null||$.addEventListener("click",k);q.addEventListener("click",n=>{n.target===q&&k()});
//# sourceMappingURL=commonHelpers.js.map
