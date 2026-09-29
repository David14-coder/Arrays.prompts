// let students = ["John", "Mary", "David"];

// students.push("Victor");

// console.log(students);


// let cart = []

// cart.push("cap", "sandal", "watch")

// console.log(cart)

// let students = ["John", "Mary", "David"];

// students.pop();

// console.log(students);

// let students = ["John", "Mary", "David"];

// students.shift();

// console.log(students);

// // let students = ["Mary", "David"];

// students.unshift("conqueror");

// console.log(students);


// let cart = ["laptop", "mouse"];
// cart.push ("keyboard");
//  console.log(cart);

//  cart.unshift("monitor");
//  console.log(cart);

//  cart.pop("keyboard");
//  console.log(cart);

//  cart.shift("monitor");
//  console.log(cart);





// let queue = ["customer A", "customer B", "customer C"];

// queue.push("customer D");
// console.log(queue);

// queue.unshift("vip customer");
// console.log(queue);




// let notifications = ["new message", "payment received", "new order"];

// notifications.push("friend request");

// console.log(notifications);

// notifications.unshift("urgent alert");

// console.log(notifications);



// let transactions = [
//     "deposit $50,000",
//     "withdrawal $10,000",
//     "Transfer $5,000"
// ];

// transactions.push("$20,000");

// console.log(transactions);

// transactions.unshift("Account opened");

// console.log(transactions);


// let students = ["John", "Mary", "David"];

// console.log(students.includes("Mary"));

// let userInput = prompt("enter vip user")

// if (userInput){
//     const allowedUsers = userInput.split(",").map(item => item.trim())
   

//     let search = prompt("enter user name")

//     if (search && allowedUsers.includes(search.trim())){
//     console.log("login allowed")
// }else{
//     console.log("user not found ")
// }
// }


// let queue = ["custom A", "custom B", "custom C"];

// queue.push("custom D");
// console.log(queue);

// queue.unshift("VIP customer");
// console.log(queue);


// let removedLast = queue.pop();

// let servedCustomer = queue.shift();

// console.log("customer served:", servedCustomer);
// console.log("customer removed from the end:", removedLast);
// console.log("customer remaining:", queue);



// let notifications = ["New message", "Payment received", "New order"];

// notifications.push("friend request");
// // console.log(notifications);

// notifications.unshift("urgent alert");
// // console.log(notifications);

// let removedFirst = notifications.shift();

// let removedLast = notifications.pop();

// console.log("Removed notifications:", removedLast, removedFirst);

// console.log("Remaining notifications:", notifications);





// let transactions = ["deposit $50,000", "withdrawal $10,000", "transfer $5,000"];

// transactions.push("deposit $20,000");

// transactions.unshift("account opened");

// let removedFirst = transactions.shift();

// let removedLast = transactions.pop();

// console.log("removed transactions:", removedFirst, removedLast);
// console.log("remaining transactions:", transactions);




// let students = ["john", "mary", "david"];
// console.log(students.includes("ray"));


// let products = ["laptop", "phone","tablet","headphones"];

// let productName = "bike";

// if(products.includes(productName)){
//     console.log("user found");
// }else{
//     console.log("user not found");
// }



// let allowedRoles = ["admin", "manager", "staff"];

// // allowedRoles.push("director");
// // console.log(allowedRoles);

// let userRole = "director";

// if(allowedRoles.includes(userRole)){
//     console.log("Access granted");
// }else{
//     console.log("Access denied");
// }


// let users = ["John", "Mary", "David"];

// users.push("Ray");
// console.log(users);

// let position = users.indexOf("Ray");

// if (position !== -1) {
//     console.log("User found");
//     console.log("User position:", position);
// } else {
//     console.log("User not found");
// }


let students = ["John", "Mary", "David", "Sarah"];


students.push("Victor");

let removedFirst = students.shift();
console.log(students);

students.unshift("messi");
console.log(students);

let removedLast = students.pop();
console.log(students);

let position = students.indexOf("Victor");

if(position !== -1) {
    console.log("excellent");
    console.log("students position:", position)
}else{
    console.log("Not a student");
}