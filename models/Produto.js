export class Produto {
constructor(id,descricao,preco,quantidade){
    this.id = id
    this.descricao = descricao
    this.preco = preco
    this.quantidade = quantidade
}
}

export const getAll = () => {
    return dbProduto
}

export const dbProduto = [
    new Produto(1,"Bolinha","R$5,00","100unid"),
    new Produto(2,"quadrado","R$10,00","1000unid")

]