let readlineSync = require('readline-sync');

let rows = readlineSync.question("Enter the Rows : ");

function printPattern (rows) {
    for (i=0;i<=rows;i++) {
        
        console.log("*".repeat(i));
    }
}
printPattern (rows)