(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const w=async(n,t,r)=>await(await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=Z85ENznHLZiiD4emV1glh7STR86oVhNw&keyword=${encodeURIComponent(n)}&countryCode=${t}&page=${r}`)).json(),a=document.querySelector(".hero__input"),P=document.querySelector(".cards__list"),l=document.querySelector(".hero__country"),f=document.querySelector(".cards__schedule");let c=0,i=1;async function m(n=0){var t,r,o;try{const e=await w((a==null?void 0:a.value)||"",(l==null?void 0:l.value)||"",n),s=((t=e==null?void 0:e._embedded)==null?void 0:t.events)||[];i=((r=e==null?void 0:e.page)==null?void 0:r.totalPages)>50?50:((o=e==null?void 0:e.page)==null?void 0:o.totalPages)||1,c=n;const d=s.map(u=>{var p,g,h,_,y,v,L;return`
        <li class="cards__item">
            <img src="${((g=(p=u.images)==null?void 0:p[0])==null?void 0:g.url)||"/img/placeholderimg.png"}" 
                 alt="${u.name}"
                 class="cards__img">
            <div class="cards__item-contentb">
                <h1 class="cards__title">${u.name}</h1>
                <h2 class="cards__subtitle">${((_=(h=u.dates)==null?void 0:h.start)==null?void 0:_.localDate)||""}</h2>
                <p class="cards__text">
                    <svg class="cards__svg"><use href="/img/symbol-defs.svg#icon-arrow"></use></svg>
                    ${((L=(v=(y=u._embedded)==null?void 0:y.venues)==null?void 0:v[0])==null?void 0:L.name)||"Unknown Venue"}
                </p>
            </div>
        </li>`}).join("");P.innerHTML=d,$()}catch(e){console.error("Помилка:",e),P.innerHTML="<p>Помилка завантаження даних.</p>",f.innerHTML=""}}function $(){if(f.innerHTML="",i<=1)return;let n,t;i<=5?(n=0,t=i):c<=2?(n=0,t=5):c+2>=i?(n=i-5,t=i):(n=c-2,t=c+3);for(let r=n;r<t;r+=1){const o=document.createElement("li");o.className=`cards__schedule-item ${r===c?"active-page":""}`,o.innerHTML=`<p class="cards__schedule-text">${r+1}</p>`,o.addEventListener("click",()=>{r!==c&&(window.scrollTo({top:0,behavior:"smooth"}),m(r))}),f.appendChild(o)}}m(0);a==null||a.addEventListener("change",()=>m(0));l==null||l.addEventListener("change",()=>m(0));
//# sourceMappingURL=commonHelpers.js.map
