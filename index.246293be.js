function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire7d90;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequire7d90=i),i.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));const s={};var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){l.default(e,t),t.add(e)};var c,l=(c=i("7K24o"))&&c.__esModule?c:{default:c};const d=document.querySelector(".movie-modal"),u=document.querySelector(".backdrop");function h(e){"BUTTON"!==e.target.nodeName&&(d.classList.remove("open"),d.classList.add("is-hidden"),document.body.classList.remove("modal-open"))}document.querySelector(".card-section");function p(){s.cardsBox.innerHTML=""}function m(e){let t="";e.map((e=>{t+=`\n        <li class="card ${e.watchedOrQueueClass}">\n          <a href="" class="card-link card-button-slider" movie-id="${e.id}">\n              <img\n                src="${e.posterPath}"\n                class="card-image"\n                alt=""\n              />\n              <div class="card-button-background">\n                <button class="card-button in-watched">watched</button>\n                <button class="card-button in-queue">queue</button>\n              </div>\n            \n              </a>\n              <div class="card-label-wrapper">\n                <div class="card-label-in-watched"></div>\n                <div class="card-label-in-queue"></div>\n              </div>\n            <div class="card-body">\n              <p class="card-title"><b>${e.title}</b></p>\n              <p class="card-genres"><b>${e.genresInRow(3)} | ${e.releaseDate}</b></p>\n        </li>`})),function(e){s.cardsBox.innerHTML+=e}(t)}function v(e){let t=`\n      <div class="movie-picture-box">\n        <img\n          src="${e.posterPath}"\n          alt="movie-picture"\n          class="movie-picture"\n        />\n      </div>\n      <div class="info-container">\n        <h1 class="movie-title">${e.title}</h1>\n        <ul class="movie-list">\n          <li class="movie-items item-right">\n            <div class="description-box">\n              <p class="movie-description">Vote / Votes</p>\n              <p class="movie-description">Popularity</p>\n              <p class="movie-description">Original Title</p>\n              <p class="movie-description">Genre</p>\n            </div>\n          </li>\n          <li class="movie-items">\n            <div class="property-box">\n              <div class="vote-box property">\n                <p class="property-vote property-accent" id="vote">${e.voteAverage}</p>\n                <span class="vote-slash">/</span>\n                <p class="property-vote property-vote-alt" id="votes">${e.voteCount}</p>\n              </div>\n              <p class="property" id="popularity">${e.popularity}</p>\n              <p class="property" id="title">${e.title}</p>\n              <p class="property" id="genre">${e.genresInRow()}</p>\n            </div>\n          </li>\n        </ul>\n        <article class="article">\n          <p class="article-caption">About</p>\n          <p class="article-text">\n            ${e.overview}\n          </p>\n        </article>\n        <div class="button-box">\n          <button class="movie-button primary-btn">add to Watched</button>\n          <button class="movie-button">add to queue</button>\n        </div>\n      </div>`;var n;n=t,document.querySelector(".modal-content").innerHTML=n,d.classList.remove("is-hidden"),d.classList.add("open"),document.body.classList.add("modal-open")}var g;g=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"},{"id":1982,"name":"Dummy"}]}');var y=new WeakSet,b=new WeakSet;class f{getTrending(t=1,n=!1){const r={resource:"trending",mediaType:"movie",timeWindow:n?"day":"week",get split(){return`${this.resource}/${this.mediaType}/${this.timeWindow}`}},i=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97",page:t});return e(o)(this,y,w).call(this,r.split,i)}searchMovie(t,n=1){const r={resource:"search",mediaType:"movie",get split(){return`${this.resource}/${this.mediaType}`}},i=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97",page:n,query:t});return e(o)(this,y,w).call(this,r.split,i)}getMovie(t){const n={resource:"movie",id:t,get split(){return`${this.resource}/${this.id}`}},r=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97"});return e(o)(this,y,w).call(this,n.split,r)}getGenres(){return this.genres}constructor(){if(e(a)(this,y),e(a)(this,b),f._instance)return f._instance;f._instance=this,this.searchQuery="",this.genres=g.genres,e(o)(this,b,L).call(this)}}function w(e,t){return fetch(`https://api.themoviedb.org/3/${e}?${t}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}function L(){const t={resource:"genre",mediaType:"movie",list:"list",get split(){return`${this.resource}/${this.mediaType}/${this.list}`}},n=new URLSearchParams({api_key:"ed9b8dd4dcf22d9d746c4e21c6321e97"});e(o)(this,y,w).call(this,t.split,n).then((e=>{this.genres=e.genres,console.log("loadGenres complete")}))}var k=new WeakSet,S=new WeakSet;class T{getWatched(){try{const e=localStorage.getItem("watched");return null===e?[]:JSON.parse(e)}catch(e){console.error("Get state error: ",e)}return[]}getQueue(){try{const e=localStorage.getItem("queue");return null===e?[]:JSON.parse(e)}catch(e){console.error("Get state error: ",e)}return[]}addToWatched(t){const n=this.getWatched();n.includes(t)||(n.push(t),e(o)(this,k,$).call(this,n))}removeFromWatched(t){const n=this.getWatched(),r=n.indexOf(t);r<0||(n.splice(r,1),e(o)(this,k,$).call(this,n))}addToQueue(t){const n=this.getQueue();n.includes(t)||(n.push(t),e(o)(this,S,q).call(this,n))}removeFromQueue(t){const n=this.getQueue(),r=n.indexOf(t);r<0||(n.splice(r,1),e(o)(this,S,q).call(this,n))}constructor(){if(e(a)(this,k),e(a)(this,S),T._instance)return T._instance;T._instance=this}}function $(e){try{localStorage.setItem("watched",JSON.stringify(e))}catch(e){console.error(e)}}function q(e){try{localStorage.setItem("queue",JSON.stringify(e))}catch(e){console.error(e)}}const _=new T;var W=new WeakSet,x=new WeakSet,M=new WeakSet,E=new WeakSet,O=new WeakSet;class B{genresInRow(t=0){return e(o)(this,W,Q).call(this,t)}get watchedOrQueueClass(){return this.inWatched?"in-watched":this.inQueue?"in-queue":""}constructor(t){e(a)(this,W),e(a)(this,x),e(a)(this,M),e(a)(this,E),e(a)(this,O),this.id=t.id,this.posterPath=e(o)(this,O,N).call(this,t.poster_path),this.title=t.title,this.originalTitle=t.original_title,this.popularity=t.popularity,this.genres=t.genre_ids,this.releaseDate=t.release_date.substr(0,4),this.inWatched=e(o)(this,x,P).call(this),this.inQueue=e(o)(this,M,D).call(this),this.voteAverage=t.vote_average,this.voteCount=t.vote_count,this.popularity=t.popularity,this.overview=t.overview,this.genres||(this.genres=[],t.genres.map((e=>{this.genres.push(e.id)})))}}function Q(t=0){const n=e(o)(this,E,C).call(this),r=[];for(let e=0;e<this.genres.length;e++){if(t&&e===t&&e<this.genres.length-1){r.push("others");break}const i=n.find((t=>t.id===this.genres[e]));i&&r.push(i.name)}return r.join(", ")}function P(){return!!_.getWatched().find((e=>e===this.id))}function D(){return!!_.getQueue().find((e=>e===this.id))}function C(){return R.getGenres()}function N(e){return`http://image.tmdb.org/t/p/w500${e}`}const R=new f;function A(e){e||R.getTrending().then((e=>(console.log(`Current page: ${e.page}, total page: ${e.total_pages}`),e.results))).then((e=>{const t=[];e.map((e=>{const n=new B(e);t.push(n)})),m(t)})).catch((e=>console.log(e)))}function F(e){let t=[];e.forEach((e=>{t.push(R.getMovie(e).then((e=>{e.genres=e.genres.map((e=>e.id));return new B(e)})).catch((e=>console.log(e))))})),Promise.all(t).then((e=>{m(e)}))}function I(e,t=1){e&&R.searchMovie(e,t).then((e=>(console.log(`Current page: ${e.page}, total page: ${e.total_pages}`),e.results))).then((e=>{const t=[];e.map((e=>{const n=new B(e);t.push(n)})),m(t)})).catch((e=>console.log(e)))}s.loader=document.querySelector(".lds-ripple");const j=new T;let U=[];const G=new IntersectionObserver((function(){if(console.log("i'm scrolling to the infinity"),U.length>6){return void F(U.splice(0,6))}G.unobserve(s.observeTarget),F(U)}),{rootMargin:"0px 0px 200px 0px"});function H(e){e.preventDefault(),s.header.classList.remove("header-library"),s.header.classList.add("header-search"),p(),A()}function J(e){e.preventDefault(),s.header.classList.remove("header-search"),s.header.classList.add("header-library"),V()}function V(){s.libraryWatchBtn.classList.remove("accent-btn"),s.libraryWatchBtn.classList.add("accent-btn"),s.libraryQueBtn.classList.remove("accent-btn"),p(),U=j.getWatched(),G.observe(s.observeTarget)}function K(){s.libraryQueBtn.classList.remove("accent-btn"),s.libraryQueBtn.classList.add("accent-btn"),s.libraryWatchBtn.classList.remove("accent-btn"),p(),U=j.getQueue(),G.observe(s.observeTarget)}function z(){window.addEventListener("keydown",Y),document.body.classList.add("modal-open")}function X(){window.removeEventListener("keydown",Y),document.body.classList.remove("modal-open")}function Y(e){"Escape"===e.code&&X()}function Z(e){e.currentTarget===e.target&&X()}function ee(e){e.preventDefault();const t=e.target.elements.query.value;s.cardsBox.innerHTML="",p(),I(t)}function te(e){e.preventDefault(),e.path.map((t=>{var n;"A"===t.nodeName&&((n=t.getAttribute("movie-id"))&&(R.getMovie(n).then((e=>{v(new B(e))})),s.movieModal.classList.remove("is-hidden")),e.stopPropagation())}))}document.addEventListener("DOMContentLoaded",(function(){d.addEventListener("click",h),u.addEventListener("click",h),s.cardsBox=document.querySelector(".cards-box"),s.header=document.querySelector(".header"),s.homeLink=document.querySelector("#home"),s.libraryLink=document.querySelector("#library"),s.logo=document.querySelector("#logo"),s.libraryWatchBtn=document.querySelector("#lib-w"),s.libraryQueBtn=document.querySelector("#lib-q"),s.ourTeamLink=document.querySelector("#our-team"),s.closeModalBtn=document.querySelector('[data-action="close-modal"]'),s.backdrop=document.querySelector(".js-backdrop"),s.movieModal=document.querySelector(".movie-modal"),s.searchForm=document.querySelector("#movie-search"),s.observeTarget=document.querySelector(".sentinel");try{s.logo.addEventListener("click",H),s.homeLink.addEventListener("click",H),s.libraryLink.addEventListener("click",J),s.libraryWatchBtn.addEventListener("click",V),s.libraryQueBtn.addEventListener("click",K),s.ourTeamLink.addEventListener("click",z),s.closeModalBtn.addEventListener("click",X),s.backdrop.addEventListener("click",Z),s.searchForm.addEventListener("submit",ee),s.cardsBox.addEventListener("click",te)}catch(e){console.log(e)}A()}));const ne=new T,re=[299536,383498,500664,466282,455980,62286,631843,294793,22949,547016,11635,785663,22660,9547,6977,14912,6957,11520,752505,498743,9627,26518,212,156981,13280,15602,282296,498301,72640,69778,488818,11331,43345,543580,429203,31592,40719,83989,297462,74654,59973,44919,28124,915659,78734,9629,913867,40685,79775,44675,40369,351281,25796,55086,248688,967540,121163,620897,67149,85706,59906,88769,983101,309049,75864,29400],ie=[489931,454283,421792,429300,857,470918,379686,340102,529203,11688,755812,18239,11596,62838,597316,820446,13417,11699,10985,975278,13931,3131,772,11025,1103,12637,14011,4960,3681,214597,10952,13761,928,15363,277432,9686,14536,9262,10641,11400,553903,37534,183443,567220,79723,382272,9731,95608,10473,497864,5227,21430,30874,9558,46523,496274,10281,299513,18222,197696,19616,4728,12572,396398,11308,36850];for(let e=0;e<re.length;e+=1)ne.addToWatched(re[e]);for(let e=0;e<ie.length;e+=1)ne.addToQueue(ie[e]);
//# sourceMappingURL=index.246293be.js.map
