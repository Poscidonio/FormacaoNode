CREATE TABLE usuarios(
	nome VARCHAR(50),
	email VARCHAR(100),
	idade INT
);

INSERT INTO usuarios(nome,email, idade) VALUES (
"GUILHERME AUGUSTO",
"GUILHERME@GMAIL.COM",
27
);
INSERT INTO usuarios(nome,email, idade) VALUES (
"JOAO",
"JOAO@GMAIL.COM",
99
);
INSERT INTO usuarios(idade, email, nome) VALUES (
99,
"MARIA@GMAIL.COM",
"MARIA"
);

DELETE FROM usuarios WHERE nome = "GUILHERME AUGUSTO";

UPDATE usuarios SET nome = "GUILHERME AUGUSTO" WHERE nome = "JOAO";