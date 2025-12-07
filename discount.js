let amount= 7800;
let dis=0;

console.log("---Amount ----  discount--");
console.log("---0-5000 ----  0 % --");
console.log("---5000-7000 ----  5 % --");
console.log("---7000-9000 ----  10 % --");
console.log("---above 9000 ----  20 % --");

console.log("\n");



if(amount>=0 && amount<=5000){
    dis=0
}
else if(amount>=5000 && amount<=7000){
   dis=5
}
else if(amount>=7000 && amount<=9000){
   dis=10
}
else  if(amount>9000)
{
   dis=20
   
}
 console.log("Discounted amount : ", Math.floor((dis*amount)/100)); 
 console.log("Your final amount after discount is : ", amount-Math.floor((dis*amount)/100)); 




// let amount= 90000;

// console.log("---Amount ----  discount--");
// console.log("---0-5000 ----  0 % --");
// console.log("---5000-7000 ----  5 % --");
// console.log("---7000-9000 ----  10 % --");
// console.log("---above 9000 ----  20 % --");

// console.log("\n");



// if(amount>=0 && amount<=5000){
//     console.log("discounted amount is :", 0); 
//     console.log("Your final amount with 0 % is :",amount); 
// }
// else if(amount>=5000 && amount<=7000){
//     console.log(" discounted amount is : ", Math.floor((5*amount)/100)); 
//     console.log("Your final amount after 5 % discount is : ", amount-Math.floor((5*amount)/100)); 
// }
// else if(amount>=7000 && amount<=9000){
//     console.log(" discounted amount is : ", Math.floor((10*amount)/100)); 
//     console.log("Your final amount after 10 % discount is : ", amount-Math.floor((10*amount)/100)); 
// }
// else  if(amount>=9000)
// {
//     console.log(" discounted amount is : ", Math.floor((20*amount)/100)); 
//     console.log("Your final amount after 20 % discount is : ", amount-Math.floor((20*amount)/100)); 
// }
// else{
//     console.log("--- Buy Now Special offer---");
    
// }