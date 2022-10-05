const inputText = document.querySelector('#input')
const inputDec = document.querySelector('#inputDec')
const btnEnc = document.querySelector('#btnEnc')
const btnDec = document.querySelector('#btnDec')

const alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']

const PQKeys = () => {
    let = simpleNumbers = []
    for (let i = 0; i < 29; i++) {
        simpleNumbers[i] = i + 2;
    }
    for (let i = 0; i < simpleNumbers.length - 1; i++) {
        for (let j = i + 1; j < simpleNumbers.length; j++) {
            if (simpleNumbers[i] === 0) break
            if (simpleNumbers[j] % simpleNumbers[i] === 0) simpleNumbers[j] = 0
        }    
    }
    let fl = true
    while(fl) {
        if (simpleNumbers.indexOf(0) === -1) {
            fl = false
            break
        }
        simpleNumbers.splice(simpleNumbers.indexOf(0), 1)
    }
    let p = simpleNumbers[Math.floor(Math.random() * simpleNumbers.length)]
    let q = simpleNumbers[Math.floor(Math.random() * simpleNumbers.length)]
    let mas = [p, q]
    return mas
}

const getNod = (num1, num2) => {
    let maxDivider = 0
    if (num1 === 1 || num2 === 1) return 0
    if (num1 < num2) {
        for (let i = 1; i <= num1; i++) {
            if (num1 % i === 0 && num2 % i === 0) maxDivider = i  
        }
    }
    else {
        for (let i = 1; i <= num2; i++) {
            if (num1 % i === 0 && num2 % i === 0) maxDivider = i  
        }
    }
    return maxDivider
}


const EDKeys = () => {
    const mas = PQKeys()
    const p = mas[0], q = mas[1]
    const n = p * q
    let d = 0
    let i = 0
    while(true) {
        i++
        if (getNod(i, ((p - 1) * (q - 1))) === 1) {
            d = i
            break
        }
    }
    i = 0
    while(true) {
        i++
        e = i
        if (((e * d) % ((p - 1) * (q - 1))) === 1) break
    }
    console.log(p, q, d, e)
}

EDKeys()

function encrypt() {
    
}

function decrypt() {
    
}

inputText.addEventListener('keypress', event => {
    
})

btnEnc.addEventListener('click', (event) => {
    
})

btnDec.addEventListener('click', (event) => {
    
})

inputDec.addEventListener('keypress', event => {
    
    
})