import { users, products, purchases } from "./dataBase";
import { createProduct, createPurchase, createUser, getAllPurchasesFromUserId, getAllUsers, getProductById, queryProductsByName } from "./functions";
import { CATEGORY, TProduct, TPurchase, TUser } from "./types";
import  express, { Request, Response} from 'express'
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// console.log(users, products, purchases)

// createUser("idkjnk", "buiknjm", "uybinjm")
// getAllUsers()
// createProduct("p004", "Monitor HD", 800, CATEGORY.ELECTRONICS)
// getProductById("iuhnc")
// queryProductsByName("c")
// createPurchase("u003", "p004", 2, 1600)
// getAllPurchasesFromUserId("hjmhjg")

app.listen(3004, () => {
    console.log("Servidor rodando na porta 3004");
});

app.get('/ping', (req: Request, res: Response)=>{
    res.send("pong")
})

app.get('/users', (req: Request, res: Response)=>{
    res.status(200).send(users)
} )

app.get('/products', (req: Request, res: Response)=>{
    res.status(200).send(products)
} )

app.get('/products/search', (req: Request, res: Response)=>{
    const q = req.query.q as string
    const filteredProducts = products.filter((product: TProduct)=>{
        return product.name.toLowerCase().includes(q.toString().toLowerCase())
    })
    res.status(200).send(filteredProducts)
} )


app.post('/users', (req: Request, res: Response)=>{
    const {id, email, password} = req.body

    users.push({id, email, password})

    res.status(201).send("Usuário criado com sucesso")
})

app.post('/products', (req: Request, res: Response)=>{
    const {id, name, price, category} = req.body

    products.push({id, name, price, category})

    res.status(201).send("Produto criado com sucesso")
})

app.post('/purchases', (req: Request, res: Response)=>{
    const {userId, productId, quantity, totalPrice} = req.body

    purchases.push({userId, productId, quantity, totalPrice})

    res.status(201).send("Compra criada com sucesso")
})

app.get("/products/:id", (req: Request, res: Response)=>{
    const id = req.params.id
    const searched = products.find((product: TProduct)=>product.id === id)
    res.status(200).send(searched)
})

app.get("/user/:id/purchases", (req: Request, res: Response)=>{
    const userId = req.params.id
    const userPurchases = purchases.filter((purchase: TPurchase)=>purchase.userId === userId)
    res.status(200).send(userPurchases)
})

app.delete("/users/:id", (req: Request, res: Response)=>{
    const id = req.params.id
    const toDeleteIndex = users.findIndex((user: TUser)=> user.id === id)
    users.splice(toDeleteIndex, 1)
    res.status(200).send(users)
})

app.delete("/products/:id", (req: Request, res: Response)=>{
    const id = req.params.id
    const toDeleteIndex = products.findIndex((product: TProduct)=> product.id === id)
    products.splice(toDeleteIndex, 1)
    res.status(200).send(products)
})

app.put("/users/:id", (req: Request, res: Response)=>{

    const id = req.params.id
    const email = req.body.email
    const password = req.body.password

    const index = users.findIndex((user:TUser)=>user.id === id)
    
    users[index].email = email || users[index].email
    users[index].password = password || users[index].password

    res.status(200).send(users)
})

app.put("/products/:id", (req: Request, res: Response)=>{

    const id = req.params.id
    const name = req.body.name
    const price = req.body.price
    const category = req.body.category


    const index = products.findIndex((product:TProduct)=>product.id === id)
    
    products[index].name = name || products[index].name
    products[index].price = price || products[index].price
    products[index].category = category || products[index].category


    res.status(200).send(products)
})