var readlineSync = require('readline-sync');

let number=readlineSync.question('Last Number : ');
 function printNumber(){
    for(i=1;i<=number;i++){
      console.log(i);
    }
}
printNumber();