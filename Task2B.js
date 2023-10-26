// Write a program to create a function that will take an array of numbers and returns the second max.
function secondMax(arr){
    let max=arr[0];
    let secondMax=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            secondMax=max;
            max=arr[i];
        }
        else if(arr[i]>secondMax){
            secondMax=arr[i];
        }
    }
    return secondMax;
}
let arr=[10,20,30,40,50];
console.log(secondMax(arr));