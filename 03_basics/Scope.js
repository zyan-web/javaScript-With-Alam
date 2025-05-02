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


//============== Scope level ... Nested Scope