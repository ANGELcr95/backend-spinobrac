CREATE DATABASE IF NOT EXISTS taskdb

USE taskdb;

CREATE TABLE IF NOT EXISTS activities(
    id INT NOT NULL AUTO_INCREMENT,
    operativo VARCHAR(100) NOT NULL,
    description TEXT,
    date DATETIME,
    file_operativo VARCHAR(500),
    document_operativo INT,
    administrativo VARCHAR(100),
    file_admin VARCHAR(500),
    document_admin INT,
    done BIT(1),
    PRIMARY KEY (id)
);


INSERT INTO activities (operativo,
description,
date,
file_operativo,
document_oper,
administrativo,
file_admin,
document_admin,
done) VALUES 
    ('Seguro', 
    'Guantes mal puestos', 
    null,
    null,
    321159738, 
    'Miguel Carlos',
    'http://192.168.10.13:3000/static/img/resize-image1664319772226.jpg', 
    12345678, 
    0);

--  esto no se ejecuta automaticamnete solo sirve para poder crear en la consola  del mysql 
--  bien sea por terminal o interfaz como XAMP y tambien queda documentado en el code