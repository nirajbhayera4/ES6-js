// write a function that returns the largest number in an array without using math.max
function getlargestnumber(numbers){
    let largest=numbers[0];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] > largest){
            largest=numbers[i];
        }
    }
    return largest;
}
console.log(getlargestnumber([1,2,3,4,5,6,7,8,9,10]));
