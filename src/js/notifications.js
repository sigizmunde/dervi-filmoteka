import Notiflix from 'notiflix';

export { notiflix };

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
  });
  Notiflix.Confirm.init({
    width: '460px',
    borderRadius: '8px',
    backgroundColor: '#FF6B01',
  });
}
function notiflix(status, value) {
  if (status === 'success') {
    Notiflix.Notify.success(`Found ${value} films`);
  } else if (status === 'failure') {
    Notiflix.Notify.failure(`Oops, on yours request ${value} have no films`);
  } else if (status === 'confirm') {
    Notiflix.Confirm.show(
      'Access Failure',
      'Only autorized access',
      'Register/Log In',
      'Cancel',
      function okCb() {
        alert('Open modal for autorization / register');
      },
      function cancelCb() {
        return;
      }
    );
  }
}
