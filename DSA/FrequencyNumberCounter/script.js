const frequency = {
    2: 3,
    3: 1,
    4: 3,
    5: 2
};

let theMostFrequentNumber = [];
let highestFrequenctNumber = 0

for (let number in frequency) {
    if (frequency[number] > highestFrequenctNumber) {
        highestFrequenctNumber = frequency[number];
        theMostFrequentNumber = [Number(number)]
    } else if (frequency[number] == highestFrequenctNumber){
        theMostFrequentNumber.push(Number(number))
    }
}

console.log(theMostFrequentNumber)