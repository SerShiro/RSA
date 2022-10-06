const inputText = document.querySelector('#input')
const inputDec = document.querySelector('#inputDec')
const btnEnc = document.querySelector('#btnEnc')
const btnDec = document.querySelector('#btnDec')


const PQKeys = () => {
    let = simpleNumbers = []
    for (let i = 0; i < 250; i++) {
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
    let mas = PQKeys()
    let p = mas[0], q = mas[1]
    while (p * q < 130) {
        mas = PQKeys()
        p = mas[0], q = mas[1]
    }
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
    mas = [p, q, d, e, n]
    return mas
}

function encrypt(text) {
    let masText = text.split(''), textOutput = ''  
    let mas = EDKeys()
    let p = mas[0], q = mas[1], d = mas[2], e = mas[3], n = mas[4], result = 1, ost
    let masNumbers = masText.map(elem => {
        // return Number((BigInt(elem.charCodeAt(0)) ** BigInt(e)) % BigInt(n))
        ost = 1
        for (let i = 0; i < e; i++) {
            result = ost * elem.charCodeAt(0)
            ost = result % n
        }
        return ost
    })
    masNumbers.forEach((elem, i) => {
        if (i === masNumbers.length - 1) textOutput += `${String.fromCharCode(elem)}`
        else textOutput += `${String.fromCodePoint(elem)}`
    })
    document.querySelector('#keys').innerHTML = `p = ${p} <br> q = ${q} <br> d = ${d} <br> e = ${e}`
    document.querySelector('#parEncrypt').textContent = textOutput
}

function decrypt(text, p, q, d) {
    let masText = text.split(''), textOutput = ''
    let result = 1, ost
    let masNumbers = masText.map(elem => {
        // return Number(BigInt(elem.charCodeAt(0) ** d) % BigInt(p * q))
        ost = 1
        for (let i = 0; i < d; i++) {
            result = ost * elem.charCodeAt(0)
            ost = result % (p * q)
        }
        return ost
    })
    masNumbers.forEach((elem) => {
        textOutput += `${String.fromCharCode(elem)}`
    })
    document.querySelector('.parDecrypt').innerHTML = textOutput
}


btnEnc.addEventListener('click', (event) => {
    event.preventDefault()
    let text = inputText.value
    encrypt(text)
})


btnDec.addEventListener('click', (event) => {
    event.preventDefault()
    let text = inputDec.value
    let p = Number(document.querySelector('#keyP').value)
    let q = Number(document.querySelector('#keyQ').value)
    let d = Number(document.querySelector('#keyD').value)
    decrypt(text,p, q, d)
})

