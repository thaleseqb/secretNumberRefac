const attemptElement = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
    let attempt = event.results[0][0].transcript
    exhibitTry(attempt)
    validationFunction(attempt);
}

function exhibitTry(attempt) {
    attemptElement.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${attempt}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())