export class Cliente {
constructor(id,nome,email,telefone,senha,endereco){
    this.id = id
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.senha = senha
    this.endereco = endereco
}
}
export const update = (id, cliente) => {
    const clienteToUpdate = findByPk(id)
    if(!clienteToUpdate) {
        return false
    }

    const index = dbCliente.indexOf(contatoToUpdate)
    dbCliente[index] = cliente
    return true
}

export const destroy = (id) => {
    const cliente = findByPk(id)
    if(!cliente) {
        return false
    }
    const index = dbCliente.indexOf(cliente)
    dbCliente.splice(index, 1)
    return true
}

export const findByPk = (id) => {
    return dbCliente.find(cliente => cliente.id === id)
}

export const create = (cliente) => {
    cliente.id = dbCliente.length + 1
    dbCliente.push(cliente)
}

export const findAll = () => {
    return dbCliente
}
 


export const dbCliente = [
    new Cliente(1,"Guilherme","guilherme.ghlopes@gmail.com","1050482313031","123456",'ruaxx'),
    new Cliente(2,"Gustavo","gustavo.queiroz3@fatec.sp.gov.br","1050481923053","987654",'ruayy')

]