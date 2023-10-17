AOS.init();
let menu = document.querySelector(".icon-menu")
let menuRes = document.querySelector(".menuRes")
let iconMenu = document.querySelector(".icon-close-menuRes")
let bgDark = document.querySelector(".bg-dark")
let flagMenu = 0
menu.addEventListener("click", () => {
    menuRes.style.left = 0
    bgDark.style.display = "block"
    document.body.style.overflowY = "hidden"
})
iconMenu.addEventListener("click", () => {
    menuRes.style.left = "-100%"
    bgDark.style.display = "none"
    document.body.style.overflowY = "auto"
})
bgDark.addEventListener("click", () => {
    menuRes.style.left = "-100%"
    bgDark.style.display = "none"
    document.body.style.overflowY = "auto"
})