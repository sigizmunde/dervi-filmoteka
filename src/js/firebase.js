import { DataStorage } from './data';

import Notiflix from 'notiflix';
import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  get,
  child,
  set,
  onValue,
  push,
  update,
} from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { onHomeLinkClick } from './controller';
import { closeModal } from './modal';

const localData = new DataStorage();
const firebaseConfig = {
  apiKey: 'AIzaSyDo1183-PB_7A9qygtI9_TfvjKvLJSyPDA',
  authDomain: 'test-firebase-377da.firebaseapp.com',
  databaseURL: 'https://test-firebase-377da-default-rtdb.firebaseio.com',
  projectId: 'test-firebase-377da',
  storageBucket: 'test-firebase-377da.appspot.com',
  messagingSenderId: '1000137961183',
  appId: '1:1000137961183:web:a6ceb146b1a5991749c36a',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
const dbRef = ref(getDatabase(app));
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginSignupBtn = document.getElementById('login-btn');
const markup = `<div class="form-structor">
      <form id="register-form" class="signup">
        <h2 class="form-title" id="signup"><span>or</span>Sign up</h2>
        <div class="form-holder">
          <input type="text" id="register-name" class="input" placeholder="Name" />
          <input type="email" id="register-email" class="input" placeholder="Email" />
          <input type="password" id="register-password" class="input" placeholder="Password" />
        </div>
        <button type="submit" id="register-btn" class="submit-btn">Sign up</button>
      </form>
      <div class="login slide-up">
        <div class="center">
          <h2 class="form-title" id="login"><span>or</span>Log in</h2>
          <div class="form-holder">
            <input type="email" id="login-email" class="input" placeholder="Email" />
            <input type="password" id="login-password" class="input" placeholder="Password" />
          </div>
    	   		    <button type="button" id="register-btn1" class="submit-btn" form="register-form">
           Log in with Google
         </button>
          <button id="register-btn2" class="submit-btn">Log in</button>
        </div>
      </div>
    </div>`;

loginSignupBtn.addEventListener('click', makeRegisterFormRender);

function makeRegisterFormRender() {
  document.querySelector('.movie-modal').classList.remove('is-hidden');
  document.querySelector('.movie-modal').classList.add('modal-register');

  document.querySelector('body').classList.add('modal-open');
  document.querySelector('.modal-content').innerHTML = markup;

  const loginBtn = document.getElementById('login');
  const signupBtn = document.getElementById('signup');

  const registerFormBtn = document.getElementById('register-btn');
  const loginFormBtn = document.getElementById('register-btn2');
  const loginWithGoogleBtn = document.getElementById('register-btn1');

  switchToLoginForm(loginBtn, signupBtn);
  switchToSignupForm(signupBtn, loginBtn);

  registerFormBtn.addEventListener('click', onSignupBtnClick);
  loginFormBtn.addEventListener('click', onLoginBtnClick);
  loginWithGoogleBtn.addEventListener('click', onLoginWithGoogleBtnClick);
}

function switchToLoginForm(loginBtn, signupBtn) {
  loginBtn.addEventListener('click', e => {
    let parent = e.target.parentNode.parentNode;
    Array.from(e.target.parentNode.parentNode.classList).find(element => {
      if (element !== 'slide-up') {
        parent.classList.add('slide-up');
      } else {
        signupBtn.parentNode.classList.add('slide-up');
        parent.classList.remove('slide-up');
      }
    });
  });
}
function switchToSignupForm(signupBtn, loginBtn) {
  signupBtn.addEventListener('click', e => {
    let parent = e.target.parentNode;
    Array.from(e.target.parentNode.classList).find(element => {
      if (element !== 'slide-up') {
        parent.classList.add('slide-up');
      } else {
        loginBtn.parentNode.parentNode.classList.add('slide-up');
        parent.classList.remove('slide-up');
      }
    });
  });
}
function onSignupBtnClick(e) {
  e.preventDefault();
  //   const library = JSON.stringify({ watched: [], queue: [] });
  const mail = document.getElementById('register-email').value;
  const name = document.getElementById('register-name').value;
  const password = document.getElementById('register-password').value;
  let user;
  createUserWithEmailAndPassword(auth, mail, password)
    .then(userCredential => {
      Notiflix.Notify.success(`Success! User ${mail} created!`);
      user = userCredential.user;
      user.displayName = name;
      set(ref(db, 'users/' + user.uid), {
        username: name,
        email: mail,
        library: '{"watched":[],"queue":[]}',
      });
      // console.log(user);
      localData.user = user;
      localData.getDatabase();
    })
    .then(() => {
      document.getElementById(
        'login-btn'
      ).textContent = `Hello, ${user.displayName}`;
      onHomeLinkClick(e);
      closeModal();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/internal-error') {
        Notiflix.Notify.warning(`Please, enter your password`);
        return;
      }
      if (errorCode === 'auth/email-already-in-use') {
        Notiflix.Notify.warning(
          `Oops, user ${mail} already exists in database. Please, try Log In!`
        );
        return;
      }
      if (errorCode === 'auth/invalid-email') {
        Notiflix.Notify.warning(
          `Incorrect email! Please check it and try again`
        );
        return;
      }
      if (errorCode === 'auth/weak-password') {
        Notiflix.Notify.warning(`Password should be at least 6 characters`);
        return;
      }
      Notiflix.Notify.failure(`Something went wrong! ${errorMessage}`);
    });
}
function onLoginBtnClick(e) {
  e.preventDefault();
  const mail = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  signInWithEmailAndPassword(auth, mail, password)
    .then(userCredential => {
      Notiflix.Notify.success(`Welcome back, ${mail}!`);
      const user = userCredential.user;
      localData.user = user;
      localData.getDatabase();
      document.getElementById(
        'login-btn'
      ).textContent = `Logged in with ${mail}`;
      onHomeLinkClick(e);
      closeModal();
      return user;
    })
    .then(user =>
      get(child(ref(db), 'users/' + user.uid)).then(snapshot => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          if (snapshot.val().username) {
            document.getElementById('login-btn').textContent = `Hello, ${
              snapshot.val().username
            }`;
          }
        } else {
          // console.log('got no data');
        }
      })
    )
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        Notiflix.Notify.warning(`Wrong password! Please, try again`);
        return;
      }
      if (errorCode === 'auth/internal-error') {
        Notiflix.Notify.warning(`Please, enter your password`);
        return;
      }
      if (errorCode === 'auth/user-not-found') {
        Notiflix.Notify.warning(
          `Oops, user ${mail} not found in database. Please, try Sign Up!`
        );
        return;
      }
      if (errorCode === 'auth/invalid-email') {
        Notiflix.Notify.warning(
          `Incorrect email! Please check it and try again`
        );
        return;
      }
      Notiflix.Notify.failure(`Something went wrong! ${errorMessage}`);
    });
}

function onLoginWithGoogleBtnClick(e) {
  e.preventDefault();
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      Notiflix.Notify.success(`Welcome, ${result.user.displayName}!`);
      const user = result.user;
      localData.user = user;
      document.getElementById(
        'login-btn'
      ).textContent = `Hello, ${user.displayName}`;
      update(ref(db, 'users/' + user.uid), {
        username: user.displayName,
        email: user.email,
      });
      get(child(dbRef, `users/${user.uid}`))
        .then(snapshot => {
          if (snapshot.exists()) {
            // console.log(snapshot.val());
          } else {
            // console.log('No data available');
          }
          onHomeLinkClick(e);
          closeModal();
        })
        .catch(error => console.log(error));
    })
    .catch(error => {
      console.log(error);
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

// function test() {
//   const date = Date.now();
//   set(ref(db, 'users/' + 'test1'), {
//     date: date,
//   });
// }
