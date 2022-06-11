// module for interface elements and their event listeners

import { API_KEY, refs, watchedIdArr, queueIdArr } from './global';
import {
  getMovieList,
  searchMovies,
  getMovieInfo,
  getAndShowLibrary,
} from './movies';
import { modalInit } from './modal';
import { showLoader, hideLoader } from './loader';
import { DataStorage } from './data';
const data = new DataStorage();
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
  refs.cardsSection = document.querySelector('.cards-section');
  refs.pagination = document.querySelector('.pagination');
  refs.cardLabelWrapper = document.querySelector('.card-label-wrapper');

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

    // refs.movieModal.addEventListener('click', onCloseClick);
  } catch (error) {
    console.log(error);
  }

  getMovieList();
}

function onHomeLinkClick(event) {
  // event.preventDefault();
  refs.header.classList.remove('header-library');
  refs.header.classList.add('header-search');
  refs.pagination.classList.remove('on-empty-library');
}

function onLibraryLinkClick(event) {
  event.preventDefault();
  refs.header.classList.remove('header-search');
  refs.header.classList.add('header-library');
  refs.pagination.classList.add('on-empty-library');
  refs.cardLabelWrapper;
  onLibraryWatchBtnClick();
}

function onLibraryWatchBtnClick() {
  refs.libraryWatchBtn.classList.remove('accent-btn');
  refs.libraryWatchBtn.classList.add('accent-btn');
  refs.libraryQueBtn.classList.remove('accent-btn');
  if (data.getWatched().length === 0) {
    refs.cardsSection.classList.add('empty-library');
    refs.pagination.classList.add('on-empty-library');
    return;
  } else {
    refs.cardsSection.classList.remove('empty-library');
    getAndShowLibrary(data.getWatched());
  }
}

function onLibraryQueBtnClick() {
  refs.libraryQueBtn.classList.remove('accent-btn');
  refs.libraryQueBtn.classList.add('accent-btn');
  refs.libraryWatchBtn.classList.remove('accent-btn');
  if (data.getQueue().length === 0) {
    refs.cardsSection.classList.add('empty-library');
    refs.pagination.classList.add('on-empty-library');
    return;
  } else {
    getAndShowLibrary(data.getQueue());
    refs.cardsSection.classList.remove('empty-library');
  }
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
