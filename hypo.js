const sides = document.querySelectorAll(".side-input");
const hypoBtn = document.querySelector("#hypo-btn");
const outputEl = document.querySelector('#hypo-output-msg');

// console.log(sides);
// console.log(hypoBtn);
// console.log(outputEl);

function calculateSumOfSquares(a, b) {
    const sumOfSquares = (a * a) + (b * b);
    return sumOfSquares;
}

function calculateHypotenuse() {

    if (Number(sides[0].value) <= 0 || Number(sides[1].value) <= 0)
        outputEl.innerText = "The base or height cann't be 0 (zero) or -ve (negative)";
    else {
        const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
        // console.log("clicked");

        const lengthOfHypotenuse = Math.sqrt(sumOfSquares).toFixed(2);
        outputEl.innerText = `The length of hypotenuse is ${lengthOfHypotenuse}`;
    }
}

hypoBtn.addEventListener('click', calculateHypotenuse);