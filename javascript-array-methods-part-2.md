# JavaScript Array Methods - Part 2

## What we are learning today

We already learned:

```js
push()
pop()
shift()
unshift()
includes()
indexOf()
```

Now we are moving to:

```js
filter()
map()
find()
some()
every()
```

These methods help us work with the items inside an array.

Since we have already learned functions, these methods will also help us understand how we can give a function to another piece of code as an instruction.

For now, don't worry too much about the word "callback".

Focus on this question:

> What do I want to do with the items inside my array?

---

# BATCH 1: `filter()`

## What problem does `filter()` solve?

Imagine:

```js
let scores = [80, 45, 70, 30, 90];
```

We only want scores that are 50 or above.

Using a loop:

```js
let passedScores = [];

for (let score of scores) {
    if (score >= 50) {
        passedScores.push(score);
    }
}

console.log(passedScores);
```

Result:

```js
[80, 70, 90]
```

We can do the same thing with `filter()`:

```js
let scores = [80, 45, 70, 30, 90];

let passedScores = scores.filter(function(score) {
    return score >= 50;
});

console.log(passedScores);
```

Result:

```js
[80, 70, 90]
```

The function inside `filter()` is the rule.

For every score, JavaScript asks:

```text
Is this score >= 50?
```

If `true`, keep it.

If `false`, leave it out.

So think:

```text
filter()
↓
check every item
↓
keep items that pass the condition
↓
return a NEW array
```

## Real example: Available products

```js
let products = [
    { name: "Laptop", available: true },
    { name: "Phone", available: false },
    { name: "Mouse", available: true },
    { name: "Keyboard", available: false }
];

let availableProducts = products.filter(function(product) {
    return product.available === true;
});

console.log(availableProducts);
```

We are saying:

> Give me only the products that are available.

---

# 4 Teaching Tasks - `filter()`

## Task 1 - Passed Students

```js
let scores = [45, 80, 33, 72, 90, 40, 65];
```

Use `filter()` to create a new array containing only scores that are `50` or above.

Expected:

```js
[80, 72, 90, 65]
```

## Task 2 - Available Products

```js
let products = [
    { name: "Laptop", available: true },
    { name: "Phone", available: false },
    { name: "Mouse", available: true },
    { name: "Keyboard", available: false }
];
```

Use `filter()` to get only the available products.

## Task 3 - Successful Transactions

```js
let transactions = [
    { id: 1, amount: 5000, status: "success" },
    { id: 2, amount: 3000, status: "failed" },
    { id: 3, amount: 10000, status: "success" },
    { id: 4, amount: 2000, status: "failed" }
];
```

Use `filter()` to get only successful transactions.

## Task 4 - Adult Users

```js
let users = [
    { name: "John", age: 17 },
    { name: "Mary", age: 22 },
    { name: "David", age: 15 },
    { name: "Sarah", age: 30 }
];
```

Use `filter()` to get only users who are 18 or older.

---

# BATCH 2: `map()`

## What problem does `map()` solve?

`map()` is useful when we want to take every item and change it into something else.

Example:

```js
let prices = [1000, 2000, 3000];

let newPrices = prices.map(function(price) {
    return price + 500;
});

console.log(newPrices);
```

Result:

```js
[1500, 2500, 3500]
```

JavaScript takes each item and applies our rule:

```text
1000 → 1500
2000 → 2500
3000 → 3500
```

The basic idea is:

```text
map()
↓
take every item
↓
do something to it
↓
return the changed value
↓
create a NEW array
```

## `map()` vs `filter()`

This is important.

`filter()` decides which items to keep:

```js
let scores = [40, 60, 80];

let passed = scores.filter(function(score) {
    return score >= 50;
});
```

Result:

```js
[60, 80]
```

`map()` changes every item:

```js
let scores = [40, 60, 80];

let newScores = scores.map(function(score) {
    return score + 5;
});
```

Result:

```js
[45, 65, 85]
```

Remember:

```text
filter() → Which items should I keep?

map() → What should each item become?
```

## Real example: Get product names

```js
let products = [
    { name: "Laptop", price: 500000 },
    { name: "Phone", price: 200000 },
    { name: "Mouse", price: 15000 }
];

let productNames = products.map(function(product) {
    return product.name;
});

console.log(productNames);
```

