//Premtive .... call by reference call by value 
//how we store data in memory in such bases there are two category 
//one is premtive data type and non pre emtive data types

//============= Primitive Datatype ================

//7 categotries... All are call by value 
// String , number , boolean , null , undefined , Symbole (for to make value unique) , Big int


const score = 100
const scoreValue =100.3


const isLoggedin = false
const outsideTemp = null

let userEmail; //undefined

// using symbole make the value unique so the below value would not be the same

const id =  Symbol('123')
const anotherId =  Symbol('123')

console.log(id === anotherId);

const Bignumber  = 1297829392387623876n
const SecondBignumber  = 1297829392387623876n






//2nd is Primtive datatype or refrence datatype 

//array , Objects , functions

const heros = ["Alam", "waziri" , "Zyan" ] //refernce type .... Array 

//Object will Always be in curely braces 

let students = {
name : "Alam",
Course: "BSIT",
semester: "6th"

}


//Function 

function myFunction() {
    console.log("Hello world");


}


console.log(typeof Bignumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);





