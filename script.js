//timer

quiz = [
    {
        question: "What does HTML stand for?",
        option: [
            "Hyper Tag Makeup Language",
            "Hyper Text Markup Language",
            "Hyperlinks Text Mark Language",
            "Hyperlinking Text Marking Language",
        ],
        answer: 2,
    },

    {
        question: "What does CSS stand for?",
        option: [
            "Creative Style Sheets",
            "Colorful Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
        ],
        answer: 3,
    },

    {
        question: "In CSS, h1 can be called as?",
        option: [
            "Selector",
            "Value",
            "Attribute",
            "Tag",
        ],
        answer: 4,
    },

    {
        question: "Which HTML tag is used to define an internal style sheet?",
        option: [
            "css",
            "text/style",
            "style",
            "script",
        ],
        answer: 3,
    },

    {
        question: "Which is the correct CSS syntax?",
        option: [
            "body {color: black}",
            "{body;color:black}",
            "{body:color=black(body}",
            "body:color=black",
        ],
        answer: 1,
    },
]
let index = Math.floor(Math.random() * quiz.length);
let attempt = 0;
let question = quiz;

let timerBoxSpan = document.querySelector('.timerBoxSpan');
let questionBox = document.querySelector('.questionBox');
let optionBox = document.querySelectorAll('.optionBox span');



function timer(){
    let totalTime = 200;
    let min = 0;
    let sec = 0;
    let counter = 0;

    let timer = setInterval(function(){
        counter++;
        min = Math.floor((totalTime - counter) / 60);
        sec = totalTime - (min * 60) - counter
        timerBoxSpan.innerText = (min + ":" + sec);
        if(timer === totalTime){
            clearInterval(timer);
        }
        
    }, 1000);

    //Print Question
    printQuestion(index);

}
timer();

function printQuestion(i){
    questionBox.innerText = question[i].question;
    optionBox[0].innerText= question[i].option[0]
    optionBox[1].innerText= question[i].option[1]
    optionBox[2].innerText= question[i].option[2]
    optionBox[3].innerText= question[i].option[3]
    

}

function checkAnswer(option){
    attempt++;
    let optionClicked = document.querySelectorAll('[data-opt]');
      optionClicked.forEach(value =>{
        const values = value.dataset['opt'];
        console.log(values);
    })

}
