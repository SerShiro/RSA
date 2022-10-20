const power = (base, ex) => {
    let d = 1
    while(ex > 0) {
        if (ex % 2 === 1) {
            d *= base
        }
        base *= base
        ex >>= 1
    }
    return d
}
console.log(power(20, 65))