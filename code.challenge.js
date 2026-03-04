
// Getting the second highest number from an array of numbers
function getSendoHighestNumber(arr) {
    
    arr.sort((a, b) => b - a);
    return arr[1]; // Return second highest number
}

console.log(`This is the second highest number: ${getSendoHighestNumber([1, 2, 3, 4, 5, 6])}`); 

// Longest word in a string
function longestWord(string) {
    let words = string.split(' ');
    let longestWord= "";

    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(`The longest word from the string is:: ${longestWord("The quick brown fox jumps over the lazy dog")}`);

// Capitalize first Letter
function capitalizeWords(str) {
    let word = str.split(" ").map(word => {
        // let firstLetter = word.slice(0, 1);
        // let restWords = word.slice(1);
        // firstLetter = firstLetter.toUpperCase();
        // return `${firstLetter}${restWords}`;
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    return word.join(" ");
}
console.log(`Capitalize first Word of a String:: ${capitalizeWords("the cat went out of the window")}`);

// Reverse an String
function reverseString(str) {
    
    return str.split("").reverse().join("");
}
console.log(`Reverse a String:: ${reverseString('Morning')}`);

// Unique Values
function uniqueValues(nums){
    let uniqueNums = [...new Set(nums)];

    return uniqueNums.sort((a, b) => a - b);
}
console.log(`Return unique values:: ${uniqueValues([1,1,1,23,4,5,5,5,2,3,4,5])}`);

// Unique letters
function uniqueLetters(str){
    let uniqueLetters = [...new Set(str.replace(/,/g, '').replace(/\s/g, ''))];
    return uniqueLetters.sort();
}
console.log(`Return unique letters of array:: ${uniqueLetters("a,d,k,j,g,d,f,g,l,k,s,d,j,f,g,s,d,g,s,f,")}`);

// Check if a string has duplicate letters
function validateStringForDuplicates(str){
    
}