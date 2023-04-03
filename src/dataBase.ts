import { TUser, TProduct, TPurchase, CATEGORY } from "./types"

export const users: TUser[] = [
    {
    id: "u001",
    email: "gugu@gmail.com",
    password: "123456",
},
{
    id: "u002",
    email: "rotts@gmail.com",
    password: "654321",
}
]

export const products: TProduct[] = [
    {
    id: "p001",
    name: "blusa",
    price: 27,
    category: CATEGORY.ACCESSORIES
},
{
    id: "p002",
    name: "calça",
    price: 30,
    category: CATEGORY.ELECTRONICS
}
]

export const purchases: TPurchase[] = [
    {
        userId: "u001",
        productId: "p001",
        quantity: 2,
        totalPrice: 60
},
{
    userId: "u001",
    productId: "p001",
    quantity: 3,
    totalPrice: 81
},
{
    userId: "u002",
    productId: "p002",
    quantity: 3,
    totalPrice: 81
}
]

