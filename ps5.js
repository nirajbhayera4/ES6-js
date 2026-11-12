//write a function to count the number of vowels in a string without using the in-built functions
function countVowels(s){
    let count=0;
    let vowels="aeiouAEIOU";
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels("hello"));
