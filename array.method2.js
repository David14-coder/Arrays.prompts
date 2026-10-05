// let scores = [45, 80, 33, 72, 90, 40, 65];

// let passScores = scores.filter(function(scores){
//     return scores >= 50
// });

// console.log(passScores);



// let transactions = [
//     { id: 1, amount: 5000, status: "success"},
//     { id: 2, amount: 3000, status: "failed"},
//     { id: 3, amount: 10000, status: "success"},
//     { id: 4, amount: 2000, status: "failed"}
// ];

// let statusTransactions = transactions.filter(function(transactions){
//     return transactions.status === "success";
// });

// console.log(statusTransactions);


// let scores = [45, 80, 33, 72, 90, 40, 65];

// let passScores = scores.filter(function(scores){
//     return scores >= 50;
// })

// console.log(passScores);



// let scores = [10, 20, 30, 40, 50];

// let recentScore = scores.map(function(scores){
//     return scores * 2;
// })

// console.log(recentScore)


// let users = [
//     { name: "John", email: "john@email.com" },
//     { name: "Mary", email: "mary@email.com" },
//     { name: "David", email: "david@email.com" }
// ];

// let usersname = users.map(function(users){
//     return users.email;
// })

// console.log(usersname)



let products = [
    { name: "Laptop", price: 500000 },
    { name: "Mouse", price: 15000 },
    { name: "Keyboard", price: 25000 }
];

let productsNameAndPrice = products.map(function(products){
    return products.name + " - $" + (products.price * 2);
})

console.log(productsNameAndPrice)