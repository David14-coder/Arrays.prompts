# JavaScript Array Methods - Part 1

## What we are learning today

Today we are starting with some of the simplest and most useful array methods:

```js
push()
pop()
shift()
unshift()
includes()
indexOf()
```

We already know what an array is:

```js
let students = ["John", "Mary", "David"];
```

We also know how to use loops to work with the items inside an array.

Today, instead of writing a loop every time we want to do a simple operation on an array, JavaScript gives us built-in methods that can help us.

The important thing is not to memorize the methods blindly.

I want you to understand:

> **What problem does this method solve?**

---

# BATCH 1: Adding and Removing Items

We will start with four methods:

```js
push()
pop()
shift()
unshift()
```

## 1. `push()`

`push()` adds a new item to the **end** of an array.

```js
let students = ["John", "Mary", "David"];

students.push("Victor");

console.log(students);
```

Output:

```js
["John", "Mary", "David", "Victor"]
```

The new item was added to the end.

### Real example: Shopping cart

```js
let cart = ["Shoes", "Shirt"];

cart.push("Cap");

console.log(cart);
```

Output:

```js
["Shoes", "Shirt", "Cap"]
```

The customer already had two products and then added another product.

### Add multiple items

```js
let cart = ["Shoes"];

cart.push("Shirt", "Cap", "Watch");

console.log(cart);
```

Output:

```js
["Shoes", "Shirt", "Cap", "Watch"]
```

### Important

`push()` changes the original array.

```js
let names = ["John", "Mary"];

names.push("David");

console.log(names);
```

The array is now:

```js
["John", "Mary", "David"]
```

---

## 2. `pop()`

`pop()` removes the **last item** from an array.

```js
let students = ["John", "Mary", "David"];

students.pop();

console.log(students);
```

Output:

```js
["John", "Mary"]
```

David was the last item, so he was removed.

### Real example: Shopping cart

```js
let cart = ["Shoes", "Shirt", "Cap"];

cart.pop();

console.log(cart);
```

Output:

```js
["Shoes", "Shirt"]
```

### `pop()` gives us the item it removed

```js
let cart = ["Shoes", "Shirt", "Cap"];

let removedItem = cart.pop();

console.log(removedItem);
```

Output:

```text
Cap
```

The array is now:

```js
["Shoes", "Shirt"]
```

So remember:

```text
pop()
↓
remove last item
↓
give me the removed item
```

---

## 3. `shift()`

`shift()` removes the **first item** from an array.

```js
let students = ["John", "Mary", "David"];

students.shift();

console.log(students);
```

Output:

```js
["Mary", "David"]
```

John was the first item, so he was removed.

### Real example: Customer queue

Imagine customers are waiting for their turn.

```js
let customers = ["John", "Mary", "David"];

let customer = customers.shift();

console.log(customer);
console.log(customers);
```

Output:

```text
John
["Mary", "David"]
```

John has been attended to, so we remove him from the front of the queue.

### `shift()` also returns the removed item

```js
let queue = ["Customer 1", "Customer 2", "Customer 3"];

let servedCustomer = queue.shift();

console.log(servedCustomer);
```

Output:

```text
Customer 1
```

---

## 4. `unshift()`

`unshift()` adds a new item to the **beginning** of an array.

```js
let students = ["Mary", "David"];

students.unshift("John");

console.log(students);
```

Output:

```js
["John", "Mary", "David"]
```

John was added to the front.

### Real example: Priority customer

```js
let customers = ["Mary", "David"];

customers.unshift("VIP Customer");

console.log(customers);
```

Output:

```js
["VIP Customer", "Mary", "David"]
```

The new customer was placed at the beginning.

---

# Quick Comparison

| Method | What it does | Where? |
|---|---|---|
| `push()` | Adds an item | End |
| `pop()` | Removes an item | End |
| `unshift()` | Adds an item | Beginning |
| `shift()` | Removes an item | Beginning |

Easy way to remember:

```text
push    → add to back
pop     → remove from back

unshift → add to front
shift   → remove from front
```

---

# 4 Teaching Tasks

## Task 1 - Shopping Cart

Start with:

```js
let cart = ["Laptop", "Mouse"];
```

Requirements:

1. Add `"Keyboard"` to the end.
2. Add `"Monitor"` to the beginning.
3. Remove the last item.
4. Remove the first item.
5. Print the final cart.

