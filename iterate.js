// Iterating through Arrays

// Declare an array of numbers and use a `for` loop to print each element of the array.
let arr = [1,2,3,4,5,6,7,8,9,90];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    
}
// Write a function that finds the largest number in an array of numbers using a loop.
function largestNum(arr) {
   if(arr){
    console.log(Math.max.apply("",arr) + " is the largest number in the arr")
   }
}
largestNum([2,45,67,89,0,23,56,89,56])