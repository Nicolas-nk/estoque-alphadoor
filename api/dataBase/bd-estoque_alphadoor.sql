create database bdestoque_alphadoor;
use bdestoque_alphadoor;

create table un_medida(
	cod_un_medida int primary key auto_increment,
    nome_un_medida varchar(50)
);

create table cat_produto(
	cod_categoria int primary key auto_increment,
    nome_categoria varchar(50)
);

create table fornecedor(
	cod_fornecedor bigint primary key,
    telefone varchar(20),
    email varchar(100),
    empresa varchar(100),
    responsavel varchar(100)
);

create table produto(
	cod_produto bigint primary key,
	nome_produto varchar(50),
    especificacao_produto varchar(100),
    cor varchar(25),
    estoque_min int,
    custo numeric(10,2),
    preco numeric(10,2),
    cod_un_medida int,
    cod_categoria int,
    foreign key (cod_un_medida) references un_medida(cod_un_medida),
    foreign key (cod_categoria) references cat_produto(cod_categoria)
);

create table entradas(
	cod_compra bigint primary key,
    data_compra date,
    quantidade_compra int,
    valor_compra numeric(10,2),
    custo_compra numeric(10,2),
    cod_produto bigint,
    cod_fornecedor bigint,
    foreign key (cod_produto) references produto(cod_produto),
    foreign key (cod_fornecedor) references fornecedor(cod_fornecedor)
);

create table saidas(
	cod_venda bigint primary key,
    data_venda date,
    quantidade_venda int,
    valor_venda numeric(10,2),
    custo_venda numeric(10,2),
    cod_produto bigint,
    foreign key (cod_produto) references produto(cod_produto)
);