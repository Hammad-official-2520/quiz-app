var htmlQuestion = [
   {
      question: "Q1: What do you understand by HTML",
      a: " HTML describes the structure of a webpage",
      b: " HTML consists of a set of elements",
      c: " HTML describes the structure of a webpage",
      d: " All of the above",
      ans: "ans4"
   },
   {
      question: "Q2: Which is used to create Web Pages?",
      a: "  C++",
      b: " Java",
      c: " HTML",
      d: " JVM",
      ans: "ans3"
   },
   {
      question: "Q3: Who is the father of HTML?",
      a: " Rasmus Lerdorf",
      b: " Tim Berners-Lee",
      c: " Brendan Eich",
      d: " Sergey Brin",
      ans: "ans2"
   },


   {
      question: "Q4: Which is used to read an HTML page and render it?",
      a: " Web browser",
      b: " Web matrix",
      c: " Web server",
      d: " Web network",
      ans: "ans1"
   },
   {
      question: "Q5: HTML stands for ___?",
      a: " HyperText Machine Language",
      b: " HyperText Marking Language",
      c: " HighText Marking Language",
      d: " HyperText Markup Language",
      ans: "ans4"
   },

];

// function isempty(){
//    var username = document.getElementById("username").value;
//    var email = document.getElementById("email").value;
//    var password = document.getElementById("password").value;
//    if(username == "" &&  password == "" && email == ""){
//       document.getElementById = ("btn").removeAttribute("disabled")
//    }
// }
// isempty()

var questionCount = 0;
var score = 0;
var question = document.querySelector(".question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var submit = document.querySelector("#submit");
var answers = document.querySelectorAll(".answer");
var showscore = document.querySelector("#showscore");

function loadQuestion() {
   var questionList = htmlQuestion[questionCount]
   question.innerHTML = questionList.question
   option1.innerHTML = questionList.a
   option2.innerHTML = questionList.b
   option3.innerHTML = questionList.c
   option4.innerHTML = questionList.d
}
loadQuestion();
var getCheckAnswer = () => {
   var answer;
   answers.forEach((curAnsElem) => {
      if (curAnsElem.checked) {
         answer = curAnsElem.id;
      }
   });
   return answer;
};

// function radioCheck(){
//    var answer = document.querySelector(".answer");
//    for(i=0; i<answer; i++){
//       if(answer[i].checked){

//       }
//    }
// };
// radioCheck()

var deselectAll = () => {
   answers.forEach((curAnsElem) => curAnsElem.checked = false)
};

submit.addEventListener("click", () => {
   var checkedAnswer = getCheckAnswer();
   // console.log(checkedAnswer);
   if (checkedAnswer == htmlQuestion[questionCount].ans) {
      score++;
   };
   questionCount++;
   deselectAll()
   if (questionCount < htmlQuestion.length) {
      loadQuestion();
   } else {
      showscore.innerHTML = `
     <h1 id="h1">Dear <span id="user"> ${username} </span></h1>
      <h1 id="h2"> Your correct answer is ${score}/${htmlQuestion.length} </h1>
      <h1 id="h2"> Your Average percentage is ${score / htmlQuestion.length++ * 100} % </h1>
      <button class= "btn" onclick = "location.reload()">Attempt Again </button>
     `;
      showscore.classList.remove("scoreArea")
   }
});

var username = localStorage.getItem("username");
var welcomeBox = document.getElementById("welcome-box");
welcomeBox.innerHTML = `
<h1 id="h1">Welcome to Html Quiz <span id="user"> ${username} </span></h1>

`