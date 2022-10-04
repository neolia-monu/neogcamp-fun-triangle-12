const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-ans-btn");
const outputEl = document.querySelector("#quiz-output-msg");

// console.log(outputEl);
// console.log(submitAnswerBtn);
// console.log(quizForm);

const correctAnswers = ["90°", "right angled", "one right angle", "12, 16, 20", "Equilateral triangle", "100°", "30°", "a + b + c", "no", "45°"];

function calculateScore() {
    let score = 0;
    let idx = 0;

    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        // console.log(value);
        if (value === correctAnswers[idx++]) {
            score++;
        }
    }

    // console.log(score);
    outputEl.innerText = `Your final score is ${score}`;
}

submitAnswerBtn.addEventListener('click', calculateScore);