//Array >> An object in which we keey collection multiple elements in as nimgle variable
//javaScript array are resizable
//Array  elemnet cannot be access using arbitrary string


const myArray = [0 , 1 ,2,3 ,4 ,5 ,6 ,7,8,9 , "Alam sher"];
const myArray3 = ["Alam sher" , "Zyan"];
// console.log(myArray);
// console.log(myArray[2]);

const myarr2 = new Array( 1,2,3,4,5,6,6,7) // Automatically add square braces



//=================== Methods of Array ===============

// myarr2.push(9);
// myarr2.pop(9);
// console.log(myarr2);

// myarr2.unshift(9)  // Add value at the start 
// console.log(myarr2);

// myarr2.shift(9); // remove from the start 
// console.log(myarr2); 


// Some other Methods like include etc 

// console.log(myarr2.includes(9));
// console.log(myarr2.indexOf(9));


//============ To join two arrays

const newarr = myarr2.join() //Add all he element of an array into a string
// console.log(myarr2);
// console.log(typeof newarr);


//=========== Slics and splice

// console.log("A" , myArray);
const myn1 = myArray.slice(1, 3); // to return portion of array but index 1 and 3 will not be included , only return in between it 
console.log("B" , myArray)
console.log( myn1);


const myn2= myArray.splice(1,3); // print select part will be skiped and other element will be print
console.log("C" , myArray)
console.log(myn2);
