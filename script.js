const quizData = [
    { 
        question: "what do u like to eat for breakfast", 
        options: ["black coffee", "eggs", "nothing", "else"], 
        //answer: "Pink" 
    },
    { 
        question: "you just landed in nyc. would you rather?!", 
        options: ["immediately go out", "spend the night in"], 
        //answer: "Cat" 
    },
    { 
        question: "what is your ideal level of clinginess?", 
        options: ["25%", "50%", "75%", "100%"], 
        //answer: "Cookies" 
    },
        
    { 
        question: "do you need some time to yourself everyday?", 
        options: ["not really", "yes a litte bit", "yes a medium bit", "yes a lot"], 
        //answer: "Cookies" 
    },  
    { 
        question: "fav movie genre?", 
        options: ["action", "horror", "romance", "comedy", "drama"] 
        //answer: "Cookies" 
    },
    { 
        question: "what is your favorite snack?", 
        options: ["cookies", "chips", "ice cream", "else"] 
        //answer: "Cookies" 
    },
        { 
        question: "what makes u feel the most loved?", 
        options: ["i love you", "i wanna fuck you", "i made this for you", "im here for you"] 
        //answer: "Cookies" 
    },
    { 
        question: "what is your favorite position", 
        options: ["missionary", "doggy", "cowgirl", "else"] 
        //answer: "Cookies" 
    }
];

let currentQuestion = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
//const nextButton = document.getElementById("next-button");
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
