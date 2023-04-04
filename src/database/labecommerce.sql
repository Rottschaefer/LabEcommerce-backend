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

--Aprofundamento SQL

--retorna todos os usuários cadastrados

SELECT * FROM users;

--retorna todos os produtos cadastrados

SELECT * FROM products;

--crie um termo de busca, por exemplo "monitor"

DECLARE @busca TEXT = 'monitor'; -- Definindo a variável 

SELECT * FROM products
WHERE name LIKE '%monitor%';

--crie um novo usuário
--insere o item mockado na tabela users

INSERT INTO users(id, email, password)
VALUES(04, "guigui@gmail.com", "212121"); 


--crie um novo produto
--insere o item mockado na tabela products

INSERT INTO products(id, name, price, category)
VALUES(06, "Gravata", 100, "Acessórios para Ternos");


--busca de produtos por id

SELECT * FROM products
WHERE id = 6;

--deleção de user por id

DELETE FROM users
WHERE id = 01;

SELECT * FROM users;

--deleção de produto por id

DELETE FROM products
WHERE id = 01;

SELECT * FROM products;

--edição de user por id

UPDATE users
SET password = "Atualizado"
WHERE id = 2;

--edição de produto por id

UPDATE products
SET name = "Atualizado"
WHERE id = 2;


SELECT * FROM users
ORDER BY email DESC;

SELECT * FROM products
ORDER BY price DESC
LIMIT 20
OFFSET 0;

SELECT * FROM products
WHERE price > 100 AND price < 300
ORDER BY price ASC;