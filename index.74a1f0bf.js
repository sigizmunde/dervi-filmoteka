!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire7d90;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire7d90=i),i.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var a="ed9b8dd4dcf22d9d746c4e21c6321e97",o={},c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t){d.default(e,t),t.add(e)};var u,d=(u=i("5k7tO"))&&u.__esModule?u:{default:u};var h={};function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,n){t&&v(e.prototype,t);n&&v(e,n);return e};var p=document.querySelector(".movie-modal"),m=document.querySelector(".backdrop");function f(e){"BUTTON"!==e.target.nodeName&&(p.classList.remove("open"),p.classList.add("is-hidden"),document.body.classList.remove("modal-open"))}document.querySelector(".card-section");function g(){o.cardsBox.innerHTML=""}function y(e){var t="";e.map((function(e){t+='\n        <li class="card '.concat(e.watchedOrQueueClass,'">\n          <a href="" class="card-link card-button-slider" data-id="').concat(e.id,'">\n              <img\n                src="').concat(e.posterPath,'"\n                class="card-image"\n                alt=""\n              />\n              <div class="card-button-background">\n                <button class="card-button in-watched">watched</button>\n                <button class="card-button in-queue">queue</button>\n              </div>\n            \n              </a>\n              <div class="card-label-wrapper">\n                <div class="card-label-in-watched"></div>\n                <div class="card-label-in-queue"></div>\n              </div>\n            <div class="card-body">\n              <p class="card-title"><b>').concat(e.title,'</b></p>\n              <p class="card-genres"><b>').concat(e.genresInRow(3)," | ").concat(e.releaseDate,"</b></p>\n        </li>")})),function(e){o.cardsBox.innerHTML+=e}(t)}function b(e){var t,n='\n      <div class="movie-picture-box">\n        <img\n          src="'.concat(e.posterPath,'"\n          alt="movie-picture"\n          class="movie-picture"\n        />\n      </div>\n      <div class="info-container">\n        <h1 class="movie-title">').concat(e.title,'</h1>\n        <ul class="movie-list">\n          <li class="movie-items item-right">\n            <div class="description-box">\n              <p class="movie-description">Vote / Votes</p>\n              <p class="movie-description">Popularity</p>\n              <p class="movie-description">Original Title</p>\n              <p class="movie-description">Genre</p>\n            </div>\n          </li>\n          <li class="movie-items">\n            <div class="property-box">\n              <div class="vote-box property">\n                <p class="property-vote property-accent" id="vote">').concat(e.voteAverage,'</p>\n                <span class="vote-slash">/</span>\n                <p class="property-vote property-vote-alt" id="votes">').concat(e.voteCount,'</p>\n              </div>\n              <p class="property" id="popularity">').concat(e.popularity,'</p>\n              <p class="property" id="title">').concat(e.title,'</p>\n              <p class="property" id="genre">').concat(e.genresInRow(),'</p>\n            </div>\n          </li>\n        </ul>\n        <article class="article">\n          <p class="article-caption">About</p>\n          <p class="article-text">\n            ').concat(e.overview,'\n          </p>\n        </article>\n        <div class="button-box">\n          <button class="movie-button primary-btn">add to Watched</button>\n          <button class="movie-button">add to queue</button>\n        </div>\n      </div>');t=n,document.querySelector(".modal-content").innerHTML=t,p.classList.remove("is-hidden"),p.classList.add("open"),document.body.classList.add("modal-open")}var w;w=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"},{"id":1982,"name":"Dummy"}]}');var k=new WeakSet,L=new WeakSet,S=function(){"use strict";function t(){if(e(c)(this,t),e(l)(this,k),e(l)(this,L),t._instance)return t._instance;t._instance=this,this.searchQuery="",this.genres=w.genres,e(s)(this,L,_).call(this)}return e(h)(t,[{key:"getTrending",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={resource:"trending",mediaType:"movie",timeWindow:n?"day":"week",get split(){return"".concat(this.resource,"/").concat(this.mediaType,"/").concat(this.timeWindow)}},i=new URLSearchParams({api_key:a,page:t});return e(s)(this,k,T).call(this,r.split,i)}},{key:"searchMovie",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r={resource:"search",mediaType:"movie",get split(){return"".concat(this.resource,"/").concat(this.mediaType)}},i=new URLSearchParams({api_key:a,page:n,query:t});return e(s)(this,k,T).call(this,r.split,i)}},{key:"getMovie",value:function(t){var n={resource:"movie",id:t,get split(){return"".concat(this.resource,"/").concat(this.id)}},r=new URLSearchParams({api_key:a});return e(s)(this,k,T).call(this,n.split,r)}},{key:"getGenres",value:function(){return this.genres}}]),t}();function T(e,t){return fetch("".concat("https://api.themoviedb.org/3","/").concat(e,"?").concat(t)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function _(){var t=this,n={resource:"genre",mediaType:"movie",list:"list",get split(){return"".concat(this.resource,"/").concat(this.mediaType,"/").concat(this.list)}},r=new URLSearchParams({api_key:a});e(s)(this,k,T).call(this,n.split,r).then((function(e){t.genres=e.genres,console.log("loadGenres complete")}))}var q=new WeakSet,W=new WeakSet,M=function(){"use strict";function t(){if(e(c)(this,t),e(l)(this,q),e(l)(this,W),t._instance)return t._instance;t._instance=this}return e(h)(t,[{key:"getWatched",value:function(){try{var e=localStorage.getItem("watched");return null===e?[]:JSON.parse(e)}catch(e){console.error("Get state error: ",e)}return[]}},{key:"getQueue",value:function(){try{var e=localStorage.getItem("queue");return null===e?[]:JSON.parse(e)}catch(e){console.error("Get state error: ",e)}return[]}},{key:"addToWatched",value:function(t){var n=this.getWatched();n.includes(t)||(n.push(t),e(s)(this,q,x).call(this,n))}},{key:"removeFromWatched",value:function(t){var n=this.getWatched(),r=n.indexOf(t);r<0||(n.splice(r,1),e(s)(this,q,x).call(this,n))}},{key:"addToQueue",value:function(t){var n=this.getQueue();n.includes(t)||(n.push(t),e(s)(this,W,O).call(this,n))}},{key:"removeFromQueue",value:function(t){var n=this.getQueue(),r=n.indexOf(t);r<0||(n.splice(r,1),e(s)(this,W,O).call(this,n))}}]),t}();function x(e){try{localStorage.setItem("watched",JSON.stringify(e))}catch(e){console.error(e)}}function O(e){try{localStorage.setItem("queue",JSON.stringify(e))}catch(e){console.error(e)}}var E=new M,B=new WeakSet,Q=new WeakSet,P=new WeakSet,C=new WeakSet,D=new WeakSet,N=function(){"use strict";function t(n){if(e(c)(this,t),e(l)(this,B),e(l)(this,Q),e(l)(this,P),e(l)(this,C),e(l)(this,D),this.id=n.id,this.posterPath=e(s)(this,D,U).call(this,n.poster_path),this.title=n.title,this.originalTitle=n.original_title,this.popularity=n.popularity,this.genres=n.genre_ids,this.releaseDate=n.release_date.substr(0,4),this.inWatched=e(s)(this,Q,I).call(this),this.inQueue=e(s)(this,P,R).call(this),this.voteAverage=n.vote_average,this.voteCount=n.vote_count,this.popularity=n.popularity,this.overview=n.overview,!this.genres){var r=this;this.genres=[],n.genres.map((function(e){r.genres.push(e.id)}))}}return e(h)(t,[{key:"genresInRow",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e(s)(this,B,j).call(this,t)}},{key:"watchedOrQueueClass",get:function(){return this.inWatched?"in-watched":this.inQueue?"in-queue":""}}]),t}();function j(){for(var t=this,n=function(e){var n=t;if(r&&e===r&&e<t.genres.length-1)return a.push("others"),"break";var o=i.find((function(t){return t.id===n.genres[e]}));o&&a.push(o.name)},r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=e(s)(this,C,F).call(this),a=[],o=0;o<this.genres.length;o++){var c=n(o);if("break"===c)break}return a.join(", ")}function I(){var e=this;return!!E.getWatched().find((function(t){return t===e.id}))}function R(){var e=this;return!!E.getQueue().find((function(t){return t===e.id}))}function F(){return A.getGenres()}function U(e){return"".concat("http://image.tmdb.org/t/p/w500").concat(e)}var A=new S;function G(e){e||A.getTrending().then((function(e){return console.log("Current page: ".concat(e.page,", total page: ").concat(e.total_pages)),e.results})).then((function(e){var t=[];e.map((function(e){var n=new N(e);t.push(n)})),y(t)})).catch((function(e){return console.log(e)}))}function H(e){var t=[];e.forEach((function(e){t.push(A.getMovie(e).then((function(e){return e.genres=e.genres.map((function(e){return e.id})),new N(e)})).catch((function(e){return console.log(e)})))})),Promise.all(t).then((function(e){y(e)}))}function J(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e&&A.searchMovie(e,t).then((function(e){return console.log("Current page: ".concat(e.page,", total page: ").concat(e.total_pages)),e.results})).then((function(e){var t=[];e.map((function(e){var n=new N(e);t.push(n)})),y(t)})).catch((function(e){return console.log(e)}))}o.loader=document.querySelector(".lds-ripple");var V=new M,z=[],K=new IntersectionObserver((function(){if(console.log("i'm scrolling to the infinity"),z.length>6){return void H(z.splice(0,6))}K.unobserve(o.observeTarget),H(z)}),{rootMargin:"0px 0px 200px 0px"});function X(e){e.preventDefault(),o.header.classList.remove("header-library"),o.header.classList.add("header-search"),g(),G()}function Y(e){e.preventDefault(),o.header.classList.remove("header-search"),o.header.classList.add("header-library"),Z()}function Z(){o.libraryWatchBtn.classList.remove("accent-btn"),o.libraryWatchBtn.classList.add("accent-btn"),o.libraryQueBtn.classList.remove("accent-btn"),g(),z=V.getWatched(),K.observe(o.observeTarget)}function $(){o.libraryQueBtn.classList.remove("accent-btn"),o.libraryQueBtn.classList.add("accent-btn"),o.libraryWatchBtn.classList.remove("accent-btn"),g(),z=V.getQueue(),K.observe(o.observeTarget)}function ee(){window.addEventListener("keydown",ne),document.body.classList.add("modal-open")}function te(){window.removeEventListener("keydown",ne),document.body.classList.remove("modal-open")}function ne(e){"Escape"===e.code&&te()}function re(e){e.currentTarget===e.target&&te()}function ie(e){e.preventDefault();var t=e.target.elements.query.value;o.cardsBox.innerHTML="",g(),J(t)}function ae(e){e.preventDefault();var t=!1;e.path.map((function(e){var n;"BUTTON"===e.nodeName&&(e.classList.contains("in-watched")?console.log("onInWatchedBtn()"):e.classList.contains("in-queue")&&console.log("onInQueueBtn()"),t=!0),"A"!==e.nodeName||t||(n=e.dataset.id)&&(A.getMovie(n).then((function(e){b(new N(e))})),o.movieModal.classList.remove("is-hidden"))}))}document.addEventListener("DOMContentLoaded",(function(){p.addEventListener("click",f),m.addEventListener("click",f),o.cardsBox=document.querySelector(".cards-box"),o.header=document.querySelector(".header"),o.homeLink=document.querySelector("#home"),o.libraryLink=document.querySelector("#library"),o.logo=document.querySelector("#logo"),o.libraryWatchBtn=document.querySelector("#lib-w"),o.libraryQueBtn=document.querySelector("#lib-q"),o.ourTeamLink=document.querySelector("#our-team"),o.closeModalBtn=document.querySelector('[data-action="close-modal"]'),o.backdrop=document.querySelector(".js-backdrop"),o.movieModal=document.querySelector(".movie-modal"),o.searchForm=document.querySelector("#movie-search"),o.observeTarget=document.querySelector(".sentinel");try{o.logo.addEventListener("click",X),o.homeLink.addEventListener("click",X),o.libraryLink.addEventListener("click",Y),o.libraryWatchBtn.addEventListener("click",Z),o.libraryQueBtn.addEventListener("click",$),o.ourTeamLink.addEventListener("click",ee),o.closeModalBtn.addEventListener("click",te),o.backdrop.addEventListener("click",re),o.searchForm.addEventListener("submit",ie),o.cardsBox.addEventListener("click",ae)}catch(e){console.log(e)}G()}));for(var oe=new M,ce=[299536,383498,500664,466282,455980,62286,631843,294793,22949,547016,11635,785663,22660,9547,6977,14912,6957,11520,752505,498743,9627,26518,212,156981,13280,15602,282296,498301,72640,69778,488818,11331,43345,543580,429203,31592,40719,83989,297462,74654,59973,44919,28124,915659,78734,9629,913867,40685,79775,44675,40369,351281,25796,55086,248688,967540,121163,620897,67149,85706,59906,88769,983101,309049,75864,29400],se=[489931,454283,421792,429300,857,470918,379686,340102,529203,11688,755812,18239,11596,62838,597316,820446,13417,11699,10985,975278,13931,3131,772,11025,1103,12637,14011,4960,3681,214597,10952,13761,928,15363,277432,9686,14536,9262,10641,11400,553903,37534,183443,567220,79723,382272,9731,95608,10473,497864,5227,21430,30874,9558,46523,496274,10281,299513,18222,197696,19616,4728,12572,396398,11308,36850],le=0;le<ce.length;le+=1)oe.addToWatched(ce[le]);for(var ue=0;ue<se.length;ue+=1)oe.addToQueue(se[ue])}();
//# sourceMappingURL=index.74a1f0bf.js.map
