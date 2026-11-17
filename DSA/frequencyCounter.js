const numbers = [1, 2, 3, 2, 4, 1, 3, 2, 5];
const person = {
    firstName: "Johan",
    lastName: "Febriansyah",
    age: 23,
    address: {
        street: "Jl semangka karang bagu",
        city: "Mataram",
    }
}

function countNumbers(numbers) {
    for (let number of numbers) {
        console.log(numbers[number])
    }
}

countNumbers(numbers)

function findMostFrequentNumber(numbers) {
    const countNumber = countNumbers(numbers);
    let mostFrequentNumber;
    let highestFrequency = 0;

    for (let number in countNumber) {
        if (countNumber[number] > highestFrequency) {
            highestFrequency = countNumber[number];
            mostFrequentNumber = Number(number);
        }
    }
    return mostFrequentNumber;
}

console.log(findMostFrequentNumber(numbers))
