let fruits = ["Apple", "banana", "mango", "orange", "pineapple", "grape", "pawpaw", "watermelon", "cashewNut", "guava", "avocado", "coconut", "lemon", "lime", "blueberry", "strawBerry", "peach", "pear", "plum", "apricot", "cherry",
     "passionFruit", "jackFruit", "kiwi", "nectarine", "lucuma", "santol", "hogPlum", "breadNut", "canistel", "marang", "africanMango", "spanishLime", "langSat", "miracleFruit", "medlar"];

let userChoice = prompt("choose an index between 0 and " + (fruits.length - 1) + ":\nItems: " + fruits.join(", "));

let index = parseInt(userChoice);

if (index >= 0 && index < fruits.length) {
    console.log("you selected: " + fruits[index]);
    alert("you selected: " + fruits[index]);
}else {
    console.log("innvalid choice! please refresh and enter a valid number.");
    alert("invalid choice!");
}