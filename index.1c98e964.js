!function(){var e=document.querySelector(".modal");e.addEventListener("click",(function(n){if("BUTTON"!==n.target.nodeName)return;e.classList.remove("open"),e.classList.add("is-hidden")}));var n="8302862792abaeee103b53516f1a680a",t="https://api.themoviedb.org/3/",a="https://image.tmdb.org/t/p/w342/",c=document.querySelector(".container"),r=document.querySelector(".movie-search"),o=document.querySelector(".nav-home");console.log(o),r.addEventListener("submit",(function(e){e.preventDefault(),r=e.target.elements.query.value,fetch("".concat(t,"search/movie?api_key=").concat(n,"&query=").concat(r,"&language=en-US&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){console.log(e.genres),c.innerHTML="",function(e){console.log(e);var n=e.map((function(e){var n=e.poster_path,t=e.title,c=e.name;return'<div class="card">\n      <a href="" class="card-link">\n        <img src="'.concat(a).concat(n,'" class="card-image" alt="" />\n        <div class="card-body">\n          <p class="card-title"><b>').concat(t||c,'</b></p>          \n          <p class="card-genres"><b>Genres..</b></p>          \n        </div>\n      </a>\n    </div>')})).join("");c.insertAdjacentHTML("beforeend",n)}(e.results)})).catch((function(e){alert(e)}));var r})),e.classList.remove("is-hidden"),e.classList.add("open")}();
//# sourceMappingURL=index.1c98e964.js.map
