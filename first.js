// ques 1 
// let n=0;
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log("Even numbers are :", i);
//         n++;
//     }
// }
// console.log("Total even numbers are : ", n);


// ques 2
let gamenum = 35;
let usernum = prompt("Guess the number");
while(gamenum != usernum){
    usernum = prompt("you entered the wrong number. Guess again.");
}
console.log("Congo!,you entered the right number");