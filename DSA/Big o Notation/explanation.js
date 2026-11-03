const users = ["Fredrin", "Johan", "Beatrix", "Granger", "Xavier", "Johan"];

// example notaion 0(1)
function getUser(arr) {
    return arr[0]
}

// console.log(getUser(users))

function findUser1(arr, targetName) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === targetName) return true;
    }
    return false;
}

const numbers = [1, 2, 3];


function getNumber1(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] * 2;
    }
}
// console.log(getNumber())
console.log(getNumber1(numbers))