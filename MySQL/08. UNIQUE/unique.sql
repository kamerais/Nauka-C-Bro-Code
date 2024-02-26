CREATE TABLE products(
    product_id INT,
    product_name VARCHAR(25) UNIQUE, # sprawia, że element może występować tylko raz
    price DECIMAL(4, 2)
);
ALTER TABLE products
ADD CONSTRAINT
UNIQUE(product_name);
SELECT * FROM products;
INSERT INTO products
VALUES  (100, "hamburger", 3.99),
        (101,"fries", 1.89),
        (102,"soda", 1.00),
        (103,"ice cream", 1.49);
