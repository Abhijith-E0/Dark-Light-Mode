const toggle = document.querySelector("#themeToggle");
const body = document.body;
const icon = document.querySelector("#themeIcon");
const text = document.querySelector(".toggle-text");


toggle.addEventListener("change",()=>{

    const light = toggle.checked;


    body.classList.toggle(
        "light-theme",
        light
    );


    icon.src = light
    ? "icons/sun.png"
    : "icons/moon.png";


    text.textContent = light
    ? "Dark"
    : "Light";

});