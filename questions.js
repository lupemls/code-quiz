const counterEl = document.querySelector("#counter");
const startBtn = document.querySelector("#start");
const sectionEl = document.querySelector("section");
const choicesEl = document.querySelector("ul");
const instructions = document.querySelector(".instructions");
const correct = document.querySelector("#correct");
const option = document.querySelectorAll(".option");
const listEl = document.querySelector("ul");
const initialsEl = document.querySelector("#initials");


const questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "What does the E in MERN stand for?",
    choices: ["Em", "Event", "Express", "Entity"],
    answer: "Express"
  },
  {
    title: "What are the basic building blocks of any website?",
    choices: ["MongoDB, Express", "Node, HTML, CSS", "HTML, CSS, JS", "JQuery, Bootstrap"],
    answer: "HTML, CSS, JS"
  },
  {
    title: "Is programming fun?",
    choices: ["No", "Maybe", "Yes", "IDK"],
    answer: "Yes"
  }
]

let count = 15 * questions.length;  ;
let qnum = 0; 
let score = 0;

counterEl.textContent = "Time: " + count;

listEl.addEventListener("click", function(e) {
    if(e.target.className === "option"){
        if(e.target.id === "answer"){
            count += 10;
            correct.textContent = "Correct!";
        }else{
            count -= 10;
            correct.textContent = "Wrong!";
        }
        qnum += 1;
        if (qnum < questions.length){
            getQuestion(qnum);
        } else {
            initialsEl.style.visibility = "visible";
            score = count;
            sectionEl.textContent = `Quiz Over \n Score is ${score}`;
            choicesEl.innerText = "";
        }
    }
})

startBtn.addEventListener("click", function(){
    let timer = setInterval(function () {
        if (count <= 0) {
            clearInterval(timer);
        }
        else {
            count--;
            counterEl.textContent = "Time: " + count;
        }
    }, 1000)
    startQuiz();
})

function startQuiz(){
    instructions.display = "none";
    getQuestion(qnum);   
}

function getQuestion(i){
    const choices = questions[i].choices;
    // answers.textContent = questions[i].choices;
    choicesEl.innerText = "";
    for(let j = 0; j < choices.length; j++){

        const li = document.createElement("li");
        sectionEl.textContent = questions[i].title;
        const choice = document.createElement("button");
        if(choices[j] === questions[i].answer){
            choice.setAttribute("id", "answer");
        }
        choice.setAttribute("class", "option");
        choice.textContent = choices[j];
        li.appendChild(choice);
        choicesEl.appendChild(li);    
    }
}

initialsEl.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(score)
    let localScore = JSON.parse(localStorage.getItem("score"));
    const initials = initialsEl.elements[0].value;
    console.log(initials)
    if(localScore){
        localScore[initials] = score;
        localStorage.setItem("score", JSON.stringify(localScore));
    } else{
        let newScore = {};
        newScore[initials] = score;
        localStorage.setItem("score", JSON.stringify(newScore))
    }
})

