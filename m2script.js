const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
    // ! OBSERVE: you can use classList.toggle instead of add and remove
    search.classList.toggle("active");
    // ! to focus keyboard onto the input
    input.focus();
})