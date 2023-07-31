/*

You are given a shopping list containing various items that you need to buy from the grocery store.
Each item in the list has a name and a quantity.
Your task is to create a TypeScript function that takes the shopping list as input and organizes it into a user-friendly format for easy shopping.

Input:

An array of objects, where each object represents an item in the shopping list. Each object has two properties:
name: a string representing the name of the item.
quantity: a number representing the quantity of the item to buy.
Output:

A formatted string that represents the organized shopping list.
Example:

typescript
Copy code
const shoppingList: { name: string; quantity: number }[] = [
  { name: 'Apples', quantity: 3 },
 

*/
function organizeShoppingList(shoppingList) {
    var organizedList = {};
    // Helper function to find the category of an item
    function findCategory(itemName) {
        // You can customize this function to categorize items based on your preference
        // For simplicity, I'll assume all items belong to the "Other" category.
        return "Other";
    }
    // Group items by category
    for (var _i = 0, shoppingList_1 = shoppingList; _i < shoppingList_1.length; _i++) {
        var item = shoppingList_1[_i];
        var categoryName = findCategory(item.name);
        if (!organizedList[categoryName]) {
            organizedList[categoryName] = [];
        }
        organizedList[categoryName].push(item);
    }
    return organizedList;
}
// Example usage:
var shoppingList = [
    { name: "apple", quantity: 2 },
    { name: "bread", quantity: 1 },
    { name: "carrot", quantity: 5 },
    { name: "milk", quantity: 1 },
    { name: "chicken", quantity: 2 },
    { name: "rice", quantity: 3 },
    { name: "soda", quantity: 4 },
];
var organizedList = organizeShoppingList(shoppingList);
console.log(organizedList);
