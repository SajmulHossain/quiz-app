
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

let nextEl;
let index = 0;
let correctAns = 0;
console.log(correctAns);

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
  nextEl.nextElementSibling.classList.remove("hidden");
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


  console.log(e.target.innerText === question[index].ans);
 
  
  ul.addEventListener("click", function (e) {
    ul.childNodes.forEach(elem => {
        elem.classList.remove('bg-green-400', 'border-green-600');
    });
    e.target.classList.add("bg-green-400", "border-green-600");
    console.log(question[index].ans);
    if(e.target.innerText === question[index].ans) {
        correctAns++;
    }
  });
  

  if (index === question.length) {
    nextQuizBtn.classList.add("hidden");
    resultBtn.classList.remove("hidden");
  }
}

nextQuizBtn.addEventListener("click", function () {
  quesBody.innerHTML = "";
  index++;
  showQues();
});
