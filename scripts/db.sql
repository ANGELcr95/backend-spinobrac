CREATE DATABASE IF NOT EXISTS taskdb

USE taskdb;

CREATE TABLE IF NOT EXISTS tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);


INSERT INTO tasks (title, description, date) VALUES 
    ('task 1', 'some  description 1',2022-09-01 22:56:39),
    ('task 2', 'some  description 2', 2022-09-01 22:56:40);

--  esto no se ejecuta automaticamnete solo sirve para poder crear en la consola  del mysql 
--  bien sea por terminal o interfaz como XAMP y tambien queda documentado en el code