const btn = document.querySelector("button");
const number1 = document.querySelector(".num1");
const number2 = document.querySelector(".num2");
const number3 = document.querySelector(".num3");
const numberCads = document.querySelectorAll(".numberALL");

function rndNumOneToSeven() {
    return Math.floor(Math.random() * 7 + 1);
}

console.log(numberCads);
function rndChangeImg() {
    number1.src = `img/${rndNumOneToSeven()}.jpg`;
    number2.src = `img/${rndNumOneToSeven()}.jpg`;
    number3.src = `img/${rndNumOneToSeven()}.jpg`;

    numberCads.forEach((el) => {
        el.classList.remove("animation");
        setTimeout(() => {
            el.classList.add("animation");
        }, 100); // Мінімальний інтервал часу перед додаванням класу знову
    });
}

btn.addEventListener("click", rndChangeImg);
