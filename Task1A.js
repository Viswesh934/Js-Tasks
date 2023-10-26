/*Write a program to print the first 100 prime numbers. 
Create a function isPrime() that will take a number and return 1 or 0 if the number is prime or not.*/
function isPrime(num) {
    if(num==1){
        return 1;
    }
    for(let i=2;i<=num/2;i++){
        if(num%i==0){
            return 0;
        }
    
    }
     return 1;
}

/*As a variation, make changes to use Anonymous Function and store it in a variable to call it.*/
let isPrimeA=function(num){
    if(num==1){
        return 1;
    }
    for(let i=2;i<=num/2;i++){
        if(num%i==0){
            return 0;
        }
    
    }
     return 1;
}
/*As a variation, make changes to use Arrow Function*/
let isPrimeAr=(num)=>{
    if(num==1){
        return 1;
    }
    for(let i=2;i<=num/2;i++){
        if(num%i==0){
            return 0;
        }
    
    }
     return 1;
}
/*The call is same for all variations*/
let count=0;
let i=2;
while(count<100){
    if(isPrime(i) && isPrimeA(i) && isPrimeAr(i)){
        console.log(i);
        count++;
    }
    i++;
}