alert("this is a message");
// let message = alert("this is a message");  .it does not return any value
let name = prompt("what is your name", "Guest!")
console.log(name);
// confirm in JS
let deletpost = confirm("Do you really want delet this post?")
if(deletpost){
    console.log("Your post has been deleted successfully")  
}
else{
    console.log("Your post has not been deleted succesfully")
}
