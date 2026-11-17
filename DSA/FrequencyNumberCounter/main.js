const numbers = [4, 7, 4, 2, 7, 7, 9, 4, 7, 2];

function countNumber(numbers) {
    let result = {};
    for (let number of numbers) {
        if (result[number]) {
            result[number] += 1;
        } else {
            result[number] = 1;
        }
    }
    return result;
}

function findMostFrequentNumber(numbers) {
    let result = countNumber(numbers);
    let mostFrequentNumber;
    let highestFrequenctNumber = 0;

    for(let number in result){
        if(result[number] > highestFrequenctNumber){
            highestFrequenctNumber = result[number];
            mostFrequentNumber = Number(number);
        }
    }
    return mostFrequentNumber;
}

console.log(findMostFrequentNumber(numbers))