import { data } from "./data.js";
let i = 0;

function init() {
    const question = data();

    showTotalQues(question);
    showQues();

    function showQues() {
        const quesContainer = document.querySelector('.question-list ul');
        const quesBody = document.querySelector('.question-body h3');

        let index = 0;
        // let ques = `${question[i].no}. ${question[i].question}`;
        // quesBody.innerText = ques;
        
        question[i].option.map(() => {
            const li = document.createElement('li');
            li.classList.add('list-style');
    
            quesContainer.appendChild(li);
            li.innerText = question[i].option[index];
            index += 1;
        })
    
        i += 1;
        console.log(i);
        console.log(index);
    
        const nextBtn = document.getElementById('next-quiz');
            nextBtn.addEventListener('click', () => {
                while(quesContainer.firstChild) {
                    quesContainer.removeChild(quesContainer.firstChild);
                }
            showQues();
        })
    }
}

function showTotalQues(data) {
    const flatData = data.flat();

    const showQ = document.getElementById('total-q');
    showQ.innerText = flatData.length;
}





init();