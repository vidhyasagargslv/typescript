
//* The Type keywords helps to create type alias for custom types
type status= "active" | "inactive";
let iAmActive: status = "active";
let iAmInactive: status = "inactive";

//* Intersecting types in typescript
type person = {name: string; age:number;};
type parents = {father: string; mother: string;};
type complete = person & parents;

let details:complete={
    name: "John",
    age: 25,
    father: "John",
    mother: "Jane"
}

console.log(details.father);