Result:

```js
["Laptop", "Phone", "Mouse"]
```

---

# 4 Teaching Tasks - `map()`

## Task 5 - Double Scores

```js
let scores = [10, 20, 30, 40, 50];
```

Use `map()` to double every score.

Expected:

```js
[20, 40, 60, 80, 100]
```

## Task 6 - Add Delivery Fee

```js
let prices = [5000, 10000, 15000, 20000];
```

Use `map()` to add ₦1,000 to every price.

Expected:

```js
[6000, 11000, 16000, 21000]
```

## Task 7 - Get User Names

```js
let users = [
    { name: "John", email: "john@email.com" },
    { name: "Mary", email: "mary@email.com" },
    { name: "David", email: "david@email.com" }
];
```

Use `map()` to create an array containing only the names.

Expected:

```js
["John", "Mary", "David"]
```

## Task 8 - Create Product Labels

```js
let products = [
    { name: "Laptop", price: 500000 },
    { name: "Mouse", price: 15000 },
    { name: "Keyboard", price: 25000 }
];
```

Use `map()` to create:

```js
[
    "Laptop - ₦500000",
    "Mouse - ₦15000",
    "Keyboard - ₦25000"
]
```

---

# BATCH 3: `find()`

## What problem does `find()` solve?

Sometimes we don't want a whole list.

We want ONE item.

Example:

```js
let users = [
    { name: "John", email: "john@email.com" },
    { name: "Mary", email: "mary@email.com" },
    { name: "David", email: "david@email.com" }
];

let user = users.find(function(user) {
    return user.email === "mary@email.com";
});

console.log(user);
```

Result:

```js
{
    name: "Mary",
    email: "mary@email.com"
}
```

`find()` checks the items until it finds the first one that satisfies the condition.

Think:

```text
find()
↓
check items one by one
↓
first item that matches
↓
return that item
```

If nothing matches:

```js
let user = users.find(function(user) {
    return user.name === "Victor";
});

console.log(user);
```

Result:

```text
undefined
```

## `find()` vs `filter()`

```text
filter() → ALL matching items

find() → FIRST matching item
```

---

# 4 Teaching Tasks - `find()`

## Task 9 - Find a User

```js
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Mary" },
    { id: 3, name: "David" }
];
```

Use `find()` to find the user whose `id` is `2`.

## Task 10 - Find a Product

```js
let products = [
    { id: 101, name: "Laptop", price: 500000 },
    { id: 102, name: "Phone", price: 200000 },
    { id: 103, name: "Mouse", price: 15000 }
];
```

Find the product with:

```js
id: 103
```

## Task 11 - Find Successful Transaction

```js
let transactions = [
    { id: 1, status: "failed", amount: 5000 },
    { id: 2, status: "success", amount: 10000 },
    { id: 3, status: "success", amount: 3000 }
];
```

Use `find()` to find the first successful transaction.

## Task 12 - Find a Student

```js
let students = [
    { name: "John", score: 45 },
    { name: "Mary", score: 80 },
    { name: "David", score: 70 }
];
```

Use `find()` to find the first student who scored 70 or more.

---

# BATCH 4: `some()`

## What problem does `some()` solve?

Sometimes we don't need the item.

We only want to know:

> Does AT LEAST ONE item satisfy this condition?

Example:

```js
let scores = [40, 45, 80, 30];

let hasPassed = scores.some(function(score) {
    return score >= 50;
});

console.log(hasPassed);
```

Result:

```text
true
```

Because 80 passed.

If none of the items match, `some()` returns:

```text
false
```

Think:

```text
some()
↓
Does AT LEAST ONE item match?
```

## Real example: Failed transactions

```js
let transactions = [
    { amount: 5000, status: "success" },
    { amount: 3000, status: "success" },
    { amount: 1000, status: "failed" }
];

let hasFailedTransaction = transactions.some(function(transaction) {
    return transaction.status === "failed";
});

console.log(hasFailedTransaction);
```

Result:

```text
true
```

---

# 4 Teaching Tasks - `some()`

## Task 13 - Any Failed Transaction?

