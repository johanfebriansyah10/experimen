const numbers = [4, 7, 4, 2, 7, 7, 9, 4, 7, 2];


function coba(numbers) {
    let result = {};
    for (let number of numbers) {
        if(result[number]){
            result[number] += 1;
        }else {
            result[number] = 1;
        }
    }
    return result;
}
console.log(coba(numbers))