const quizData = [
    {
        question : 'What does JS stand for?',
        a: 'JellySquids',
        b: 'JubileeSquares',
        c: 'JavaScript',
        d: 'JollySasquatch',
        correct: 'c'
    }, {
        question : 'How old is Dane?',
        a: '21',
        b: '23',
        c: '28',
        d: '25',
        correct: 'd'
    }, {
        question : 'What does CSS stand for?',
        a: 'Corresponding Spatula Symmetry',
        b: 'Cascading Style Sheet',
        c: 'Cornish Stew Sundays',
        d: 'Concert Singing Sparrows',
        correct: 'b'
    }, {
        question : 'What is npm?',
        a: 'Node Package Manager',
        b: 'Never Polish Geese',
        c: 'New Product Manager',
        d: 'November Pottery Meetings',
        correct: 'a'
    }, {
        question : 'What is JS used for?',
        a: 'Web Dev',
        b: 'Game Dev',
        c: 'Mobile Dev',
        d: 'All Of The Above',
        correct: 'd'
    }
]

const quiz = document.querySelector('#quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.querySelector('#question')
const aText = document.querySelector('#a_text')
const bText = document.querySelector('#b_text')
const cText = document.querySelector('#c_text')
const dText = document.querySelector('#d_text')
const submitBtn = document.querySelector('#submit')

// keep track of current question that is being answered by the user
let currentQuiz = 0
let score = 0

// we need a function to load the quiz every time the user submits
loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.textContent = currentQuizData.question

    aText.textContent = currentQuizData.a
    bText.textContent = currentQuizData.b
    cText.textContent = currentQuizData.c
    dText.textContent = currentQuizData.d
}

function getSelected() {
    let answer = undefined

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    // if the user doesn't select an answer we want to stop them from being able to go to the next question
    return answer
}

// we will make a function to deselect the answer when you move to the next question
function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false
    })
}

// Submit button event listener for click
submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            // SHOW RESULTS FROM QUIZ ANSWERS
            quiz.innerHTML = `<h2>Well Done! You scored: ${score} out of ${quizData.length}</h2>`
        }  
    }
})