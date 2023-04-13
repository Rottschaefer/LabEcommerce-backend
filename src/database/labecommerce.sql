CREATE TABLE
    users(
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TEXT DEFAULT(DATETIME()) NOT NULL
    );

    -- DROP TABLE users;


INSERT INTO
    users (id, name, email, password)
VALUES
(
        "u001",
        "Eduardo",
        "rottschaefer54@gmail.com",
        "123456"
    ),
    (
        "u002",
        "Renan",
        "renan@gmail.com",
        "252525"
    ),
    (
        "u003",
        "Luisa",
        "luisa@hotmail.com",
        "123456"
    );

    SELECT*FROM users;



CREATE TABLE
    products(
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        description TEXT NOT NULL,
        imageUrl TEXT NOT NULL
    );

SELECT*FROM products;

INSERT INTO
    products(id, name, price, description, imageUrl)
VALUES
("prod001","Monitor OLED", 1000, "Lindo Monitor OLED com 400 nits", "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw3423dw/monitor-alienware-aw3423dw-pdp-hero.psd?qlt=95&fit=constrain,1&hei=3470&wid=5000&fmt=jpg"),
("prod002","Mouse Gamer", 200, "Mouse Gamer com ultra sensibilidade", "https://m.media-amazon.com/images/I/61h97PFnuPL._AC_SY450_.jpg"),
("prod003","Cooler RGB", 500, "O Cooler mais bonito do Brasil!", "https://down-br.img.susercontent.com/file/42412d63d4f51156ad518ad4f568a737_tn");

CREATE TABLE
    purchases(
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        buyer TEXT NOT NULL,
        total_price INTEGER NOT NULL,
        FOREIGN KEY (buyer) REFERENCES users(id)
    );

INSERT INTO purchases(id, buyer, total_price)
VALUES("pur001","u001", 400),("pur002","u002", 700),("pur003","u003", 1050) ;


CREATE TABLE
    purchases_products(
        purchase_id TEXT NOT NULL,
        product_id TEXT NOT NULL,
        quantity REAL NOT NULL,
        Foreign Key (purchase_id) REFERENCES purchases(id),
        Foreign Key (product_id) REFERENCES products(id)
    );


INSERT INTO purchases_products(purchase_id, product_id, quantity)
VALUES("pur001","prod001", 2), ("pur001","prod002", 1), ("pur001","prod003", 2), ("pur002","prod001", 3), ("pur003","prod002", 5);

SELECT * FROm purchases_products;






    