import { createProduct, createPurchase, createUser, getAllPurchasesFromUserId, getAllUsers, getProductById, queryProductsByName } from "./functions";
import { CATEGORY, TProduct, TPurchase, TUser } from "./types";
import express, { Request, Response } from 'express'
import cors from 'cors';
import { db } from "./database/knex";

const app = express();
app.use(express.json());
app.use(cors());


app.listen(3004, () => {
    console.log("Servidor rodando na porta 3004");
});

app.get('/users', async (req: Request, res: Response) => {
    try {
        const result = await db("users")
        .select(
            "users.id",
            "users.name",
            "users.email",
            "users.password",
            "users.created_at AS createdAt"
        )

        res.status(200).send(result)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

app.post('/users', async (req: Request, res: Response) => {
    try {
        const { id, name, email, password } = req.body

        const users = await db("users")

        const searchId = users.find((user: any)=>{return user.id === id})

        const searchEmail = users.find((user: any)=>{return user.email === email})


        if(searchId){
            res.status(400)
            throw new Error("Já existe um usuário com esse Id")
        }

        if(searchEmail){
            res.status(400)
            throw new Error("Já existe um usuário com esse email")
        }

        if (!id || !name || !email || !password) {
            res.status(400)
            throw new Error("Verifique se todos os dados estão completos")
        }

    const newUser = {
        id,
        name,
        email,
        password
    }

    await db("users").insert(newUser)

        res.status(201).send({message: "Cadastro realizado com sucesso"})
    }
    catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        }
        else {
            res.send("Erro inesperado")
        }
    }
})

app.post('/products', async (req: Request, res: Response) => {
    try {
        const { id, name, price, description, imageUrl } = req.body

        const products = await db("products")

        const searchId = products.find((product: any)=> {return product.id === id})

        if(searchId){
            res.status(400)
            throw new Error("Já existe um produto com esse Id")
        }

        if (!id || !name || !price || !description || !imageUrl) {
            res.status(400)
            throw new Error("Verifique se todos os dados estão preenchidos")
        }

        const newProduct = {
            id,
            name,
            price,
            description,
            imageUrl
        }

        await db("products").insert(newProduct)

        res.status(201).send({message: "Produto cadastrado com sucesso"})
    }
    catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        }
        else {
            res.send("Erro inesperado")
        }
    }
})

app.get('/products', async (req: Request, res: Response) => {
    try {
        const result = await db("products")

        res.status(200).send(result)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

app.get('/products/search', async (req: Request, res: Response) => {
    try {
        const q = req.query.q as string

        const products: TProduct[] = await db("products")

        const filteredProducts = products.filter((product: TProduct) => {
            return product.name.toLowerCase().includes(q.toString().toLowerCase())
        })

        if(filteredProducts.length === 0){
            res.status(400)
            throw new Error("Não existe nenhum produto com esse nome")
        }

        res.status(200).send(filteredProducts)
    }

    catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        }
        else {
            res.send("Erro inesperado")
        }
    }

})


app.put("/products/:id", async (req: Request, res: Response) => {
    try {
        const lookId = req.params.id

        const {id, name, price, description, imageUrl} = req.body

        const products = await db("products") 

        const searchId = products.filter((product) => {return product.id === id})
        const idToCome = products.filter((product) => {return product.id === lookId})


        if(searchId.length === 1 && idToCome.length > 0  && lookId !== id){
            res.status(400)
            throw new Error("Já existe um outro produto com esse Id")
        }

        if(!id && !name && !price && !description && !imageUrl){
            res.status(400)
            throw new Error("Você precisa fornecer alguma informação para atualizar o produto")
        }

        const [product] = await db("products").where({id: lookId})

        if(product){
            const uptadedProduct = {
                id: id || product.id,
                name: name || product.name,
                price: price || product.crice,
                description: description || product.description,
                imageUrl: imageUrl || product.imageUrl
            }

            await db("products").update(uptadedProduct).where({id:id})
        }
        else{
            res.status(400)
            throw new Error("'id' não encontrada")
        }

        res.status(200).send({message: "Produto atualizado com sucesso"})

    }
    catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        }
        else {
            res.send("Erro inesperado")
        }
    }
})

app.post('/purchases', async (req: Request, res: Response) => {
    try {
        const { id, buyer, total_price, products } = req.body

        if (!id || !total_price || !buyer || !products) {
            res.status(400)
            throw new Error("Verifique se todos os dados estão completos")
        }

        const newPurchase = {
            id,
            buyer,
            total_price
        }

        await db("purchases").insert(newPurchase)

        for(let i=0; i<products.length; i++){

        const newRelation = {
            purchase_id:id,
            product_id: products[i].id,
            quantity: products[i].quantity
        }

        await db("purchases_products").insert(newRelation)
        }


        res.status(201).send("Compra criada com sucesso")
    }
    catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        }
        else {
            res.send("Erro inesperado")
        }
    }
})

app.delete('/purchases/:id', async (req: Request, res: Response) => {
    try{

    const id = req.params.id

    const purchase = await db("purchases").where({id:id})

    if(purchase.length === 0){
        res.status(400)
        throw new Error("Id não encontrado")
    }

    await db("purchases_products").del().where({"purchase_id": id})

    await db("purchases").del().where({id: id})

    res.status(200).send({message: "Pedido cancelado com sucesso"})

    }
    catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        }
        else {
            res.send("Erro inesperado")
        }
    }
})

app.get("/purchases/:id", async (req: Request, res: Response) => {
    try{
   
       const id = req.params.id

       const serachPurchase = await db("purchases").where({id: id})

       if(serachPurchase.length === 0){
        res.status(400)
        throw new Error("Não existe compra com esse id.")
       }
    
   
       const [purchase] = await db("purchases")
           .select("purchases.id AS 'Id da compra'",
           "purchases.total_price AS 'Preço Total'",
           "purchases.buyer AS 'Id do comprador'",
           "users.name AS 'Nome do Comprador'", 
           "users.email AS 'Email do comprador'",
           )
           .innerJoin('users', 'purchases.buyer', '=', 'users.id')
           .where({"purchases.id": id})
           .groupBy("purchases.id")
   
           const productList = await db("purchases_products")
           .select(
            "purchases_products.product_id AS id",
            "products.name",
            "products.price",
            "products.description",
            "products.imageUrl",
            "purchases_products.quantity"
           )
           .innerJoin("products", "purchases_products.product_id", "=","products.id")
           .where({"purchases_products.purchase_id": id})
   
           const result = {...purchase, productList}
   
           res.send(result)
    }
   
   
    catch (error) {
               if (error instanceof Error) {
                   res.status(400).send(error.message)
               }
               else {
                   res.status(500).send("Erro inesperado")
               }
           }
   
   })
