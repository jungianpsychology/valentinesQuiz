/* script.js */
function startQuiz() {
    window.location.href = 'question1.html';
}

function nextQuestion(currentQuestion) {
    let nextQuestion = currentQuestion + 1;
    if (nextQuestion <= 9) {
        window.location.href = `question${nextQuestion}.html`;
    } else {
        window.location.href = 'result.html';
    }
}

