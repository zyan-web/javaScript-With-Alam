//Here we will study that how we can declare object with singleton and literal in this session

// const tinderuser = new Object()
const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "Alam"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

//Object k andr Object 

const regularUser = {
email: "alam@gmail.com",
fullname: {
userfullname:{
firstname: "Alam waziri",
lastname: "Sher"

}

}

}


//how to access value of nested and parents Object 
//>>?  optional chaining...Api sy sometimes esi cheez ati jo exit na hu oss time ? use krna hoga 
//agr ya use na kren the if else lgana hoga

// console.log(regularUser.fullname?.userfullname.firstname);


//How to combine Object
//keys ko as number and value ko string lengy 

const obj1  = {1:  "a", 2: "b"}
const obj2  = {3:  "a", 4: "b"}
const obj3  = {5:  "a", 6: "b"}

// const obj3 = {obj1 , obj2}
// console.log(obj3);   //not a good way

// const obj4 = Object.assign({},obj1, obj2 , obj3)
const obj4 = {...obj1, ...obj2, ...obj3} // Spread method , an efficient method 
// console.log(obj4);


//Data base sy jab value aygi ham ya syntax use krty hai 
//we will recive in array we receive from API

const user =  [
{
    id: 1,
email: "Alam@gmail.com"
},

{

},

{

}

]

//how to access different value of object in an array 

user[1].email
console.log(tinderuser);

//Most interesting and important when we want keys of object 

console.log(Object.keys(tinderuser)); //Iss sy hota ya k hamny sari key ko lia aur aik array ma store krdia.
//ab ham ispy loop laga sakty hai and can be use in many areas in website database etc

console.log(Object.values(tinderuser)); // Value ko b nikal sakty hai jesy key ko nikala hai

console.log(Object.entries(tinderuser));// Har aiknkey sy array bn jata hai ... Kam he use hota hai

//some times finding value in a loop then we go in loop or check manually so to avoid this we can 

console.log(tinderuser.hasOwnProperty('isLogged'));







