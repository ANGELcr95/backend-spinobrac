USE taskdb;

CREATE TABLE IF NOT EXISTS workers(
    id INT NOT NULL AUTO_INCREMENT,
    document_number INT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);


INSERT INTO workers (document_number, name) VALUES 
    ( 1076624748, 'Miguel Angel Camacho');

--  esto no se ejecuta automaticamnete solo sirve para poder crear en la consola  del mysql 
--  bien sea por terminal o interfaz como XAMP y tambien queda documentado en el code