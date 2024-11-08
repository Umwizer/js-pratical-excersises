// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

function av(arr){
    if(arr.length === 0 ){
        return 0;
    }
    let sum = 0;
    let av = 0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    av = sum/arr.length
    return av;
 
}
console.log(av([12,12,43,546]))