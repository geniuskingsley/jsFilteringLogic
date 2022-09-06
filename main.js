/**
 *
 * @Genius
 *
 * BASIC CODE TO FILTER IN JAVASCRIPT...
 *
 * SHOPPING CART LOGIC
 *
 * * FEATURES *
 * 1. FILTERING METHOD IN ARRAY...
 */
const prompt = require("prompt-sync")();

//Lists of our items
let items = [
  { name: "dog", price: 75, age: "3 Months old" },
  { name: "car", price: 10028, color: "blue" },
  { name: "phone", price: 172, battery: "5000mAh" },
  { name: "house", price: 1273683, houseType: "Duplex" },
];

//printing out all prices
let itemPrices;
console.log("Here are the prices of the available items");
for (itemPrices = 0; itemPrices < items.length; itemPrices++) {
  console.log(items[itemPrices].price);
}

// Asking a user to input a spececific amount to filter from our item collections
let enterFiteringAmount = Number(
  prompt(
    "Enter a valid number to filter from our lists a less than figure :",
    ""
  )
);

/**
 * Filtering, this does two tasks
 *
 * 1. It filters as we all know " because of filter method is called",
 * 2. It uses the imput we get from out prompt earlier to determine the actual amount to be filtered.
 */
let filtredItems = items.filter((prices) => {
  return prices.price <= enterFiteringAmount;
});

console.log(
  `The item you can buy less than ${enterFiteringAmount} is : \n \n`,
  filtredItems
);
