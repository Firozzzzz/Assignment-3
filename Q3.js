let readlineSync = require('readline-sync');

let number = readlineSync.question("Type The Number : ");

function printEvenNumbers(n) {

    for (i=0;i<=number;i++) {
        if (i%2===0) {
            console.log(i);
        }
    }

}
printEvenNumbers(number)