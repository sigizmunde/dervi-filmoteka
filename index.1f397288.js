function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequire7d90;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequire7d90=r),r.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));const a={};let s=[],c=[];var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){u.default(e,t),t.add(e)};var l,u=(l=r("7K24o"))&&l.__esModule?l:{default:l};document.querySelector(".card-section");function h(e){a.cardsBox.innerHTML+=`\n        <li class="card ${e.wachedOrQueueClass}">\n          <a href="" class="card-link" movie-id="${e.id}">\n            <div class="card-button-slider">\n              <img\n                src="${e.posterPath}"\n                class="card-image"\n                alt=""\n              />\n              <div class="card-button-background">\n                <button class="card-button in-watched">watched</button>\n                <button class="card-button in-queue">queue</button>\n              </div>\n            </div>\n            <div class="card-label-wrapper">\n              <div class="card-label-in-watched"></div>\n              <div class="card-label-in-queue"></div>\n            </div>\n            <div class="card-body">\n              <p class="card-title"><b>${e.title}</b></p>\n              <p class="card-genres"><b>${e.genresInRow} | ${e.releaseDate}</b></p>\n            </div>\n          </a>\n        </li>`}var m;m=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"},{"id":1982,"name":"Dummy"}]}');var p=new WeakSet,f=new WeakSet;class b{getTrending(t=1,n=!1){const i={resource:"trending",mediaType:"movie",timeWindow:n?"day":"week",get split(){return`${this.resource}/${this.mediaType}/${this.timeWindow}`}},r=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97",page:t});return e(d)(this,p,g).call(this,i.split,r)}searchMovie(t,n=1){const i={resource:"search",mediaType:"movie",get split(){return`${this.resource}/${this.mediaType}`}},r=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97",page:n,query:t});return e(d)(this,p,g).call(this,i.split,r)}getMovie(t){const n={resource:"movie",id:t,get split(){return`${this.resource}/${this.id}`}},i=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97"});return e(d)(this,p,g).call(this,n.split,i)}getGenres(){return this.genres}constructor(){if(e(o)(this,p),e(o)(this,f),b._instance)return b._instance;b._instance=this,this.searchQuery="",this.genres=m.genres,e(d)(this,f,y).call(this)}}function g(e,t){return fetch(`https://api.themoviedb.org/3/${e}?${t}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}function y(){const t={resource:"genre",mediaType:"movie",list:"list",get split(){return`${this.resource}/${this.mediaType}/${this.list}`}},n=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97"});e(d)(this,p,g).call(this,t.split,n).then((e=>{this.genres=e.genres,console.log("loadGenres complete")}))}var v=new WeakSet,w=new WeakSet,L=new WeakSet,k=new WeakSet,_=new WeakSet;class S{get genresInRow(){return e(d)(this,v,$).call(this,2)}get wachedOrQueueClass(){return this.inWached?"in-watched":this.inQueue?"in-queue":""}constructor(t){e(o)(this,v),e(o)(this,w),e(o)(this,L),e(o)(this,k),e(o)(this,_),this.id=t.id,this.posterPath=e(d)(this,_,M).call(this,t.poster_path),this.title=t.original_title,this.genres=t.genre_ids,this.releaseDate=t.release_date.substr(0,4),this.inWached=e(d)(this,w,W).call(this),this.inQueue=e(d)(this,L,q).call(this)}}function $(t=0){const n=e(d)(this,k,T).call(this),i=[];for(let e=0;e<this.genres.length;e++){if(t&&e===t&&e<this.genres.length-1){i.push("others");break}const r=n.find((t=>t.id===this.genres[e]));r&&i.push(r.name)}return i.join(", ")}function W(){return!!s.find((e=>e===this.id))}function q(){return!!c.find((e=>e===this.id))}function T(){return B.getGenres()}function M(e){return`http://image.tmdb.org/t/p/w500${e}`}const B=new b;function E(e){e||B.getTrending().then((e=>(console.log(`Current page: ${e.page}, total page: ${e.total_pages}`),e.results))).then((e=>{e.map((e=>{h(new S(e))}))})).catch((e=>console.log(e)))}function x(e){e.preventDefault(),a.header.classList.remove("header-library"),a.header.classList.add("header-search")}function D(e){e.preventDefault(),a.header.classList.remove("header-search"),a.header.classList.add("header-library"),O()}function O(){a.libraryWatchBtn.classList.remove("accent-btn"),a.libraryWatchBtn.classList.add("accent-btn"),a.libraryQueBtn.classList.remove("accent-btn")}function Q(){a.libraryQueBtn.classList.remove("accent-btn"),a.libraryQueBtn.classList.add("accent-btn"),a.libraryWatchBtn.classList.remove("accent-btn")}document.addEventListener("DOMContentLoaded",(function(){a.cardsBox=document.querySelector(".cards-box"),a.header=document.querySelector(".header"),a.homeLink=document.querySelector("#home"),a.libraryLink=document.querySelector("#library"),a.logo=document.querySelector("#logo"),a.libraryWatchBtn=document.querySelector("#lib-w"),a.libraryQueBtn=document.querySelector("#lib-q"),a.logo.addEventListener("click",x),a.homeLink.addEventListener("click",x),a.libraryLink.addEventListener("click",D),a.libraryWatchBtn.addEventListener("click",O),a.libraryQueBtn.addEventListener("click",Q),E()}));
//# sourceMappingURL=index.1f397288.js.map
