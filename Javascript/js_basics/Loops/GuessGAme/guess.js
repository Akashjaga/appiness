let maximum = parseInt(prompt('enter a maximum number'))
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number'));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess..."))
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess >= targetNum) {
        guess = prompt("too High. enter new Guess!!")
    } else {
        guess = prompt("too low, enter new Guess")
    }
}
if (guess === 'q') {
    console.log("ok you quit..")
}
else {
    console.log(`you got it .. ${attempts} guesses`)
}