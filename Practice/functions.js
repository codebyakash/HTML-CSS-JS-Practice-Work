console.log("I am learning JavaScript.");
function greet(name, mr1){
    // console.log(name + " is a good boy")
    console.log(mr1 + " " + name)
}
function sum(a,b,c){
    d= a+b+c;
    return d;
}

let name= "Akash";
let name1= "Vikas";
let name2= "Manish";
let name3= "Sohit";
let mr= "Good Morning!"
// console.log(name+ " is a good boy")
// console.log(name1+ " is a good boy")
// console.log(name2+ " is a good boy")
// console.log(name3+ " is a good boy")
greet(name, mr);
greet(name1, mr);
greet(name2, mr);
greet(name3, mr);

let sum1= sum(1, 2, 3);
console.log(sum1);