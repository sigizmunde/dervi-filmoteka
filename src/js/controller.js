// module for interface elements and their event listeners

import { API_KEY, refs, moviesCashe } from './global';
import {
  getMovieList,
  getMovieInfo,
  getAndShowLibrary,
  getPremiers,
} from './movies';
import { modalInit, closeModal } from './modal';
import { clearMovies } from './markup';
import { showLoader, hideLoader } from './loader';
import { notiflix } from './notifications';
import { showSliderMovies, splide } from './slider';

import { DataStorage } from './data';
import { onQueueBtnCard, onWatchedBtnCard, timerID } from './action-card-btn';

import { onClickScrollTop } from './scroll-to-top';
import { hidePagination } from './pagination';

// import Auth from './auth';
import { addClassDarkToHTML } from './switch-theme';

const data = new DataStorage();

const SCROLL_PAGE_LEN = 6;
let currentLibraryArr = [];
const pageObserver = new IntersectionObserver(onScroll, {
  rootMargin: '0px 0px 200px 0px',
});

export function init() {
  //refs, event listeners, genres request, popular movies request
  // showLoader();
  // hideLoader();
  addClassDarkToHTML();

  if (!moviesCashe.state) {
    moviesCashe.state = [];
  }
  modalInit();
  refs.loader = document.querySelector('.lds-ripple');
  refs.cardsBox = document.querySelector('.cards-box');
  refs.header = document.querySelector('.header');
  refs.homeLink = document.querySelector('#home');
  refs.libraryLink = document.querySelector('#library');
  refs.logo = document.querySelector('#logo');
  refs.libraryWatchBtn = document.querySelector('#lib-w');
  refs.libraryQueBtn = document.querySelector('#lib-q');
  refs.emptyLibBtn = document.querySelector('.empty-library-btn');
  refs.ourTeamLink = document.querySelector('#our-team');
  refs.closeModalBtn = document.querySelector('[data-action="close-modal"]');
  refs.backdrop = document.querySelector('.js-backdrop');
  refs.teamModal = document.querySelector('.js-team-modal');
  refs.movieModal = document.querySelector('.movie-modal');
  refs.searchForm = document.querySelector('#movie-search');
  refs.sliderContainer = document.querySelector('.splide');
  refs.sliderList = document.querySelector('.splide__list');
  refs.observeTarget = document.querySelector('.sentinel');
  refs.scrollTop = document.querySelector('.scroll-top');
  refs.body = document.querySelector('body');
  refs.cardsSection = document.querySelector('.cards-section');
  refs.pagination = document.querySelector('.pagination');
  refs.searchInput = document.querySelector('.search-input');
  refs.cancelBtn = document.querySelector('#cancel');
  refs.tempCardWrap = document.createElement('div');
  refs.currentMovieLi;
  //   refs.loginSignoutBtn = document.getElementById('login-btn');
  try {
    refs.logo.addEventListener('click', onHomeLinkClick);
    refs.homeLink.addEventListener('click', onHomeLinkClick);
    refs.libraryLink.addEventListener('click', onLibraryLinkClick);
    refs.libraryWatchBtn.addEventListener('click', onLibraryWatchBtnClick);
    refs.libraryQueBtn.addEventListener('click', onLibraryQueBtnClick);
    refs.emptyLibBtn.addEventListener('click', onHomeLinkClick);
    refs.ourTeamLink.addEventListener('click', openTeamModal);
    refs.closeModalBtn.addEventListener('click', closeTeamModal);
    window.addEventListener('keydown', checkKeyPress);
    refs.backdrop.addEventListener('click', onBackdropClick);
    refs.searchForm.addEventListener('submit', onMoviesSearch);
    refs.cardsBox.addEventListener('click', onActionMovieCard);
    refs.sliderList.addEventListener('click', onSliderClick);
    refs.scrollTop.addEventListener('click', onClickScrollTop);
    refs.cancelBtn.addEventListener('click', () => {
      onCancelBtnClick(timerID);
    });
    // const auth = new Auth();
    // auth.makeAuthForm();
  } catch (error) {
    console.log(error);
  }
  getMovieList();
  showSliderMovies(refs.sliderList);

  // when init page, check localStorage
  data.getQueue();
  data.getWatched();
}

export function onHomeLinkClick(event) {
  event.preventDefault();
  // location.reload();
  refs.header.classList.remove('header-library');
  refs.header.classList.add('header-search');
  refs.cardsSection.classList.remove('empty-library');
  refs.cardsBox.classList.remove('hide-labels');
  refs.sliderContainer.classList.remove('splide--hidden');

  pageObserver.unobserve(refs.observeTarget);

  refs.searchInput.value = '';
  clearMovies();
  getMovieList();
}