Try to predict the final result before running the code.

---

## Task 2 - Customer Queue

We have:

```js
let queue = ["Customer A", "Customer B", "Customer C"];
```

Requirements:

1. Add `"Customer D"` to the end.
2. Add `"VIP Customer"` to the beginning.
3. Serve the first customer.
4. Remove the last customer.
5. Print the queue.
6. Also print the customers that were removed.

---

## Task 3 - Notifications

Start with:

```js
let notifications = [
    "New message",
    "Payment received",
    "New order"
];
```

Requirements:

1. Add `"Friend request"` to the end.
2. Add `"Urgent alert"` to the beginning.
3. Remove the first notification.
4. Remove the last notification.
5. Print the removed notifications.
6. Print the remaining notifications.

---

## Task 4 - Bank Transactions

Start with:

```js
let transactions = [
    "Deposit ₦50,000",
    "Withdrawal ₦10,000",
    "Transfer ₦5,000"
];
```

Requirements:

1. Add `"Deposit ₦20,000"` to the end.
2. Add `"Account opened"` to the beginning.
3. Remove the first transaction.
4. Remove the last transaction.
5. Print both removed transactions.
6. Print the final transaction history.

---

# BATCH 2: Checking and Finding Items

Now we move to:

```js
includes()
indexOf()
```

These two are about finding out whether something exists in an array.

---

# 5. `includes()`

`includes()` checks if an array contains a particular value.

```js
let students = ["John", "Mary", "David"];

console.log(students.includes("Mary"));
```

Output:

```text
true
```

Mary exists.

If we check:

```js
console.log(students.includes("Victor"));
```

Output:

```text
false
```

Victor does not exist.

### Why is this useful?

Imagine we are checking whether a user is allowed to access a system.

```js
let allowedUsers = ["John", "Mary", "David"];

let username = "Mary";

if (allowedUsers.includes(username)) {
    console.log("Login allowed");
} else {
    console.log("User not found");
}
```

Output:

```text
Login allowed
```

### `includes()` gives us a Boolean

Remember:

```js
true
false
```

So:

```js
let products = ["Laptop", "Phone", "Tablet"];

console.log(products.includes("Phone"));
```

gives:

```text
true
```

And:

```js
console.log(products.includes("Camera"));
```

gives:

```text
false
```

---

# 4 Teaching Tasks

## Task 5 - Check Products

Start with:

```js
let products = [
    "Laptop",
    "Phone",
    "Tablet",
    "Headphones"
];
```

Check whether these exist:

```text
Phone
Camera
Laptop
Charger
```

Print the result of each check.

---

## Task 6 - Check Permissions

Start with:

```js
let permissions = [
    "read",
    "write",
    "delete"
];
```

Check whether the user has:

```text
read
update
delete
admin
```

Use `includes()`.

---

## Task 7 - Payment Methods

Start with:

```js
let paymentMethods = [
    "Card",
    "Bank Transfer",
    "USSD",
    "Cash"
];
```

Check whether these payment methods are available:

```text
Card
PayPal
USSD
Crypto
```

Print a useful message for each one.

For example:

```text
Card is available
PayPal is not available
```

---

## Task 8 - Allowed Roles

Start with:

```js
let allowedRoles = [
    "admin",
    "manager",
    "staff"
];
```

Create:

```js
let userRole = "manager";
```

Use `includes()` to check whether the role is allowed.

If it exists:

```text
Access granted
```

Otherwise:

```text
Access denied
```

---

# 6. `indexOf()`

`indexOf()` tells us the **position** of an item inside an array.

```js
let students = ["John", "Mary", "David"];

console.log(students.indexOf("Mary"));
```

Output:

```text
1
```

Why `1`?

Because array positions start from `0`.

```text
John    → 0
Mary    → 1
David   → 2
```

So Mary is at index `1`.

### If the item does not exist

```js
let students = ["John", "Mary", "David"];

console.log(students.indexOf("Victor"));
```

Output:

```text
-1
```

When `indexOf()` returns `-1`, it means the item was not found.

---

# `includes()` vs `indexOf()`

These methods are related, but they answer different questions.

### `includes()`

Asks:

> Does this item exist?

```js
students.includes("Mary");
```

Result:

```text
true
```

### `indexOf()`

Asks:

> Where is this item?

```js
students.indexOf("Mary");
```

