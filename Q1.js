var readlineSync = require('readline-sync');


let name = readlineSync.question("Choose Name :");
let message = greeting(name);
function greeting(){
     return 'Hello' + name ;
}    
console.log(message);


//var readlineSync = require("readline-sync");
//let name = readlineSync.question("Type your name ");
//let message = greeting(name);
//function greeting(){
   // return 'Hai '+name;
//}
///console.log(message);