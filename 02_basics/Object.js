
//singleton , kesi b constructor sy bnana , single instances 
//literal sy singleton nhi bn sakta


//second method >>>> object.create >>>> with constrcutor
const mySym = Symbol("key1")

const JsUser = {
name: "Alam",
fullname: "Alam wazir",
[mySym]: "mykey1",
age: "23",
class: "BSIT",
semster : "6th",
email: "alamsher@gmail.com"

}

//how to access object

console.log(JsUser["email"]); //Not an efficient way
console.log(JsUser["email"]);
console.log( JsUser[mySym])

//how to chnage object value 

JsUser.email = "khanwazir2gmail.com"

//how to lock value

// Object.freeze(JsUser)//  no change will be in JsUser value coz its been frezeed


JsUser.greeting = function(){



}

console.log(JsUser.greeting());

JsUser.greeting2 = function(){

console.log(`Hello js user ${this.name}`); // reference to any elements (object) in an object

}

console.log(JsUser.greeting2());
console.log("Hello js user");
