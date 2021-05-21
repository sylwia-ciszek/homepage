console.log("Cześć :)");

let buttonDark = document.querySelector(".js-buttonDark");
let body = document.querySelector(".body");
let buttonText = document.querySelector(".js-buttonText");

buttonDark.addEventListener("click", () => {
    body.classList.toggle("dark");
    buttonText.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
    
});
