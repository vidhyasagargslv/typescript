
//? typescript follows some types of type checking
//* String- this is used to ensure that the value is a string

let Username: string = "sagar"; 
console.log(Username);

//* Number- this is used to ensure that the value is a number
let Age: number = 25;
console.log(Age);

//* Boolean- this is used to ensure that the value is a boolean
let isTrue: boolean = true;
console.log(isTrue);

//* Array- this is used to ensure that the value is an array
let Names: string[] = ["sagar", "sagar", "sagar"];
console.log(Names);

//* Tuple- this is used to ensure that the value is a tuple
let person: [string, number] = ["sagar", 25];
console.log(person);

//* Enum- this is used to ensure that the value is an enum
enum Color {
  Red=3,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);

//* Any- this is used to ensure that the value is of any type
let randomValue: any = 10;

randomValue = "sagar";
console.log(randomValue);

//* Unknown- this is used to ensure that the value is of unknown type
let value_: unknown = 'Hello';

if (typeof value_ === 'string') {
  console.log(value_.toUpperCase());
}


//* Void- this is used to ensure that the value is of void type
function warnUser(): void {
  console.log("This is my warning message");
}

warnUser();

//* Null- this is used to ensure that the value is of null type
let myNull: null = null;
console.log(myNull);

//* Undefined- this is used to ensure that the value is of undefined type
let myUndefined: undefined = undefined;
console.log(myUndefined);

//* Never- this is used to ensure that the value is of never type
// function error(message: string): never {
//   throw new Error(message);
// }
// error("This is an error");

//* Object- this is used to ensure that the value is of object type
let myObject: object = { name: "sagar", age: 25 };
console.log(myObject);
console.log(typeof (myObject));

//* union- this is used to ensure that the value is either the type we mentioned
let age:(string | number);
age = 25;
age="85"
console.log(age);

//? Type Assertions- this is used to ensure that the value is of a specific type
let myAge: any = 25;
let myAgeNumber: number = myAge as number;
console.log(typeof myAgeNumber); // Prints: number

let myAgeString: string = myAge as string;
console.log(typeof myAgeString); // Prints: string

