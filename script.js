const links = document.querySelectorAll("nav ul a");
const dropdowns = document.querySelectorAll(".dropdown");
const arrows = document.querySelectorAll("nav ul a .imgs");

dropdowns.forEach(dropdown => dropdown.style.display === "none");

links.forEach((link, i) => {
    link.addEventListener("click", () => {
        if (getComputedStyle(dropdowns[i]).display === "none") {
            arrows.forEach(arrow => arrow.style.transform = "rotate(0deg)");
            arrows[i].style.transform = "rotate(180deg)";

            dropdowns.forEach(dropdown => dropdown.style.display = "none");
            dropdowns[i].style.display = "flex";
        } else {
            arrows[i].style.transform = "rotate(0deg)";

            dropdowns[i].style.display = "none";
        }
    });
});

document.addEventListener("click", (e) => {
    let dropdownClick = false;

    links.forEach((link, i) => {
        if (link.contains(e.target) || dropdowns[i].contains(e.target)) {
            dropdownClick = true;
        }
    });

    if (!dropdownClick) {
        arrows.forEach(arrow => arrow.style.transform = "rotate(0deg)");
        dropdowns.forEach(dropdown => dropdown.style.display = "none");
    }
});

const burger = document.querySelector(".burger");
const closeBurger = document.querySelector(".close");
const nav = document.querySelector(".nav-container");

burger.addEventListener("click", () => {
    burger.style.display = "none";
    closeBurger.style.display = "block";
    nav.style.display = "flex";
});

closeBurger.addEventListener("click", () => {
    closeBurger.style.display = "none";
    burger.style.display = "block";
    nav.style.display = "none";
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
        closeBurger.style.display = "none";
        burger.style.display = "block";
        nav.style.display = "flex";
    } else {
        closeBurger.style.display = "none";
        burger.style.display = "block";
        nav.style.display = "none";
    }
});