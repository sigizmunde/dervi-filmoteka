function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},i=t.parcelRequire7d90;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},t.parcelRequire7d90=i),i.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));const r={};var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){l.default(e,t),t.add(e)};var c,l=(c=i("7K24o"))&&c.__esModule?c:{default:c};const d=document.querySelector(".movie-modal"),u=document.querySelector(".backdrop");function h(e){"BUTTON"!==e.target.nodeName&&(d.classList.remove("open"),d.classList.add("is-hidden"),document.body.classList.remove("modal-open"))}document.querySelector(".card-section");function p(){r.cardsBox.innerHTML=""}function m(e){let t="";e.map((e=>{t+=`\n        <li class="card ${e.watchedOrQueueClass}">\n          <a href="" class="card-link card-button-slider" data-id="${e.id}">\n              <img\n                src="${e.posterPath}"\n                class="card-image"\n                alt=""\n              />\n              <div class="card-button-background">\n                <button class="card-button in-watched">watched</button>\n                <button class="card-button in-queue">queue</button>\n              </div>\n            \n              </a>\n              <div class="card-label-wrapper">\n                <div class="card-label-in-watched"></div>\n                <div class="card-label-in-queue"></div>\n              </div>\n            <div class="card-body">\n              <p class="card-title"><b>${e.title}</b></p>\n              <p class="card-genres"><b>${e.genresInRow(3)} | ${e.releaseDate}</b></p>\n        </li>`})),function(e){r.cardsBox.innerHTML+=e}(t)}function v(e){let t=`\n      <div class="movie-picture-box">\n        <img\n          src="${e.posterPath}"\n          alt="movie-picture"\n          class="movie-picture"\n        />\n      </div>\n      <div class="info-container">\n        <h1 class="movie-title">${e.title}</h1>\n        <ul class="movie-list">\n          <li class="movie-item">\n              <p class="movie-description">Vote / Votes</p>\n              <div class="vote-box property">\n              <p class="property-vote property-accent" id="vote">${e.voteAverage}</p>\n              <span class="vote-slash">/</span>\n              <p class="property-vote property-vote-alt" id="votes">${e.voteCount}</p>\n            </div>\n          </li>\n          <li class="movie-item">\n              <p class="movie-description">Popularity</p>\n              <p class="property" id="popularity">${e.popularity}</p>\n          </li>\n          <li class="movie-item">\n              <p class="movie-description">Original Title</p>\n              <p class="property" id="title">${e.title}</p>\n          </li>\n          <li class="movie-item">\n              <p class="movie-description">Genre</p>\n              <p class="property" id="genre">${e.genresInRow()}</p>\n          </li>\n        </ul>\n        <article class="article">\n          <p class="article-caption">About</p>\n          <p class="article-text">\n            ${e.overview}\n          </p>\n        </article>\n        <div class="button-box">\n          <button class="movie-button watched-btn"></button>\n          <button class="movie-button queue-btn"></button>\n        </div>\n      </div>`;var n;n=t,document.querySelector(".modal-content").innerHTML=n,d.classList.remove("is-hidden"),d.classList.add("open"),document.body.classList.add("modal-open")}var g;g=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"},{"id":1982,"name":"Dummy"}]}');var y=new WeakSet,b=new WeakSet;class f{getTrending(t=1,n=!1){const s={resource:"trending",mediaType:"movie",timeWindow:n?"day":"week",get split(){return`${this.resource}/${this.mediaType}/${this.timeWindow}`}},i=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97",page:t});return this.RepeatLastSearch=(e=1)=>this.getTrending(e,n),e(o)(this,y,L).call(this,s.split,i)}searchMovie(t,n=1){const s={resource:"search",mediaType:"movie",get split(){return`${this.resource}/${this.mediaType}`}},i=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97",page:n,query:t});return this.RepeatLastSearch=(e=1)=>this.searchMovie(t,e),e(o)(this,y,L).call(this,s.split,i)}getMovie(t){const n={resource:"movie",id:t,get split(){return`${this.resource}/${this.id}`}},s=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97"});return e(o)(this,y,L).call(this,n.split,s)}getGenres(){return this.genres}constructor(){if(e(a)(this,y),e(a)(this,b),f._instance)return f._instance;f._instance=this,this.searchQuery="",this.genres=g.genres,this.repeatLastSearch=null,e(o)(this,b,w).call(this)}}function L(e,t){return fetch(`https://api.themoviedb.org/3/${e}?${t}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}function w(){const t={resource:"genre",mediaType:"movie",list:"list",get split(){return`${this.resource}/${this.mediaType}/${this.list}`}},n=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97"});e(o)(this,y,L).call(this,t.split,n).then((e=>{this.genres=e.genres,console.log("loadGenres complete")}))}var S=new WeakSet,T=new WeakSet;class k{getWatched(){try{const e=localStorage.getItem("watched");return null===e?[]:JSON.parse(e)}catch(e){console.error("Get state error: ",e)}return[]}getQueue(){try{const e=localStorage.getItem("queue");return null===e?[]:JSON.parse(e)}catch(e){console.error("Get state error: ",e)}return[]}addToWatched(t){const n=this.getWatched();n.includes(t)||(n.unshift(t),e(o)(this,S,q).call(this,n))}removeFromWatched(t){const n=this.getWatched(),s=n.indexOf(t);s<0||(n.splice(s,1),e(o)(this,S,q).call(this,n))}addToQueue(t){const n=this.getQueue();n.includes(t)||(n.unshift(t),e(o)(this,T,W).call(this,n))}removeFromQueue(t){const n=this.getQueue(),s=n.indexOf(t);s<0||(n.splice(s,1),e(o)(this,T,W).call(this,n))}constructor(){if(e(a)(this,S),e(a)(this,T),k._instance)return k._instance;k._instance=this}}function q(e){try{localStorage.setItem("watched",JSON.stringify(e))}catch(e){console.error(e)}}function W(e){try{localStorage.setItem("queue",JSON.stringify(e))}catch(e){console.error(e)}}const $=new k;var _=new WeakSet,x=new WeakSet,M=new WeakSet,E=new WeakSet,Q=new WeakSet;class B{genresInRow(t=0){return e(o)(this,_,O).call(this,t)}get watchedOrQueueClass(){return this.inWatched?"in-watched":this.inQueue?"in-queue":""}constructor(t){e(a)(this,_),e(a)(this,x),e(a)(this,M),e(a)(this,E),e(a)(this,Q),this.id=t.id,this.posterPath=e(o)(this,Q,P).call(this,t.poster_path),this.title=t.title,this.originalTitle=t.original_title,this.popularity=t.popularity,this.genres=t.genre_ids,this.releaseDate=t.release_date.substr(0,4),this.inWatched=e(o)(this,x,N).call(this),this.inQueue=e(o)(this,M,D).call(this),this.voteAverage=t.vote_average,this.voteCount=t.vote_count,this.popularity=t.popularity,this.overview=t.overview,this.video=null,this.genres||(this.genres=[],t.genres.map((e=>{this.genres.push(e.id)})))}}function O(t=0){const n=e(o)(this,E,F).call(this),s=[];for(let e=0;e<this.genres.length;e++){if(t&&e===t-1&&e<this.genres.length-1){s.push("others");break}const i=n.find((t=>t.id===this.genres[e]));i&&s.push(i.name)}return s.join(", ")}function N(){return!!$.getWatched().find((e=>e===this.id))}function D(){return!!$.getQueue().find((e=>e===this.id))}function F(){return R.getGenres()}function P(e){return`http://image.tmdb.org/t/p/w500${e}`}const R=new f;function C(e){e||R.getTrending().then((e=>(console.log(`Current page: ${e.page}, total page: ${e.total_pages}`),e.results))).then((e=>{const t=[];e.map((e=>{const n=new B(e);t.push(n)})),m(t)})).catch((e=>console.log(e)))}function I(e){let t=[];e.map((e=>{try{t.push(R.getMovie(e).then((e=>{const t=new B(e);return e.genres=e.genres.map((e=>e.id)),t})))}catch(e){console.log(e)}})),Promise.all(t).then((e=>{m(e)})).catch((e=>console.log(e)))}function U(e,t=1){e&&R.searchMovie(e,t).then((e=>(console.log(`Current page: ${e.page}, total page: ${e.total_pages}`),e.results))).then((e=>{const t=[];e.map((e=>{const n=new B(e);t.push(n)})),m(t)})).catch((e=>console.log(e)))}r.loader=document.querySelector(".lds-ripple");const j=new k;function A(e,t){const n=e.closest(".card");if(n.classList.contains("in-queue"))return j.removeFromQueue(t),void n.classList.remove("in-queue");n.classList.contains("in-watched")&&(j.removeFromWatched(t),n.classList.remove("in-watched")),n.classList.add("in-queue"),j.addToQueue(t)}function G(e,t){const n=e.closest(".card");if(n.classList.contains("in-watched"))return j.removeFromWatched(t),void n.classList.remove("in-watched");n.classList.contains("in-queue")&&(j.removeFromQueue(t),n.classList.remove("in-queue")),n.classList.add("in-watched"),j.addToWatched(t)}function H(){window.scrollTo(0,0)}r.scrollTop=document.querySelector(".scroll-top"),(r.body=document.querySelector("body")).onscroll=()=>{window.scrollY>230?r.scrollTop.classList.add("isShowScrollTop"):window.scrollY<230&&r.scrollTop.classList.remove("isShowScrollTop")};const J=new k;let V=[];const K=new IntersectionObserver((function(){if(console.log("i'm scrolling to the infinity"),V.length>6){return void I(V.splice(0,6))}K.unobserve(r.observeTarget),I(V)}),{rootMargin:"0px 0px 200px 0px"});function Y(e){e.preventDefault(),r.header.classList.remove("header-library"),r.header.classList.add("header-search"),r.pagination.classList.remove("on-empty-library"),r.cardsSection.classList.remove("empty-library"),r.cardsBox.classList.remove("hide-labels"),r.searchInput.value="",p(),C()}function z(e){e.preventDefault(),r.header.classList.remove("header-search"),r.header.classList.add("header-library"),r.cardsBox.classList.add("hide-labels"),r.pagination.classList.add("on-empty-library"),0===J.getWatched().length?r.cardsSection.classList.add("empty-library"):X()}function X(){r.libraryWatchBtn.classList.remove("accent-btn"),r.libraryWatchBtn.classList.add("accent-btn"),r.libraryQueBtn.classList.remove("accent-btn"),0===J.getWatched().length?r.cardsSection.classList.add("empty-library"):(r.cardsSection.classList.remove("empty-library"),p(),V=J.getWatched(),K.observe(r.observeTarget))}function Z(){r.libraryQueBtn.classList.remove("accent-btn"),r.libraryQueBtn.classList.add("accent-btn"),r.libraryWatchBtn.classList.remove("accent-btn"),0===J.getQueue().length?r.cardsSection.classList.add("empty-library"):(r.cardsSection.classList.remove("empty-library"),p(),V=J.getQueue(),K.observe(r.observeTarget))}function ee(){window.addEventListener("keydown",ne),document.body.classList.add("modal-open")}function te(){window.removeEventListener("keydown",ne),document.body.classList.remove("modal-open")}function ne(e){"Escape"===e.code&&te()}function se(e){e.currentTarget===e.target&&te()}function ie(e){e.preventDefault();const t=e.target.elements.query.value;r.cardsBox.innerHTML="",p(),U(t)}function re(e){e.preventDefault();let t=!1;e.path.map((e=>{if("BUTTON"===e.nodeName){const n=e.closest(".card-link").dataset.id,s=Number(n);e.classList.contains("in-queue")?A(e,s):e.classList.contains("in-watched")&&G(e,s),t=!0}if("A"===e.nodeName&&!t){const t=e.dataset.id;Number(t);(n=t)&&(R.getMovie(n).then((e=>{v(new B(e))})),r.movieModal.classList.remove("is-hidden"))}var n}))}document.addEventListener("DOMContentLoaded",(function(){d.addEventListener("click",h),u.addEventListener("click",h),r.cardsBox=document.querySelector(".cards-box"),r.header=document.querySelector(".header"),r.homeLink=document.querySelector("#home"),r.libraryLink=document.querySelector("#library"),r.logo=document.querySelector("#logo"),r.libraryWatchBtn=document.querySelector("#lib-w"),r.libraryQueBtn=document.querySelector("#lib-q"),r.ourTeamLink=document.querySelector("#our-team"),r.closeModalBtn=document.querySelector('[data-action="close-modal"]'),r.backdrop=document.querySelector(".js-backdrop"),r.movieModal=document.querySelector(".movie-modal"),r.searchForm=document.querySelector("#movie-search"),r.observeTarget=document.querySelector(".sentinel"),r.scrollTop=document.querySelector(".scroll-top"),r.body=document.querySelector("body"),r.cardsSection=document.querySelector(".cards-section"),r.pagination=document.querySelector(".pagination"),r.searchInput=document.querySelector(".search-input");try{r.logo.addEventListener("click",Y),r.homeLink.addEventListener("click",Y),r.libraryLink.addEventListener("click",z),r.libraryWatchBtn.addEventListener("click",X),r.libraryQueBtn.addEventListener("click",Z),r.ourTeamLink.addEventListener("click",ee),r.closeModalBtn.addEventListener("click",te),r.backdrop.addEventListener("click",se),r.searchForm.addEventListener("submit",ie),r.cardsBox.addEventListener("click",re),r.scrollTop.addEventListener("click",H)}catch(e){console.log(e)}C(),J.getQueue(),J.getWatched()}));new k;
//# sourceMappingURL=index.3f22673d.js.map
