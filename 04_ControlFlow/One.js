//Control Flow 
//for example pora code execute na hu ... logIn hu tu itna code run hu ... Logout hu tu itna run hu
//Pora code run na hu instead conditonal k base pe run hu
// const IsuserLoggedIn = true
// if(3!=2){}

//There is condition like 2 == "2" it will executed so to avoid such situation we have to use ===
// if(2=="2"){}  will be executed
if(2==="2"){
// console.log("This statement will not be executed");
}
if(2!=3){
// console.log("This statement will be executed");
}

const temprature = 41

if(temprature < 50){
// console.log("Less than 50");

}
else{
// console.log("Greater than 50");
}


//< , > , <= , >=, == , != , === , !==


const score = 200
if(score > 100){
const power = "fly"
// var power = "fly"
// let power = "fly"

// console.log(`user power : ${power}`);

}

// console.log(`user power : ${power}`);


//=========== short hand notation =============

const balance = 1000

//if(balance > 500) console.log("Test"); // Implicit scope ... mean maan lia.... only in one line 

// if (balance < 500){

//     console.log("less than 500");
    

// } else if (balance < 750 ){
// console.log("Less than 750");
// }
// else if (balance < 900 ){
//     console.log("less than 900");
    
// }else {
// console.log("Less than 1200");

// }


// ========= how we use it in real life ============

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
console.log("Allow to buy courses");
}
if(LoggedInFromGoogle || LoggedInFromEmail){
console.log("You logged In successfully");
}