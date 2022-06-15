import { refs } from './global';

refs.scrollTop = document.querySelector('.scroll-top');
refs.body = document.querySelector("body");

refs.body.onscroll = () => {
    if (window.scrollY > 230) {
        refs.scrollTop.classList.add("isShowScrollTop");
    } else if (window.scrollY < 230) {
        refs.scrollTop.classList.remove("isShowScrollTop")
    }
}

export function onClickScrollTop() {
    window.scrollTo(0, 0);
}