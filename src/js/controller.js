// module for interface elements and their event listeners

import { API_KEY, refs } from './global';
import { getMovieList } from './movies';

export function init() {
  //refs, event listeners, genres request, popular movies request
  refs.cardsBox = document.querySelector('.cards-box');
  refs.header = document.querySelector('.header');
  refs.homePage = document.querySelector('#home');
  refs.libraryPage = document.querySelector('#library');
  refs.logoPage = document.querySelector('#logo');
  refs.libWatch = document.querySelector('#lib-w');
  refs.libQue = document.querySelector('#lib-q');

  refs.logoPage.addEventListener('click', onLogoPageClick);
  refs.homePage.addEventListener('click', onHeaderPageClick);
  refs.libraryPage.addEventListener('pageshow', onLibraryPageClick);
  refs.libWatch.addEventListener('click', onWatchBtnClick);
  refs.libQue.addEventListener('click', onQueBtnClick);
  getMovieList();
}

function onHeaderPageClick() {
  refs.header.classList.remove('header-library');
  refs.header.classList.add('header-search');
}

function onLibraryPageClick() {
  refs.header.classList.remove('header-search');
  refs.header.classList.add('header-library');
  onWatchBtnClick();
}

function onLogoPageClick() {
  if (onHeaderPageClick) {
    console.log('hello from Home');
  }
  onHeaderPageClick();
}
function onWatchBtnClick() {
  refs.libWatch.classList.remove('accent-btn');
  refs.libWatch.classList.add('accent-btn');
  refs.libQue.classList.remove('accent-btn');
}

function onQueBtnClick() {
  refs.libQue.classList.remove('accent-btn');
  refs.libQue.classList.add('accent-btn');
  refs.libWatch.classList.remove('accent-btn');
}
