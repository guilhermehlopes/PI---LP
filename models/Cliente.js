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

export const getAll = () => {
    return dbCliente
}

export const dbCliente = [
    new Cliente(1,"Guilherme","guilherme.ghlopes@gmail.com","1050482313031","123456",'ruaxx'),
    new Cliente(2,"Gustavo","gustavo.queiroz3@fatec.sp.gov.br","1050481923053","987654",'ruayy')

]