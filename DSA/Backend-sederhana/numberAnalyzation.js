const numbers = [2, 2, 3, 3, 3, 3, 4, 4];

function countNumber(numbers) {
    let result = {}
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input harus berupa array");
    }
    for (let number of numbers) {
        if (result[number]) {
            result[number] += 1;
        } else {
            result[number] = 1;
        }
    }
    return result;
}

// console.log(countNumber(numbers))

function highestFrequentNumber(numbers) {
    let result = countNumber(numbers);
    let highestFrequency = 0;
    let dataFrequency = {
        number: null,
        frequency: 0
    };
    for (let number in result) {
        if (result[number] > highestFrequency) {
            highestFrequency = result[number];
            dataFrequency = {
                number: Number(number),
                frequency: result[number]
            }
        }
    }
    return dataFrequency;
}

function leastFrequentNumber(numbers) {
    let countNumberResult = countNumber(numbers);
    let lowestFrequency = Infinity;
    let result = {
        number: null,
        frequency: 0
    }

    for (let number in countNumberResult) {
        if (countNumberResult[number] < lowestFrequency) {
            lowestFrequency = countNumberResult[number];
            result = {
                number: Number(number),
                frequency: countNumberResult[number]
            }
        }
    }
    return result;
}

function findMinMax(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input harus berupa Array");
    }
    if (numbers.length === 0) {
        return {
            min: null,
            max: null
        };
    }
    let minMaxNumber = {
        min: numbers[0],
        max: numbers[0]
    };

    for (let number of numbers) {
        if (number > minMaxNumber.max) {
            minMaxNumber.max = number
        } else if (number < minMaxNumber.min) {
            minMaxNumber.min = number
        }
    }
    return minMaxNumber;
}

function calculateSum(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input harus berupa Array");
    }
    if (numbers.length === 0) {
        return 0;
    }
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    let total = calculateSum(numbers);
    return total / numbers.length;
}


// Aturan median:
// 1. Urutkan angka dari terkecil ke terbesar.
// 2. Jika jumlah angka ganjil, ambil satu angka tepat di tengah.
// 3. Jika jumlah angka genap, ambil rata-rata dua angka di tengah.
// 4. Jika array kosong, kembalikan null.
// 5. Input bukan array harus melempar TypeError.
// Petunjuk implementasi:
// let sortedNumbers = [...numbers].sort((a, b) => a - b);
// let middleIndex = Math.floor(sortedNumbers.length / 2);
function findMedian(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input harus beruapa array")
    }
    if (numbers.length === 0) {
        return null;
    }
    let sortedNumbers = [...numbers].sort((a, b) => a - b);
    let length = sortedNumbers.length;
    let middleIndex = Math.floor(length / 2);
    if (numbers.length % 2 === 1) {
        return sortedNumbers[middleIndex];
    } else {
        return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
    }
}

console.log(findMedian([2, 2, 3, 3, 3, 3, 4, 4]))
console.log(findMedian([7, 2, 9, 4, 5]))
// 5
console.log(findMedian([2, 4, 6, 8]))
// 5
