// Write a function firstReverse that takes a single string parameter and returns the string in reverse order.
var firstReverse = function(str) {
    return str.split('').reverse().join('');
}

console.log('Reverse String:', firstReverse('racecar'));


// Write a function swapCase that takes a single string parameter and swaps the case of each character. For example: if a string is "Hello World" the output should be "hELLO wORLD". Let numbers and symbols stay the way they are.
var swapCase = function(str) {
    var tempArray = [];
    
    for (var i = 0; i < str.length; i++) {
        if(str[i] === str[i].toUpperCase()) {
            tempArray.push(str[i].toLowerCase());
        } else {
            tempArray.push(str[i].toUpperCase());
        }
    }
    
    return tempArray.join('');
}

console.log('Swap Case:', swapCase('hELLO WORLD'));


// Bonus: Write a function letterCount that takes a single string parameter and returns the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by single spaces.
var letterCount = function(str) {
    var split = str.split(' ');
    var hash = {};
    var mostDuplicates;
    
    // Create an object with words as keys, and null values
    split.forEach(function(i) {
        hash[i] = null;
    });
    
    // For each key, count the duplicate letters
    for(var key in hash) {
        var duplicateLetterCount = 0;
        
        // Loop through each letter in each key
        for (var i = 0; i < key.length; i++) {
           var regexmatch = key.match(new RegExp(key[i], 'gi'));
           if(regexmatch.length === 2) {
               duplicateLetterCount ++;
           }
        }
        // Update the hash values to the count of duplicate letters
        hash[key] = duplicateLetterCount;
    }
    
    // Return the word with the largest count of duplicates, or return -1 if there are no dups
    mostDuplicates = Object.keys(hash).reduce(function(prev, next){
        return hash[prev] > hash[next] ? prev : next;
    });
    
    console.log(mostDuplicates);
}

letterCount('This is the day');
//console.log('Letter Count:', letterCount('onomatopoeia'));