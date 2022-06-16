import Notiflix from 'notiflix';

export { notiflix };

if (window.matchMedia('(max-width: 767px)').matches) {
  Notiflix.Notify.init({
    width: '250px',
    position: 'right-top', //'center' - 'center-top' - 'center-bottom' - 'right-top' - 'right-center' - 'right-bottom' - 'left-top' - 'left-center' - 'left-bottom'
    distance: '72px',
    clickToClose: 'true',
    fontFamily: 'Roboto',
    fontSize: '12px',
    cssAnimationStyle: 'from-right',
    useIcon: false,
    // timeout: 30000,

    success: {
      background: '#FF6B01',
    },
    failure: {
      background: '#cd2626',
      textColor: '#fff',
    },
  });
  Notiflix.Confirm.init({
    width: '260px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    fontFamily: 'Roboto',
    cssAnimationStyle: 'zoom', // 'zoom' - 'fade'
    backOverlay: true,
    backOverlayColor: 'rgba(0,0,0,0.3)',

    titleColor: '#1e1e1e',
    titleFontSize: '19px',
    titleMaxLength: 25,

    messageColor: '#1e1e1e',
    messageFontSize: '17px',
    messageMaxLength: 90,

    buttonsFontSize: '15px',
    buttonsMaxLength: 34,
    okButtonColor: '#ffffff',
    okButtonBackground: '#FF6B01',
    cancelButtonColor: '#000000',
    cancelButtonBackground: '#9d9792',
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
    failure: {
      background: '#cd2626',
      textColor: '#fff',
      distance: '190px',
    },
  });
  Notiflix.Confirm.init({
    width: '460px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    fontFamily: 'Roboto',
    cssAnimationStyle: 'zoom', // 'zoom' - 'fade'
    backOverlay: true,
    backOverlayColor: 'rgba(0,0,0,0.3)',

    titleColor: '#1e1e1e',
    titleFontSize: '24px',
    titleMaxLength: 36,

    messageColor: '#1e1e1e',
    messageFontSize: '20px',
    messageMaxLength: 100,

    buttonsFontSize: '17px',
    buttonsMaxLength: 34,
    okButtonColor: '#ffffff',
    okButtonBackground: '#FF6B01',
    cancelButtonColor: '#000000',
    cancelButtonBackground: '#9d9792',
  });
}
function notiflix(status, value) {
  if (status === 'search') {
    Notiflix.Notify.success(`Found ${value} films`);
  } else if (status === 'openWatchedLibrary') {
    Notiflix.Notify.success(`Watched library count ${value} films`);
  } else if (status === 'openQueueLibrary') {
    Notiflix.Notify.success(`In yours queue ${value} films`);
  } else if (status === 'addInWatched') {
    Notiflix.Notify.success(`Added in watched list`);
  } else if (status === 'addInQueue') {
    Notiflix.Notify.success(`Added in queue list`);
  } else if (status === 'removeFromWatched') {
    Notiflix.Notify.success(`Removed from watched list`);
  } else if (status === 'removeFromQueue') {
    Notiflix.Notify.success(`Removed from queue list`);
  } else if (status === 'failure') {
    Notiflix.Notify.failure(`Oops, on yours request have no films`);
  } else if (status === 'loginFailed') {
    Notiflix.Notify.failure(`This login already registered`);
  }
  // else if (status === 'removeFromQueue') {
  //   Notiflix.Notify.failure(`Removed from queue list`);
  // }
  else if (status === 'authorization') {
    Notiflix.Confirm.show(
      'Access Failure', //modal window Title
      'Register or login to get access to library', //modal window main text
      'Register/Log In', //button OK  "okCb"
      'Cancel', //button Cancel  "cancelCb"
      function okCb() {
        alert('Open modal for authorization / register');
      },
      function cancelCb() {
        return;
      }
    );
  }
}
