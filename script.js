
document.addEventListener('DOMContentLoaded', () => {
    const multiTwo = document.querySelector("#multi-two");
    if (multiTwo) {
        multiTwo.classList.remove("show");
        multiTwo.style.display = "none";
        new bootstrap.Collapse(multiTwo, { toggle: false });
        console.log("Nested dropdown #multi-two initialized as collapsed");
    }
});

const hamburger = document.querySelector(".toggle-btn");
const sidebar = document.querySelector("#sidebar");
const icon = document.querySelector("#icon");

hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("expand");
    icon.classList.toggle("bxs-chevrons-right");
    icon.classList.toggle("bxs-chevrons-left");
    console.log("Sidebar toggled, expanded:", sidebar.classList.contains("expand"));
});

document.querySelector('[data-bs-target="#multi"]').addEventListener('click', () => console.log("Multi Level clicked"));
document.querySelector('[data-bs-target="#multi-two"]').addEventListener('click', () => console.log("Two Links clicked"));
