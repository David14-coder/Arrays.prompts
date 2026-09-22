let students = ["John", "Mary", "David"];

students.push("Victor");

console.log(students);


let cart = []

cart.push("cap", "sandal", "watch")

console.log(cart)

let students = ["John", "Mary", "David"];

students.pop();

console.log(students);

let students = ["John", "Mary", "David"];

students.shift();

console.log(students);

// let students = ["Mary", "David"];

students.unshift("conqueror");

console.log(students);


let cart = ["laptop", "mouse"];
cart.push ("keyboard");

console.log(cart);

cart.unshift("monitor");

console.log(cart);




let queue = ["customer A", "customer B", "customer C"];

queue.push("customer D");

console.log(queue);

queue.unshift("vip customer");

console.log(queue);



let notifications = ["new message", "payment received", "new order"];

notifications.push("friend request");

console.log(notifications);

notifications.unshift("urgent alert");

console.log(notifications);



let transactions = [
    "deposit $50,000",
    "withdrawal $10,000",
    "Transfer $5,000"
];

transactions.push("$20,000");

console.log(transactions);

transactions.unshift("Account opened");

console.log(transactions);


let students = ["John", "Mary", "David"];

console.log(students.includes("Mary"));

let userInput = prompt("enter vip user")

if (userInput){
    const allowedUsers = userInput.split(",").map(item => item.trim())
   

    let search = prompt("enter user name")

    if (search && allowedUsers.includes(search.trim())){
    console.log("login allowed")
}else{
    console.log("user not found ")
}
}







