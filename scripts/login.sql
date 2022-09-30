CREATE TABLE IF NOT EXISTS login(
    id INT NOT NULL AUTO_INCREMENT,
    document_number INT,
    password LONGTEXT NOT NULL,
    name VARCHAR(100) NOT NULL,
    file LONGTEXT,
    PRIMARY KEY (id)
);


INSERT INTO login (document_number,password, name, file) VALUES 
    (107624748, 23244,'Miguel Angel Camacho Ramirez',null),
    (123456789, HWERWER,'Karen Viviana Polanco Mayorga',null);

--  esto no se ejecuta automaticamnete solo sirve para poder crear en la consola  del mysql 
--  bien sea por terminal o interfaz como XAMP y tambien queda documentado en el code