Result:

```text
1
```

Remember:

```text
includes() → true / false

indexOf()  → position / -1
```

---

## Real example

```js
let users = ["John", "Mary", "David"];

let position = users.indexOf("Mary");

if (position !== -1) {
    console.log("User found");
    console.log("User position:", position);
} else {
    console.log("User not found");
}
```

The important part is:

```js
position !== -1
```

If the result is not `-1`, the item exists.

---

# 4 Teaching Tasks

## Task 9 - Find Student Position

Start with:

```js
let students = [
    "John",
    "Mary",
    "David",
    "Sarah"
];
```

Find the position of:

```text
David
Sarah
Victor
```

For each one, print whether the student was found.

---

## Task 10 - Find Product Position

Start with:

```js
let products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Webcam"
];
```

Find the position of:

```text
Keyboard
Webcam
Phone
```

If the product does not exist, print:

```text
Product not found
```

---

## Task 11 - User Search

Start with:

```js
let users = [
    "john@email.com",
    "mary@email.com",
    "david@email.com"
];
```

Create:

```js
let email = "mary@email.com";
```

Use `indexOf()` to find the user's position.

If the user exists:

```text
User found at position: 1
```

If the user does not exist:

```text
User not found
```

---

## Task 12 - Combine `includes()` and `indexOf()`

Start with:

```js
let courses = [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB"
];
```

Create:

```js
let course = "Node.js";
```

First use `includes()` to check if the course exists.

If it exists, use `indexOf()` to find its position.

Expected output:

```text
Course is available
Course position: 2
```

If it does not exist:

```text
Course is not available
```

---

# Final Classroom Challenge

Now combine all six methods.

Start with:

```js
let waitingList = [
    "John",
    "Mary",
    "David"
];
```

Build a small waiting-list system.

Your program should be able to:

1. Add a person to the end using `push()`.
2. Add a priority person to the beginning using `unshift()`.
3. Serve the first person using `shift()`.
4. Remove the last person using `pop()`.
5. Check whether someone is waiting using `includes()`.
6. Find someone's position using `indexOf()`.

Do not just call the methods randomly.

Give each operation a reason.

For example:

> I am using `shift()` because I want to serve the first person in the queue.

---

# Independent Tasks

These are for you to solve on your own. Try not to copy the examples above.

## Task A - Todo List

Start with:

```js
let todos = [
    "Study JavaScript",
    "Practice functions",
    "Build a project"
];
```

Do the following:

1. Add a new todo to the end.
2. Add an urgent todo to the beginning.
3. Remove the last todo.
4. Remove the first todo.
5. Check if `"Study JavaScript"` still exists.
6. Find its position.

---

## Task B - Restaurant Orders

Start with:

```js
let orders = [
    "Order #101",
    "Order #102",
    "Order #103"
];
```

Build a small order queue.

Your program should:

1. Add a new order.
2. Add a priority order to the front.
3. Process the first order.
4. Remove the last order.
5. Check whether `"Order #102"` still exists.
6. Find the position of `"Order #103"`.

---

## Task C - Bank Account Features

Start with:

```js
let features = [
    "Transfer",
    "Withdrawal",
    "Deposit",
    "Airtime"
];
```

Do the following:

1. Add `"Bill Payment"` to the end.
2. Add `"Card Payment"` to the beginning.
3. Remove the last feature.
4. Remove the first feature.
5. Check whether `"Transfer"` exists.
6. Find the position of `"Deposit"`.

---

## Task D - Build Your Own

Create your own array based on something from a real application.

It could be:

- users
- products
- messages
- transactions
- courses
- orders
- notifications
- songs
- tasks

Then use all six methods:

```js
push()
pop()
shift()
unshift()
includes()
indexOf()
```

Don't just call them randomly.

Give each operation a reason.

---

# Quick Test Before We Move On

You should be able to answer these without looking back:

1. Which method adds to the end?
2. Which method removes from the end?
3. Which method adds to the beginning?
4. Which method removes from the beginning?
5. Which method checks whether an item exists?
6. Which method tells you the position of an item?
7. What does `indexOf()` return when an item does not exist?
8. What is the difference between `includes()` and `indexOf()`?
9. Which methods return the item they remove?
10. Why would `shift()` make sense for a customer queue?

If you understand these six methods, we can move to the next batch of array methods.
