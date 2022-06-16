import Notiflix from 'notiflix';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase, ref, get, child, set } from 'firebase/database';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDo1183-PB_7A9qygtI9_TfvjKvLJSyPDA',
  authDomain: 'test-firebase-377da.firebaseapp.com',
  databaseURL: 'https://test-firebase-377da-default-rtdb.firebaseio.com',
  projectId: 'test-firebase-377da',
  storageBucket: 'test-firebase-377da.appspot.com',
  messagingSenderId: '1000137961183',
  appId: '1:1000137961183:web:a6ceb146b1a5991749c36a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export default class Auth {
  constructor() {
    this.loginSignoutBtn = document.getElementById('login-btn');
    this.markup = `
    		<div class="form-structor">
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
    </div>
    `;
  }

  makeAuthForm() {
    this.loginSignoutBtn.addEventListener('click', () => {
      document.querySelector('.movie-modal').classList.remove('is-hidden');
      document.querySelector('body').classList.add('modal-open');
      document.querySelector('.modal-content').innerHTML = this.markup;
      const loginBtn = document.getElementById('login');
      const signupBtn = document.getElementById('signup');
      const registerFormBtn = document.getElementById('register-btn');
      const loginFormBtn = document.getElementById('register-btn2');
      const LoginWithGoogleBtn = document.getElementById('register-btn1');

      registerFormBtn.addEventListener('click', e => {
        e.preventDefault();
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-email').value;
        const name = document.getElementById('register-name').value;
        createUserWithEmailAndPassword(auth, email, password)
          .then(userCredential => {
            // Signed in
            const user = userCredential.user;
            user.displayName = name;
            set(ref(db, 'users/' + user.uid), {
              username: name,
              email: email,
              watched: watched,
              queue: queue,
            });
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message);
            if (
              errorMessage === 'Firebase: Error (auth/email-already-in-use).'
            ) {
              Notiflix.Notify.failure(
                `User with email "${email}" already exists! Please press "Log in"`
              );
            }
          });
      });

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
    });
  }
}
