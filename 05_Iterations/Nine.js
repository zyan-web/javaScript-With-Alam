//================= Reduce Method ================= use in shooping card to add mutliple stuff prices

const myNums = [1,2,3]

// const myTotal = myNums.reduce((acc , curval) => {
// console.log(`acc : ${acc} and curval : ${curval}`);


// return acc + curval


// }, 0)


//================ How to write it in arrow function

// const myTotal = myNums.reduce((acc , curval) => acc + curval , 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
