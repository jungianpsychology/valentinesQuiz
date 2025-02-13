const quizData = [
    { page: 2, image: "image2.webp", question: "What do you eat for breakfast?", answers: ["Black coffee", "Eggs", "Protein drink", "else"] },
    { page: 3, image: "image3.webp", question: "What is your ideal level of clinginess?", answers: ["25%", "50%", "75%", "100%"] },
    { page: 4, image: "image4.webp", question: "Ideally how long would you want to spend with your partner every day not counting sleep?", answers: ["3 hours", "6 hours", "8 hours", "Infinity"] },
    { page: 5, image: "image5.webp", question: "Fav movie genre?", answers: ["Horror", "Action", "Drama", "Romance", "Comedy"] },
    { page: 6, image: "image6.webp", question: "What is your fav snack?", answers: ["Chips", "Cookies", "Ice cream", "else"] },
    { page: 7, image: "image7.webp", question: "You just landed in NYC. Would you rather?", answers: ["Immediately go out", "Spend the night in"] },
    { page: 8, image: "image8.webp", question: "Which statement makes you feel the most loved?", answers: ["I love you", "I wanna fuck you", "I made this for you", "I'm here for you"] },
    { page: 9, image: "image9.webp", question: "What is your favorite position?", answers: ["Missionary", "Cowgirl", "Doggy", "else"] }
];

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxCZy2uX1cZvTHiW0jJ6a_jHFqrbFrXxcXZ-gsHvKHOy7B3ioFTcVfUdtRe6rNvqqSEYg/exec";


let answers = [];

function loadQuizPage() {
    let urlParams = new URLSearchParams(window.location.search);
    let page = parseInt(urlParams.get('page'));

    let quizItem = quizData.find(q => q.page === page);
    if (!quizItem) {
        window.location.href = "results.html?page=10";
        return;
    }

    document.getElementById("quiz-body").style.backgroundImage = `url('${quizItem.image}')`;
    document.getElementById("question-text").innerText = quizItem.question;

    let answerButtons = document.getElementById("answer-buttons");
    answerButtons.innerHTML = "";

    quizItem.answers.forEach(answer => {
        if (answer === "else") {
            let input = document.createElement("input");
            input.type = "text";
            input.placeholder = "Your answer";
            input.onchange = (e) => saveAnswer(page, e.target.value);
            answerButtons.appendChild(input);
        } else {
            let button = document.createElement("button");
            button.innerText = answer;
            button.onclick = () => saveAnswer(page, answer);
            answerButtons.appendChild(button);
        }
    });
}

function saveAnswer(page, answer) {
    answers.push({ question: page, answer: answer });

    if (page < 9) {
        window.location.href = `quiz.html?page=${page + 1}`;
    } else {
        sendAnswers();
    }
}

function sendAnswers() {
    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers })
    })
    .then(response => response.text())
    .then(data => {
        console.log("Server Response:", data);
        window.location.href = "results.html?page=10";
    })
    .catch(error => console.error("Error:", error));
}


window.onload = function() {
    if (window.location.pathname.includes("quiz.html")) {
        loadQuizPage();
    }
};
