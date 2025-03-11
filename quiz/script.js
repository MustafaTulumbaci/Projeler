const quizData = [
    {
        question: "Türkiye'nin en yüksek dağı hangisidir?",
        a: "Toroslar",
        b: "Ağrı Dağı",
        c: "Madran Dağı",
        d: "Aydın Dağları",
        correct: "b",
    },
    {
        question: "1997 yapımı Titanic filminin yönetmeni kimdir?",
        a: "Alfred Hitchcock",
        b: "Quentin Tarantino",
        c: "James Cameron",
        d: "Steven Spielberg",
        correct: "c",
    },
    {
        question: "Hangi ülke, dünya haritasında T şeklinde bir görünüm alır?",
        a: "Fransa",
        b: "Türkiye",
        c: "Almanya",
        d: "İtalya",
        correct: "b",
    },
    {
        question: "Hangi gezegen Kızıl Gezegen olarak bilinir?",
        a: "Jüpiter",
        b: "Satürn",
        c: "venüs",
        d: "Mars",
        correct: "d",
    },
    {
        question: "Mustafa Kemal Atatürk, Türkiye Cumhuriyeti'nin ilk Cumhurbaşkanı olduğu göreve hangi yılda başlamıştır?",
        a: "1919",
        b: "1893",
        c: "1923",
        d: "1938",
        correct: "c",
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
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2> ${score} Soruyu Doğru Cevapladınız</h2>

                <button onclick="location.reload()">Yenile</button>
            `
        }
    }
})