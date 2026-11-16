const products = [
    { id: 1, name: "Laptop", price: 8000000, stock: 5 },
    { id: 2, name: "Mouse", price: 150000, stock: 20 },
    { id: 3, name: "Keyboard", price: 350000, stock: 10 },
    { id: 4, name: "Monitor", price: 2000000, stock: 0 }
];

function findProductById(products, id) {
    for (let product of products) {
        if (product.id === id) {
            return product;
        }
    }
    return null;
}

function countProducts(products) {
    let count = 0;
    for (let product of products) {
        count++
    }
    return count;
}

function calculateTotalStock(products) {
    let productStock = 0;
    for (let product of products) {
    }
}
