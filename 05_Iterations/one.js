//for Loop
//CTRL + D >>>>> for duplicate
for (let i = 0; i <= 20; i++) {
    const element = i;
if(element ==  5){
// console.log("5 is best number");
}

//    console.log(element); 
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        
        // console.log(`Inner loop value: ${j} and inner loop ${i}`); //inner loop 10 bar chalega
        // console.log(i + '*' + j + '=' + i*j);
        // 
    }
    
}


let myArray = ["Flah" , "Batman" , "Superman"]
// console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


//====================== Keywords =========================

//break and continue

for (let index = 1; index <= 20; index++) {
    // const element = array[index];

if(index ==  5){

    console.log(`You have reached to ${index}`);
    // break;
    continue;
    
}

console.log(`value of i is ${index}`);

// console.log(`value of i is ${index}`);

    
}

