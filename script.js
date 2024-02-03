
// display for calculator
const display = document.querySelector('.display')
const buttons = document.querySelectorAll('input')


// event listener for button input
buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        if (button.value >= 0 || button.value <= 9) {
            display.textContent += button.value
        } if (button.value === 'Clear') {
            display.textContent = ''
        } if (button.value === '+' || button.value === '-' || button.value === '*' || button.value === '/') {
            display.textContent += button.value
        } if (button.value === '=') {
            display.textContent += button.value
        }
    })
})