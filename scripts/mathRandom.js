const lowerValue = 0
const greaterValue = 1000
const secretNumber = randomNumberGenerator()

function randomNumberGenerator() {
    return parseInt(Math.random() * greaterValue + 1) 
}

const domLower = document.getElementById('lower-value')
domLower.innerHTML  = lowerValue

const domGreater = document.getElementById('greater-value')
domGreater.innerHTML  = greaterValue

console.log(`O número secreto é ${secretNumber}`)