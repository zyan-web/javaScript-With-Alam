//High Order Array Loops

//===================for of loop =======================
//These are array specific loop
// ["" , "" , ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {

    // num >> kis object pe iterate lgana chahty hain... i.e object pe , array pe or string pe iterate lgana
    //object >> kis object pe ap loop lgana chahty hai ... Broader term... i.e arr

    // console.log(num);
    
}

const greetings = "Hello world"

for (const greet of greetings) {
    // console.log(`each char is ${greet}`);


}

//================= Maps ===================
//Same like array
//Map itself is an Object
//insertion order of the key ko yaad rkta hai , duplicate value nhi milti blky unique value deta hai



const map = new Map()
map.set('IN' , "India")
map.set('USA', "United state of America")
map.set('Fr' ,"France")
map.set('IN' , "India")

// console.log(map);

//===== Can we apply loop

for (const [key , value] of map) {
    console.log(key , ":-" , value );
    
} 

const myobject = {
'game1' : 'NFS',
'game2' : 'Spiderman'

}

for (const [key , value] of myobjectobject) {

    // console.log(key , ":-" , value);
}