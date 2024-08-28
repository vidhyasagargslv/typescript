let user: string = "skhhd";
user = "jdv";

console.log(user);  //output: jdv 

function islogged(userid: string, password: string) {
  console.log(userid, password);
}

islogged("dance", "555");

function isEven(val: number) {
  if (val % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

isEven(6);

type ages = {
  one: number;
  two: number;
  three: number;
  four: number;
  five: number;
  divisser?: number;
};

function calculateage(age: ages) {
  let total = age.one + age.two + age.three + age.four + age.five ;
  return total;
}

const cal = calculateage({
  one: 5,
  two: 6,
  three: 7,
  four: 8,
  five: 9,
  divisser:8
});

console.log(cal);

const shd: number = 10;
console.log(shd);

let number: number = 18;

let eleigible = number <= 18 ? "you are eligible" : "you are not eligible";

console.log(eleigible);

const carddate: string="dhbchd";
 console.log(carddate.toUpperCase());

//  arrays in typescript format
//todo this are the two ways to create a  new array in typescript format
const heros:string[] = []
const maina:Array<number> = []
heros.push("kxbcbx")

enum seats{
  first="true",
  second=7,
  third,
  fourth
}

let allotment = seats.third