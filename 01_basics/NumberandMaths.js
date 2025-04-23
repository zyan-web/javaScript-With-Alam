const score =  400

const balance = new Number(100)

console.log(balance);
console.log(typeof balance);


console.log(balance.toString().length); // to convert it into string


//Below is tyhe fix method of numbers to show the exact value after the point

console.log(score.toFixed(2));

const otherNumber = 23.3939393
console.log(otherNumber.toFixed(2));

const precision = 32.239239

console.log(precision.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));





//===================== Math ========================


console.log(Math);

//abs is for absolute value

// console.log(Math.abs(-4));

// console.log(Math.min(1,2,3,4,5,6,7,-4));
// console.log(Math.max(1,2,3,4,5,6,7,-4));


//math.random()>>>> it will always give value between 0 and 1

console.log(Math.random());
console.log((Math.random()*10)+1);


///To get value 10 or above 10 we have too

const min =10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min);

