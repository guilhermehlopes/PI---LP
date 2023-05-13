export class Fornecedor {
constructor(id,nome,email,telefone,endereco){
    this.id = id
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.endereco = endereco
}
}

export const getAll = () => {
    return dbFornecedor
}

export const dbFornecedor = [
    new Fornecedor(1,"Empresa1","empresa.1@gmail.com","199999999","ruazz"),
    new Fornecedor(2,"Empresa2","empresa.1@gmail.com","199988888","ruajj")

]