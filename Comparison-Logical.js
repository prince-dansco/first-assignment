// Arithmetic, Comparison, Logical Operators:

// 1. Write a function that takes two numbers and returns their sum,
//  difference, product, and quotient using arithmetic operators
function names(num1,num2) {
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;


    return `     sum :${sum}
    difference :${difference}
    product: ${product}
    quotient: ${quotient}`
}
 let result = names(9,8);
 
 console.log(result);



// 2. Create a function that compares two numbers and returns true if they are equal and false otherwise, using comparison operators.
// function names(a,b) {
//     if (a === b) {
//         console.log("true")
//     }else{
//         console.log("false")
//     }
//     return a + b
// }
// names(2,5) ;




// 3. Implement a function that checks if a given number is even or odd using logical operators.
// function names(num) {
//     if (num %2 == 0) {
//         console.log("even");
//      }else{
//         console.log("odd");
//  }
// return ;
// }
//  names(5);
