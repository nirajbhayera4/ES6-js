//write a function to remove the duplicates from the array without using the in-built functions
function removeDuplicates(arr){
    let newarr=[];
    for(let i=0;i<arr.length;i++){
        if(!newarr.includes(arr[i])){
            newarr.push(arr[i]);

        }
    }
    return newarr;
}
console.log(removeDuplicates([1,2,2,3,3,4,5]));
//output will be [1,2,3,4,5]
