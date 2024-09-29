// import { data } from "./data.js";
// let index = 0;


// function init() {
//     const question = data();

//     showQues(question);
    


//     const nextBtn = document.getElementById('next-quiz');
    
//     nextBtn.addEventListener('click', () => {
//         if (index < question.length) {
//             nextQues(question);
//         } else {
//             showResult();
//         }
//     })
// }

// function showQues(data) {
//     const ques = document.querySelector('.question-body h3');
//     const option = document.querySelector('.question-list ul');
//     const quesNO = document.getElementById('quesNO');
//     const totalQues = document.getElementById('total-q');

//     if(index < data.length) {

//         quesNO.innerText = index + 1;
//         totalQues.innerText = data.length;

//         ques.innerHTML = `${index+1}. ${data[index].question}`;

//         data[index].option.forEach((value,i) => {
//             const li = document.createElement('li');
//             li.classList.add('list-style');
//             li.innerText = value;

//             option.appendChild(li);
//         });
        
//     } else {
//         showResult(data);
//     }
// } 

// function nextQues(data) {
//     const option = document.querySelector('.question-list ul');
//     while (option.firstChild) {
//         option.removeChild(option.firstChild);
//     }

//     index += 1;
//     showQues(data);

//     if(index === (data.length - 1)) {
//         const nextBtn = document.getElementById('next-quiz');
//         nextBtn.innerText = 'Show Result';
//     }
    
// }

// function showResult() {
//     const nextBtn = document.getElementById('next-quiz');
    
// }

// init();




// const question = data();
// console.log(question);

let index = 0 ;


const page = document.querySelector('.page');
const startQuiz = document.getElementById('startQuiz');
const exitBtn = document.getElementById('exit');
const continueBtn = document.getElementById('continue');
const quesBody = document.getElementById('quesBody');
const beforeQues = document.querySelector('.question-list');
const quesNoEl = document.getElementById('quesNO');
const totalQues = document.getElementById('total-q');
const nextQuizBtn = document.getElementById('next-quiz');
const resultBtn = document.getElementById('resultBtn');


let nextEl ; 

startQuiz.addEventListener('click', function() {
    nextEl = page.nextElementSibling;
    page.classList.add('hidden');
    nextEl.classList.remove('hidden');
})


exitBtn.addEventListener('click',function() {
    page.classList.remove('hidden');
    page.nextElementSibling.classList.add('hidden');
})


continueBtn.addEventListener('click', function() {
    
    nextEl.classList.add('hidden');
    nextEl.nextElementSibling.classList.remove('hidden');
    showQues();
    totalQues.innerText = question.length;
})


function showQues() {
    const h3 = document.createElement('h3');
    h3.innerText = `${question[index].no}. ${question[index].question}`;
    quesBody.appendChild(h3);
    const ul = document.createElement('ul');
    ul.classList.add('flex','flex-col','gap-3','mt-6');


    question[index].option.forEach(element => {
        const li = document.createElement('li');
        li.classList.add('list-style','cursor-pointer');
        li.innerText = element;
        ul.appendChild(li);
    });

    quesBody.appendChild(ul);
    quesNoEl.innerText = question[index].no;

    ul.addEventListener('click', function(e) {
        e.target.classList.add('bg-green-400', 'border-green-600');
    })

    index++;

    if(index === question.length) {
        nextQuizBtn.classList.add('hidden');
        resultBtn.classList.remove('hidden');
    }

}

nextQuizBtn.addEventListener('click', function() {
    quesBody.innerHTML = '';
    showQues();
})

