import { TUser, TProduct, TPurchase, CATEGORY } from "./types"

export const users: TUser[] = [
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
]

export const products: TProduct[] = [
    {
    id: "iuhnc",
    name: "blusa",
    price: 27,
    category: CATEGORY.ACCESSORIES
},
{
    id: "rhkc",
    name: "calça",
    price: 30,
    category: CATEGORY.ELECTRONICS
}
]

export const purchases: TPurchase[] = [
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
]

