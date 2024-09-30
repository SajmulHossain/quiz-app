const page = document.querySelector(".page");
const startQuiz = document.getElementById("startQuiz");
const exitBtn = document.getElementById("exit");
const continueBtn = document.getElementById("continue");
const quesBody = document.getElementById("quesBody");
const beforeQues = document.querySelector(".question-list");
const quesNoEl = document.getElementById("quesNO");
const totalQues = document.getElementById("total-q");
const nextQuizBtn = document.getElementById("next-quiz");
const resultBtn = document.getElementById("resultBtn");
const totalQuestion = document.getElementById("totalQues");
const correctAnswer = document.getElementById("correctAns");
const result = document.getElementById("result");
const timeCount = document.getElementById("timeCount");

let nextEl;
let index = 0;
let correctAns = 0;
let totalTime = 15;
let countdown;
let timeOut;
let lastClicked = null;

startQuiz.addEventListener("click", function () {
  nextEl = page.nextElementSibling;
  page.classList.add("hidden");
  nextEl.classList.remove("hidden");
});

exitBtn.addEventListener("click", function () {
  page.classList.remove("hidden");
  page.nextElementSibling.classList.add("hidden");
});

continueBtn.addEventListener("click", function () {
  nextEl.classList.add("hidden");
  nextEl = nextEl.nextElementSibling;
  nextEl.classList.remove("hidden");
  showQues();
  totalQues.innerText = question.length;
});

function showQues() {
  const h3 = document.createElement("h3");
  h3.innerText = `${question[index].no}. ${question[index].question}`;
  quesBody.appendChild(h3);
  const ul = document.createElement("ul");
  ul.classList.add("flex", "flex-col", "gap-3", "mt-6");

  question[index].option.forEach((element) => {
    const li = document.createElement("li");
    li.classList.add("list-style", "cursor-pointer");
    li.innerText = element;
    ul.appendChild(li);
  });

  quesBody.appendChild(ul);
  quesNoEl.innerText = question[index].no;

  ul.childNodes.forEach((elem) => {
    elem.addEventListener("click", function (e) {
      ul.childNodes.forEach((elem) => {
        elem.classList.remove("bg-green-400", "border-green-600");
      });
      e.target.classList.add("bg-green-400", "border-green-600");
      lastClicked = e.target.innerText;

      nextQuizBtn.removeAttribute("disabled");
    });
  });
  console.log(lastClicked);

  if (index === question.length - 1) {
    nextQuizBtn.classList.add("hidden");
    resultBtn.classList.remove("hidden");
  }

  timeCount.innerText = totalTime;

  countdown = setInterval(() => {
    totalTime--;
    timeCount.innerText = totalTime.toString().padStart(2, 0);
  }, 1000);

  timeOut = setTimeout(() => {
    clearInterval(countdown);
    totalTime = 15;
    quesBody.innerHTML = "";
    index++;
    showQues();
    nextQuizBtn.setAttribute("disabled", "true");
  }, 15000);
}

nextQuizBtn.addEventListener("click", function () {
  if (lastClicked === question[index].ans) {
    correctAns++;
  }
  quesBody.innerHTML = "";
  index++;
  clearInterval(countdown);
  clearTimeout(timeOut);
  totalTime = 15;
  showQues();
  nextQuizBtn.setAttribute("disabled", "true");
});

resultBtn.addEventListener("click", function () {
  if (lastClicked === question[index].ans) {
    correctAns++;
  }
  clearInterval(countdown);
  clearInterval(timeOut);
  nextEl.classList.add("hidden");
  nextEl.nextElementSibling.classList.remove("hidden");
  nextEl.nextElementSibling.classList.add("flex");
  totalQuestion.innerText = question.length;
  correctAnswer.innerText = correctAns;
});
