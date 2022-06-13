import Notiflix from 'notiflix';

export { notiflix };

// Notiflix.Notify.init({
//   width: '170px',
//   position: 'center-top',
//   distance: '72px',
//   clickToClose: 'true',
//   fontFamily: 'Roboto',
//   fontSize: '14px',
//   cssAnimationStyle: 'from-right',
//   useIcon: false,
//   //   timeout: 30000,

//   success: {
//     background: '#FF6B01',
//   },
// });
if (window.matchMedia('(max-width: 767px)').matches) {
  Notiflix.Notify.init({
    width: '200px',
    position: 'center-top',
    distance: '72px',
    clickToClose: 'true',
    fontFamily: 'Roboto',
    fontSize: '14px',
    cssAnimationStyle: 'from-right',
    useIcon: false,
    //   timeout: 30000,

    success: {
      background: '#FF6B01',
    },
  });
} else if (window.matchMedia('(min-width: 768px)').matches) {
  Notiflix.Notify.init({
    width: '360px',
    position: 'center-top',
    distance: '72px',
    clickToClose: 'true',
    fontFamily: 'Roboto',
    fontSize: '16px',
    cssAnimationStyle: 'from-right',
    useIcon: false,
    //   timeout: 30000,

    success: {
      background: '#FF6B01',
    },
  });
}
function notiflix(status, value) {
  if (status === 'success') {
    Notiflix.Notify.success(`Found ${value} films`);
  } else if (status === 'failure') {
    Notiflix.Notify.failure(`Oops, on yours request ${value} have no films`);
  }
}
