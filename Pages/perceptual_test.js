const questions = [
  {
    question: "Choose the correct top view.",
    image: "perceptual-img1.jpg",
    options: ["A", "B", "C", "D"],
    answer: "C",
  },
  {
    question: "In figure A, how many cubes have 3 of their sides painted?",
    image: "perceptual-img2.jpg",
    options: ["A.4", "B.5", "C.6", "D.7"],
    answer: "C",
  },
  {
    question: "Choose the correct option?",
    image: "perceptual-img3.jpg",
    options: ["A", "B", "C", "D"],
    answer: "A",
  },
  {
    question: "Choose the correct option?",
    image: "perceptual-img4.jpg",
    options: ["A", "B", "C", "D"],
    answer: "B",
  },
  {
    question: "Choose the correct FRONT VIEW",
    image: "perceptual-img5.jpg",
    options: ["A", "B", "C", "D"],
    answer: "D",
  },
  {
    question: " Choose the correct option",
    image: "perceptual-img6.jpg",
    options: ["A", "B", "C", "D"],
    answer: "D",
  },
  {
    question: "Arrange in increasing order of angle magnitude",
    image: "perceptual-img7.jpg",
    options: [
      "A. 2 - 1 - 3 - 4",
      "B. 1 - 2 - 3 - 4",
      "C. 3 - 2 - 1 - 4",
      "D. 2 - 3 - 1 - 4",
    ],
    answer: "D",
  },
];

let currentQuestionIndex = 0;
let score = 0;
const answers = ["c", "c", "a", "b", "d", "d", "d"]; // Correct answers array

const quizContainer = document.getElementById("question-container");

function createQuestion(question, index) {
  quizContainer.innerHTML = `
          <div class="question">
              <p>${question.question}</p>
              ${
                question.image
                  ? `<img src="${question.image}" alt="Question Image">`
                  : ""
              }
              <ul class="options">
                  ${question.options
                    .map(
                      (option) =>
                        `<li><button type="button" data-answer="${option.toLowerCase()}">${option}</button></li>`
                    )
                    .join("")}
              </ul>
          </div>
      `;

  const options = quizContainer.querySelectorAll(".options button");
  options.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedAnswer = option.getAttribute("data-answer");
      if (selectedAnswer === question.answer.toLowerCase()) {
        score += 1; // Increase score by 1 for each correct answer
      }
      nextQuestion();
    });
  });
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    createQuestion(questions[currentQuestionIndex], currentQuestionIndex);
  } else {
    showScore();
  }
}

function showScore() {
  const perscore = (score / 7) * 100;
  const normalized_score = ((perscore - 0) * (10 - 1)) / (100 - 0) + 1;
  document.getElementById("score").textContent =
    "Your score: " + parseFloat(normalized_score.toFixed(2));
}

document.getElementById("aptitudeTestForm").addEventListener("submit", (e) => {
  e.preventDefault();
  nextQuestion();
});

createQuestion(questions[currentQuestionIndex], currentQuestionIndex);
