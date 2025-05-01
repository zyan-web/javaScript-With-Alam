//De structuring of Object

const course =  {
coursename: "Js in hindi",
price: "999",
coursestructor: "Hitesh"
}

//course.coursestructor //To print once

//suppsoe we want to print it mulitple times
//Curely braces { mean} de structuring
//we can de structure array too
const {coursestructor: instructor} = course  //Now the name is change to instructor.. This is called de structure
console.log(instructor);

//Jason >>> 
// {

// "name":"Alam",
// "coursenamee":"js with Alam",
// "price": "free"

// }


