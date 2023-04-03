CREATE TABLE users(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL 
);

SELECT*FROM users;

INSERT INTO users (id, email, password)
VALUES(01, "rottschaefer54@gmail.com", "123456");

INSERT INTO users (id, email, password)
VALUES(02, "renan@gmail.com", "252525");

INSERT INTO users (id, email, password)
VALUES(03, "luisa@hotmail.com", "123456");

CREATE TABLE products(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

SELECT*FROM products;

INSERT INTO products(id, name, price, category)
VALUES(01, "calça jeans", 60, "calças");

INSERT INTO products(id, name, price, category)
VALUES(02, "regata", 45, "blusas");

INSERT INTO products(id, name, price, category)
VALUES(03, "boné supreme", 7000, "para trouxas");