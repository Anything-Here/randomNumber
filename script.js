let randomNumber = 0

function randomNumberFunction(){
    randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("А тут в консоле нету числа клоун 🤡")
}

function checkNumberinput(){
    let inputNumbers = document.getElementById('inputNumbers')
    let newgameButton = document.getElementById('newgameButton')
    let h1Text = document.getElementById('h1Text')
    let checkButtonNumber = document.getElementById('checkButtonNumber')

    if (inputNumbers.value == randomNumber){
        newgameButton.hidden = false
        checkButtonNumber.hidden = true
        inputNumbers.hidden = true
        h1Text.innerText = "Вы угадали! Число было: " + randomNumber + ". Начните новую игру"
    } else {
        h1Text.innerText = "Неверно!"
    }
}

function newgamefunction(){
    let inputNumbers = document.getElementById('inputNumbers')
    let newgameButton = document.getElementById('newgameButton')
    let h1Text = document.getElementById('h1Text')
    let checkButtonNumber = document.getElementById('checkButtonNumber')

    inputNumbers.hidden = false
    newgameButton.hidden = true
    h1Text.innerText = "Попробуй угадать загаданное число! (Числа от 1 до 10)"
    checkButtonNumber.hidden = false
    randomNumberFunction();
}

randomNumberFunction();