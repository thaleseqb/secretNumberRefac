function validationFunction(attempt) {
    const number = +attempt

    if (ifInvalid(number)) {
        attemptElement.innerHTML += `<div>Valor inválido</div>`
        return
    }

    if (greaterOrLower(number)) {
        attemptElement.innerHTML += `<div>Valor invalido: necessário que o número falado esteja entre ${lowerValue} e ${greaterValue}</div>`
        return
    }

    if (number === secretNumber) {
        document.body.innerHTML = `
        <h2>Parabens você acertou!<h2>
        <h3>O número era ${number}</h3>
        <button id="play-again" class="btn-play">jogar novamente</button>
        `
    } else if (number < secretNumber) {
        attemptElement.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>'
    } else {
        attemptElement.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-down-long"></i></div>'
    }

}

function ifInvalid(number) {
    return Number.isNaN(number)
}

function greaterOrLower(number) {
    return number > greaterValue || number < lowerValue

}

document.addEventListener('click', (event) => {
    if (event.target.id == 'play-again') {
        window.location.reload()
    }
})