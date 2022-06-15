import { refs } from './global';

const DELAY = 500;

export const showLoader = () => {
  try {
    refs.loader.classList.remove('is-hidden');
  } catch (err) {
    console.log('loader failed ', err);
  }
};

export const hideLoader = () => {
  try {
    refs.loader.classList.add('is-hidden');
  } catch (err) {
    console.log('loader failed ', err);
  }
};

// window.onload = function () {
//     showLoader();
//     window.setTimeout(hideLoader(), DELAY);
// }

// window.onload = function () {
//     document.body.classList.add('loaded-hiding');
//     window.setTimeout(function () {
//         document.body.classList.add('loaded');
//         document.body.classList.remove('loaded-hiding');
//     }, DELAY);
// }
