const form = document.getElementById("form");
const button = document.getElementById("button");

let isOpen = false;
button.addEventListener("click", (e) => {
    e.preventDefault();
    isOpen = !isOpen;
    !isOpen ? form.classList.add("hidden") : form.classList.remove("hidden");
})