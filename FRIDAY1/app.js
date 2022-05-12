// elements

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn = document.querySelector("#speak");




// SpeechRecognition 


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// start
recognition.onstart = function () {

    console.log("vr active");
}

// sr continues
recognition.continuous = true;

// sr result
recognition.onresult = function (event) {
    // console.log(event) 
    
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;

    // console.log(transcript)
    readOut(transcript)
}

//stop

recognition.onend = function () {
    console.log("vr deactive");
}

startBtn.addEventListener("click", () => {
    recognition.start()
})

stopBtn.addEventListener("click", () => {
    recognition.stop()
})

// FRIDAY's speech

function readOut(message) {
    const speech = new SpeechSynthesisUtterance();
    // default voice --- jarvis
    // change voices...     to check how many voices u have, open browser console and paste -> speechSynthesis.getVoices()

    const allVoices = speechSynthesis.getVoices()
    speech.text = message;
    speech.voice = allVoices[2];  // 2 is the index of voices (Zira's voice)
    speech.volume  = 1;
    window.speechSynthesis.speak(speech)
    // console.log("speaking");
}

// example
speakBtn.addEventListener("click", () => {
    readOut("Hi sir, lets code something apic today")
})

window.onload = function() {
    readOut("  ")
}