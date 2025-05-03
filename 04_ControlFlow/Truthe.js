//Truhtee and False
// const userEmail = "Alam@gmail.com" // string ko assume kr k ya aik true value hai
//const userEmail = "" // else will run , i.e true
const userEmail = [] // will return true 

if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("Don't have user email"); 
}

//-----------> falsy value ----------------->
// flasy , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

//--------------> Truthy ------------------->
//"0" , 'flase' ,  "space in bw str" >> " " , [] ,  {} , function(){}

// if(userEmail.length === 0){

// console.log("Array is empty");

// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){

console.log("Object is empty");

}


//Nullish coalescing Operator (??) : null , undefined

let vall;
// vall = 5 ?? 10
// vall = null ?? 10
// vall = undefined ?? 15
vall = null ?? 10 ?? 20

// console.log(vall);

//Terniary operator

// condition ? true : fals

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

