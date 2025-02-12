const quizData = [
    { 
        question: "What's your favorite color?", 
        options: ["Pink", "Blue", "Green", "Yellow"], 
        answer: "Pink" 
    },
    { 
        question: "Pick a pet!", 
        options: ["Cat", "Dog", "Bunny", "Bird"], 
        answer: "Cat" 
    },
    { 
        question: "What's your favorite snack?", 
        options: ["Cookies", "Fruits", "Chips", "Chocolate"], 
        answer: "Cookies" 
    }
];

let currentQuestion = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultDiv = document.getElementById("result");
const resultImage = document.getElementById("result-image");

function loadQuestion() {
    if (currentQuestion < quizData.length) {
        let q = quizData[currentQuestion];
        questionText.textContent = q.question;
        optionsContainer.innerHTML = "";
        
        q.options.forEach(option => {
            let button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => {
                currentQuestion++;
                loadQuestion();
            };
            optionsContainer.appendChild(button);
        });

    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question-container").style.display = "none";
    nextButton.style.display = "none";
    resultDiv.style.display = "block";
    resultImage.src = "cute-result.png"; // Add a cute image in your repo
}

nextButton.addEventListener("click", () => {
    currentQuestion++;
    loadQuestion();
});

loadQuestion();
