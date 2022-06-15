import { initializeApp } from 'firebase/app';
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
      const signOutName = document.getElementById('register-name');
      const signOutEmail = document.getElementById('register-email');
      const loginEmail = document.getElementById('login-email');

      registerFormBtn.addEventListener('click', e => {
        e.preventDefault();
        console.log('trst');
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
