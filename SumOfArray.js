function sumArr(){
   
    let arr=[20,1.2,34,-56,67]
    if(arr === null || arr.length === 0)
    {
        return 0;
    }    
  
    let sum=0;
    for (i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum;
   
}
console.log(sumArr())