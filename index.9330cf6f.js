function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire7d90;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire7d90=a),a.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));const i={};let s=[],c=[];var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,t){u.default(e,t),t.add(e)};var l,u=(l=a("7K24o"))&&l.__esModule?l:{default:l};document.querySelector(".card-section");function h(e){e.map((e=>{i.cardsBox.innerHTML+=`\n        <li class="card ${e.wachedOrQueueClass}">\n          <a href="" class="card-link" movie-id="${e.id}">\n            <div class="card-button-slider">\n              <img\n                src="${e.posterPath}"\n                class="card-image"\n                alt=""\n              />\n              <div class="card-button-background">\n                <button class="card-button in-watched">watched</button>\n                <button class="card-button in-queue">queue</button>\n              </div>\n            </div>\n            <div class="card-label-wrapper">\n              <div class="card-label-in-watched"></div>\n              <div class="card-label-in-queue"></div>\n            </div>\n            <div class="card-body">\n              <p class="card-title"><b>${e.title}</b></p>\n              <p class="card-genres"><b>${e.genresInRow} | ${e.releaseDate}</b></p>\n            </div>\n          </a>\n        </li>`}))}var m;m=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"},{"id":1982,"name":"Dummy"}]}');var g=new WeakSet,p=new WeakSet;class f{getTrending(t=1,n=!1){const r={resource:"trending",mediaType:"movie",timeWindow:n?"day":"week",get split(){return`${this.resource}/${this.mediaType}/${this.timeWindow}`}},a=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97",page:t});return e(o)(this,g,y).call(this,r.split,a)}searchMovie(t,n=1){const r={resource:"search",mediaType:"movie",get split(){return`${this.resource}/${this.mediaType}`}},a=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97",page:n,query:t});return e(o)(this,g,y).call(this,r.split,a)}getMovie(t){const n={resource:"movie",id:t,get split(){return`${this.resource}/${this.id}`}},r=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97"});return e(o)(this,g,y).call(this,n.split,r)}getGenres(){return this.genres}constructor(){if(e(d)(this,g),e(d)(this,p),f._instance)return f._instance;f._instance=this,this.searchQuery="",this.genres=m.genres,e(o)(this,p,v).call(this)}}function y(e,t){return fetch(`https://api.themoviedb.org/3/${e}?${t}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}function v(){const t={resource:"genre",mediaType:"movie",list:"list",get split(){return`${this.resource}/${this.mediaType}/${this.list}`}},n=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97"});e(o)(this,g,y).call(this,t.split,n).then((e=>{this.genres=e.genres,console.log("loadGenres complete")}))}var b=new WeakSet,w=new WeakSet,k=new WeakSet,W=new WeakSet,L=new WeakSet;class S{get genresInRow(){return e(o)(this,b,T).call(this,2)}get wachedOrQueueClass(){return this.inWached?"in-watched":this.inQueue?"in-queue":""}constructor(t){e(d)(this,b),e(d)(this,w),e(d)(this,k),e(d)(this,W),e(d)(this,L),this.id=t.id,this.posterPath=e(o)(this,L,E).call(this,t.poster_path),this.title=t.original_title,this.genres=t.genre_ids,this.releaseDate=t.release_date.substr(0,4),this.inWached=e(o)(this,w,_).call(this),this.inQueue=e(o)(this,k,q).call(this)}}function T(t=0){const n=e(o)(this,W,$).call(this),r=[];for(let e=0;e<this.genres.length;e++){if(t&&e===t&&e<this.genres.length-1){r.push("others");break}const a=n.find((t=>t.id===this.genres[e]));a&&r.push(a.name)}return r.join(", ")}function _(){return!!s.find((e=>e===this.id))}function q(){return!!c.find((e=>e===this.id))}function $(){return M.getGenres()}function E(e){return`http://image.tmdb.org/t/p/w500${e}`}const M=new f;function O(e){e.preventDefault(),i.header.classList.remove("header-library"),i.header.classList.add("header-search")}function Q(e){e.preventDefault(),i.header.classList.remove("header-search"),i.header.classList.add("header-library"),B()}function B(){i.libraryWatchBtn.classList.remove("accent-btn"),i.libraryWatchBtn.classList.add("accent-btn"),i.libraryQueBtn.classList.remove("accent-btn")}function x(){i.libraryQueBtn.classList.remove("accent-btn"),i.libraryQueBtn.classList.add("accent-btn"),i.libraryWatchBtn.classList.remove("accent-btn")}function D(){window.addEventListener("keydown",F),document.body.classList.add("modal-open")}function j(){window.removeEventListener("keydown",F),document.body.classList.remove("modal-open")}function F(e){"Escape"===e.code&&j()}function P(e){e.currentTarget===e.target&&j()}var R=new WeakSet,C=new WeakSet;class A{getWatched(){try{const e=localStorage.getItem("watched");return null===e?[]:JSON.parse(e)}catch(e){console.error("Get state error: ",e)}return[]}getQueue(){try{const e=localStorage.getItem("queue");return null===e?[]:JSON.parse(e)}catch(e){console.error("Get state error: ",e)}return[]}addToWatched(t){const n=this.getWatched();n.includes(t)||(n.push(t),e(o)(this,R,N).call(this,n))}removeFromWatched(t){const n=this.getWatched(),r=n.indexOf(t);r<0||(n.splice(r,1),e(o)(this,R,N).call(this,n))}addToQueue(t){const n=this.getQueue();n.includes(t)||(n.push(t),e(o)(this,C,I).call(this,n))}removeFromQueue(t){const n=this.getQueue(),r=n.indexOf(t);r<0||(n.splice(r,1),e(o)(this,C,I).call(this,n))}constructor(){if(e(d)(this,R),e(d)(this,C),A._instance)return A._instance;A._instance=this}}function N(e){try{localStorage.setItem("watched",JSON.stringify(e))}catch(e){console.error(e)}}function I(e){try{localStorage.setItem("queue",JSON.stringify(e))}catch(e){console.error(e)}}document.addEventListener("DOMContentLoaded",(function(){i.cardsBox=document.querySelector(".cards-box"),i.header=document.querySelector(".header"),i.homeLink=document.querySelector("#home"),i.libraryLink=document.querySelector("#library"),i.logo=document.querySelector("#logo"),i.libraryWatchBtn=document.querySelector("#lib-w"),i.libraryQueBtn=document.querySelector("#lib-q"),i.ourTeamLink=document.querySelector("#our-team"),i.closeModalBtn=document.querySelector('[data-action="close-modal"]'),i.backdrop=document.querySelector(".js-backdrop"),i.movieModal=document.querySelector(".modal");try{i.logo.addEventListener("click",O),i.homeLink.addEventListener("click",O),i.libraryLink.addEventListener("click",Q),i.libraryWatchBtn.addEventListener("click",B),i.libraryQueBtn.addEventListener("click",x),i.ourTeamLink.addEventListener("click",D),i.closeModalBtn.addEventListener("click",j),i.backdrop.addEventListener("click",P)}catch(e){console.log(e)}var e;e||M.getTrending().then((e=>(console.log(`Current page: ${e.page}, total page: ${e.total_pages}`),e.results))).then((e=>{objectsArray=[],e.map((e=>{const t=new S(e);objectsArray.push(t)})),h(objectsArray),(i.cardLinks=document.querySelectorAll(".card-link")).forEach((e=>{e.addEventListener("click",(()=>{event.preventDefault(),console.log(e)}))}))})).catch((e=>console.log(e)))}));const U=new A,G=U.getWatched();console.log(G),U.addToWatched(51),console.log(U.getWatched()),U.addToWatched(13),U.addToWatched(51),U.addToWatched(27),console.log(U.getWatched()),U.removeFromWatched(15),U.removeFromWatched(13),U.addToWatched(18),U.addToWatched(26),U.removeFromWatched(26),U.addToWatched(33),console.log(U.getWatched());
//# sourceMappingURL=index.9330cf6f.js.map
