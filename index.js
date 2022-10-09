const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const triangleOutputEl = document.querySelector("#triangle-output-msg");

// console.log(inputs);
// console.log(triangleOutputEl);
// console.log(isTriangleBtn);

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    if (Number(inputs[0].value) <= 0 || Number(inputs[1].value) <= 0 || Number(inputs[2].value) <= 0)
        triangleOutputEl.innerText = "The angles cann't be 0 (zero) or -ve (negative)";
    else {
        const sum = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

        if (sum === 180) {
            triangleOutputEl.innerText = "Yay, the angles form a triangle!";
        } else {
            triangleOutputEl.innerText = "Oh Oh! The angles don't form a triangle!";
        }
    }

}

isTriangleBtn.addEventListener('click', isTriangle); 