```js
let transactions = [
    { id: 1, status: "success" },
    { id: 2, status: "success" },
    { id: 3, status: "failed" }
];
```

Use `some()` to check whether there is at least one failed transaction.

## Task 14 - Any Adult?

```js
let ages = [12, 15, 16, 21, 14];
```

Use `some()` to check whether at least one person is 18 or older.

## Task 15 - Any Expensive Product?

```js
let products = [
    { name: "Mouse", price: 15000 },
    { name: "Keyboard", price: 25000 },
    { name: "Laptop", price: 500000 }
];
```

Use `some()` to check whether at least one product costs more than ₦400,000.

## Task 16 - Any Admin?

```js
let users = [
    { name: "John", role: "staff" },
    { name: "Mary", role: "manager" },
    { name: "David", role: "staff" }
];
```

Use `some()` to check whether at least one user is an admin.

---

# BATCH 5: `every()`

## What problem does `every()` solve?

`every()` asks:

> Do ALL the items satisfy this condition?

Example:

```js
let scores = [70, 80, 90, 60];

let everyonePassed = scores.every(function(score) {
    return score >= 50;
});

console.log(everyonePassed);
```

Result:

```text
true
```

Every score is at least 50.

Now:

```js
let scores = [70, 80, 40, 60];

let everyonePassed = scores.every(function(score) {
    return score >= 50;
});

console.log(everyonePassed);
```

Result:

```text
false
```

One person scored 40, so not everyone passed.

---

# `some()` vs `every()`

```text
some()
→ Does AT LEAST ONE match?

every()
→ Do ALL match?
```

Example:

```js
let scores = [40, 60, 70];
```

`some()`:

```js
scores.some(function(score) {
    return score >= 50;
});
```

Result:

```text
true
```

At least one passed.

`every()`:

```js
scores.every(function(score) {
    return score >= 50;
});
```

Result:

```text
false
```

Not everyone passed.

---

# 4 Teaching Tasks - `every()`

## Task 17 - Everyone Passed?

```js
let scores = [60, 70, 80, 90];
```

Use `every()` to check whether every student passed.

## Task 18 - Everyone Is An Adult?

```js
let ages = [20, 25, 30, 19];
```

Use `every()` to check whether everyone is 18 or older.

## Task 19 - All Payments Successful?

```js
let payments = [
    { amount: 5000, status: "success" },
    { amount: 3000, status: "success" },
    { amount: 7000, status: "success" }
];
```

Use `every()` to check whether all payments were successful.

## Task 20 - All Products Available?

```js
let products = [
    { name: "Laptop", available: true },
    { name: "Mouse", available: true },
    { name: "Keyboard", available: false }
];
```

Use `every()` to check whether every product is available.

---

# The Big Comparison

| Method | Question it answers |
|---|---|
| `filter()` | Which items should I keep? |
| `map()` | What should each item become? |
| `find()` | What is the first item that matches? |
| `some()` | Does at least one item match? |
| `every()` | Do all items match? |

---

# Combining Methods

Now we can combine methods.

Example:

```js
let products = [
    { name: "Laptop", price: 500000, available: true },
    { name: "Phone", price: 200000, available: false },
    { name: "Mouse", price: 15000, available: true }
];
```

First filter available products:

```js
let availableProducts = products.filter(function(product) {
    return product.available === true;
});
```

Then get their names:

```js
let productNames = availableProducts.map(function(product) {
    return product.name;
});
```

Result:

```js
["Laptop", "Mouse"]
```

We can also combine them:

```js
let productNames = products
    .filter(function(product) {
        return product.available === true;
    })
    .map(function(product) {
        return product.name;
    });

console.log(productNames);
```

Think of it as:

```text
products
   ↓
filter available products
   ↓
map them to their names
   ↓
["Laptop", "Mouse"]
```

---

# PROJECT: Mini E-Commerce Product System

Now we are going to use what we have learned to build a small product system.

You already know:

```text
variables
conditions
loops
functions
arrays
objects
push()
pop()
shift()
unshift()
includes()
indexOf()
```

And now:

```text
filter()
map()
find()
some()
every()
```

Your job is to combine them.

## Starting Data

