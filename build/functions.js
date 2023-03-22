"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = void 0;
const dataBase_1 = require("./dataBase");
const createUser = (id, email, password) => {
    dataBase_1.users.push({
        id,
        email,
        password
    });
    return (console.log("Cadastro realizado com sucesso!", dataBase_1.users));
};
exports.createUser = createUser;
const getAllUsers = () => {
    return (console.log(dataBase_1.users));
};
exports.getAllUsers = getAllUsers;
const createProduct = (id, name, price, category) => {
    dataBase_1.products.push({
        id,
        name,
        price,
        category
    });
    return (console.log("Produto criado com sucesso!", dataBase_1.products));
};
exports.createProduct = createProduct;
const getAllProducts = () => {
    return (console.log(dataBase_1.products));
};
exports.getAllProducts = getAllProducts;
const getProductById = (id) => {
    const product = dataBase_1.products.filter((product) => product.id === id);
    return (console.log(product));
};
exports.getProductById = getProductById;
const queryProductsByName = (q) => {
    const product = dataBase_1.products.filter((product) => product.name.includes(q));
    return (console.log(product));
};
exports.queryProductsByName = queryProductsByName;
const createPurchase = (userId, productId, quantity, totalPrice) => {
    dataBase_1.purchases.push({
        userId,
        productId,
        quantity,
        totalPrice
    });
    return (console.log("Compra realizada com sucesso", dataBase_1.purchases));
};
exports.createPurchase = createPurchase;
const getAllPurchasesFromUserId = (userId) => {
    const userPurchases = dataBase_1.purchases.filter((purchase) => purchase.userId === userId);
    return (console.log(userPurchases));
};
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=functions.js.map