//second largest  number without using any in-built functions 
//[10,5,20,8,20,15]
//output will be 15
function secondLargestNumber(arr){
    //wihout sort 
    let max=arr[0];
    let secondmax=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            secondmax=max; 
            max=arr[i];
        }
        else if(arr[i] > secondmax && arr[i] != max){
            secondmax=arr[i];
        }
    }
    return secondmax;


}
console.log(secondLargestNumber([10,5,20,8,20,15]));