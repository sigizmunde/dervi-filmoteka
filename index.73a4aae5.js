!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequire7d90;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequire7d90=r),r.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var a="ed9b8dd4dcf22d9d746c4e21c6321e97",o={},c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t){u.default(e,t),t.add(e)};var d,u=(d=r("5k7tO"))&&d.__esModule?d:{default:d};var h={};function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,n){t&&v(e.prototype,t);n&&v(e,n);return e};var p=document.querySelector(".movie-modal"),m=document.querySelector(".backdrop"),f=p.querySelector("[data-close]");function y(e){p.classList.remove("open"),p.classList.add("is-hidden"),document.body.classList.remove("modal-open")}function g(e){var t=document.querySelector(".modal-content");t.innerHTML=e;var n=t.querySelector("[data-watched-btn]"),i=t.querySelector("[data-queue-btn]");n.addEventListener("click",b),i.addEventListener("click",L)}function b(e){}function L(e){}document.querySelector(".card-section");function w(){o.cardsBox.innerHTML=""}function k(e){var t="";e.map((function(e){t+='\n        <li class="card '.concat(e.watchedOrQueueClass,'">\n          <a href="" class="card-link card-button-slider" data-id="').concat(e.id,'">\n              <img\n                src="').concat(e.posterPath,'"\n                class="card-image"\n                alt=""\n              />\n              <div class="card-button-background">\n                <button class="card-button in-watched">watched</button>\n                <button class="card-button in-queue">queue</button>\n              </div>\n            \n              </a>\n              <div class="card-label-wrapper">\n                <div class="card-label-in-watched"></div>\n                <div class="card-label-in-queue"></div>\n              </div>\n            <div class="card-body">\n              <p class="card-title"><b>').concat(e.title,'</b></p>\n              <p class="card-genres"><b>').concat(e.genresInRow(3)," | ").concat(e.releaseDate,"</b></p>\n        </li>")})),function(e){o.cardsBox.innerHTML+=e}(t)}function S(e){g('\n      <div class="movie-picture-box">\n        <img\n          src="'.concat(e.posterPath,'"\n          alt="movie-picture"\n          class="movie-picture"\n        />\n      </div>\n      <div class="info-container">\n        <h1 class="movie-title">').concat(e.title,'</h1>\n        <ul class="movie-list">\n          <li class="movie-item">\n              <p class="movie-description">Vote / Votes</p>\n              <div class="vote-box property">\n              <p class="property-vote property-accent" id="vote">').concat(e.voteAverage,'</p>\n              <span class="vote-slash">/</span>\n              <p class="property-vote property-vote-alt" id="votes">').concat(e.voteCount,'</p>\n            </div>\n          </li>\n          <li class="movie-item">\n              <p class="movie-description">Popularity</p>\n              <p class="property" id="popularity">').concat(e.popularity,'</p>\n          </li>\n          <li class="movie-item">\n              <p class="movie-description">Original Title</p>\n              <p class="property" id="title">').concat(e.title,'</p>\n          </li>\n          <li class="movie-item">\n              <p class="movie-description">Genre</p>\n              <p class="property" id="genre">').concat(e.genresInRow(),'</p>\n          </li>\n          <li class="movie-item">\n          <p class="movie-description">Trailer</p>\n              <a href=').concat(e.video,' target="_blank" class="property">▶ Play</a>\n          </li>\n        </ul>\n        <article class="article">\n          <p class="article-caption">About</p>\n          <p class="article-text">\n            ').concat(e.overview,'\n          </p>\n        </article>\n        <div class="button-box">\n          <button class="movie-button watched-btn" data-watched-btn data-movie-id=').concat(e.id,'></button>\n          <button class="movie-button queue-btn" data-queue-btn data-movie-id=').concat(e.id,"></button>\n        </div>\n      </div>")),p.classList.remove("is-hidden"),p.classList.add("open"),document.body.classList.add("modal-open")}var q;q=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"},{"id":1982,"name":"Dummy"}]}');var T=new WeakSet,_=new WeakSet,W=function(){"use strict";function t(){if(e(c)(this,t),e(l)(this,T),e(l)(this,_),t._instance)return t._instance;t._instance=this,this.searchQuery="",this.genres=q.genres,this.repeatLastSearch=null,e(s)(this,_,M).call(this)}return e(h)(t,[{key:"getTrending",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this,r={resource:"trending",mediaType:"movie",timeWindow:n?"day":"week",get split(){return"".concat(this.resource,"/").concat(this.mediaType,"/").concat(this.timeWindow)}},o=new URLSearchParams({api_key:a,page:t});return this.repeatLastSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return i.getTrending(e,n)},e(s)(this,T,E).call(this,r.split,o)}},{key:"searchMovie",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=this,r={resource:"search",mediaType:"movie",get split(){return"".concat(this.resource,"/").concat(this.mediaType)}},o=new URLSearchParams({api_key:a,page:n,query:t});return this.repeatLastSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return i.searchMovie(t,e)},e(s)(this,T,E).call(this,r.split,o)}},{key:"getMovie",value:function(t){var n={resource:"movie",id:t,get split(){return"".concat(this.resource,"/").concat(this.id)}},i=new URLSearchParams({api_key:a});return e(s)(this,T,E).call(this,n.split,i)}},{key:"getVideos",value:function(t){var n={resource:"movie",id:t,mediaType:"videos",get split(){return"".concat(this.resource,"/").concat(this.id,"/").concat(this.mediaType)}},i=new URLSearchParams({api_key:a});return e(s)(this,T,E).call(this,n.split,i)}},{key:"getPremiers",value:function(){var t={resource:"movie",mediaType:"upcoming",get split(){return"".concat(this.resource,"/").concat(this.mediaType)}},n=new URLSearchParams({api_key:a});return e(s)(this,T,E).call(this,t.split,n)}},{key:"getGenres",value:function(){return this.genres}}]),t}();function E(e,t){return fetch("".concat("https://api.themoviedb.org/3","/").concat(e,"?").concat(t)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function M(){var t=this,n={resource:"genre",mediaType:"movie",list:"list",get split(){return"".concat(this.resource,"/").concat(this.mediaType,"/").concat(this.list)}},i=new URLSearchParams({api_key:a});e(s)(this,T,E).call(this,n.split,i).then((function(e){t.genres=e.genres,console.log("loadGenres complete")}))}var x=new WeakSet,O=new WeakSet,Q=function(){"use strict";function t(){if(e(c)(this,t),e(l)(this,x),e(l)(this,O),t._instance)return t._instance;t._instance=this}return e(h)(t,[{key:"getWatched",value:function(){try{var e=localStorage.getItem("watched");return null===e?[]:JSON.parse(e)}catch(e){console.error("Get state error: ",e)}return[]}},{key:"getQueue",value:function(){try{var e=localStorage.getItem("queue");return null===e?[]:JSON.parse(e)}catch(e){console.error("Get state error: ",e)}return[]}},{key:"addToWatched",value:function(t){var n=this.getWatched();n.includes(t)||(n.unshift(t),e(s)(this,x,B).call(this,n))}},{key:"removeFromWatched",value:function(t){var n=this.getWatched(),i=n.indexOf(t);i<0||(n.splice(i,1),e(s)(this,x,B).call(this,n))}},{key:"addToQueue",value:function(t){var n=this.getQueue();n.includes(t)||(n.unshift(t),e(s)(this,O,P).call(this,n))}},{key:"removeFromQueue",value:function(t){var n=this.getQueue(),i=n.indexOf(t);i<0||(n.splice(i,1),e(s)(this,O,P).call(this,n))}}]),t}();function B(e){try{localStorage.setItem("watched",JSON.stringify(e))}catch(e){console.error(e)}}function P(e){try{localStorage.setItem("queue",JSON.stringify(e))}catch(e){console.error(e)}}function D(e,t){var n=document.querySelector(".pagination");if(n){var i=function(i){var a=document.createElement("li");a.classList.add("pagination-item");var o=document.createElement("a");o.classList.add("pagination-link"),o.innerText=e[i],e[i]===t&&a.classList.add("current"),"number"==typeof e[i]?o.addEventListener("click",(function(t){t.preventDefault,K("repeat",e[i],"repeat")})):1===i?o.addEventListener("click",(function(t){t.preventDefault,K("repeat",e[i+1]-1,"repeat")})):o.addEventListener("click",(function(t){t.preventDefault,K("repeat",e[i-1]+1,"repeat")})),a.append(o),r.append(a),n.replaceChildren(r)},r=document.createElement("ul");r.classList.add("pagination-list");for(var a=0;a<e.length;a+=1)i(a);return n}}function C(e,t){var n=e-3;if(1===e);else if(e<=7){D([1,2,3,4,5,6,7],t)}else e>7&&D(t<=3?[1,2,3,4,5,"...",e]:t>=n?[1,"...",e-4,e-3,e-2,e-1,e]:[1,"...",t-1,t,t+1,"...",e],t)}var F=new Q,N=new WeakSet,R=new WeakSet,j=new WeakSet,I=new WeakSet,U=new WeakSet,A=function(){"use strict";function t(n){if(e(c)(this,t),e(l)(this,N),e(l)(this,R),e(l)(this,j),e(l)(this,I),e(l)(this,U),this.id=n.id,this.posterPath=e(s)(this,U,Y).call(this,n.poster_path),this.title=n.title,this.originalTitle=n.original_title,this.popularity=n.popularity,this.genres=n.genre_ids,this.releaseDate=n.release_date.substr(0,4),this.inWatched=e(s)(this,R,G).call(this),this.inQueue=e(s)(this,j,H).call(this),this.voteAverage=n.vote_average,this.voteCount=n.vote_count,this.popularity=n.popularity,this.overview=n.overview,this.videos=[],!this.genres){var i=this;this.genres=[],n.genres.map((function(e){i.genres.push(e.id)}))}}return e(h)(t,[{key:"genresInRow",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e(s)(this,N,V).call(this,t)}},{key:"watchedOrQueueClass",get:function(){return this.inWatched?"in-watched":this.inQueue?"in-queue":""}},{key:"video",get:function(){return this.videos.length>0?this.videos[0]:""}},{key:"getVideos",value:function(){return z.getVideos(this.id)}}]),t}();function V(){for(var t=this,n=function(e){var n=t;if(i&&e===i-1&&e<t.genres.length-1)return a.push("others"),"break";var o=r.find((function(t){return t.id===n.genres[e]}));o&&a.push(o.name)},i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=e(s)(this,I,J).call(this),a=[],o=0;o<this.genres.length;o++){var c=n(o);if("break"===c)break}return a.join(", ")}function G(){var e=this;return!!F.getWatched().find((function(t){return t===e.id}))}function H(){var e=this;return!!F.getQueue().find((function(t){return t===e.id}))}function J(){return z.getGenres()}function Y(e){return"".concat("http://image.tmdb.org/t/p/w500").concat(e)}var z=new W;function K(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";console.log("getMovies with params ",e,n,i),e||(t=function(){return z.getTrending()}),e&&!i&&(t=function(){return z.searchMovie(e,n)}),e&&"repeat"===i&&(t=function(){return z.repeatLastSearch(n)}),e&&"premiers"===i&&(t=function(){return z.getPremiers()}),t().then((function(e){return console.log("Current page: ".concat(e.page,", total pages: ").concat(e.total_pages)),C(e.total_pages,e.page),e.results})).then((function(e){var t=[];e.map((function(e){var n=new A(e);t.push(n)})),w(),k(t)})).catch((function(e){return console.log(e)}))}function X(e){var t=[];e.map((function(e){t.push(z.getMovie(e).then((function(e){var t=new A(e);return e.genres=e.genres.map((function(e){return e.id})),t})).catch((function(e){return console.log(e),0})))})),Promise.all(t).then((function(e){k(e.filter((function(e){return 0!=e})))})).catch((function(e){return console.log(e)}))}o.loader=document.querySelector(".lds-ripple");var Z=new Q;function $(e,t){var n=e.closest(".card");if(n.classList.contains("in-queue"))return Z.removeFromQueue(t),void n.classList.remove("in-queue");n.classList.contains("in-watched")&&(Z.removeFromWatched(t),n.classList.remove("in-watched")),n.classList.add("in-queue"),Z.addToQueue(t)}function ee(e,t){var n=e.closest(".card");if(n.classList.contains("in-watched"))return Z.removeFromWatched(t),void n.classList.remove("in-watched");n.classList.contains("in-queue")&&(Z.removeFromQueue(t),n.classList.remove("in-queue")),n.classList.add("in-watched"),Z.addToWatched(t)}function te(){window.scrollTo(0,0)}o.scrollTop=document.querySelector(".scroll-top"),(o.body=document.querySelector("body")).onscroll=function(){window.scrollY>230?o.scrollTop.classList.add("isShowScrollTop"):window.scrollY<230&&o.scrollTop.classList.remove("isShowScrollTop")};var ne=new Q,ie=[],re=new IntersectionObserver((function(){if(console.log("i'm scrolling to the infinity"),ie.length>6){return void X(ie.splice(0,6))}re.unobserve(o.observeTarget),X(ie)}),{rootMargin:"0px 0px 200px 0px"});function ae(e){e.preventDefault(),o.header.classList.remove("header-library"),o.header.classList.add("header-search"),o.pagination.classList.remove("on-empty-library"),o.cardsSection.classList.remove("empty-library"),o.cardsBox.classList.remove("hide-labels"),re.unobserve(o.observeTarget),o.searchInput.value="",w(),K()}function oe(e){e.preventDefault(),o.header.classList.remove("header-search"),o.header.classList.add("header-library"),o.cardsBox.classList.add("hide-labels"),o.libraryWatchBtn.classList.add("accent-btn"),o.libraryQueBtn.classList.remove("accent-btn"),o.pagination.classList.add("on-empty-library"),0===ne.getWatched().length?o.cardsSection.classList.add("empty-library"):ce()}function ce(){o.libraryWatchBtn.classList.remove("accent-btn"),o.libraryWatchBtn.classList.add("accent-btn"),o.libraryQueBtn.classList.remove("accent-btn"),0===ne.getWatched().length?o.cardsSection.classList.add("empty-library"):(o.cardsSection.classList.remove("empty-library"),w(),ie=ne.getWatched(),re.observe(o.observeTarget))}function se(){o.libraryQueBtn.classList.remove("accent-btn"),o.libraryQueBtn.classList.add("accent-btn"),o.libraryWatchBtn.classList.remove("accent-btn"),0===ne.getQueue().length?o.cardsSection.classList.add("empty-library"):(o.cardsSection.classList.remove("empty-library"),w(),ie=ne.getQueue(),re.observe(o.observeTarget))}function le(){window.addEventListener("keydown",ue),o.teamModal.classList.remove("is-hidden"),document.body.classList.add("modal-open")}function de(){window.removeEventListener("keydown",ue),o.teamModal.classList.add("is-hidden"),document.body.classList.remove("modal-open")}function ue(e){"Escape"===e.code&&de()}function he(e){e.currentTarget===e.target&&de()}function ve(e){e.preventDefault();var t=e.target.elements.query.value;o.cardsBox.innerHTML="",w(),K(t)}function pe(e){e.preventDefault();var t=!1;e.path.map((function(e){if("BUTTON"===e.nodeName){var n=e.closest(".card-link").dataset.id,i=Number(n);e.classList.contains("in-queue")?$(e,i):e.classList.contains("in-watched")&&ee(e,i),t=!0}if("A"===e.nodeName&&!t){var r=e.dataset.id;Number(r);(a=r)&&(z.getMovie(a).then((function(e){var t=new A(e);t.getVideos().then((function(e){e.results.map((function(e){"Trailer"===e.type&&t.videos.push("https://www.youtube.com/watch?v=".concat(e.key))})),console.log(t.videos),S(t)}))})),o.movieModal.classList.remove("is-hidden"))}var a}))}document.addEventListener("DOMContentLoaded",(function(){p=document.querySelector(".movie-modal"),m=document.querySelector(".backdrop"),f=p.querySelector("[data-close]"),m.addEventListener("click",y),f.addEventListener("click",y),o.cardsBox=document.querySelector(".cards-box"),o.header=document.querySelector(".header"),o.homeLink=document.querySelector("#home"),o.libraryLink=document.querySelector("#library"),o.logo=document.querySelector("#logo"),o.libraryWatchBtn=document.querySelector("#lib-w"),o.libraryQueBtn=document.querySelector("#lib-q"),o.ourTeamLink=document.querySelector("#our-team"),o.closeModalBtn=document.querySelector('[data-action="close-modal"]'),o.backdrop=document.querySelector(".js-backdrop"),o.teamModal=document.querySelector(".js-team-modal"),o.movieModal=document.querySelector(".movie-modal"),o.searchForm=document.querySelector("#movie-search"),o.observeTarget=document.querySelector(".sentinel"),o.scrollTop=document.querySelector(".scroll-top"),o.body=document.querySelector("body"),o.cardsSection=document.querySelector(".cards-section"),o.pagination=document.querySelector(".pagination"),o.searchInput=document.querySelector(".search-input");try{o.logo.addEventListener("click",ae),o.homeLink.addEventListener("click",ae),o.libraryLink.addEventListener("click",oe),o.libraryWatchBtn.addEventListener("click",ce),o.libraryQueBtn.addEventListener("click",se),o.ourTeamLink.addEventListener("click",le),o.closeModalBtn.addEventListener("click",de),o.backdrop.addEventListener("click",he),o.searchForm.addEventListener("submit",ve),o.cardsBox.addEventListener("click",pe),o.scrollTop.addEventListener("click",te)}catch(e){console.log(e)}K(),ne.getQueue(),ne.getWatched()}));new Q}();
//# sourceMappingURL=index.73a4aae5.js.map
