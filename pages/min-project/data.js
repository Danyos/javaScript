// data.js — ընդհանուր տվյալներ + helper-ներ

// Կատեգորիաներ
const categories = [
    { id: 1, name: "Հեռախոսներ" },
    { id: 2, name: "Պլանշետներ" },
    { id: 3, name: "Աքսեսուարներ" }
];

// Գույներ
const colors = [
    { id: 1, name: "Red" },
    { id: 2, name: "Black" },
    { id: 3, name: "White" },
    { id: 4, name: "Blue" },
    { id: 5, name: "Green" },
    { id: 6, name: "Yellow" },
    { id: 7, name: "Orange" },
    { id: 8, name: "Purple" },
    { id: 9, name: "Silver" }
];

// Բրենդներ
const brands = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Samsung" },
    { id: 3, name: "Xiaomi" },
    { id: 4, name: "Nokia" },
    { id: 5, name: "Huawei" },
    { id: 6, name: "Google" },
    { id: 7, name: "OnePlus" },
    { id: 8, name: "Baseus" },
    { id: 9, name: "Spigen" },
    { id: 10, name: "Anker" }
];

// Օպերացիոն համակարգեր
const operationSystems = [
    { id: 1, name: "iOS" },
    { id: 2, name: "Android" },
    { id: 3, name: "Windows" }
];

// RAM
const ram = [
    { id: 1, name: "8GB" },
    { id: 2, name: "16GB" },
    { id: 3, name: "32GB" },
    { id: 4, name: "64GB" }
];

