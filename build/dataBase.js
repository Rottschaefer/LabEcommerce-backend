"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
const types_1 = require("./types");
exports.users = [
    {
        id: "hjmhjg",
        email: "gugu@gmail.com",
        password: "123456",
    },
    {
        id: "tichs",
        email: "rotts@gmail.com",
        password: "654321",
    }
];
exports.products = [
    {
        id: "iuhnc",
        name: "blusa",
        price: 27,
        category: types_1.CATEGORY.ACCESSORIES
    },
    {
        id: "rhkc",
        name: "calça",
        price: 30,
        category: types_1.CATEGORY.ELECTRONICS
    }
];
exports.purchases = [
    {
        userId: "hjmhjg",
        productId: "rhkc",
        quantity: 2,
        totalPrice: 60
    },
    {
        userId: "tichs",
        productId: "iuhnc",
        quantity: 3,
        totalPrice: 81
    }
];
//# sourceMappingURL=dataBase.js.map