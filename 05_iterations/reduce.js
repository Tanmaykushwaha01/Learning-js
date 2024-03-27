// // Syntax of reduce()
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,  initialValue );
// accumulator => take  initialValue only first time from  initialValue
// after doing operation the output stored in accumulator and again operation performed till the loop end

// myNums = [1, 2, 3, 4, 5];

// let myTotal = myNums.reduce((prev, next) => {
//     console.log(`acc: ${prev} and currval: ${next}`);
//   return prev + next;
// }, 5);
// console.log(myTotal);


const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

 let priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
 console.log(priceToPay);


