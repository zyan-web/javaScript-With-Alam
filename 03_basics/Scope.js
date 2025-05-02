//Scopes in JavaScript

//Start with 3 key words .. let , var , const


// {}  >>>>>>>>>> This curly braces is called Scope

let a = 300

if(true) { //Scope of if condiition  >>>>>>>> Block scope due inside scope>>> Cannot acces outside
    let a = 10
    const b = 20
    var c = 30

    // console.log("INNER: " , a);
    
}


// console.log(a);


//============== Scope level ... Nested Scope ===========



function one(){
const username = "Alam"

function two(){
const website = "Youtube"
console.log(username);


}
// console.log(website);
two()
}

// one()

if(true){
const  username = "Alam"
if(username==="Alam"){
    const website = " youtube"
    // console.log(username + website);
    
}
// console.log(website);

}
// console.log(username);

// +++++++++++++++++++ Interesting +++++++++++++++++++

console.log(addone(5));
function addone(num){
return num + 1

}

addTwo(5)

const addTwo = function(num){ //Expression

    return  num + 2
}
