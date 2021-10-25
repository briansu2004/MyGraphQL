DROP TABLE IF EXISTS authors;

DROP TABLE IF EXISTS books;

CREATE TABLE IF NOT EXISTS books (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    pages INT,
    category VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS authors (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    age INT,
    book_id VARCHAR(255) UNIQUE NOT NULL,

    CONSTRAINT book_author_fk FOREIGN KEY(book_id) REFERENCES books(id)
);

