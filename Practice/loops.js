console.log("this is Akash Java developer");
let i=0;
for(i=0; i<3; i++){
console.log(i);
}

let friends=["Rohan", "Sanjeev", "Deepti", "Prachi"];
for(i=0; i<friends.length; i++){
    console.log(friends[i]);
}
for (let index = 0; index < friends.length; index++) {
   console.log(friends[index]);
   


// for Each loop
friends.forEach(function f(e){
    console.log("Hello Good Morning "+ e);
});




for(e of friends){
    console.log("Hello Friend "+ e);
}



let employee={
    name: "Akash",
    salary: 2,
    channel: "AR"
};
// for loop
for(key in employee){
    console.log(`the ${key} of employee is ${employee[key]}`);
}


// while loop
let a = 0;
while(a<4){
    console.log(`${a} is less than 4`);
    a++;
}


// do while loop

let b=0;
do{
    console.log(`${b} is less than 5`);
    b++;
    }
while(b<4);