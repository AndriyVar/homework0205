'use strict'

let targetNumber = Math.round(Math.random() * 100);
let attempt = 0;

while (true) {
    console.log(targetNumber);
    let guess = +prompt("Вгадайте число від 0 до 100:");
    
    attempt++;
    
    if (guess > targetNumber) {
        alert("Введене Вами число більше за те, що я загадав");
    } else if (guess < targetNumber) {
        alert("Введене Вами число менше за те, що я загадав");
    } else {
        alert(`Вітаю! Ви вгадали.`);
        break;
    }
}