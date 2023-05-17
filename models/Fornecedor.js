export class Fornecedor {
constructor(id,nome,email,telefone,endereco){
    this.id = id
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.endereco = endereco
}
}

export const update = (id, fornecedor) => {
    const fornecedorToUpdate = findByPk(id)
    if(!fornecedorToUpdate) {
        return false
    }

    const index = dbFornecedor.indexOf(fornecedorToUpdate)
    dbFornecedor[index] = fornecedor
    return true
}

export const destroy = (id) => {
    const fornecedor = findByPk(id)
    if(!fornecedor) {
        return false
    }
    const index = dbFornecedor.indexOf(fornecedor)
    dbFornecedor.splice(index, 1)
    return true
}

export const findByPk = (id) => {
    return dbFornecedor.find(fornecedor => fornecedor.id === id)
}

export const create = (fornecedor) => {
    fornecedor.id = dbFornecedor.length + 1
    dbFornecedor.push(fornecedor)
}

export const findAll = () => {
    return dbFornecedor
}
 
export const dbFornecedor = [
    new Fornecedor(1,"Empresa 1","empresa1@gmail.com","1050482313031",'ruaxx'),
    new Fornecedor(2,"Empresa 2","empresa2@fatec.sp.gov.br","1050481923053",'ruayy')

]