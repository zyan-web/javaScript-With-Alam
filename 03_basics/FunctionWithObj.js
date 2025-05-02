//Functions with Object
//Other type of parameter passing 
//Shopping cards ....Common situation project... i.e we dont k kitny number ya items any waly hai but have to add price

//let suppose

function calculateCarPrice(...num1){
return num1
}
//In such situation where there is multiple value to be passed to single varaible we to use rest or dot or spread operator (...num1)

// console.log(calculateCarPrice(200 , 200, 400));

//========= Objects in functions ============

const  user = {
username: "Alam",
prices: "199"

}

//how to pass that object in a function 

function handleObject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user)

handleObject(

    {
username: "sam",
price: "399"

    }
)

//============ We can pass array too =====

const myNewaArray = [200, 400, 100, 600]
//We will declare a functio that accept array and run the second value of an array 

function returnSecondValue(getArray){
return getArray[1]

}

console.log(returnSecondValue([200 , 400 , 500 , 100]));
