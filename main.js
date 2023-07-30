/*
    - scrollHeight => the entire height of content including padding and visible or not
    - clientHeight => the visible content & padding
*/
let myEle = document.querySelector(".scroll-progress");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    // let scrollTop = window.scrollY;
    myEle.style.width = `${(scrollTop / height) * 100}%`;
});