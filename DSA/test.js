const numbers = [4, 7, 4, 2, 7, 7, 9, 4, 7, 2];

function countNumbers(numbers) {
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

// console.log(countNumbers(numbers))

function findMostFrequentNumber(numbers) {
    // 1. Hitung frekuensi setiap angka
    let numbersFrequency = countNumbers(numbers);
    // 2. Siapkan variabel angka paling sering muncul
    let theMostNumberAppear;
    // 3. Siapkan variabel frekuensi tertinggi
    let highestFrequency = 0;
    // 4. Periksa setiap key dan value
    for(let number in numbersFrequency){
        if(numbersFrequency[number] > highestFrequency){
            highestFrequency = numbersFrequency[number]
            theMostNumberAppear = Number(number);
        }
    }
    return theMostNumberAppear;

    // 5. Kembalikan angka yang paling sering muncul
}

console.log(findMostFrequentNumber(numbers))