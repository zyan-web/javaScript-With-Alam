// const coding = ["js" , "py" , "ruby" , "cpp"]

// const values = coding.forEach( (item) => { // aik variable ma store krna 
// console.log(item);
// return  item

// })

// console.log(values);
//for each never return value

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.filter((num) => num > 5) //call back function 
// filter ma har aik value check hogi and condition lagega and return krega value...
//filter ma aik function dena hoga then condtion and wohi value return hogi


// const newNum = myNum.filter((num) => {
//  return num > 5 // scope open hoga tu return use krna hoga filter ma

// })



const newNums = []

myNum.forEach((num) => {
if (num > 5) {
    newNums.push(num)
}

})

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 //const UserBooks =  books.filter ( (bk) => bk.genre === 'History')
 const UserBooks =  books.filter ( (bk) => bk.publish >= 1995 && bk.genre === 'History')

  console.log(UserBooks);
  