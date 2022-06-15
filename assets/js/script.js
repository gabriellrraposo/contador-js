var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment() {
    if (currentNumber < 10 && currentNumber >= 0) {
        currentNumber = currentNumber + 1
        currentNumberWrapper.innerHTML = currentNumber
    } else if (currentNumber === 10) {
        alert("Número máximo alcançado!")
    }
}

function decrement() {
    if (currentNumber <= 10 && currentNumber > 0) {
        currentNumber = currentNumber - 1
        currentNumberWrapper.innerHTML = currentNumber
    } else if (currentNumber === 0) {
        alert("Número mínimo alcançado!")
    }
}

