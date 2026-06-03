CREATE TABLE IF NOT EXISTS "users"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    role_id INT,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(100),
    password VARCHAR(255),
    event_id INT,
    inscription DATE,
    last_conexion DATE,
    UNIQUE (email),
    UNIQUE (phone)
);


CREATE TABLE IF NOT EXISTS "role"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label VARCHAR(100)
);


CREATE TABLE IF NOT EXISTS "event"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(100),
    date DATE,
    description VARCHAR(255),
    location VARCHAR(255),
    UNIQUE (title)
);


CREATE TABLE IF NOT EXISTS "orders"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT,
    totalExclTax INT,
    status VARCHAR(255),
    number INT
);


CREATE TABLE IF NOT EXISTS "order_item"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    unit_price INT
);


CREATE TABLE IF NOT EXISTS "review"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT,
    product_id INT,
    rating INT,
    comment VARCHAR(255),
    date DATE
);


CREATE TABLE IF NOT EXISTS "basket"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT
);


CREATE TABLE IF NOT EXISTS "basket_item"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    product_id INT,
    basket_id INT,
    quantity INT
);


CREATE TABLE IF NOT EXISTS "favorite_product"(
    id INT,
    product_id INT
);


CREATE TABLE IF NOT EXISTS "favorite_producer"(
    id INT,
    producer_id INT
);


CREATE TABLE IF NOT EXISTS "producer"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT,
    siret VARCHAR(100),
    presentation VARCHAR(255),
    compagnyName VARCHAR(255),
    event_id INT,
    UNIQUE (siret)
);


CREATE TABLE IF NOT EXISTS "admin"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    password VARCHAR(255),
    user_id INT
);


CREATE TABLE IF NOT EXISTS "product"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    price MONEY,
    image VARCHAR(255),
    producer_id INT,
    category_id INT,
    subcategory_id INT,
    UNIQUE (image)
);


CREATE TABLE IF NOT EXISTS "category"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label VARCHAR(100)
);


CREATE TABLE IF NOT EXISTS "subcategory"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_category INT,
    label VARCHAR(100)
);
