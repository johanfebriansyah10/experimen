const products = [
    { id: 101, name: "Laptop", price: 10000000 },
    { id: 102, name: "Mouse", price: 150000 },
    { id: 103, name: "Keyboard", price: 350000 },
    { id: 104, name: "Monitor", price: 2000000 },
    { id: 105, name: "Headset", price: 500000 }
];


const productMap = new Map();
for (let product of products) {
    productMap.set(product.id, product)
}
function findProductById(id) {
    return productMap.get(id)
}
console.log(findProductById(105))
console.log(findProductById(999))


function findProductByName(productName) {
    for (let product of products) {
        if (product.name === productName) {
            return product;
        }
    }
}


function findProducts(keyword) {
    const result = [];
    const searchKeyword = keyword.toLowerCase().trim()
    for (let product of products) {
        if (product.name.toLowerCase().includes(searchKeyword)) {
            result.push(product)
        }
    }
    return result;
}
// console.log(findProducts('    o      '))
// console.log(findProducts('   lap'))
