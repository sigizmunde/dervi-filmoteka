const e=document.querySelector(".modal");e.addEventListener("click",(function(n){if("BUTTON"!==n.target.nodeName)return;e.classList.remove("open"),e.classList.add("is-hidden")}));const n=document.querySelector(".container"),t=document.querySelector(".movie-search"),a=document.querySelector(".nav-home");console.log(a),t.addEventListener("submit",(function(e){e.preventDefault();t=e.target.elements.query.value,fetch(`https://api.themoviedb.org/3/search/movie?api_key=8302862792abaeee103b53516f1a680a&query=${t}&language=en-US&page=1&include_adult=false`).then((e=>e.json())).then((e=>{console.log(e.genres),n.innerHTML="",function(e){console.log(e);const t=e.map((({poster_path:e,title:n,name:t})=>`<div class="card">\n      <a href="" class="card-link">\n        <img src="https://image.tmdb.org/t/p/w342/${e}" class="card-image" alt="" />\n        <div class="card-body">\n          <p class="card-title"><b>${n||t}</b></p>          \n          <p class="card-genres"><b>Genres..</b></p>          \n        </div>\n      </a>\n    </div>`)).join("");n.insertAdjacentHTML("beforeend",t)}(e.results)})).catch((e=>{alert(e)}));var t})),e.classList.remove("is-hidden"),e.classList.add("open");
//# sourceMappingURL=index.6a545404.js.map
