// module for interface elements and their event listeners

import { API_KEY, refs, watchedIdArr, queueIdArr } from './global';
import {
  getMovieList,
  searchMovies,
  getMovieInfo,
  getAndShowLibrary,
} from './movies';
import { modalInit } from './modal';
import { clearMovies } from './markup';
import { showLoader, hideLoader } from './loader';

import { DataStorage } from './data';
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

  modalInit();
  refs.cardsBox = document.querySelector('.cards-box');
  refs.header = document.querySelector('.header');
  refs.homeLink = document.querySelector('#home');
  refs.libraryLink = document.querySelector('#library');
  refs.logo = document.querySelector('#logo');
  refs.libraryWatchBtn = document.querySelector('#lib-w');
  refs.libraryQueBtn = document.querySelector('#lib-q');
  refs.ourTeamLink = document.querySelector('#our-team');
  refs.closeModalBtn = document.querySelector('[data-action="close-modal"]');
  refs.backdrop = document.querySelector('.js-backdrop');
  refs.movieModal = document.querySelector('.movie-modal');
  refs.searchForm = document.querySelector('#movie-search');
  refs.observeTarget = document.querySelector('.sentinel');

  try {
    refs.logo.addEventListener('click', onHomeLinkClick);
    refs.homeLink.addEventListener('click', onHomeLinkClick);
    refs.libraryLink.addEventListener('click', onLibraryLinkClick);
    refs.libraryWatchBtn.addEventListener('click', onLibraryWatchBtnClick);
    refs.libraryQueBtn.addEventListener('click', onLibraryQueBtnClick);
    refs.ourTeamLink.addEventListener('click', openTeamModal);
    refs.closeModalBtn.addEventListener('click', closeTeamModal);
    refs.backdrop.addEventListener('click', onBackdropClick);
    refs.searchForm.addEventListener('submit', onMoviesSearch);
    refs.cardsBox.addEventListener('click', openMovieModal);
  } catch (error) {
    console.log(error);
  }

  getMovieList();
}

function onHomeLinkClick(event) {
  event.preventDefault();
  // location.reload();
  refs.header.classList.remove('header-library');
  refs.header.classList.add('header-search');
  clearMovies();
  getMovieList();
}

function onLibraryLinkClick(event) {
  event.preventDefault();
  refs.header.classList.remove('header-search');
  refs.header.classList.add('header-library');
  onLibraryWatchBtnClick();
}

function onLibraryWatchBtnClick() {
  refs.libraryWatchBtn.classList.remove('accent-btn');
  refs.libraryWatchBtn.classList.add('accent-btn');
  refs.libraryQueBtn.classList.remove('accent-btn');
  clearMovies();
  currentLibraryArr = data.getWatched();
  pageObserver.observe(refs.observeTarget);
}

function onLibraryQueBtnClick() {
  refs.libraryQueBtn.classList.remove('accent-btn');
  refs.libraryQueBtn.classList.add('accent-btn');
  refs.libraryWatchBtn.classList.remove('accent-btn');
  clearMovies();
  currentLibraryArr = data.getQueue();
  pageObserver.observe(refs.observeTarget);
}

function openTeamModal() {
  window.addEventListener('keydown', checkKeyPress);
  document.body.classList.add('modal-open');
}

function closeTeamModal() {
  window.removeEventListener('keydown', checkKeyPress);
  document.body.classList.remove('modal-open');
}

function checkKeyPress(event) {
  if (event.code === 'Escape') {
    closeTeamModal();
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeTeamModal();
  }
}

function onMoviesSearch(event) {
  event.preventDefault();
  const query = event.target.elements.query.value;
  refs.cardsBox.innerHTML = '';
  clearMovies();
  searchMovies(query);
}

function openMovieModal(event) {
  event.preventDefault();

  event.path.map(currentMovieLink => {
    if (currentMovieLink.nodeName === 'A') {
      // Open modal
      // refs.movieModal.classList.remove('is-hidden');

      // // Load movie detail
      // console.log(currentMovieLink.getAttribute("movie-id"));
      getMovieInfo(currentMovieLink.getAttribute('movie-id'));

      event.stopPropagation();
    }
  });
}

function onScroll() {
  console.log(`i'm scrolling to the infinity`);
  if (currentLibraryArr.length > SCROLL_PAGE_LEN) {
    const newPage = currentLibraryArr.splice(0, SCROLL_PAGE_LEN);
    getAndShowLibrary(newPage);
    return;
  }
  pageObserver.unobserve(refs.observeTarget);
  getAndShowLibrary(currentLibraryArr);
}
