//* Basic function syntax
function greet(name:string="sdbndb"):void{
    console.log(`hello ${name}`);
     
}

greet();


//* basic function which returns value
function greeting(name:string, times:number):string{
    return `Hi ${name}! Good morning ${times} times!`
}

let wish = greeting("sagar",56)
console.log(wish);

//* Optional parameters in functions
function dog(name:string, breed:string, count?:number):void{
    console.log(`Rohit has ${count} of ${breed} , his name is ${name}`);
}

dog("roxy","boxer");
