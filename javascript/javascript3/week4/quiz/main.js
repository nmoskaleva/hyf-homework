class Quiz {
    constructor(name) {
        this.name = name;
    }

    fetchQuestions() {
        return fetch(`https://gist.githubusercontent.com/benna100/c9c38faebea1526fb4e6b6b896a1dc94/raw/9468c385bfb422620676b3669509b0a59b326c42/quiz-questions.json`)
            .then(questions => questions.json());
    }

    renderQuestions(questions) {
        console.log(questions);
        let questionsUl = document.querySelector(`ul`);
        questions.forEach(question => {
            let titleLi = document.createElement(`li`);
            titleLi.classList.add(`hidden`);
            titleLi.setAttribute(`difficulty`, question.difficulty); //difficulty level
            titleLi.innerHTML = question.title;
            questionsUl.appendChild(titleLi);

            let liText = document.createElement(`p`);
            liText.innerHTML = question.content;
            titleLi.appendChild(liText);

            let selectElement = document.createElement(`select`);

            question.options.forEach(option => {
                console.log(option);
                let optionElement = document.createElement(`option`);
                optionElement.innerHTML = option.content;
                optionElement.setAttribute(`data-is-answer`, option.correct);
                selectElement.appendChild(optionElement);
            })
            liText.appendChild(selectElement);
        });
    }

    getScore() {
        let userAnswers = document.querySelectorAll(`option:checked[data-is-answer=true]`).length; //потому что в функции, видимо живая
        let resultText = document.querySelector(`.result`);
        resultText.innerHTML = `Congratulations! you got ` + userAnswers + `/2 question right, well done!`;
        console.log(userAnswers);
    }

    //Indicate which questions the user answered correct and which questions the user answered incorrect. 
    //Indicating with background color
    showCorrectAnswers() {
        let correctAnswersChecked = document.querySelectorAll(`option:checked[data-is-answer=true]`);
        let incorrectAnswersChecked = document.querySelectorAll(`option:checked[data-is-answer=false]`);

        for (let i = 0; i < correctAnswersChecked.length; i++) {
            correctAnswersChecked[i].parentNode.parentNode.parentNode.style.backgroundColor = `green`;
        }

        for (let i = 0; i < incorrectAnswersChecked.length; i++) {
            incorrectAnswersChecked[i].parentNode.parentNode.parentNode.style.backgroundColor = `red`;
        }
    } //a better way than 2 loops? and also parentNode.parentNode.parentNode

}

let firstQuiz = new Quiz(`firstQuiz`);

firstQuiz.fetchQuestions()
    .then((questions) => {
        document.querySelector(`.loading`).remove();
        firstQuiz.renderQuestions(questions);
    })
//get score button
let getScoreBtn = document.querySelector(`button`);
getScoreBtn.addEventListener("click", () => firstQuiz.getScore());
getScoreBtn.addEventListener(`click`, () => confetti.render());
getScoreBtn.addEventListener(`click`, () => firstQuiz.showCorrectAnswers());

//confetti
var confettiSettings = {
    target: 'my-canvas'
};
var confetti = new ConfettiGenerator(confettiSettings);
//confetti.render();

//select difficulty
let difficultyLevelSelector = document.querySelector(`#level`);

difficultyLevelSelector.addEventListener(`change`, () => {
    let easyQuestions = document.querySelectorAll(`li[difficulty=easy]`);
    let hardQuestions = document.querySelectorAll(`li[difficulty=hard]`);
    let allQuestions = document.querySelectorAll(`.hidden`);

    getScoreBtn.classList.remove(`hidden`);

    if (difficultyLevelSelector.value == `easy`) {
        for (let i = 0; i < easyQuestions.length; i++) {
            easyQuestions[i].classList.remove(`hidden`);
        }
        for (let i = 0; i < hardQuestions.length; i++) {
            hardQuestions[i].classList.add(`hidden`);
        }

    } else if (difficultyLevelSelector.value == `hard`) {
        for (let i = 0; i < hardQuestions.length; i++) {
            hardQuestions[i].classList.remove(`hidden`);
        }
        for (let i = 0; i < hardQuestions.length; i++) {
            easyQuestions[i].classList.add(`hidden`);
        }
    } else {
        for (let i = 0; i < allQuestions.length; i++) {
            allQuestions[i].classList.remove(`hidden`);
        }
    }
});

//timer
function startTimer() {
    let seconds = 0;
    timer = setInterval(() => {
        seconds++;
        document.getElementById(`seconds`).innerHTML = seconds % 60;
        document.getElementById(`minutes`).innerHTML = parseInt(seconds / 60);
    }, 1000);
}

startTimer();

function stopTimer() {
    clearInterval(timer);
}

getScoreBtn.addEventListener(`click`, stopTimer);