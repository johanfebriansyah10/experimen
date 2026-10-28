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
console.log(sortProductsByPrice())