```js
let products = [
    {
        id: 1,
        name: "Laptop",
        price: 500000,
        category: "Electronics",
        available: true
    },
    {
        id: 2,
        name: "Phone",
        price: 250000,
        category: "Electronics",
        available: true
    },
    {
        id: 3,
        name: "Mouse",
        price: 15000,
        category: "Accessories",
        available: false
    },
    {
        id: 4,
        name: "Keyboard",
        price: 30000,
        category: "Accessories",
        available: true
    },
    {
        id: 5,
        name: "Monitor",
        price: 150000,
        category: "Electronics",
        available: false
    }
];
```

## Part 1 - Add Products

Create:

```js
function addProduct(product) {

}
```

Use `push()` to add a new product.

Test it by adding another product.

## Part 2 - Remove Last Product

Create:

```js
function removeLastProduct() {

}
```

Use `pop()` and print the product that was removed.

## Part 3 - Check Product Name

Create:

```js
function productExists(productName) {

}
```

Create a product names array using `map()`:

```js
let productNames = products.map(function(product) {
    return product.name;
});
```

Then use `includes()` to check whether the product exists.

## Part 4 - Find Product

Create:

```js
function getProductById(id) {

}
```

Use `find()` to return the product with that ID.

Example:

```js
let product = getProductById(3);

console.log(product);
```

## Part 5 - Get Available Products

Create:

```js
function getAvailableProducts() {

}
```

Use `filter()` to return only products where:

```js
available === true
```

## Part 6 - Get Product Names

Create:

```js
function getProductNames() {

}
```

Use `map()` to return only the product names.

## Part 7 - Check for Expensive Product

Create:

```js
function hasExpensiveProduct() {

}
```

Use `some()` to check whether at least one product costs more than:

```text
₦400,000
```

Return:

```text
true
```

or:

```text
false
```

## Part 8 - Check Availability

Create:

```js
function areAllProductsAvailable() {

}
```

Use `every()` to check whether every product is available.

---

# Bonus Project Features

If you finish early, add these.

## Search by Category

```js
function getProductsByCategory(category) {

}
```

Use `filter()`.

Example:

```js
getProductsByCategory("Electronics");
```

## Get All Prices

```js
function getAllPrices() {

}
```

Use `map()`.

Expected:

```js
[500000, 250000, 15000, 30000, 150000]
```

## Check Whether a Category Exists

```js
function categoryExists(category) {

}
```

Use `some()`.

## Find the First Unavailable Product

```js
function getFirstUnavailableProduct() {

}
```

Use `find()`.

---

# INDEPENDENT PROJECT: Mini Student Management System

Now build another system without copying the project above.

Start with:

```js
let students = [
    {
        id: 1,
        name: "John",
        age: 20,
        score: 75
    },
    {
        id: 2,
        name: "Mary",
        age: 17,
        score: 85
    },
    {
        id: 3,
        name: "David",
        age: 22,
        score: 45
    },
    {
        id: 4,
        name: "Sarah",
        age: 19,
        score: 90
    }
];
```

Build functions that can:

1. Add a student.
2. Remove the last student.
3. Find a student by ID.
4. Get all students who passed.
5. Get all students who are 18 or older.
6. Get only the students' names.
7. Check if at least one student scored 90.
8. Check if every student passed.
9. Check if a student named `"Mary"` exists.
10. Find the position of `"David"` using a separate names array and `indexOf()`.

Try to use the correct array method for each problem instead of using a loop for everything.

---

# Final Cheat Sheet

```text
push()
→ Add to the end

pop()
→ Remove from the end

unshift()
→ Add to the beginning

shift()
→ Remove from the beginning

includes()
→ Does this value exist?

indexOf()
→ Where is this value?

filter()
→ Give me ALL items that match

map()
→ Change EVERY item into something else

find()
→ Give me the FIRST item that matches

some()
→ Does AT LEAST ONE item match?

every()
→ Do ALL items match?
```

When you see an array, ask yourself:

```text
Do I want to ADD something?
Do I want to REMOVE something?
Do I want to CHECK something?
Do I want to FIND something?

Do I want to KEEP only certain items?
Do I want to CHANGE every item?
Do I want ONE matching item?
Do I want to know if AT LEAST ONE matches?
Do I want to know if ALL match?
```

Once you can answer that question, choosing the array method becomes much easier.
