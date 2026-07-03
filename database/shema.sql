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

CREATE TABLE IF NOT EXISTS "users"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    role_id INT REFERENCES "role"(id),
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(100),
    password VARCHAR(255),
    image VARCHAR(255),
    event_id INT REFERENCES "event"(id),
    inscription DATE,
    last_connexion DATE,
    UNIQUE (email),
    UNIQUE (phone)
);

CREATE TABLE IF NOT EXISTS "producer"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT REFERENCES "users"(id) ON DELETE CASCADE,
    siret VARCHAR(100),
    presentation VARCHAR(255),
    "compagnyName" VARCHAR(255),
    image VARCHAR(255),
    event_id INT REFERENCES "event"(id),
    UNIQUE (siret)
);

CREATE TABLE IF NOT EXISTS "admin"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    password VARCHAR(255),
    user_id INT REFERENCES "users"(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "category"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS "subcategory"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_category INT REFERENCES "category"(id),
    label VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS "product"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    price NUMERIC(10,2),
    image VARCHAR(255),
    producer_id INT REFERENCES "producer"(id) ON DELETE CASCADE,
    category_id INT REFERENCES "category"(id),
    subcategory_id INT REFERENCES "subcategory"(id),
    sales_count INT DEFAULT 0,
    UNIQUE (image)
);

CREATE TABLE IF NOT EXISTS "orders"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT REFERENCES "users"(id) ON DELETE CASCADE,
    "totalExclTax" NUMERIC(10,2),
    status VARCHAR(255) DEFAULT 'en préparation',
    number INT,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "order_item"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    order_id INT REFERENCES "orders"(id) ON DELETE CASCADE,
    product_id INT REFERENCES "product"(id),
    quantity INT,
    unit_price NUMERIC(10,2)
);

CREATE TABLE IF NOT EXISTS "review"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT REFERENCES "users"(id) ON DELETE CASCADE,
    product_id INT REFERENCES "product"(id) ON DELETE CASCADE,
    rating INT,
    comment VARCHAR(255),
    date DATE
);

CREATE TABLE IF NOT EXISTS "basket"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT REFERENCES "users"(id) ON DELETE CASCADE,
    UNIQUE (user_id)
);

CREATE TABLE IF NOT EXISTS "basket_item"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    product_id INT REFERENCES "product"(id) ON DELETE CASCADE,
    basket_id INT REFERENCES "basket"(id) ON DELETE CASCADE,
    quantity INT,
    UNIQUE (basket_id, product_id)
);

CREATE TABLE IF NOT EXISTS "favorite_product"(
    user_id INT REFERENCES "users"(id) ON DELETE CASCADE,
    product_id INT REFERENCES "product"(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, product_id)
);

CREATE TABLE IF NOT EXISTS "favorite_producer"(
    user_id INT REFERENCES "users"(id) ON DELETE CASCADE,
    producer_id INT REFERENCES "producer"(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, producer_id)
);
