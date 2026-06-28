import{a as u,S as d,i as c}from"./assets/vendor-CFFvTae-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();u.defaults.baseURL="https://pixabay.com/api/";const f="26535916-1f26af17a56090e5344028601";function m(s){return u.get("",{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const p=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const o=s.map(r=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
            <img
              class="gallery-image"
              src="${r.webformatURL}"
              alt="${r.tags}"
            />
          </a>

          <div class="info">
            <p>Likes <br>${r.likes}</p>
            <p>Views <br>${r.views}</p>
            <p>Comments <br>${r.comments}</p>
            <p>Downloads <br>${r.downloads}</p>
          </div>
        </li>
      `).join("");a.gallery.insertAdjacentHTML("beforeend",o),p.refresh()}function g(){a.gallery.innerHTML=""}function h(){a.loader.classList.remove("is-hidden")}function l(){a.loader.classList.add("is-hidden")}const a={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),form:document.querySelector(".form")};a.form.addEventListener("submit",L);function L(s){s.preventDefault();const o=a.form.elements["search-text"].value.trim();o&&(g(),h(),m(o).then(r=>{const n=r.hits;if(n.length===0){l(),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(n),l()}).catch(r=>{l(),c.error({message:"Something went wrong. Please try again later."})}))}
//# sourceMappingURL=index.js.map
