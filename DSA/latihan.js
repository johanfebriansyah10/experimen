const numbers = [2, 2, 3, 3, 3, 3, 4, 4];
function findFrequentNumber(numbers) {
    let frequency = {};

    for (let number of numbers) {
        if (frequency[number]) {
            frequency[number] += 1;
        } else {
            frequency[number] = 1;
        }
    }

    return frequency;
}

function highestFrequentNumber(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input harus berupa number");

    }
    let result = findFrequentNumber(numbers);

    let objectNumber = { number: null, frequency: 0 }
    let highestFrequency = 0;

    for (let number in result) {
        if (result[number] > highestFrequency) {
            highestFrequency = result[number];
            objectNumber = {
                number: Number(number),
                frequency: result[number]
            };
        }
    }

    return objectNumber;
}

console.log(highestFrequentNumber(undefined))