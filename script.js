
// display for calculator
const display = document.querySelector('.display')
const buttons = document.querySelectorAll('input')

let num1 = ''
let operator = 0
let num2 = ''
let result = ''

// calculator function
function calculator (button) {
    if (result === 'reset') {
        result = ''
        display.textContent = ''
    }
    if (button.value >= 0 && operator === 0) {
        num1 += button.value
        display.textContent += button.value
    } if (button.value >= 0 && operator !== 0) {
        num2 += button.value
        display.textContent += button.value
    } if (button.value === 'Clear') {
        num1 = ''
        operator = 0
        num2 = ''
        display.textContent = ''
    } if (button.value === '+' || button.value === '-' || button.value === '*' || button.value === '/') {
        operator = button.value
        display.textContent += button.value
    } if (button.value === '=') {
        operate(num1, operator, num2)
        num1 = ''
        operator = 0
        num2 = ''
        display.textContent = result;
        result = 'reset'
    }
}

// event listener for button input
buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        calculator(button)
    })
})

function operate(num1, operator, num2) {
    if (operator === '+') {
        result = (parseInt(num1) + parseInt(num2))
    }
    if (operator === '-') {
        result = (parseInt(num1) - parseInt(num2))
    }
    if (operator === '*') {
        result = (parseInt(num1) * parseInt(num2))
    }
    if (operator === '/') {
        result = (parseInt(num1) / parseInt(num2))
    }
}