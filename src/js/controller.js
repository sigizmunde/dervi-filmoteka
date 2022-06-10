// module for interface elements and their event listeners

import { API_KEY, refs } from './global';
import { getMovieList } from './movies';
import { openModal } from './modal';

export function init() {
  //refs, event listeners, genres request, popular movies request
  
  refs.cardsBox = document.querySelector('.cards-box');
  refs.header = document.querySelector('.header');
  refs.homeLink = document.querySelector('#home');
  refs.libraryLink = document.querySelector('#library');
  refs.logo = document.querySelector('#logo');
  refs.libraryWatchBtn = document.querySelector('#lib-w');
  refs.libraryQueBtn = document.querySelector('#lib-q');
  refs.movieModal = document.querySelector('.modal');

  refs.logo.addEventListener('click', onHomeLinkClick);
  refs.homeLink.addEventListener('click', onHomeLinkClick);
  refs.libraryLink.addEventListener('click', onLibraryLinkClick);
  refs.libraryWatchBtn.addEventListener('click', onLibraryWatchBtnClick);
  refs.libraryQueBtn.addEventListener('click', onLibraryQueBtnClick);
  // refs.movieModal.addEventListener('click', onCloseClick);
  
  getMovieList();

  // before getMovieList()
  // refs.cardLinks = document.querySelectorAll('.card-link');

  // console.log(refs.cardLinks)

  // refs.cardLinks.forEach(cardLink => {
  //   console.log(cardLink);
  //   cardLink.addEventListener('click', () => {
  //     event.preventDefault();
  //     console.log(refs.cardLink)
  //   });
  // });  


}

function onHomeLinkClick(event) {
  event.preventDefault();
  refs.header.classList.remove('header-library');
  refs.header.classList.add('header-search');
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
}

function onLibraryQueBtnClick() {
  refs.libraryQueBtn.classList.remove('accent-btn');
  refs.libraryQueBtn.classList.add('accent-btn');
  refs.libraryWatchBtn.classList.remove('accent-btn');
}
