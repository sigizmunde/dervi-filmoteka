!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=n.parcelRequire7d90;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},n.parcelRequire7d90=i),i.register("5k7tO",(function(e,n){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,n){if(n.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var a="ed9b8dd4dcf22d9d746c4e21c6321e97",o={};function c(e){e.results.map((function(e){var n=T(e.genre_ids,2);o.cardsBox.innerHTML+='\n          <li class="card">\n            <a href="" class="card-link" movie-id="'.concat(e.id,'">\n              <img\n                src="').concat("http://image.tmdb.org/t/p/w500").concat(e.poster_path,'"\n                class="card-image"\n                alt=""\n              />\n              <div class="card-body">\n                <p class="card-title"><b>').concat(e.original_title,'</b></p>\n                <p class="card-genres"><b>').concat(n," | ").concat(e.release_date.substr(0,4),"</b></p>\n              </div>\n            </a>\n          </li>")}))}var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")};var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,n,t){if(!n.has(e))throw new TypeError("attempted to get private field on non-instance");return t};var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,n){f.default(e,n),n.add(e)};var l,f=(l=i("5k7tO"))&&l.__esModule?l:{default:l};var h={};function m(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,n,t){n&&m(e.prototype,n);t&&m(e,t);return e};var p;p=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"},{"id":1982,"name":"Dummy"}]}');var v=new WeakSet,g=new WeakSet,y=function(){"use strict";function n(){if(e(s)(this,n),e(u)(this,v),e(u)(this,g),n._instance)return n._instance;n._instance=this,this.searchQuery="",this.genres=p.genres,e(d)(this,g,w).call(this)}return e(h)(n,[{key:"getTrending",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={resource:"trending",mediaType:"movie",timeWindow:t?"day":"week",get split(){return"".concat(this.resource,"/").concat(this.mediaType,"/").concat(this.timeWindow)}},i=new URLSearchParams({api_key:a,page:n});return e(d)(this,v,b).call(this,r.split,i)}},{key:"searchMovie",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r={resource:"search",mediaType:"movie",get split(){return"".concat(this.resource,"/").concat(this.mediaType)}},i=new URLSearchParams({api_key:a,page:t,query:n});return e(d)(this,v,b).call(this,r.split,i)}},{key:"getMovie",value:function(n){var t={resource:"movie",id:n,get split(){return"".concat(this.resource,"/").concat(this.id)}},r=new URLSearchParams({api_key:a});return e(d)(this,v,b).call(this,t.split,r)}},{key:"getGenres",value:function(){return this.genres}}]),n}();function b(e,n){return fetch("".concat("https://api.themoviedb.org/3","/").concat(e,"?").concat(n)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function w(){var n=this,t={resource:"genre",mediaType:"movie",list:"list",get split(){return"".concat(this.resource,"/").concat(this.mediaType,"/").concat(this.list)}},r=new URLSearchParams({api_key:a});e(d)(this,v,b).call(this,t.split,r).then((function(e){n.genres=e.genres,console.log("loadGenres complete")}))}var _=new y;function k(){return _.getGenres()}function T(){for(var e=function(e){if(t&&e===t&&e<n.length-1)return i.push("others"),"break";var a=r.find((function(t){return t.id===n[e]}));a&&i.push(a.name)},n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=k(),i=[],a=0;a<n.length;a++){var o=e(a);if("break"===o)break}return i.join(", ")}document.addEventListener("DOMContentLoaded",(function(){var e;o.cardsBox=document.querySelector(".cards-box"),e||_.getTrending().then((function(e){c(e)})).catch((function(e){return console.log(e)}))}))}();
//# sourceMappingURL=index.5a5dd658.js.map