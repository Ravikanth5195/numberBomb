let startEl = document.getElementById("start-el")
let scoreEl = document.getElementById("score-el")
let resultEl = document.getElementById("result-el")
let rulesEl = document.getElementById("rules-el")
let startDiv = document.getElementById("start-div")
let btn1=document.getElementById("btn-1")
let btn2=document.getElementById("btn-2")
let btn3=document.getElementById("btn-3")
let isAlive = false
let sum = 0
let numClicked = 0

function start(){
    isAlive=true
    rulesEl.textContent = "Choose any number to increase your score (one of it contains a bomb that is differently placed for every click)"
    startEl.textContent = "RESTART"
    sum =0
    scoreEl.textContent="Your Score: " +sum
    resultEl.textContent = ""
    btn1.textContent="5"
    btn2.textContent="10"
    btn3.textContent="15"
}


function btn(x){
    if(isAlive==true){
        numClicked = x
        sum +=x
        if (numClicked == (Math.floor(Math.random()*3)+1)*5){
            isAlive = false
            sum-=x
            resultEl.textContent = 'You are out of the game! Final Score: '+sum
            bombBtn(x)
        }
        scoreEl.textContent="Your Score: " +sum
    }
}

function bombBtn(x){
    if (x==5){
        btn1.textContent = "💣"
    } else if (x==10){
        btn2.textContent = "💣"
    } else if (x==15){
        btn3.textContent = "💣"
    }
}

function drop(){
    isAlive = false
    resultEl.textContent = "Final Score: " + sum
}


