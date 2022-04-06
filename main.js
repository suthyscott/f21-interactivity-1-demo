let count = 0
const counterText = document.querySelector('#counter')

const increase = () => {
    count += 1
    counterText.textContent = count
}

const decrease = () => {
    if(count > 0){
        count -= 1
        counterText.textContent = count
    } else {
        alert('You cannot count below 0')
        reset()
    }
}

const reset = () => {
    count = 0
    counterText.textContent = count
}

const plusBtn = document.querySelector('#plus-btn')
const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.getElementById('reset-btn')

plusBtn.addEventListener('click', increase)
minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)



const buttons = document.querySelectorAll('.theme-buttons')

const selectTheme = (event) => {
    console.log('hit seletTheme', event.target, event.target.textContent)
    const theme = event.target.textContent
    console.log('theme', theme)

    const body = document.querySelector('body')
    const main = document.querySelector('main')

    body.className = theme
    main.className = theme

    for(let i = 0; i < buttons.length; i++){
        buttons[i].className = theme
    }

}

// const selectTheme = (evt) => {
//     if (evt.shiftKey === true) {
//     const theme = evt.target.textContent;

//     const body = document.querySelector('body')
//     const main = document.querySelector('main')

//     body.className = theme;
//     main.className = theme;

//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].className = theme
//         }
//     }
// }


// for(let i = 0; i < buttons.length; i++){
//     console.log(buttons[i])
//     buttons[i].addEventListener('click', selectTheme)
// }

buttons.forEach(e => {
    e.addEventListener('click', selectTheme)
})


const wordInput = document.querySelector('input')


const inputRender = () => {
    const newDiv = document.createElement('div')
    newDiv.textContent = wordInput.value
    console.log(newDiv)
    document.querySelector('body').appendChild(newDiv)
}

wordInput.addEventListener('change', inputRender)