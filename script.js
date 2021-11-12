const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const getColors = () => {
    return colors[Math.floor(Math.random()*colors.length)];
};

const button = document.querySelector(".btn");
const section = document.querySelector(".color-random");
const colorContainer = document.querySelector(".color");

button.addEventListener("click", ()=> {
    const color = getColors();
    section.style.backgroundColor = color;
    colorContainer.innerHTML = color;
})