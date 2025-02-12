document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");
    const nextButton = document.getElementById("next-btn");
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result");
    let currentQuestion = 0;

    function showQuestion(index) {
        questions.forEach((q, i) => {
            q.style.display = i === index ? "block" : "none";
        });
    }

    nextButton.addEventListener("click", function () {
        const selectedOption = document.querySelector(`input[name=q${currentQuestion + 1}]:checked`);
        if (!selectedOption) {
            alert("Please select an answer before proceeding.");
            return;
        }

        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
        } else {
            quizContainer.style.display = "none";
            resultContainer.style.display = "block";
        }
    });

    showQuestion(currentQuestion);
});
