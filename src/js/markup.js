// module for all the functions generating markup
const cardSection = document.querySelector('.card-section');

export function showMovies() {
  const markup = results
    .map(
      ({ poster_path, title, name }) => `
      <li class="card">
        <a href="" class="card-link">
          <div class="card-button-slider">
            <img src="${IMAGE_PATH}${poster_path}" class="card-image" alt="" />
            <div class="card-button-background">
             <button class="card-button in-watched">watched</button>
              <button class="card-button in-queue">queue</button>
             </div>
          </div>
          <div class="card-label-wrapper">
            <div class="card-label-in-watched"></div>
            <div class="card-label-in-queue"></div>
          </div>
          <div class="card-body">
            <p class="card-title"><b>${title || name}</b></p>          
           <p class="card-genres"><b>Genres..</b></p>          
          </div>
        </a>
      </li>`
    )
    .join('');

  return cardSection.insertAdjacentHTML('beforeend', markup);
}

export function showMovieInfo() {}
