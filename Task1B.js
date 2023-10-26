/*Write a program in which create a function that takes three numbers and prints the second max.*/
function secondMax(a,b,c){  
    if(a>b && a>c){
        if(b>c){
            return b;
        }
        else{
            return c;
        }
    }
    else if(b>a && b>c){
        if(a>c){
            return a;
        }
        else{
            return c;
        }
    }
    else{
        if(a>b){
            return a;
        }
        else{
            return b;
        }
    }
}

/*As a variation, make changes to use Anonymous Function and store it in a variable to call it.*/
let secondMaxA=function(a,b,c){  
    if(a>b && a>c){
        if(b>c){
            return b;
        }
        else{
            return c;
        }
    }
    else if(b>a && b>c){
        if(a>c){
            return a;
        }
        else{
            return c;
        }
    }
    else{
        if(a>b){
            return a;
        }
        else{
            return b;
        }
    }
}
/*As a variation, make changes to use Arrow Function*/
let secondMaxAr=(a,b,c)=>{  
    if(a>b && a>c){
        if(b>c){
            return b;
        }
        else{
            return c;
        }
    }
    else if(b>a && b>c){
        if(a>c){
            return a;
        }
        else{
            return c;
        }
    }
    else{
        if(a>b){
            return a;
        }
        else{
            return b;
        }
    }
}
/*The call is same for all variations*/
let a=10;
let b=20;
let c=30;
console.log(secondMax(a,b,c));
console.log(secondMaxA(a,b,c));
console.log(secondMaxAr(a,b,c));