//Function in depth
//jo b code apny leeka hai osy aik package band kr k copy bana k jahan b chahy le ja sakty hai to use

function SayMyName(){
console.log("My name is Alam waziri");

}

//SayMyName //Reference .... reference ka matlab k func yahan rhta hai ... 
//SayMyName() // executions

// SayMyName()

// function addTwoNumbers(num1 , num2){// parameters
// // num1 + num2
// //how to print it 

// console.log(num1 + num2);



// }
function addTwoNumbers(num1 , num2){// parameters
// num1 + num2
//how to print it 

// let result = num1 + num2
// return result

return num1 + num2  // After return , then we can store it in any variable i.e result 


}

//how to call a function

// addTwoNumbers(3 , "4")
// addTwoNumbers(3 , "a")
// addTwoNumbers(3 , null)
const result = addTwoNumbers(3 , 4) // call of function after passing value is called arguments

// console.log(`The result by adding num1 and num2 is : ${result} `);



//=============== Other method to pass value and we can do further ========================

function loginUserMessage (username = "Sam") { // if user dont enter any value it will still print sam otherwise passed value will printe
// if(username===undefined){} ...... it can also be done like this

    if(!username){
console.log("please enter a username");
return

    }
return `${username} just logged In`
}

// console.log(loginUserMessage("Alam"));

console.log(loginUserMessage());
