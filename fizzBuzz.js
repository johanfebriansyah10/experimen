const numbers = 100;

for (let i = 1; i <= numbers; i++) {
    let resp = "";
    if (i % 3 === 0) resp += "Fizz";
    if (i % 5 === 0) resp += "Buzz";

    console.log(resp || i);
}