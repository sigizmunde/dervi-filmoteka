!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequire7d90;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequire7d90=a),a.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("7uOvd",(function(e,t){e.exports=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("iXtly")})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=t),t}})),a.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.264880e0.js","iXtly":"noposter.a2b62a5f.jpg","7mVsD":"index.f5df5942.css"}'));var o="ed9b8dd4dcf22d9d746c4e21c6321e97",c="http://image.tmdb.org/t/p/w500",s=a("7uOvd"),l={state:[]},d={},u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t){m.default(e,t),t.add(e)};var p,m=(p=a("5k7tO"))&&p.__esModule?p:{default:p};var h={};function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,n){t&&g(e.prototype,t);n&&g(e,n);return e};var y=a("hKHmD"),b={};Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){L.default(e,t,n[t])}))}return e};var L=function(e){return e&&e.__esModule?e:{default:e}}(a("hKHmD"));var w;w=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"},{"id":1982,"name":"Dummy"}]}');var S=new WeakSet,k=new WeakSet,_=function(){"use strict";function e(){if(t(u)(this,e),t(f)(this,S),t(f)(this,k),e._instance)return e._instance;e._instance=this,this.searchQuery="",this.genres=w.genres,this.repeatLastSearch=null,t(v)(this,k,T).call(this)}return t(h)(e,[{key:"getTrending",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this,i={resource:"trending",mediaType:"movie",timeWindow:n?"day":"week",get split(){return"".concat(this.resource,"/").concat(this.mediaType,"/").concat(this.timeWindow)}},a=new URLSearchParams({api_key:o,page:e});return this.repeatLastSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r.getTrending(e,n)},t(v)(this,S,q).call(this,i.split,a)}},{key:"searchMovie",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this,i={resource:"search",mediaType:"movie",get split(){return"".concat(this.resource,"/").concat(this.mediaType)}},a=new URLSearchParams({api_key:o,page:n,query:e});return this.repeatLastSearch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r.searchMovie(e,t)},t(v)(this,S,q).call(this,i.split,a)}},{key:"getMovie",value:function(e){var n={resource:"movie",id:e,get split(){return"".concat(this.resource,"/").concat(this.id)}},r=new URLSearchParams({api_key:o});return t(v)(this,S,q).call(this,n.split,r)}},{key:"getVideos",value:function(e){var n={resource:"movie",id:e,mediaType:"videos",get split(){return"".concat(this.resource,"/").concat(this.id,"/").concat(this.mediaType)}},r=new URLSearchParams({api_key:o});return t(v)(this,S,q).call(this,n.split,r)}},{key:"getPremiers",value:function(){var e={resource:"movie",mediaType:"upcoming",get split(){return"".concat(this.resource,"/").concat(this.mediaType)}},n=new URLSearchParams({api_key:o});return t(v)(this,S,q).call(this,e.split,n)}},{key:"getGenres",value:function(){return this.genres}}]),e}();function q(e,t){return fetch("".concat("https://api.themoviedb.org/3","/").concat(e,"?").concat(t)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function T(){var e=this,n={resource:"genre",mediaType:"movie",list:"list",get split(){return"".concat(this.resource,"/").concat(this.mediaType,"/").concat(this.list)}},r=new URLSearchParams({api_key:o});t(v)(this,S,q).call(this,n.split,r).then((function(t){e.genres=t.genres,console.log("loadGenres complete")}))}var M=new _,E=M.getGenres().reduce((function(e,n){return t(b)({},e,t(y)({},n.id,n.name))}),{});function O(e){M.getPremiers().then((function(e){return e.results})).then((function(t){!function(e,t){e.map((function(e){var n=new ae(e);l.state.push(n);var r=W(e.genre_ids,E);t.innerHTML+='\n        <li class="card splide__slide">\n          <a href="" class="card-link" data-id="'.concat(e.id,'">\n            <div class="splide__img-container">\n              <img\n                src="').concat(c).concat(e.poster_path,'"\n                class="splide__img"\n                alt=""\n              />\n            </div>\n            <div class="splide__card-body">\n              <p class="splide__card-title"><b>').concat(e.title,'</b></p>\n              <p class="splide__card-genres"><b>').concat(r," | ").concat(e.release_date.slice(0,4),"</b>\n              </p>\n            </div>\n          </a>\n        </li>")}))}(t,e),x.mount(window.splide.Extensions)}))}var x=new Splide(".splide",{type:"loop",drag:"free",focus:"center",gap:"20px",pagination:!1,perPage:10,autoScroll:{speed:1}});function W(e,t){var n=[],r=0,i=!0,a=!1,o=void 0;try{for(var c,s=e[Symbol.iterator]();!(i=(c=s.next()).done);i=!0){if(item=c.value,++r>2){n.push("others");break}n.push(t[item])}}catch(e){a=!0,o=e}finally{try{i||null==s.return||s.return()}finally{if(a)throw o}}return n.join(", ")}var B=new WeakSet,P=new WeakSet,Q=function(){"use strict";function e(){if(t(u)(this,e),t(f)(this,B),t(f)(this,P),e._instance)return e._instance;e._instance=this}return t(h)(e,[{key:"getWatched",value:function(){try{var e=localStorage.getItem("watched");return(null===e?[]:JSON.parse(e)).filter((function(e){return e.hasOwnProperty("id")}))}catch(e){console.error("Get library error: ",e)}return[]}},{key:"getQueue",value:function(){try{var e=localStorage.getItem("queue");return(null===e?[]:JSON.parse(e)).filter((function(e){return e.hasOwnProperty("id")}))}catch(e){console.error("Get library error: ",e)}return[]}},{key:"addToWatched",value:function(e){var n=this.getWatched(),r=!1;try{r=n.find((function(t){return t.id===e.id}))}catch(e){console.log(e)}r||(n.unshift(e),t(v)(this,B,j).call(this,n))}},{key:"removeFromWatched",value:function(e){var n=0;"number"==typeof e?(n=e,console.log("number!")):(n=e.id,console.log("not a number!"));var r=this.getWatched().filter((function(e){return e.id!==n}));t(v)(this,B,j).call(this,r)}},{key:"addToQueue",value:function(e){var n=this.getQueue();n.find((function(t){return t.id===e.id}))||(n.unshift(e),t(v)(this,P,C).call(this,n))}},{key:"removeFromQueue",value:function(e){var n=0;"number"==typeof e?(n=e,console.log("number!")):(n=e.id,console.log("not a number!"));var r=this.getQueue().filter((function(e){return e.id!==n}));t(v)(this,P,C).call(this,r)}}]),e}();function j(e){try{localStorage.setItem("watched",JSON.stringify(e))}catch(e){console.error(e)}}function C(e){try{localStorage.setItem("queue",JSON.stringify(e))}catch(e){console.error(e)}}var D,H,F=new Q,N=document.querySelector(".movie-modal"),R=document.querySelector(".backdrop"),A=N.querySelector("[data-close]");function I(){N.classList.remove("open"),N.classList.add("is-hidden"),document.body.classList.remove("modal-open"),x.Components.AutoScroll.play()}function U(e){var t=document.querySelector(".modal-content");t.innerHTML=e,console.log("currentMovieLi",d.currentMovieLi),D=t.querySelector("[data-queue-btn]"),H=t.querySelector("[data-watched-btn]");var n=Number(D.dataset.movieId);F.getQueue().find((function(e){return e.id===n}))&&D.classList.add("active-btn"),F.getWatched().find((function(e){return e.id===n}))&&H.classList.add("active-btn"),D.addEventListener("click",V),H.addEventListener("click",J)}function V(e){console.log("cashe is ",l);var t=e.target.dataset.movieId,n=Number(t);F.getWatched().find((function(e){return e.id===n}))&&!D.classList.contains("active-btn")&&(F.removeFromWatched(n),H.classList.remove("active-btn"),d.currentMovieLi&&d.currentMovieLi.classList.remove("in-watched"));var r=F.getQueue().find((function(e){return e.id===n}));if(r)return F.removeFromQueue(n),e.target.classList.remove("active-btn"),void(d.currentMovieLi&&d.currentMovieLi.classList.remove("in-queue"));r||(r=l.state.find((function(e){return e.id===n}))),F.addToQueue(r),e.target.classList.add("active-btn"),d.currentMovieLi&&d.currentMovieLi.classList.add("in-queue")}function J(e){console.log("cashe is ",l.state);var t=e.target.dataset.movieId,n=Number(t);F.getQueue().find((function(e){return e.id===n}))&&!H.classList.contains("active-btn")&&(F.removeFromQueue(n),D.classList.remove("active-btn"),d.currentMovieLi&&d.currentMovieLi.classList.remove("in-queue"));var r=F.getWatched().find((function(e){return e.id===n}));if(r)return F.removeFromWatched(n),e.target.classList.remove("active-btn"),void(d.currentMovieLi&&d.currentMovieLi.classList.remove("in-watched"));r||(r=l.state.find((function(e){return e.id===n}))),F.addToWatched(r),e.target.classList.add("active-btn"),d.currentMovieLi&&d.currentMovieLi.classList.add("in-watched")}document.querySelector(".card-section");function G(){d.cardsBox.innerHTML=""}function z(e){var t="";e.map((function(e){t+='\n        <li class="card '.concat(me(e),'">\n          <a href="" class="card-link card-button-slider" data-id="').concat(e.id,'">\n              <img\n                src="').concat(e.posterPath,'"\n                class="card-image"\n                alt=""\n              />\n              <div class="card-button-background">\n                <button class="card-button in-watched">watched</button>\n                <button class="card-button in-queue">queue</button>\n              </div>\n            \n              </a>\n              <div class="card-label-wrapper">\n                <div class="card-label-in-watched"></div>\n                <div class="card-label-in-queue"></div>\n              </div>\n            <div class="card-body">\n              <p class="card-title"><b>').concat(e.title,'</b></p>\n              <p class="card-genres"><b>').concat(fe(e,3)," | ").concat(e.releaseDate,"</b></p>\n        </li>")})),function(e){d.cardsBox.innerHTML+=e}(t)}function K(e){var t;U('\n      <div class="movie-picture-box">\n        <img\n          src="'.concat(e.posterPath,'"\n          alt="movie-picture"\n          class="movie-picture"\n        />\n      </div>\n      <div class="info-container">\n        <h1 class="movie-title">').concat(e.title,'</h1>\n        <ul class="movie-list">\n          <li class="movie-item">\n              <p class="movie-description">Vote / Votes</p>\n              <div class="vote-box property">\n              <p class="property-vote property-accent" id="vote">').concat(e.voteAverage,'</p>\n              <span class="vote-slash">/</span>\n              <p class="property-vote property-vote-alt" id="votes">').concat(e.voteCount,'</p>\n            </div>\n          </li>\n          <li class="movie-item">\n              <p class="movie-description">Popularity</p>\n              <p class="property" id="popularity">').concat(e.popularity,'</p>\n          </li>\n          <li class="movie-item">\n              <p class="movie-description">Original Title</p>\n              <p class="property" id="title">').concat(e.title,'</p>\n          </li>\n          <li class="movie-item">\n              <p class="movie-description">Genre</p>\n              <p class="property" id="genre">').concat(e.genresInRow(),"</p>\n          </li>\n          ").concat((t=e.video,t?'\n      <li class="movie-item">\n        <p class="movie-description">Trailer</p>\n        <a href='.concat(t,' target="_blank" class="property">▶ Play</a>\n      </li>\n    '):""),'\n        </ul>\n        <article class="article">\n          <p class="article-caption">About</p>\n          <p class="article-text">\n            ').concat(e.overview,'\n          </p>\n        </article>\n        <div class="button-box">\n          <button class="movie-button watched-btn" data-watched-btn data-movie-id=').concat(e.id,'></button>\n          <button class="movie-button queue-btn" data-queue-btn data-movie-id=').concat(e.id,"></button>\n        </div>\n      </div>")),N.classList.remove("is-hidden"),N.classList.add("open"),document.body.classList.add("modal-open"),x.Components.AutoScroll.pause()}var X=function(){try{d.loader.classList.remove("is-hidden")}catch(e){console.log("loader failed ",e)}},Y=function(){try{d.loader.classList.add("is-hidden")}catch(e){console.log("loader failed ",e)}};function $(e,t){var n=document.querySelectorAll(".pagination");n.length>0&&n.forEach((function(n){var r=function(r){var a=document.createElement("li");a.classList.add("pagination-item");var o=document.createElement("a");o.classList.add("pagination-link"),o.innerText=e[r],e[r]===t&&a.classList.add("current"),"number"==typeof e[r]?o.addEventListener("click",(function(t){t.preventDefault,de("repeat",e[r],"repeat")})):1===r?o.addEventListener("click",(function(t){t.preventDefault,de("repeat",e[r+1]-1,"repeat")})):o.addEventListener("click",(function(t){t.preventDefault,de("repeat",e[r-1]+1,"repeat")})),a.append(o),i.append(a),n.replaceChildren(i)},i=document.createElement("ul");i.classList.add("pagination-list");for(var a=0;a<e.length;a+=1)r(a);return n}))}function Z(e,t){if(0!==e){var n=e-3;if(1===e)ee();else if(e<=7){for(var r=[],i=1;i<=e;i+=1)r.push(i);console.log(r),$(r,t)}e>7&&$(t<=3?[1,2,3,4,5,"...",e]:t>=n?[1,"...",e-4,e-3,e-2,e-1,e]:[1,"...",t-1,t,t+1,"...",e],t)}else ee()}function ee(){var e=document.querySelectorAll(".pagination");e.length>0&&e.forEach((function(e){return e.innerHTML=""}))}var te=new Q,ne=new WeakSet,re=new WeakSet,ie=new WeakSet,ae=function(){"use strict";function e(n){if(t(u)(this,e),t(f)(this,ne),t(f)(this,re),t(f)(this,ie),this.id=n.id,this.posterPath=t(v)(this,ie,se).call(this,n.poster_path),this.title=n.title,this.originalTitle=n.original_title,this.popularity=n.popularity,this.genres=n.genre_ids,this.releaseDate=n.release_date?n.release_date.substr(0,4):"date not defined",this.voteAverage=n.vote_average,this.voteCount=n.vote_count,this.popularity=n.popularity,this.overview=n.overview,this.videos=[],!this.genres&&n.genres){var r=this;this.genres=[],n.genres.map((function(e){r.genres.push(e.id)}))}}return t(h)(e,[{key:"genresInRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t(v)(this,ne,oe).call(this,e)}},{key:"watchedOrQueueClass",get:function(){return this.inWatched?"in-watched":this.inQueue?"in-queue":""}},{key:"video",get:function(){return this.videos.length>0?this.videos[0]:""}},{key:"getVideos",value:function(){return le.getVideos(this.id)}}]),e}();function oe(){for(var e=this,n=function(t){var n=e;if(r&&t===r-1&&t<e.genres.length-1)return a.push("others"),"break";var o=i.find((function(e){return e.id===n.genres[t]}));o&&a.push(o.name)},r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=t(v)(this,re,ce).call(this),a=[],o=0;o<this.genres.length;o++){var c=n(o);if("break"===c)break}return 0===a.length?"genre not defined":a.join(", ")}function ce(){return le.getGenres()}function se(e){return e?"".concat(c).concat(e):s}var le=new _;function de(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";X(),ee(),console.log("getMovies with params ",e,n,r),e||(t=function(){return le.getTrending()}),e&&!r&&(t=function(){return le.searchMovie(e,n)}),e&&"repeat"===r&&(t=function(){return le.repeatLastSearch(n)}),e&&"premiers"===r&&(t=function(){return le.getPremiers()}),t().then((function(e){return console.log("Current page: ".concat(e.page,", total pages: ").concat(e.total_pages)),Z(e.total_pages,e.page),0===e.total_pages?d.cardsSection.classList.add("empty-main-library"):d.cardsSection.classList.remove("empty-main-library"),e.results})).then((function(e){var t=[];e.map((function(e){var n=new ae(e);t.push(n),l.state.push(n)})),G(),z(t),Y()})).catch((function(e){console.log(e)}))}function ue(e){l.state=e.filter((function(){return!0})),z(e)}function ve(e){e&&le.getMovie(e).then((function(e){var t=new ae(e);t.getVideos().then((function(e){e.results.map((function(e){"Trailer"===e.type&&t.videos.push("https://www.youtube.com/watch?v=".concat(e.key))})),K(t)}))}))}function fe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return pe(e,t)}function pe(e){var t=function(t){if(n&&t===n-1&&t<e.genres.length-1)return i.push("others"),"break";var a=r.find((function(n){return n.id===e.genres[t]}));a&&i.push(a.name)},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=le.genres,i=[];0===e.genres.length&&i.push("genre not defined");for(var a=0;a<e.genres.length;a++){var o=t(a);if("break"===o)break}return i.join(", ")}function me(e){var t=te.getWatched(),n=te.getQueue();return t.find((function(t){return t.id===e.id}))?"in-watched":n.find((function(t){return t.id===e.id}))?"in-queue":""}var he=new Q,ge=null;function ye(e,t){console.log("cashe is ",l.state);var n=e.closest(".card");if(he.getQueue().find((function(e){return e.id===t})))return Le(n),void(ge=setTimeout((function(){d.cancelBtn.classList.add("is-hidden"),d.cancelBtn.classList.remove("cancel-animation"),he.removeFromQueue(t),n.classList.remove("in-queue"),n.remove()}),3e3));var r=he.getWatched().find((function(e){return e.id===t}));console.log(r),r&&(he.removeFromWatched(t),n.classList.remove("in-watched")),r||(r=l.state.find((function(e){return e.id===t}))),he.addToQueue(r),n.classList.add("in-queue")}function be(e,t){console.log("cashe is ",l.state);var n=e.closest(".card");if(he.getWatched().find((function(e){return e.id===t})))return Le(n),void(ge=setTimeout((function(){d.cancelBtn.classList.add("is-hidden"),d.cancelBtn.classList.remove("cancel-animation"),he.removeFromWatched(t),n.classList.remove("in-watched"),n.remove()}),3e3));var r=he.getQueue().find((function(e){return e.id===t}));r&&(he.removeFromQueue(t),n.classList.remove("in-queue")),r||(r=l.state.find((function(e){return e.id===t}))),he.addToWatched(r),n.classList.add("in-watched")}function Le(e){d.cancelBtn.classList.remove("is-hidden"),d.cancelBtn.classList.add("cancel-animation"),d.cancelBtn.style.top="".concat(e.offsetTop,"px"),d.cancelBtn.style.left="".concat(Math.floor(e.offsetLeft-1),"px")}function we(){window.scrollTo(0,0)}d.scrollTop=document.querySelector(".scroll-top"),(d.body=document.querySelector("body")).onscroll=function(){window.scrollY>230?d.scrollTop.classList.add("isShowScrollTop"):window.scrollY<230&&d.scrollTop.classList.remove("isShowScrollTop")};var Se=new Q,ke=[],_e=new IntersectionObserver((function(){if(console.log("i'm scrolling to the infinity"),ke.length>6){return void ue(ke.splice(0,6))}_e.unobserve(d.observeTarget),ue(ke)}),{rootMargin:"0px 0px 200px 0px"});function qe(e){e.preventDefault(),d.header.classList.remove("header-library"),d.header.classList.add("header-search"),d.cardsSection.classList.remove("empty-library"),d.cardsBox.classList.remove("hide-labels"),d.sliderContainer.style.display="block",_e.unobserve(d.observeTarget),d.searchInput.value="",G(),de()}function Te(e){e.preventDefault(),d.header.classList.remove("header-search"),d.header.classList.add("header-library"),d.cardsBox.classList.add("hide-labels"),d.libraryWatchBtn.classList.add("accent-btn"),d.libraryQueBtn.classList.remove("accent-btn"),d.cardsSection.classList.remove("empty-main-library"),d.sliderContainer.style.display="none",ee(),0===Se.getWatched().length?d.cardsSection.classList.add("empty-library"):Me()}function Me(){d.libraryWatchBtn.classList.remove("accent-btn"),d.libraryWatchBtn.classList.add("accent-btn"),d.libraryQueBtn.classList.remove("accent-btn"),ke=Se.getWatched(),l.state=ke.filter((function(){return!0})),0===ke.length?d.cardsSection.classList.add("empty-library"):(d.cardsSection.classList.remove("empty-library"),G(),_e.observe(d.observeTarget))}function Ee(){d.libraryQueBtn.classList.remove("accent-btn"),d.libraryQueBtn.classList.add("accent-btn"),d.libraryWatchBtn.classList.remove("accent-btn"),ke=Se.getQueue(),l.state=ke.filter((function(){return!0})),0===ke.length?d.cardsSection.classList.add("empty-library"):(d.cardsSection.classList.remove("empty-library"),G(),_e.observe(d.observeTarget))}function Oe(){window.addEventListener("keydown",We),d.teamModal.classList.remove("is-hidden"),document.body.classList.add("modal-open")}function xe(){window.removeEventListener("keydown",We),d.teamModal.classList.add("is-hidden"),document.body.classList.remove("modal-open")}function We(e){"Escape"===e.code&&xe()}function Be(e){e.currentTarget===e.target&&xe()}function Pe(e){e.preventDefault();var t=e.target.elements.query.value;d.cardsBox.innerHTML="",d.sliderContainer.style.display="none",G(),de(t)}function Qe(e){e.preventDefault();var t=!1;e.composedPath().map((function(e){if("BUTTON"===e.nodeName){var n=e.closest(".card-link").dataset.id,r=Number(n);e.classList.contains("in-queue")?ye(e,r):e.classList.contains("in-watched")&&be(e,r),t=!0}if("A"===e.nodeName&&!t){var i=e.dataset.id;d.currentMovieLi=e.closest(".card"),ve(i)}}))}function je(e){var t;e.preventDefault();var n=Number(e.target.closest(".card-link").dataset.id);d.currentMovieLi=null===(t=d.cardsBox.querySelector('[data-id="'.concat(n,'"]')))||void 0===t?void 0:t.closest("li"),console.log("currentMovieLi",d.currentMovieLi),ve(n),d.movieModal.classList.contains("is-hidden")||x.Components.AutoScroll.pause()}document.addEventListener("DOMContentLoaded",(function(){N=document.querySelector(".movie-modal"),R=document.querySelector(".backdrop"),A=N.querySelector("[data-close]"),R.addEventListener("click",I),A.addEventListener("click",I),d.loader=document.querySelector(".lds-ripple"),d.cardsBox=document.querySelector(".cards-box"),d.header=document.querySelector(".header"),d.homeLink=document.querySelector("#home"),d.libraryLink=document.querySelector("#library"),d.logo=document.querySelector("#logo"),d.libraryWatchBtn=document.querySelector("#lib-w"),d.libraryQueBtn=document.querySelector("#lib-q"),d.ourTeamLink=document.querySelector("#our-team"),d.closeModalBtn=document.querySelector('[data-action="close-modal"]'),d.backdrop=document.querySelector(".js-backdrop"),d.teamModal=document.querySelector(".js-team-modal"),d.movieModal=document.querySelector(".movie-modal"),d.searchForm=document.querySelector("#movie-search"),d.sliderContainer=document.querySelector(".splide"),d.sliderList=document.querySelector(".splide__list"),d.observeTarget=document.querySelector(".sentinel"),d.scrollTop=document.querySelector(".scroll-top"),d.body=document.querySelector("body"),d.cardsSection=document.querySelector(".cards-section"),d.pagination=document.querySelector(".pagination"),d.searchInput=document.querySelector(".search-input"),d.cancelBtn=document.querySelector("#cancel");try{d.logo.addEventListener("click",qe),d.homeLink.addEventListener("click",qe),d.libraryLink.addEventListener("click",Te),d.libraryWatchBtn.addEventListener("click",Me),d.libraryQueBtn.addEventListener("click",Ee),d.ourTeamLink.addEventListener("click",Oe),d.closeModalBtn.addEventListener("click",xe),d.backdrop.addEventListener("click",Be),d.searchForm.addEventListener("submit",Pe),d.cardsBox.addEventListener("click",Qe),d.sliderList.addEventListener("click",je),d.scrollTop.addEventListener("click",we),d.cancelBtn.addEventListener("click",(function(){clearTimeout(ge),d.cancelBtn.classList.add("is-hidden"),d.cancelBtn.classList.remove("cancel-animation")}))}catch(e){console.log(e)}de(),O(d.sliderList),Se.getQueue(),Se.getWatched()}));new Q}();
//# sourceMappingURL=index.264880e0.js.map
