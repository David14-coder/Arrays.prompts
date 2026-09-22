// let fruits = ["Apple", "banana", "mango", "orange", "pineapple", "grape", "pawpaw", "watermelon", "cashewNut", "guava", "avocado", "coconut", "lemon", "lime", "blueberry", "strawBerry", "peach", "pear", "plum", "apricot", "cherry",
//      "passionFruit", "jackFruit", "kiwi", "nectarine", "lucuma", "santol", "hogPlum", "breadNut", "canistel", "marang", "africanMango", "spanishLime", "langSat", "miracleFruit", "medlar"];

// let userChoice = prompt("choose an index between 0 and " + (fruits.length - 1) + ":\nItems: " + fruits.join(", "));

// let index = parseInt(userChoice);

// if (index >= 0 && index < fruits.length) {
//     console.log("you selected: " + fruits[index]);
//     alert("you selected: " + fruits[index]);
// }else {
//     console.log("innvalid choice! please refresh and enter a valid number.");
//     alert("invalid choice!");
// }





// let playlist = ["davido", "drake", "wizkid", "burnaBoy", "wizKhalifa", "rema", "rudeBoy", "patoranking", "timaya", "fola", "jeriq", "phyno", "poloG", "kingVon", "lilDurk", "lilBaby", "migos", 
//     "Teni", "zlatan"];

//     let song1 = prompt("Enter the name of the first song to swap (e.g., song A):");
//     let song2 = prompt("Enter the name of the first song to swap (e.g., song B):");

//     let index1 = playlist.indexOf("song1");
//     let indexx2 = playlist.indexOf("song2");

//     if(index1 !== -1 && index2 !== -1) {
//         let temp = playlist[index1];
//         playlist[index1] = playlist[index2];
//         playlist[index2] = temp;

//         console.log("updated playlist:", playlist);
//     }else{
//         console.log("one or both songs where not found in the playlist.")
//     }





// let inventory = ["sheild", "ball", "sword", "potion", "pot", "rice", "helmet", "cement", "hoe", "pos", "phone", "charge", "basket", "bicycle", "pepsi", "whatsapp",
//     "lagos", "soap", "dangote", "shares", "oil", "hub", "song", "gain", "btc", "time", "crypto", "food", "kitchen", "race", "run", "mtn", "who"]

//     let target = prompt("what item are you looking for");

//     let foundIndex = -1;

//     for(let i = 0; i < inventory.length; i++){
//         if(inventory[i] === target) {
//             foundIndex = i;
//             break;
//         }
//     }

//     if(foundIndex !== -1) {
//         console.log("found " + "at index " + foundIndex);
//     }else{
//         console.log("item not found");
//     }


let userInput = prompt("enter temperatures separated by comas (72, 85, 91, 68):");

let temperatures = userInput ? userInput.split(",").map(Number) : [72, 85, 91, 68];

 let max = temperatures[0];
 
 for(let i = 1; i < temperatures.length; i++) {
    if(temperatures[i] > max){
        max = temperatures[i];
    }
 }

 console.log("highest temp:", max);