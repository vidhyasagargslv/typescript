
function char_count(str:string):number{
    let replaced:string = str.replaceAll(" ", "");
    return replaced.length 
}

// console.log(char_count("123 456    789"));



let value1:string = "jhdbchjbsd";
//reverse a string
let reversed:string = '';
for(let i:number=value1.length - 1; i >= 0; i--){
    reversed += value1[i];
}
console.log(reversed);

let uniontype: (string | number | string[] | ((x: string, y: number) => void)) = "hello";
uniontype = 55;
uniontype = ["hello", "world"];
uniontype=["hello","99"];


//? sumof the value in array

let arr:number[] = [1,2,3,4,5];

function sum(arr):number {
    let total=0;
    for(let i=0; i<arr.length; i++){
        total+=arr[i];
    }
    return total;
}

console.log(sum(arr));

//total using reduce method
let total:number = arr.reduce((a,b)=>a+b);
console.log(total);


function reverse(arr:number[]):number[] {
    return arr.slice().reverse();
}
arr=[1,2,3,4,5];
console.log(reverse(arr));