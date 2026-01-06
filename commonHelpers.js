(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h=async(a,r,s)=>await(await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=Z85ENznHLZiiD4emV1glh7STR86oVhNw&keyword=${encodeURIComponent(a)}&countryCode=${r}&page=${s}`)).json(),n=document.querySelector(".hero__input"),g=document.querySelector(".cards__list"),c=document.querySelector(".hero__country");async function d(){var a;try{const r=await h((n==null?void 0:n.value)||"",(c==null?void 0:c.value)||"",0),s=((a=r==null?void 0:r._embedded)==null?void 0:a.events)||[];if(s.length===0){g.innerHTML='<p class="error-message">Нічого не знайдено за вашим запитом</p>';return}const i=s.map(e=>{var t,o,l,u,m,f,p;return`
            <li class="cards__item">
                <img src="${((o=(t=e.images)==null?void 0:t[0])==null?void 0:o.url)||"/img/placeholderimg.png"}" 
                     alt="${e.name}"
                     class="cards__img">
                <div class="cards__item-contentb">
                    <h1 class="cards__title">${e.name}</h1>
                    <h2 class="cards__subtitle">${((u=(l=e.dates)==null?void 0:l.start)==null?void 0:u.localDate)||""}</h2>
                    <p class="cards__text">
                        <svg class="cards__svg"><use href="/img/symbol-defs.svg#icon-arrow"></use></svg>
                        ${((p=(f=(m=e._embedded)==null?void 0:m.venues)==null?void 0:f[0])==null?void 0:p.name)||"Unknown Venue"}
                    </p>
                </div>
            </li>`}).join("");g.innerHTML=i}catch(r){console.log(r)}}d();n==null||n.addEventListener("change",d);c==null||c.addEventListener("change",d);
//# sourceMappingURL=commonHelpers.js.map