// Ապրանքներ
const products = [
    {
        id: 1,
        categoryId: 1,
        brandId: 1,
        colorIds: [2, 3, 9],
        name: "iPhone 17",
        price: 499000,
        discount: 5,
        stock: 25,
        opSysId: 1,
        ramId: 2,
        image: "https://placehold.co/350x500?text=iPhone%2017"
    },
    {
        id: 2,
        categoryId: 1,
        brandId: 1,
        colorIds: [2, 3, 8],
        name: "iPhone 17 Pro",
        price: 599000,
        discount: 10,
        stock: 18,
        opSysId: 1,
        ramId: 2,
        image: "https://placehold.co/350x500?text=iPhone%2017%20Pro"
    },
    {
        id: 3,
        categoryId: 1,
        brandId: 1,
        colorIds: [2, 9],
        name: "iPhone 17 Pro Max",
        price: 649000,
        discount: 8,
        stock: 12,
        opSysId: 1,
        ramId: 3,
        image: "https://placehold.co/350x500?text=iPhone%2017%20Pro%20Max"
    },
    {
        id: 4,
        categoryId: 1,
        brandId: 2,
        colorIds: [2, 4, 5],
        name: "Samsung Galaxy S26",
        price: 449000,
        discount: 7,
        stock: 30,
        opSysId: 2,
        ramId: 2,
        image: "https://placehold.co/350x500?text=Samsung%20Galaxy%20S26"
    },
    {
        id: 5,
        categoryId: 1,
        brandId: 2,
        colorIds: [2, 4],
        name: "Samsung Galaxy S26 Ultra",
        price: 529000,
        discount: 10,
        stock: 20,
        opSysId: 2,
        ramId: 3,
        image: "https://placehold.co/350x500?text=Samsung%20Galaxy%20S26%20Ultra"
    },
    {
        id: 6,
        categoryId: 1,
        brandId: 2,
        colorIds: [5, 6],
        name: "Samsung Galaxy A98",
        price: 299000,
        discount: 12,
        stock: 40,
        opSysId: 2,
        ramId: 1,
        image: "https://placehold.co/350x500?text=Samsung%20Galaxy%20A98"
    },
    {
        id: 7,
        categoryId: 1,
        brandId: 3,
        colorIds: [2, 3],
        name: "Xiaomi Mi 15",
        price: 259000,
        discount: 5,
        stock: 35,
        opSysId: 2,
        ramId: 1,
        image: "https://placehold.co/350x500?text=Xiaomi%20Mi%2015"
    },
    {
        id: 8,
        categoryId: 1,
        brandId: 3,
        colorIds: [4, 6],
        name: "Xiaomi Redmi Note 14",
        price: 219000,
        discount: 15,
        stock: 50,
        opSysId: 2,
        ramId: 1,
        image: "https://placehold.co/350x500?text=Xiaomi%20Redmi%20Note%2014"
    },
    {
        id: 9,
        categoryId: 1,
        brandId: 6,
        colorIds: [2, 3],
        name: "Google Pixel 10",
        price: 429000,
        discount: 6,
        stock: 22,
        opSysId: 2,
        ramId: 2,
        image: "https://placehold.co/350x500?text=Google%20Pixel%2010"
    },
    {
        id: 10,
        categoryId: 1,
        brandId: 7,
        colorIds: [2, 4],
        name: "OnePlus 13 Pro",
        price: 399000,
        discount: 9,
        stock: 28,
        opSysId: 2,
        ramId: 3,
        image: "https://placehold.co/350x500?text=OnePlus%2013%20Pro"
    },
    {
        id: 11,
        categoryId: 1,
        brandId: 4,
        colorIds: [2, 5],
        name: "Nokia XR50",
        price: 199000,
        discount: 5,
        stock: 32,
        opSysId: 2,
        ramId: 1,
        image: "https://placehold.co/350x500?text=Nokia%20XR50"
    },
    {
        id: 12,
        categoryId: 1,
        brandId: 5,
        colorIds: [3, 9],
        name: "Huawei P80 Pro",
        price: 359000,
        discount: 11,
        stock: 26,
        opSysId: 2,
        ramId: 2,
        image: "https://placehold.co/350x500?text=Huawei%20P80%20Pro"
    },
    {
        id: 13,
        categoryId: 2,
        brandId: 1,
        colorIds: [3, 9],
        name: "iPad Air 7",
        price: 379000,
        discount: 5,
        stock: 15,
        opSysId: 1,
        ramId: 2,
        image: "https://placehold.co/350x500?text=iPad%20Air%207"
    },
    {
        id: 14,
        categoryId: 2,
        brandId: 2,
        colorIds: [2, 4],
        name: "Samsung Galaxy Tab S11",
        price: 329000,
        discount: 7,
        stock: 18,
        opSysId: 2,
        ramId: 2,
        image: "https://placehold.co/350x500?text=Samsung%20Galaxy%20Tab%20S11"
    },
    {
        id: 15,
        categoryId: 2,
        brandId: 3,
        colorIds: [2, 3],
        name: "Xiaomi Pad 8",
        price: 249000,
        discount: 10,
        stock: 20,
        opSysId: 2,
        ramId: 1,
        image: "https://placehold.co/350x500?text=Xiaomi%20Pad%208"
    },
    {
        id: 16,
        categoryId: 3,
        brandId: 8,
        colorIds: [3],
        name: "Baseus 65W Charger",
        price: 19000,
        discount: 0,
        stock: 60,
        opSysId: null,
        ramId: null,
        image: "https://placehold.co/350x500?text=Baseus%2065W%20Charger"
    },
    {
        id: 17,
        categoryId: 3,
        brandId: 9,
        colorIds: [2],
        name: "Spigen Ultra Hybrid Case iPhone 17",
        price: 15000,
        discount: 5,
        stock: 70,
        opSysId: null,
        ramId: null,
        image: "https://placehold.co/350x500?text=Spigen%20Ultra%20Hybrid%20Case%20iPhone%2017"
    },
    {
        id: 18,
        categoryId: 3,
        brandId: 10,
        colorIds: [2, 3],
        name: "Anker PowerCore 20K Powerbank",
        price: 29000,
        discount: 8,
        stock: 45,
        opSysId: null,
        ramId: null,
        image: "https://placehold.co/350x500?text=Anker%20PowerCore%2020K%20Powerbank"
    }
];

// Helper ֆունկցիաներ
const getCategory = id => categories.find(c => c.id === id);
const getBrand = id => brands.find(b => b.id === id);
const getOs = id => operationSystems.find(o => o.id === id);
const getRam = id => ram.find(r => r.id === id);
const getColors = ids => colors.filter(c => Array.isArray(ids) && ids.includes(c.id));

const formatPrice = num =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const getFinalPrice = product =>
    Math.round(product.price * (1 - (product.discount || 0) / 100));

// Cart helpers (localStorage)
const CART_KEY = "mobileStoreCart";

function loadCart() {
    try {
        const raw = localStorage.getItem(CART_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCartItemsCount(cart) {
    return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal(cart) {
    return cart.reduce((sum, item) => {
        const p = products.find(pr => pr.id === item.productId);
        if (!p) return sum;
        return sum + getFinalPrice(p) * item.qty;
    }, 0);
}
