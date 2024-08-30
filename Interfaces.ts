//! Interface definition
//* Interface is defines as structure of objects by specifing names and types of its properties

interface marriage{
    bride: string;
    groom: string;
    place: string;
    date: string;
    money: number;
}

let first:marriage={
    bride: "riya",
    groom:"rajesh",
    place:"vizzag",
    date: "14-05-2025",
    money: 30000
}

// first.bride = "ndj";
console.log(first.bride);

//? Types and interfaces are similar but there is on difference that it support declaration merging but types cannot be merged

interface hacked{
    website: string;
}
interface hacked{
    By: string;
}

let hacked_details:hacked={
    website: "twitter",
    By:"dnc"
}




//! but this merging is not possible is types , it gives error
// type Hack={
//     webssite: string
// }
// type Hack={
//     By: string;
// }

//? combining two interfaces or two types is posssible in typescipt
//* combining two type using & operator
//* it is easy and simple to understand
type food={
    name: string;
    price: number;
} 
type disease={
    name: string;
    symptoms: string[];
}
type food_disease= food & disease;

let food_disease:food_disease={
    name: "chicken",
    price: 1000,
    symptoms: ["fever", "disease"]
}
console.log(food_disease);

//? combining two interfaces using extend method
interface foo{
    foo1:string;
    foo2:number;
}

interface bar{
    bar1:string;
    bar2:number;
}

interface foobar extends foo,bar{}

let foobar :foobar={
    foo1: "riya",
    foo2: 1000,
    bar1: "rajesh",
    bar2: 10000
}

console.log(foobar);

//? Interface functions
interface maths{
    (x:number,y:number):number
}

let add: maths=(x,y) => (x+y)

let result=add(1,2);
console.log(result);

