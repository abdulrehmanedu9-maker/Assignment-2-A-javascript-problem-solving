function isPalindromeReverse(word) {

    let cleanedWord = word
        .toLowerCase()
        .replaceAll(" ", "");

    let reversedWord = cleanedWord
        .split("")
        .reverse()
        .join("");

    return cleanedWord === reversedWord;
}

function isPalindromeTwoPointers(word) {

    let cleanedWord = word
        .toLowerCase()
        .replaceAll(" ", "");

    let left = 0;
    let right = cleanedWord.length - 1;

    while (left < right) {

        if (cleanedWord[left] !== cleanedWord[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(isPalindromeReverse("Race car"));
console.log(isPalindromeTwoPointers("Race car"));

console.log(isPalindromeReverse("Hello"));
console.log(isPalindromeTwoPointers("Hello"));

