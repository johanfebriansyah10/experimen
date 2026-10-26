const products = [
    { id: 101, name: "Laptop", price: 10000000 },
    { id: 102, name: "Mouse", price: 150000 },
    { id: 103, name: "Keyboard", price: 350000 },
    { id: 104, name: "Monitor", price: 2000000 },
    { id: 105, name: "Headset", price: 500000 }
];


function findProductByName(productName) {
    for (let product of products) {
        if (product.name === productName) {
            return product;
        }
    }
}
console.log(findProductByName("Laptop"))