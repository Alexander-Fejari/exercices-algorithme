// exercices 1
//sum
function sum(a, b) {
    return a + b;
}

console.log('sum: ' + sum(8, 2));

//division
function division(a, b) {
    return a / b;
}

console.log('division: ' + division(8, 2));

//modulo
function modulo(a, b) {
    return a % b;
}

console.log('modulo: ' + modulo(15, 20));


//exercices 2
//concatenation
function concat() {
    let a = 'Je m' + `'` + 'appelle ';
    let b = 'Alexander et je suis en formation.'

    return a + b;
}

console.log('concatenation: ' + concat())

// exercices 3
//VAT
function vat(a, b) {
    return a * (1 + b)
}

console.log('VAT: ' + vat(10, 0.21))
//exercices 4
// Calc radius d'un circle
function radiusCircle(r) {
    return Math.PI * (r * r)
}

console.log('radius circle: ' + radiusCircle(5))

//exercices 5
// Calc du temps en secondes
const d = new Date();
let hour = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();

function convertTime() {
    let convertHour = hour * 3600;
    let convertMin = min * 60;
    return convertHour + convertMin + sec;
}
console.log('convert time: ' + hour,':' + min,':' + sec, 'in sec: ' + convertTime());