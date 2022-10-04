const areas = document.querySelectorAll(".area-input");
const calculateBtn = document.querySelector('#area-btn');
const outputMsg = document.querySelector('#area-output-msg');

// console.log(areas);
// console.log(calculateBtn);
// console.log(outputBtn);

function calculateAreaofTriangle(base, height) {
    const area = (0.5) * (base * height);
    return area.toFixed(2);
}

function calculateArea() {
    const area = calculateAreaofTriangle(Number(areas[0].value), Number(areas[1].value));

    outputMsg.innerText = `The area of traingle is ${area}`;
}

calculateBtn.addEventListener('click', calculateArea);