/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let categories = [];
  for (let i=0; i<transactions.length; i++){
     categories.push(transactions[i].category);
  }
  
  let uniqueCategories = new Set(categories);
  let categoryExpenditures = [];
  
  uniqueCategories.forEach((value)=>{
    totalExpenditure = 0;
    for (let i = 0; i<transactions.length; i++){
      if (transactions[i].category == value){
        totalExpenditure = totalExpenditure + transactions[i].price;
      }
      
    }
    categoryExpenditures.push(totalExpenditure);
  })

  const finalCategories = Array.from(uniqueCategories);

   return (combineArrays(finalCategories,categoryExpenditures));



  
}


function combineArrays(categories,expenditures)
{
  return categories.map((category,index) =>
  {
    return {
      category: category,
      totalSpent: expenditures[index]
    };
  })
}


module.exports = calculateTotalSpentByCategory;


// const transactions = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza'
//   },
//   {
//     id: 2,
//     timestamp: 1656076800000,
//     price: 20,
//     category: 'Food',
//     itemName: 'Burger'
//   },
//   {
//     id: 3,
//     timestamp: 1656076800000,
//     price: 15,
//     category: 'Transportation',
//     itemName: 'Bus'
//   },
//   {
//     id: 4,
//     timestamp: 1656076800000,
//     price: 5,
//     category: 'Food',
//     itemName: 'Coffee'
//   },
//   {
//     id: 5,
//     timestamp: 1656076800000,
//     price: 25,
//     category: 'Shopping',
//     itemName: 'Shoes'
//   }
// ];






// console.log(calculateTotalSpentByCategory(transactions))



