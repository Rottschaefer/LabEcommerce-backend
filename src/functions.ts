import { products, purchases, users } from "./dataBase"
import { CATEGORY } from "./types"

 export const createUser = (id: string, email:string, password: string) => {
    users.push({
        id,
        email,
        password
    })
    return(console.log("Cadastro realizado com sucesso!", users))
 }

 export const getAllUsers = () => {
    return(console.log(users))
 }

 export const createProduct = (id: string, name:string, price: number, category: CATEGORY) => {
    products.push({
        id,
        name,
        price,
        category
    })
    return(console.log("Produto criado com sucesso!", products))
 }

 export const getAllProducts = () => {
    return(console.log(products))
 }

 export const getProductById = (id: string) => {
    const product = products.filter((product)=> product.id === id)
    return(console.log(product))
 }

 export const queryProductsByName = (q: string) => {
    const product = products.filter((product)=> product.name.includes(q))
    return(console.log(product))
 }

 export const createPurchase  = (userId: string, productId: string, quantity: number, totalPrice: number) => {
    purchases.push({
        userId,
        productId,
        quantity,
        totalPrice
    })
    return(console.log("Compra realizada com sucesso", purchases))
 }

 export const getAllPurchasesFromUserId   = (userId: string) => {
    const userPurchases = purchases.filter((purchase)=> purchase.userId === userId)
    return(console.log(userPurchases))
 }
