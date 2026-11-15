const numbers = [2, 2, 3, 3, 3, 3, 4, 4];
function findFrequentNumber(numbers) {
    let frequency = {};

    // Tugasmu: hitung frekuensi setiap angka di sini
    for (let number of numbers) {
        if (frequency[number]) {
            frequency[number] += 1;
        } else {
            frequency[number] = 1;
        }
    }

    return frequency;
}


function highestFrequenctNumber() {
    let result = findFrequentNumber(numbers);
    let obejctNumber = {}
    let highNumber = 0;
    for (let number in result) {
        if (result[number] > highNumber) {
            highNumber = result[number];
            obejctNumber.number = Number(number);
            obejctNumber.frequency = result[number]
        }
    }
    return obejctNumber;
}

console.log(highestFrequenctNumber())