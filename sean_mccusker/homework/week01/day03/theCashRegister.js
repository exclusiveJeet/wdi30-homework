/*

The Cash Register
Write a function called cashRegister that takes a shopping cart object.
The object contains item names and prices (itemName: itemPrice).
The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55

*/

// console.log(`Is there anybody out there?`);


const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

function cashRegister(cart){
  var items = Object.keys(cart); // array of items by key
  var sum = 0;

  for (var i = 0; i < items.length; i++) {
    var itemName = items[i]; // get the name of keys for the items
    var itemPrice = cart[itemName]; // returns price of said items
    sum += Number.parseFloat(itemPrice); // convert the price to a float and add it to the sum
  }

  return sum;
}

console.log(`The grand total of the shopping trip is: $${ cashRegister(cartForParty) }`);



















// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// function cashRegister(cartForParty){
//   const items = Object.keys(cartForParty); // array of items by key
//   const sum = 0;
//
//   for (var i = 0; i < items.length; i++) {
//     const itemName = items[i]; // get the name of the key for the item
//     const itemPrice = cartForParty[itemName]; // get the price for the item
//     sum += Number.parseFloat(itemPrice); // convert the price to a float and add it to the sum
//   }
//
//   return sum;
// }
//
// console.log(cashRegister(cartForParty));
