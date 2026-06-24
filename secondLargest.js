function secondLargest(numbers) {
    if (numbers.length < 2) {
        return "List must contain at least two numbers";
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let number of numbers) {
        if (number > largest) {
            secondLargest = largest;
            largest = number;
        }
        else if (number > secondLargest && number !== largest) {
            secondLargest = number;
        }
    }
    if (secondLargest === -Infinity) {
        return "No second largest value";
    }
    return secondLargest;
}
console.log(secondLargest([50, 10, 30]));
console.log(secondLargest([5, 5, 4]));