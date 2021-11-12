const hexColorGenerator = () => {
    let hexColor = Math.floor(Math.random()*100000).toString(16);
    return "#"+hexColor;
};

const button = document.querySelector(".btn");
const section = document.querySelector(".color-random");
const colorContainer = document.querySelector(".color");

button.addEventListener("click", () => {
    let hexColor = hexColorGenerator();
    section.style.backgroundColor = hexColor;
    colorContainer.innerHTML = hexColor;
  });