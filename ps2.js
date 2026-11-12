// write a js function that takes an array of numbers and returns a new array containing only even numbers 
// example: [1,2,3,4,5,6,7,8,9,10] => [2,4,6,8,10]
function getEvenNumbers(numbers){
    return numbers.filter(number=>number%2===0);
}
console.log(getEvenNumbers([1,2,3,4,5,6,7,8,9,10]));

