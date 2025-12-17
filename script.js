let quiz = [
    { q: "1. What is 2 + 2?",       options: ["3", "4", "5"], answer: 1 },
    { q: "2. Capital of India?",    options: ["Delhi", "Mumbai", "Goa"], answer: 0 },
    { q: "3. 5 + 5 = ?",            options: ["9", "10", "11"], answer: 1 },
    { q: "4. Largest planet?",      options: ["Earth", "Jupiter", "Mars"], answer: 1 },
    { q: "5. HTML stands for?",     options: ["Code", "Markup", "Style"], answer: 1 },
    { q: "6. CSS used for?",        options: ["Styling", "Photos", "Math"], answer: 0 },
    { q: "7. Sun is a…?",           options: ["Planet", "Star", "Rock"], answer: 1 },
    { q: "8. 10 / 2 = ?",           options: ["2", "4", "5"], answer: 2 },
    { q: "9. JS means?",            options: ["JavaScript", "JavaSoft", "JSON"], answer: 0 },
    { q: "10. RGB means?",          options: ["Red-Green-Blue", "Right-Green-Black", "Red-Gray-Blue"], answer: 0 }
];
let current = 0;
let score = 0;

// ----------------------------
// LOAD QUESTION
// ----------------------------
function loadQuestion() {
    document.getElementById("result").textContent = "";
    document.getElementById("nextBtn").style.display = "none";

    let q = quiz[current];
    document.getElementById("question").textContent = q.q;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((opt, index) => {
        let btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(btn);
    });
}

// ----------------------------
// CHECK ANSWER
// ----------------------------
function checkAnswer(choice) {
    let correct = quiz[current].answer;

    if (choice === correct) {
        document.getElementById("result").textContent = "Correct!";
        score++;
    } else {
        document.getElementById("result").textContent = "Wrong!";
    }

    // Disable all buttons
    let buttons = document.querySelectorAll("#options button");
    buttons.forEach(b => b.disabled = true);

    document.getElementById("nextBtn").style.display = "block";
}

// ----------------------------
// NEXT QUESTION
// ----------------------------
function nextQuestion() {
    current++;

    if (current < quiz.length) {
        loadQuestion();
    } else {
        document.getElementById("question").textContent = "Quiz Finished!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("result").textContent = "Your Score: " + score + "/10";
        document.getElementById("nextBtn").style.display = "none";
    }
}

// Start quiz
loadQuestion();