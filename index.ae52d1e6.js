function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=t.parcelRequire7d90;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequire7d90=s),s.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));const r={};var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){l.default(e,t),t.add(e)};var c,l=(c=s("7K24o"))&&c.__esModule?c:{default:c};const d=document.querySelector(".movie-modal"),u=document.querySelector(".backdrop");function h(e){"BUTTON"!==e.target.nodeName&&(d.classList.remove("open"),d.classList.add("is-hidden"),document.body.classList.remove("modal-open"))}document.querySelector(".card-section");function p(){r.cardsBox.innerHTML=""}function m(e){let t="";e.map((e=>{t+=`\n        <li class="card ${e.watchedOrQueueClass}">\n          <a href="" class="card-link card-button-slider" data-id="${e.id}">\n              <img\n                src="${e.posterPath}"\n                class="card-image"\n                alt=""\n              />\n              <div class="card-button-background">\n                <button class="card-button in-watched">watched</button>\n                <button class="card-button in-queue">queue</button>\n              </div>\n            \n              </a>\n              <div class="card-label-wrapper">\n                <div class="card-label-in-watched"></div>\n                <div class="card-label-in-queue"></div>\n              </div>\n            <div class="card-body">\n              <p class="card-title"><b>${e.title}</b></p>\n              <p class="card-genres"><b>${e.genresInRow(3)} | ${e.releaseDate}</b></p>\n        </li>`})),function(e){r.cardsBox.innerHTML+=e}(t)}function v(e){let t=`\n      <div class="movie-picture-box">\n        <img\n          src="${e.posterPath}"\n          alt="movie-picture"\n          class="movie-picture"\n        />\n      </div>\n      <div class="info-container">\n        <h1 class="movie-title">${e.title}</h1>\n        <ul class="movie-list">\n          <li class="movie-item">\n              <p class="movie-description">Vote / Votes</p>\n              <div class="vote-box property">\n              <p class="property-vote property-accent" id="vote">${e.voteAverage}</p>\n              <span class="vote-slash">/</span>\n              <p class="property-vote property-vote-alt" id="votes">${e.voteCount}</p>\n            </div>\n          </li>\n          <li class="movie-item">\n              <p class="movie-description">Popularity</p>\n              <p class="property" id="popularity">${e.popularity}</p>\n          </li>\n          <li class="movie-item">\n              <p class="movie-description">Original Title</p>\n              <p class="property" id="title">${e.title}</p>\n          </li>\n          <li class="movie-item">\n              <p class="movie-description">Genre</p>\n              <p class="property" id="genre">${e.genresInRow()}</p>\n          </li>\n        </ul>\n        <article class="article">\n          <p class="article-caption">About</p>\n          <p class="article-text">\n            ${e.overview}\n          </p>\n        </article>\n        <div class="button-box">\n          <button class="movie-button watched-btn"></button>\n          <button class="movie-button queue-btn"></button>\n        </div>\n      </div>`;var n;n=t,document.querySelector(".modal-content").innerHTML=n,d.classList.remove("is-hidden"),d.classList.add("open"),document.body.classList.add("modal-open")}var g;g=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"},{"id":1982,"name":"Dummy"}]}');var y=new WeakSet,f=new WeakSet;class b{getTrending(t=1,n=!1){const i={resource:"trending",mediaType:"movie",timeWindow:n?"day":"week",get split(){return`${this.resource}/${this.mediaType}/${this.timeWindow}`}},s=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97",page:t});return e(a)(this,y,w).call(this,i.split,s)}searchMovie(t,n=1){const i={resource:"search",mediaType:"movie",get split(){return`${this.resource}/${this.mediaType}`}},s=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97",page:n,query:t});return e(a)(this,y,w).call(this,i.split,s)}getMovie(t){const n={resource:"movie",id:t,get split(){return`${this.resource}/${this.id}`}},i=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97"});return e(a)(this,y,w).call(this,n.split,i)}getGenres(){return this.genres}constructor(){if(e(o)(this,y),e(o)(this,f),b._instance)return b._instance;b._instance=this,this.searchQuery="",this.genres=g.genres,e(a)(this,f,L).call(this)}}function w(e,t){return fetch(`https://api.themoviedb.org/3/${e}?${t}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}function L(){const t={resource:"genre",mediaType:"movie",list:"list",get split(){return`${this.resource}/${this.mediaType}/${this.list}`}},n=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97"});e(a)(this,y,w).call(this,t.split,n).then((e=>{this.genres=e.genres,console.log("loadGenres complete")}))}var k=new WeakSet,S=new WeakSet;class q{getWatched(){try{const e=localStorage.getItem("watched");return null===e?[]:JSON.parse(e)}catch(e){console.error("Get state error: ",e)}return[]}getQueue(){try{const e=localStorage.getItem("queue");return null===e?[]:JSON.parse(e)}catch(e){console.error("Get state error: ",e)}return[]}addToWatched(t){const n=this.getWatched();n.includes(t)||(n.push(t),e(a)(this,k,T).call(this,n))}removeFromWatched(t){const n=this.getWatched(),i=n.indexOf(t);i<0||(n.splice(i,1),e(a)(this,k,T).call(this,n))}addToQueue(t){const n=this.getQueue();n.includes(t)||(n.push(t),e(a)(this,S,W).call(this,n))}removeFromQueue(t){const n=this.getQueue(),i=n.indexOf(t);i<0||(n.splice(i,1),e(a)(this,S,W).call(this,n))}constructor(){if(e(o)(this,k),e(o)(this,S),q._instance)return q._instance;q._instance=this}}function T(e){try{localStorage.setItem("watched",JSON.stringify(e))}catch(e){console.error(e)}}function W(e){try{localStorage.setItem("queue",JSON.stringify(e))}catch(e){console.error(e)}}const $=new q;var _=new WeakSet,M=new WeakSet,x=new WeakSet,E=new WeakSet,Q=new WeakSet;class O{genresInRow(t=0){return e(a)(this,_,B).call(this,t)}get watchedOrQueueClass(){return this.inWatched?"in-watched":this.inQueue?"in-queue":""}constructor(t){e(o)(this,_),e(o)(this,M),e(o)(this,x),e(o)(this,E),e(o)(this,Q),this.id=t.id,this.posterPath=e(a)(this,Q,P).call(this,t.poster_path),this.title=t.title,this.originalTitle=t.original_title,this.popularity=t.popularity,this.genres=t.genre_ids,this.releaseDate=t.release_date.substr(0,4),this.inWatched=e(a)(this,M,N).call(this),this.inQueue=e(a)(this,x,D).call(this),this.voteAverage=t.vote_average,this.voteCount=t.vote_count,this.popularity=t.popularity,this.overview=t.overview,this.video=null,this.genres||(this.genres=[],t.genres.map((e=>{this.genres.push(e.id)})))}}function B(t=0){const n=e(a)(this,E,F).call(this),i=[];for(let e=0;e<this.genres.length;e++){if(t&&e===t&&e<this.genres.length-1){i.push("others");break}const s=n.find((t=>t.id===this.genres[e]));s&&i.push(s.name)}return i.join(", ")}function N(){return!!$.getWatched().find((e=>e===this.id))}function D(){return!!$.getQueue().find((e=>e===this.id))}function F(){return C.getGenres()}function P(e){return`http://image.tmdb.org/t/p/w500${e}`}const C=new b;function I(e){e||C.getTrending().then((e=>(console.log(`Current page: ${e.page}, total page: ${e.total_pages}`),e.results))).then((e=>{const t=[];e.map((e=>{const n=new O(e);t.push(n)})),m(t)})).catch((e=>console.log(e)))}function R(e){let t=[];e.forEach((e=>{t.push(C.getMovie(e).then((e=>{e.genres=e.genres.map((e=>e.id));return new O(e)})).catch((e=>console.log(e))))})),Promise.all(t).then((e=>{m(e)}))}function U(e,t=1){e&&C.searchMovie(e,t).then((e=>(console.log(`Current page: ${e.page}, total page: ${e.total_pages}`),e.results))).then((e=>{const t=[];e.map((e=>{const n=new O(e);t.push(n)})),m(t)})).catch((e=>console.log(e)))}r.loader=document.querySelector(".lds-ripple");const j=new q;function A(e,t){const n=e.closest(".card");if(n.classList.contains("in-queue"))return j.removeFromQueue(t),void n.classList.remove("in-queue");n.classList.contains("in-watched")&&(j.removeFromWatched(t),n.classList.remove("in-watched")),n.classList.add("in-queue"),j.addToQueue(t)}function G(e,t){const n=e.closest(".card");if(n.classList.contains("in-watched"))return j.removeFromWatched(t),void n.classList.remove("in-watched");n.classList.contains("in-queue")&&(j.removeFromQueue(t),n.classList.remove("in-queue")),n.classList.add("in-watched"),j.addToWatched(t)}const H=new q;let J=[];const V=new IntersectionObserver((function(){if(console.log("i'm scrolling to the infinity"),J.length>6){return void R(J.splice(0,6))}V.unobserve(r.observeTarget),R(J)}),{rootMargin:"0px 0px 200px 0px"});function K(e){e.preventDefault(),r.header.classList.remove("header-library"),r.header.classList.add("header-search"),r.searchInput.value="",p(),I()}function z(e){e.preventDefault(),r.header.classList.remove("header-search"),r.header.classList.add("header-library"),X()}function X(){r.libraryWatchBtn.classList.remove("accent-btn"),r.libraryWatchBtn.classList.add("accent-btn"),r.libraryQueBtn.classList.remove("accent-btn"),p(),J=H.getWatched(),V.observe(r.observeTarget)}function Y(){r.libraryQueBtn.classList.remove("accent-btn"),r.libraryQueBtn.classList.add("accent-btn"),r.libraryWatchBtn.classList.remove("accent-btn"),p(),J=H.getQueue(),V.observe(r.observeTarget)}function Z(){window.addEventListener("keydown",te),document.body.classList.add("modal-open")}function ee(){window.removeEventListener("keydown",te),document.body.classList.remove("modal-open")}function te(e){"Escape"===e.code&&ee()}function ne(e){e.currentTarget===e.target&&ee()}function ie(e){e.preventDefault();const t=e.target.elements.query.value;r.cardsBox.innerHTML="",p(),U(t)}function se(e){e.preventDefault();let t=!1;e.path.map((e=>{if("BUTTON"===e.nodeName){const n=e.closest(".card-link").dataset.id,i=Number(n);e.classList.contains("in-queue")?A(e,i):e.classList.contains("in-watched")&&G(e,i),t=!0}if("A"===e.nodeName&&!t){const t=e.dataset.id;Number(t);(n=t)&&(C.getMovie(n).then((e=>{v(new O(e))})),r.movieModal.classList.remove("is-hidden"))}var n}))}document.addEventListener("DOMContentLoaded",(function(){d.addEventListener("click",h),u.addEventListener("click",h),r.cardsBox=document.querySelector(".cards-box"),r.header=document.querySelector(".header"),r.homeLink=document.querySelector("#home"),r.libraryLink=document.querySelector("#library"),r.logo=document.querySelector("#logo"),r.libraryWatchBtn=document.querySelector("#lib-w"),r.libraryQueBtn=document.querySelector("#lib-q"),r.ourTeamLink=document.querySelector("#our-team"),r.closeModalBtn=document.querySelector('[data-action="close-modal"]'),r.backdrop=document.querySelector(".js-backdrop"),r.movieModal=document.querySelector(".movie-modal"),r.searchForm=document.querySelector("#movie-search"),r.observeTarget=document.querySelector(".sentinel"),r.searchInput=document.querySelector(".search-input");try{r.logo.addEventListener("click",K),r.homeLink.addEventListener("click",K),r.libraryLink.addEventListener("click",z),r.libraryWatchBtn.addEventListener("click",X),r.libraryQueBtn.addEventListener("click",Y),r.ourTeamLink.addEventListener("click",Z),r.closeModalBtn.addEventListener("click",ee),r.backdrop.addEventListener("click",ne),r.searchForm.addEventListener("submit",ie),r.cardsBox.addEventListener("click",se)}catch(e){console.log(e)}I(),H.getQueue(),H.getWatched()}));new q;
//# sourceMappingURL=index.ae52d1e6.js.map