function onLibraryLinkClick(event) {
  event.preventDefault();
  refs.header.classList.remove('header-search');
  refs.header.classList.add('header-library');
  refs.cardsBox.classList.add('hide-labels');
  refs.libraryWatchBtn.classList.add('accent-btn');
  refs.libraryQueBtn.classList.remove('accent-btn');
  refs.cardsSection.classList.remove('empty-main-library');
  refs.sliderContainer.classList.add('splide--hidden');

  // refs.libraryLink.addEventListener('click', notiflix('authorization', '5000'));
  hidePagination();
  if (data.getWatched().length === 0) {
    refs.cardsSection.classList.add('empty-library');
  } else {
    onLibraryWatchBtnClick();
  }
}

function onLibraryWatchBtnClick() {
  refs.libraryWatchBtn.classList.remove('accent-btn');
  refs.libraryWatchBtn.classList.add('accent-btn');
  refs.libraryQueBtn.classList.remove('accent-btn');
  currentLibraryArr = data.getWatched();
  // currentLibraryArr.forEach(movie => moviesCashe.state.push(movie));
  if (currentLibraryArr.length === 0) {
    refs.cardsSection.classList.add('empty-library');
  } else {
    refs.cardsSection.classList.remove('empty-library');
    clearMovies();
    // getAndShowLibrary(currentLibraryArr);
    pageObserver.observe(refs.observeTarget);
  }
  // clearMovies();
}

function onLibraryQueBtnClick() {
  refs.libraryQueBtn.classList.remove('accent-btn');
  refs.libraryQueBtn.classList.add('accent-btn');
  refs.libraryWatchBtn.classList.remove('accent-btn');
  currentLibraryArr = data.getQueue();
  // currentLibraryArr.forEach(movie => moviesCashe.state.push(movie));
  if (currentLibraryArr.length === 0) {
    refs.cardsSection.classList.add('empty-library');
  } else {
    refs.cardsSection.classList.remove('empty-library');
    clearMovies();
    pageObserver.observe(refs.observeTarget);
  }
}

function openTeamModal() {
  // window.addEventListener('keydown', checkKeyPress);
  refs.teamModal.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
}

function closeTeamModal() {
  // window.removeEventListener('keydown', checkKeyPress);
  refs.teamModal.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
}

function checkKeyPress(event) {
  if (event.code === 'Escape') {
    closeTeamModal();
    closeModal();
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeTeamModal();
    closeModal();
  }
}

function onMoviesSearch(event) {
  event.preventDefault();
  const query = event.target.elements.query.value;
  refs.cardsBox.innerHTML = '';
  if (query) {
    refs.sliderContainer.classList.add('splide--hidden');
  } else {
    refs.sliderContainer.classList.remove('splide--hidden');
  }
  clearMovies();
  getMovieList(query.trim());
}

function onActionMovieCard(event) {
  event.preventDefault();

  let btnClicked = false;

  event.composedPath().map(currentMovieLink => {
    // check btn events on the movie card and add/delete to/from the library
    if (currentMovieLink.nodeName === 'BUTTON') {
      const currentMovieId = currentMovieLink.closest('.card-link').dataset.id;
      const currentMovieIdNum = Number(currentMovieId);

      if (currentMovieLink.classList.contains('in-queue')) {
        onQueueBtnCard(currentMovieLink, currentMovieIdNum);
      } else if (currentMovieLink.classList.contains('in-watched')) {
        onWatchedBtnCard(currentMovieLink, currentMovieIdNum);
      }
      btnClicked = true;
    }

    // catch a movie link and open the movie modal
    if (currentMovieLink.nodeName === 'A' && !btnClicked) {
      const currentMovieId = currentMovieLink.dataset.id;
      refs.currentMovieLi = currentMovieLink.closest('.card');

      getMovieInfo(currentMovieId);
    }
  });
}

function onScroll() {
  // console.log(`i'm scrolling to the infinity`);
  if (currentLibraryArr.length > SCROLL_PAGE_LEN) {
    const newPage = currentLibraryArr.splice(0, SCROLL_PAGE_LEN);
    getAndShowLibrary(newPage);
    return;
  }
  pageObserver.unobserve(refs.observeTarget);
  getAndShowLibrary(currentLibraryArr);
}

function onSliderClick(evt) {
  evt.preventDefault();
  const id = Number(evt.target.closest('.card-link').dataset.id);

  //search card in cardsBox if it exists (or even if not)
  refs.currentMovieLi = refs.cardsBox
    .querySelector(`[data-id="${id}"]`)
    ?.closest('li');

  getMovieInfo(id);
  if (!refs.movieModal.classList.contains('is-hidden')) {
    splide.Components.AutoScroll.pause();
  }
}

function onCancelBtnClick(timerID) {
  clearTimeout(timerID);
  refs.cancelBtn.classList.add('is-hidden');
  refs.cancelBtn.classList.remove('cancel-animation');
}
