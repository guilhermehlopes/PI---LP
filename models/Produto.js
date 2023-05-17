export class Produto {
constructor(id,descricao,preco,quantidade){
    this.id = id
    this.descricao = descricao
    this.preco = preco
    this.quantidade = quantidade
}
}
export const update = (id, produto) => {
    const produtoToUpdate = findByPk(id)
    if(!produtoToUpdate) {
        return false
    }

    const index = dbProduto.indexOf(produtoToUpdate)
    dbProduto[index] = produto
    return true
}

export const destroy = (id) => {
    const produto = findByPk(id)
    if(!produto) {
        return false
    }
    const index = dbProduto.indexOf(produto)
    dbProduto.splice(index, 1)
    return true
}

export const findByPk = (id) => {
    return dbProduto.find(produto => produto.id === id)
}

export const create = (produto) => {
    produto.id = dbProduto.length + 1
    dbProduto.push(produto)
}

export const findAll = () => {
    return dbProduto
}
 

export const dbProduto = [
    new Produto(1,"Produto 1", 3 , 100),
    new Produto(2,"Produto 2", 2, 200)

]