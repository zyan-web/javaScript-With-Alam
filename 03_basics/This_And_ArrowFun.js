//This Keyword and Arrow function
//This keyword tell us about current context

const user = {
username: "Alam",
Price: "999",
welcomeMessage : function(){
console.log(`${this.username} , welcome to website `)
console.log(this);

}    
}

// user.welcomeMessage()
// user.username ="Sam"
// user.welcomeMessage()

//Browser k andr Global Object window Object hai

//console.log(this); // empty object due to node enviroment


//================== Arrow function ==================

// function chai(){

//     let username =  "Alam"

//     console.log(this.username);//Ya conetx just object k andr krta hai function ma nhi.... Printed undefined
// }

// chai()

// const chai = function(){

//     let username =  "Alam"

//     console.log(this.username);
// }


const chai = () => {

    let username =  "Alam"

    console.log(this);
}

// chai()

// ========== Arrow funxtion

// const addTwo = (num1 , num2)=>{
// return num1 + num2
// }

//============ Impleccit Return >> It mean ma maan leta hun ================= 
//We dont Parenthesis


// const addTwo = (num1 , num2)=> num1 + num2



// const addTwo = (num1 , num2)=> (num1 + num2) //Curly braces ma leeka tu return use hoga warna nhi .. explicit wo hota jismy ma return use krty hai

const addTwo = (num1 , num2)=> ({username:"Alam"})  // agr object ko return krta hai tu
console.log(addTwo(2 , 4));


//Arrow function agay b use hongy jesy loop ya array ma

const myArray = [2,3,4,5,6]

// myArray.forEach(function(){})
// myArray.forEach(()=>{})  //All this is possible

