const quizData = [
    {
        question: "Which planet is known as the 'Red Planet'?",
        a: "Venus",
        b: "Mars",
        c: "Mercury",
        d: "Uranus",
        correct: "b", // Mars
    },
    {
        question: "Who is known as the 'Father of Modern Physics'?",
        a: "Niels Bohr",
        b: "Albert Einstein",
        c: "Isaac Newton",
        d: "Galileo Galilei",
        correct: "b", // Albert Einstein
    },
    {
        question: "What is the currency of Brazil?",
        a: "Euro",
        b: "Pound",
        c: "Real",
        d: "Dollar",
        correct: "c", // Real
    },
    // Add more questions here...
    {
        question: "What is the chemical symbol for sulfur?",
        a: "Su",
        b: "Sl",
        c: "Sr",
        d: "S",
        correct: "d", // S
    },
    {
        question: "Which continent is known as the 'Dark Continent'?",
        a: "Africa",
        b: "Asia",
        c: "Europe",
        d: "Australia",
        correct: "a", // Africa
    },
    {
        question: "What is the chemical symbol for potassium?",
        a: "K",
        b: "P",
        c: "Ka",
        d: "Pb",
        correct: "a", // K
    },
    {
        question: "Who wrote the famous novel 'Pride and Prejudice'?",
        a: "Jane Austen",
        b: "Charlotte Bronte",
        c: "George Orwell",
        d: "Leo Tolstoy",
        correct: "a", // Jane Austen
    },
    {
        question: "Which gas is responsible for the ozone layer depletion?",
        a: "Oxygen (O2)",
        b: "Carbon dioxide (CO2)",
        c: "Methane (CH4)",
        d: "Chlorofluorocarbons (CFCs)",
        correct: "d", // Chlorofluorocarbons (CFCs)
    },
    {
        question: "Who painted the famous artwork 'The Starry Night'?",
        a: "Vincent van Gogh",
        b: "Pablo Picasso",
        c: "Leonardo da Vinci",
        d: "Claude Monet",
        correct: "a", // Vincent van Gogh
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        a: "China",
        b: "India",
        c: "Japan",
        d: "Korea",
        correct: "c", // Japan
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }

    })
    return answer

}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2> you answered ${score}/${quizData.length} questions correctly </h2>
            
            <button onClick="location.reload()">Reload</button>
            `
        }
    }

  })