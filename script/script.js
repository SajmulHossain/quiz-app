import { data } from "./data.js";
let index = 0;


function init() {
    const question = data();

    showQues(question);
    


    const nextBtn = document.getElementById('next-quiz');
    
    nextBtn.addEventListener('click', () => {
        if (index < question.length) {
            nextQues(question);
        } else {
            showResult();
        }
    })
}

function showQues(data) {
    const ques = document.querySelector('.question-body h3');
    const option = document.querySelector('.question-list ul');
    const quesNO = document.getElementById('quesNO');
    const totalQues = document.getElementById('total-q');

    if(index < data.length) {

        quesNO.innerText = index + 1;
        totalQues.innerText = data.length;

        ques.innerHTML = `${index+1}. ${data[index].question}`;

        data[index].option.forEach((value,i) => {
            const li = document.createElement('li');
            li.classList.add('list-style');
            li.innerText = value;

            option.appendChild(li);
        });
        
    } else {
        showResult(data);
    }
} 

function nextQues(data) {
    const option = document.querySelector('.question-list ul');
    while (option.firstChild) {
        option.removeChild(option.firstChild);
    }

    index += 1;
    showQues(data);

    if(index === (data.length - 1)) {
        const nextBtn = document.getElementById('next-quiz');
        nextBtn.innerText = 'Show Result';
    }
    
}

function showResult() {
    const nextBtn = document.getElementById('next-quiz');
    
}

init();