interface morals<k>{
    fun:k;
    name:string;
    age:number;
}

let morals:morals<number> ={
    fun:1,
    name:"a",
    age:10
}

// let a:string="ddj"
// let b:boolean=true;
// b=+a;
// console.log(b);


//? type assertion is used to convert one type to another type using "as" or < >
let a:string="100";
let multiply:number = (a as unknown as number) * 2;
console.log(multiply);


function addition(a:string,b:string):number {
    
    let add = Number(a) + Number(b);
    return add;
}


console.log(addition("10","20"));


enum practice{
    a="jkdn",
    b=9,
    c
}

const PracticeValue:number=practice.c
console.log(PracticeValue);

