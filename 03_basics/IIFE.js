//Immediately invoked Function Expression
//function jo immediately execute hu ... Mean sometimes app jesy start then foran database ka connection start hu
//Sometimes global scope sy cheezyn pollute hoti hai but ham chahty hai k at least is function ma tu nhi honi chahy so oss case ma ham ya krengy so oss time ham IIFE leekty hai

(function chai()// Named IFEE
{
console.log('DB connected')
})();
// chai()

// we use ()() instead of  chai ().... First one is for func defination and second one is for execution... ya isleya k sometimes Global scope sy pllution hoti hai so os sy  Avoid krny k leya ham esa krty hai ... IIFE use krty hai


//====== To write such function in Arrow format we have to 
// Semicolor is must for fist immediate func

((name) => //Simple IIFE without name
    
    {

console.log(`DB CONNECTED TWO ${name}`) // we can expect a variable too here in console log

})("Alam")

//============ There are named IIFE like the first one