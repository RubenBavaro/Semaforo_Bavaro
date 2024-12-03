function generateRandomInteger(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min) + min);
}

function sanitize(Var) {
    return !isNaN(Var) ? parseInt(Var.trim()) : NaN;
}


let red1 = document.querySelectorAll("#red1");
let red2 = document.querySelectorAll("#red2");
let red3 = document.querySelectorAll("#red3");
let green = document.querySelectorAll("#green");
let startBtn = document.getElementById("button");
let resetBtn = document.getElementById("resetBtn");
let result = document.getElementById("message");

let greenLightOn;
let startTime;
let start = false;

function handleClick(event) {
    let clickTime = Date.now();
    if (greenLightOn===false && start===true) {
        result.innerText = `Partenza anticipata!`;
    } else if (start===true){
        let reactionTime = (clickTime - startTime) / 1000;
        result.innerText = `Tempo di reazione: ${reactionTime.toFixed(3)} secondi`;
        startBtn.disabled = true;
    }
    if (start===false){
        startGame();
    }
    document.body.removeEventListener("click", handleClick);
}

function handleReset(event) {
    red1.forEach(light => light.style.backgroundColor = "rgba(217, 217, 217, 0.5)");
    red2.forEach(light => light.style.backgroundColor = "rgba(217, 217, 217, 0.5)");
    red3.forEach(light => light.style.backgroundColor = "rgba(217, 217, 217, 0.5)");
    green.forEach(light => light.style.backgroundColor = "rgba(217, 217, 217, 0.5)");
    result.innerText = "Non hai ancora premuto il tasto START.";
    greenLightOn = false;
    startGame();
    startBtn.disabled = false;
}

startBtn.addEventListener("click", handleClick);
resetBtn.addEventListener("click", handleReset);

function startGame() {
    result.innerText = "Non hai ancora premuto il tasto STOP.";
    greenLightOn = false;
    start = true;

    let red1Time = generateRandomInteger(500, 1500);
    let red2Time = generateRandomInteger(500, 1500);
    let red3Time = generateRandomInteger(500, 1500);
    let greenTime = generateRandomInteger(1000, 3000);

    setTimeout(() => {
        red1.forEach(light => light.style.backgroundColor = "rgba(255, 0, 0, 1)");
        setTimeout(() => {
            red2.forEach(light => light.style.backgroundColor = "rgba(255, 0, 0, 1)");
            setTimeout(() => {
                red3.forEach(light => light.style.backgroundColor = "rgba(255, 0, 0, 1)");
                setTimeout(() => {
                    red1.forEach(light => light.style.backgroundColor = "rgba(217, 217, 217, 0.5)");
                    red2.forEach(light => light.style.backgroundColor = "rgba(217, 217, 217, 0.5)");
                    red3.forEach(light => light.style.backgroundColor = "rgba(217, 217, 217, 0.5)");
                    green.forEach(light => light.style.backgroundColor = "rgba(0, 255, 0, 1)");
                    greenLightOn = true;
                    startTime = Date.now();
                    document.body.addEventListener("click", handleClick);
                }, greenTime);
            }, red3Time);
        }, red2Time);
    }, red1Time);
}


