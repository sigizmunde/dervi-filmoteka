import { refs } from "./global";
refs.checkboxDarkThemeRef = document.getElementById("checkbox");
refs.body = document.querySelector("body");

export const addClassDarkToHTML = () => {
    try {
        if (localStorage.getItem("theme") === "dark") {
            refs.body.classList.remove("light-theme")
            refs.body.classList.add("dark-theme");
            refs.checkboxDarkThemeRef.setAttribute("checked", true);

        } else {
            refs.body.classList.remove("dark-theme");
            refs.body.classList.add("light-theme");
        }
    } catch (error) {
        console.log(error);
    }
}

const onClickTheme = () => {

    if (localStorage.getItem("theme") === "dark") {
        localStorage.removeItem("theme");
    } else {
        localStorage.setItem("theme", "dark")

    }
    addClassDarkToHTML()
}

refs.checkboxDarkThemeRef.addEventListener("click", onClickTheme);