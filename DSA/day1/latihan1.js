const products = [
    { id: 201, name: "Tablet", price: 3000000 },
    { id: 202, name: "Charger", price: 100000 },
    { id: 203, name: "Cable", price: 50000 }
];


const productMap = new Map();
for (let product of products) {
    productMap.set(product.id, product)
}
function findProductById(id) {
    return productMap.get(id)
}


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

function searchProducts(keyword) {
    const searchProductKeyword = keyword.trim().toLowerCase()
    return products.filter((product) => product.name.toLowerCase().includes(searchProductKeyword));
}

// console.log(searchProducts("mouse").length);
// [{ id: 102, name: "Mouse", price: 150000 }]
// console.log(searchProducts("o").length);
// Laptop, Mouse, Monitor
// console.log(searchProducts("xyz").length);
// []

// Tantangan berikutnya: cari produk sekaligus hitung hasilnya
function searchProducts(keyword) {
    const searchProductKeyword = keyword.trim().toLowerCase()
    return products.filter((product) => product.name.toLowerCase().includes(searchProductKeyword));
}
function countSearchResults(keyword) {
    const result = searchProducts(keyword);
    return result.length;
}

// const result = countSearchResults("       o       ")
// console.log(searchProducts("o"));
// console.log(result)

function filterProductsByMaxPrice(maxPrice) {
    return products.filter((product) => product.price <= maxPrice);
}

// console.log(filterProductsByMaxPrice(500000));

function searchProductsByKeywordAndPrice(keyword, maxPrice) {
    const searchKeyword = keyword.trim().toLowerCase();
    return products.filter((product) => product.name.toLowerCase().includes(searchKeyword) && product.price <= Number(maxPrice));
}

// console.log(searchProductsByKeywordAndPrice('    e   ', 500000))


function sortProductsByPrice() {
    return products.sort((productA, productB) => productA.price - productB.price);
}
// console.log(sortProductsByPrice())


function findCheapestProduct() {
    let cheapestProduct = products[0]
    for (let product of products) {
        if (product.price < cheapestProduct.price) {
            cheapestProduct = product;
        }
    }
    return cheapestProduct;
}

// console.log(findCheapestProduct())

// const products = [
//     { id: 201, name: "Tablet", price: 3000000 },
//     { id: 202, name: "Charger", price: 100000 },
//     { id: 203, name: "Cable", price: 50000 }
// ];

function findCheapestProduct() {
    let cheapestProduct = products[0]
    for (let product of products) {
        if (product.price < cheapestProduct.price) {
            cheapestProduct = product;
        }
    }
    return cheapestProduct;
}

// console.log(findCheapestProduct())

function findMostExpensiveProduct() {
    let expensiveProduct = products[0];
    for (let product of products) {
        if (product.price > expensiveProduct.price) {
            expensiveProduct = product;
        }
    }
    return expensiveProduct;
}

// console.log(findMostExpensiveProduct())

function filterProductsByPriceRange(minPrice, maxPrice) {
    let resultProduct = [];
    for (let product of products) {
        if (product.price >= minPrice && product.price <= maxPrice) {
            resultProduct.push(product)
        }
    }
    return resultProduct;
}
// console.log(filterProductsByPriceRange(50000, 150000));

function searchProductsByKeywordAndPriceRange(keyword, minPrice, maxPrice) {
    let resultProducts = [];
    let searchKeyword = keyword.trim().toLowerCase();
    for (let product of products) {
        if (product.name.toLowerCase().includes(searchKeyword) && product.price >= minPrice && product.price <= maxPrice) {
            resultProducts.push(product)
        }
    }
    return resultProducts;
}
// console.log(searchProductsByKeywordAndPriceRange("a", 50000, 150000))

// function calculateTotalPrice(products) {
//     let totalPrice = 0;
//     for (let product of products) {
//         totalPrice += product.price;
//     }
//     return totalPrice;
// }

// console.log(calculateTotalPrice([
//     { id: 202, name: "Charger", price: 100000 },
//     { id: 203, name: "Cable", price: 50000 }
// ]));

// const products = [
//     { id: 201, name: "Tablet", price: 3000000 },
//     { id: 202, name: "Charger", price: 100000 },
//     { id: 203, name: "Cable", price: 50000 }
// ];

function calculateAveragePrice(products) {
    let averagePrice = 0;
    for (let product of products) {
        averagePrice += product.price;
    }
    averagePrice = averagePrice / products.length
    return averagePrice;
}

// console.log(calculateAveragePrice(products))

const transactions = [
    "Food",
    "Transport",
    "Food",
    "Shopping",
    "Transport",
    "Food"
];

function countTransactions(transactions) {
    let result = {};
    for (let transaction of transactions) {
        if (result[transaction]) {
            result[transaction] += 1;
        } else {
            result[transaction] = 1;
        }
    }
    return result;
}

console.log(countTransactions(transactions))