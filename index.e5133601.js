!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequire7d90;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequire7d90=a),a.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("7uOvd",(function(e,t){e.exports=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("iXtly")})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=t),t}})),a.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.e5133601.js","iXtly":"noposter.a2b62a5f.jpg","7mVsD":"index.d8f823b0.css"}'));var o="ed9b8dd4dcf22d9d746c4e21c6321e97",c=a("7uOvd"),s={state:[]},l={},u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e,t){m.default(e,t),t.add(e)};var h,m=(h=a("5k7tO"))&&h.__esModule?h:{default:h};var f={};function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t,n){t&&p(e.prototype,t);n&&p(e,n);return e};var g=new WeakSet,y=new WeakSet,b=function(){"use strict";function e(){if(t(u)(this,e),t(v)(this,g),t(v)(this,y),e._instance)return e._instance;e._instance=this}return t(f)(e,[{key:"getWatched",value:function(){try{var e=localStorage.getItem("watched");return(null===e?[]:JSON.parse(e)).filter((function(e){return e.hasOwnProperty("id")}))}catch(e){console.error("Get library error: ",e)}return[]}},{key:"getQueue",value:function(){try{var e=localStorage.getItem("queue");return(null===e?[]:JSON.parse(e)).filter((function(e){return e.hasOwnProperty("id")}))}catch(e){console.error("Get library error: ",e)}return[]}},{key:"addToWatched",value:function(e){var n=this.getWatched(),r=!1;try{r=n.find((function(t){return t.id===e.id}))}catch(e){console.log(e)}r||(n.unshift(e),t(d)(this,g,L).call(this,n))}},{key:"removeFromWatched",value:function(e){var n=0;"number"==typeof e?(n=e,console.log("number!")):(n=e.id,console.log("not a number!"));var r=this.getWatched().filter((function(e){return e.id!==n}));t(d)(this,g,L).call(this,r)}},{key:"addToQueue",value:function(e){var n=this.getQueue();n.find((function(t){return t.id===e.id}))||(n.unshift(e),t(d)(this,y,w).call(this,n))}},{key:"removeFromQueue",value:function(e){var n=0;"number"==typeof e?(n=e,console.log("number!")):(n=e.id,console.log("not a number!"));var r=this.getQueue().filter((function(e){return e.id!==n}));t(d)(this,y,w).call(this,r)}}]),e}();function L(e){try{localStorage.setItem("watched",JSON.stringify(e))}catch(e){console.error(e)}}function w(e){try{localStorage.setItem("queue",JSON.stringify(e))}catch(e){console.error(e)}}var S,k,q=new b,T=document.querySelector(".movie-modal"),_=document.querySelector(".backdrop"),E=T.querySelector("[data-close]");function W(){T.classList.remove("open"),T.classList.add("is-hidden"),document.body.classList.remove("modal-open")}function M(e){var t=document.querySelector(".modal-content");t.innerHTML=e,S=t.querySelector("[data-queue-btn]"),k=t.querySelector("[data-watched-btn]");var n=Number(S.dataset.movieId);q.getQueue().find((function(e){return e.id===n}))&&S.classList.add("active-btn"),q.getWatched().find((function(e){return e.id===n}))&&k.classList.add("active-btn"),S.addEventListener("click",x),k.addEventListener("click",O)}function x(e){console.log("cashe is ",s);var t=e.target.dataset.movieId,n=Number(t);q.getWatched().find((function(e){return e.id===n}))&&!S.classList.contains("active-btn")&&(q.removeFromWatched(n),k.classList.remove("active-btn"),l.currentMovieLi.classList.remove("in-watched"));var r=q.getQueue().find((function(e){return e.id===n}));if(r)return q.removeFromQueue(n),e.target.classList.remove("active-btn"),void l.currentMovieLi.classList.remove("in-queue");r||(r=s.find((function(e){return e.id===n}))),q.addToQueue(r),e.target.classList.add("active-btn"),l.currentMovieLi.classList.add("in-queue")}function O(e){console.log("cashe is ",s);var t=e.target.dataset.movieId,n=Number(t);q.getQueue().find((function(e){return e.id===n}))&&!k.classList.contains("active-btn")&&(q.removeFromQueue(n),S.classList.remove("active-btn"),l.currentMovieLi.classList.remove("in-queue"));var r=q.getWatched().find((function(e){return e.id===n}));if(r)return q.removeFromWatched(n),e.target.classList.remove("active-btn"),void l.currentMovieLi.classList.remove("in-watched");r||(r=s.find((function(e){return e.id===n}))),q.addToWatched(r),e.target.classList.add("active-btn"),l.currentMovieLi.classList.add("in-watched")}document.querySelector(".card-section");function Q(){l.cardsBox.innerHTML=""}function B(e){var t="";e.map((function(e){t+='\n        <li class="card '.concat(le(e),'">\n          <a href="" class="card-link card-button-slider" data-id="').concat(e.id,'">\n              <img\n                src="').concat(e.posterPath,'"\n                class="card-image"\n                alt=""\n              />\n              <div class="card-button-background">\n                <button class="card-button in-watched">watched</button>\n                <button class="card-button in-queue">queue</button>\n              </div>\n            \n              </a>\n              <div class="card-label-wrapper">\n                <div class="card-label-in-watched"></div>\n                <div class="card-label-in-queue"></div>\n              </div>\n            <div class="card-body">\n              <p class="card-title"><b>').concat(e.title,'</b></p>\n              <p class="card-genres"><b>').concat(ce(e,3)," | ").concat(e.releaseDate,"</b></p>\n        </li>")})),function(e){l.cardsBox.innerHTML+=e}(t)}function P(e){M('\n      <div class="movie-picture-box">\n        <img\n          src="'.concat(e.posterPath,'"\n          alt="movie-picture"\n          class="movie-picture"\n        />\n      </div>\n      <div class="info-container">\n        <h1 class="movie-title">').concat(e.title,'</h1>\n        <ul class="movie-list">\n          <li class="movie-item">\n              <p class="movie-description">Vote / Votes</p>\n              <div class="vote-box property">\n              <p class="property-vote property-accent" id="vote">').concat(e.voteAverage,'</p>\n              <span class="vote-slash">/</span>\n              <p class="property-vote property-vote-alt" id="votes">').concat(e.voteCount,'</p>\n            </div>\n          </li>\n          <li class="movie-item">\n              <p class="movie-description">Popularity</p>\n              <p class="property" id="popularity">').concat(e.popularity,'</p>\n          </li>\n          <li class="movie-item">\n              <p class="movie-description">Original Title</p>\n              <p class="property" id="title">').concat(e.title,'</p>\n          </li>\n          <li class="movie-item">\n              <p class="movie-description">Genre</p>\n              <p class="property" id="genre">').concat(e.genresInRow(),'</p>\n          </li>\n          <li class="movie-item">\n          <p class="movie-description">Trailer</p>\n              <a href=').concat(e.video,' target="_blank" class="property">▶ Play</a>\n          </li>\n        </ul>\n        <article class="article">\n          <p class="article-caption">About</p>\n          <p class="article-text">\n            ').concat(e.overview,'\n          </p>\n        </article>\n        <div class="button-box">\n          <button class="movie-button watched-btn" data-watched-btn data-movie-id=').concat(e.id,'></button>\n          <button class="movie-button queue-btn" data-queue-btn data-movie-id=').concat(e.id,"></button>\n        </div>\n      </div>")),T.classList.remove("is-hidden"),T.classList.add("open"),document.body.classList.add("modal-open")}var F,N=function(){try{l.loader.classList.remove("is-hidden")}catch(e){console.log("loader failed ",e)}},j=function(){try{l.loader.classList.add("is-hidden")}catch(e){console.log("loader failed ",e)}};F=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"},{"id":1982,"name":"Dummy"}]}');var D=new WeakSet,H=new WeakSet,R=function(){"use strict";function e(){if(t(u)(this,e),t(v)(this,D),t(v)(this,H),e._instance)return e._instance;e._instance=this,this.searchQuery="",this.genres=F.genres,this.repeatLastSearch=null,t(d)(this,H,A).call(this)}return t(f)(e,[{key:"getTrending",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this,i={resource:"trending",mediaType:"movie",timeWindow:n?"day":"week",get split(){return"".concat(this.resource,"/").concat(this.mediaType,"/").concat(this.timeWindow)}},a=new URLSearchParams({api_key:o,page:e});return this.repeatLastSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r.getTrending(e,n)},t(d)(this,D,C).call(this,i.split,a)}},{key:"searchMovie",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this,i={resource:"search",mediaType:"movie",get split(){return"".concat(this.resource,"/").concat(this.mediaType)}},a=new URLSearchParams({api_key:o,page:n,query:e});return this.repeatLastSearch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r.searchMovie(e,t)},t(d)(this,D,C).call(this,i.split,a)}},{key:"getMovie",value:function(e){var n={resource:"movie",id:e,get split(){return"".concat(this.resource,"/").concat(this.id)}},r=new URLSearchParams({api_key:o});return t(d)(this,D,C).call(this,n.split,r)}},{key:"getVideos",value:function(e){var n={resource:"movie",id:e,mediaType:"videos",get split(){return"".concat(this.resource,"/").concat(this.id,"/").concat(this.mediaType)}},r=new URLSearchParams({api_key:o});return t(d)(this,D,C).call(this,n.split,r)}},{key:"getPremiers",value:function(){var e={resource:"movie",mediaType:"upcoming",get split(){return"".concat(this.resource,"/").concat(this.mediaType)}},n=new URLSearchParams({api_key:o});return t(d)(this,D,C).call(this,e.split,n)}},{key:"getGenres",value:function(){return this.genres}}]),e}();function C(e,t){return fetch("".concat("https://api.themoviedb.org/3","/").concat(e,"?").concat(t)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function A(){var e=this,n={resource:"genre",mediaType:"movie",list:"list",get split(){return"".concat(this.resource,"/").concat(this.mediaType,"/").concat(this.list)}},r=new URLSearchParams({api_key:o});t(d)(this,D,C).call(this,n.split,r).then((function(t){e.genres=t.genres,console.log("loadGenres complete")}))}function I(e,t){var n=document.querySelectorAll(".pagination");n.length>0&&n.forEach((function(n){var r=function(r){var a=document.createElement("li");a.classList.add("pagination-item");var o=document.createElement("a");o.classList.add("pagination-link"),o.innerText=e[r],e[r]===t&&a.classList.add("current"),"number"==typeof e[r]?o.addEventListener("click",(function(t){t.preventDefault,ae("repeat",e[r],"repeat")})):1===r?o.addEventListener("click",(function(t){t.preventDefault,ae("repeat",e[r+1]-1,"repeat")})):o.addEventListener("click",(function(t){t.preventDefault,ae("repeat",e[r-1]+1,"repeat")})),a.append(o),i.append(a),n.replaceChildren(i)},i=document.createElement("ul");i.classList.add("pagination-list");for(var a=0;a<e.length;a+=1)r(a);return n}))}function U(e,t){if(0!==e){var n=e-3;if(1===e)V();else if(e<=7){for(var r=[],i=1;i<=e;i+=1)r.push(i);console.log(r),I(r,t)}e>7&&I(t<=3?[1,2,3,4,5,"...",e]:t>=n?[1,"...",e-4,e-3,e-2,e-1,e]:[1,"...",t-1,t,t+1,"...",e],t)}else V()}function V(){var e=document.querySelectorAll(".pagination");e.length>0&&e.forEach((function(e){return e.innerHTML=""}))}var J=new b,G=new WeakSet,z=new WeakSet,X=new WeakSet,Y=new WeakSet,$=new WeakSet,K=function(){"use strict";function e(n){if(t(u)(this,e),t(v)(this,G),t(v)(this,z),t(v)(this,X),t(v)(this,Y),t(v)(this,$),this.id=n.id,this.posterPath=t(d)(this,$,re).call(this,n.poster_path),this.title=n.title,this.originalTitle=n.original_title,this.popularity=n.popularity,this.genres=n.genre_ids,this.releaseDate=n.release_date?n.release_date.substr(0,4):"",this.inWatched=t(d)(this,z,ee).call(this),this.inQueue=t(d)(this,X,te).call(this),this.voteAverage=n.vote_average,this.voteCount=n.vote_count,this.popularity=n.popularity,this.overview=n.overview,this.videos=[],!this.genres&&n.genres){var r=this;this.genres=[],n.genres.map((function(e){r.genres.push(e.id)}))}}return t(f)(e,[{key:"genresInRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t(d)(this,G,Z).call(this,e)}},{key:"watchedOrQueueClass",get:function(){return this.inWatched?"in-watched":this.inQueue?"in-queue":""}},{key:"video",get:function(){return this.videos.length>0?this.videos[0]:""}},{key:"getVideos",value:function(){return ie.getVideos(this.id)}}]),e}();function Z(){for(var e=this,n=function(t){var n=e;if(r&&t===r-1&&t<e.genres.length-1)return a.push("others"),"break";var o=i.find((function(e){return e.id===n.genres[t]}));o&&a.push(o.name)},r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=t(d)(this,Y,ne).call(this),a=[],o=0;o<this.genres.length;o++){var c=n(o);if("break"===c)break}return a.join(", ")}function ee(){var e=this;return!!J.getWatched().find((function(t){return t===e.id}))}function te(){var e=this;return!!J.getQueue().find((function(t){return t===e.id}))}function ne(){return ie.getGenres()}function re(e){return e?"".concat("http://image.tmdb.org/t/p/w500").concat(e):c}var ie=new R;function ae(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";N(),V(),console.log("getMovies with params ",e,n,r),e||(t=function(){return ie.getTrending()}),e&&!r&&(t=function(){return ie.searchMovie(e,n)}),e&&"repeat"===r&&(t=function(){return ie.repeatLastSearch(n)}),e&&"premiers"===r&&(t=function(){return ie.getPremiers()}),t().then((function(e){return console.log("Current page: ".concat(e.page,", total pages: ").concat(e.total_pages)),U(e.total_pages,e.page),0===e.total_pages?l.cardsSection.classList.add("empty-main-library"):l.cardsSection.classList.remove("empty-main-library"),e.results})).then((function(e){var t=[];e.map((function(e){var n=new K(e);t.push(n),s.state.push(n)})),Q(),B(t),j()})).catch((function(e){console.log(e)}))}function oe(e){s.state=e.filter((function(){return!0})),B(e)}function ce(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return se(e,t)}function se(e){for(var t=function(t){if(n&&t===n-1&&t<e.genres.length-1)return i.push("others"),"break";var a=r.find((function(n){return n.id===e.genres[t]}));a&&i.push(a.name)},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.genres,i=[],a=0;a<e.genres.length;a++){var o=t(a);if("break"===o)break}return i.join(", ")}function le(e){return e.inWatched?"in-watched":e.inQueue?"in-queue":""}var ue=new b;function de(e,t){console.log("cashe is ",s.state);var n=e.closest(".card");if(ue.getQueue().find((function(e){return e.id===t})))return ue.removeFromQueue(t),void n.classList.remove("in-queue");var r=ue.getWatched().find((function(e){return e.id===t}));r&&(ue.removeFromWatched(t),n.classList.remove("in-watched")),r||(r=s.state.find((function(e){return e.id===t}))),ue.addToQueue(r),n.classList.add("in-queue")}function ve(e,t){console.log("cashe is ",s.state);var n=e.closest(".card");if(ue.getWatched().find((function(e){return e.id===t})))return ue.removeFromWatched(t),void n.classList.remove("in-watched");var r=ue.getQueue().find((function(e){return e.id===t}));r&&(ue.removeFromQueue(t),n.classList.remove("in-queue")),r||(r=s.state.find((function(e){return e.id===t}))),ue.addToWatched(r),n.classList.add("in-watched")}function he(){window.scrollTo(0,0)}l.scrollTop=document.querySelector(".scroll-top"),(l.body=document.querySelector("body")).onscroll=function(){window.scrollY>230?l.scrollTop.classList.add("isShowScrollTop"):window.scrollY<230&&l.scrollTop.classList.remove("isShowScrollTop")};var me=new b,fe=[],pe=new IntersectionObserver((function(){if(console.log("i'm scrolling to the infinity"),fe.length>6){return void oe(fe.splice(0,6))}pe.unobserve(l.observeTarget),oe(fe)}),{rootMargin:"0px 0px 200px 0px"});function ge(e){e.preventDefault(),l.header.classList.remove("header-library"),l.header.classList.add("header-search"),l.cardsSection.classList.remove("empty-library"),l.cardsBox.classList.remove("hide-labels"),pe.unobserve(l.observeTarget),l.searchInput.value="",Q(),ae()}function ye(e){e.preventDefault(),l.header.classList.remove("header-search"),l.header.classList.add("header-library"),l.cardsBox.classList.add("hide-labels"),l.libraryWatchBtn.classList.add("accent-btn"),l.libraryQueBtn.classList.remove("accent-btn"),l.cardsSection.classList.remove("empty-main-library"),V(),0===me.getWatched().length?l.cardsSection.classList.add("empty-library"):be()}function be(){l.libraryWatchBtn.classList.remove("accent-btn"),l.libraryWatchBtn.classList.add("accent-btn"),l.libraryQueBtn.classList.remove("accent-btn"),fe=me.getWatched(),s.state=fe.filter((function(){return!0})),0===fe.length?l.cardsSection.classList.add("empty-library"):(l.cardsSection.classList.remove("empty-library"),Q(),pe.observe(l.observeTarget))}function Le(){l.libraryQueBtn.classList.remove("accent-btn"),l.libraryQueBtn.classList.add("accent-btn"),l.libraryWatchBtn.classList.remove("accent-btn"),fe=me.getQueue(),s.state=fe.filter((function(){return!0})),0===fe.length?l.cardsSection.classList.add("empty-library"):(l.cardsSection.classList.remove("empty-library"),Q(),pe.observe(l.observeTarget))}function we(){window.addEventListener("keydown",ke),l.teamModal.classList.remove("is-hidden"),document.body.classList.add("modal-open")}function Se(){window.removeEventListener("keydown",ke),l.teamModal.classList.add("is-hidden"),document.body.classList.remove("modal-open")}function ke(e){"Escape"===e.code&&Se()}function qe(e){e.currentTarget===e.target&&Se()}function Te(e){e.preventDefault();var t=e.target.elements.query.value;l.cardsBox.innerHTML="",Q(),ae(t)}function _e(e){e.preventDefault();var t=!1;e.composedPath().map((function(e){if("BUTTON"===e.nodeName){var n=e.closest(".card-link").dataset.id,r=Number(n);e.classList.contains("in-queue")?de(e,r):e.classList.contains("in-watched")&&ve(e,r),t=!0}if("A"===e.nodeName&&!t){var i=e.dataset.id;l.currentMovieLi=e.closest(".card"),(a=i)&&ie.getMovie(a).then((function(e){var t=new K(e);t.getVideos().then((function(e){e.results.map((function(e){"Trailer"===e.type&&t.videos.push("https://www.youtube.com/watch?v=".concat(e.key))})),P(t)}))}))}var a}))}document.addEventListener("DOMContentLoaded",(function(){T=document.querySelector(".movie-modal"),_=document.querySelector(".backdrop"),E=T.querySelector("[data-close]"),_.addEventListener("click",W),E.addEventListener("click",W),l.loader=document.querySelector(".lds-ripple"),l.cardsBox=document.querySelector(".cards-box"),l.header=document.querySelector(".header"),l.homeLink=document.querySelector("#home"),l.libraryLink=document.querySelector("#library"),l.logo=document.querySelector("#logo"),l.libraryWatchBtn=document.querySelector("#lib-w"),l.libraryQueBtn=document.querySelector("#lib-q"),l.ourTeamLink=document.querySelector("#our-team"),l.closeModalBtn=document.querySelector('[data-action="close-modal"]'),l.backdrop=document.querySelector(".js-backdrop"),l.teamModal=document.querySelector(".js-team-modal"),l.movieModal=document.querySelector(".movie-modal"),l.searchForm=document.querySelector("#movie-search"),l.observeTarget=document.querySelector(".sentinel"),l.scrollTop=document.querySelector(".scroll-top"),l.body=document.querySelector("body"),l.cardsSection=document.querySelector(".cards-section"),l.pagination=document.querySelector(".pagination"),l.searchInput=document.querySelector(".search-input");try{l.logo.addEventListener("click",ge),l.homeLink.addEventListener("click",ge),l.libraryLink.addEventListener("click",ye),l.libraryWatchBtn.addEventListener("click",be),l.libraryQueBtn.addEventListener("click",Le),l.ourTeamLink.addEventListener("click",we),l.closeModalBtn.addEventListener("click",Se),l.backdrop.addEventListener("click",qe),l.searchForm.addEventListener("submit",Te),l.cardsBox.addEventListener("click",_e),l.scrollTop.addEventListener("click",he)}catch(e){console.log(e)}ae(),me.getQueue(),me.getWatched()}));new b}();
//# sourceMappingURL=index.e5133601.js.map
