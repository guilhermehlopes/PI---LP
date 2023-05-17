import { Cliente, create, destroy, findAll, findByPk, update } from "../models/Cliente.js"

class ClienteController {
    static list(req,res){
        res.json(findAll())

    }

        static getClienteById(req,res){
            const id = parseInt(req.params.id)
            const cliente = findByPk(id)
            if(!cliente){
                res.status(404).json({error:"Não encontrado"})
                return
    }

    res.json(cliente)

        }

static destroyCliente(req,res){
    const id = parseInt(req.params.id)
    const cliente = findByPk(id)
    if(!cliente){
        res.status(404).json({error:"Não encontrado"})
        return
    }
    destroy(id)
    res.json({message: "Removido com sucesso!"})
}

    static createCliente(req,res){
        const {id,nome,email,telefone,senha,endereco} = req.body // req.body.nome, req.body.email ...
        if(!id || !nome || !email || !telefone || !senha || !endereco){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const cliente = new Cliente(0,nome,email,telefone)
        const createdCliente = create(cliente)
        res.status(201).json(createdCliente)
    }
    

static updateCliente(req,res){
    const idcliente = parseInt(req.params.id)
    const cliente = findByPk(idcliente)
    if(!cliente){
        res.status(404).json({error:"Não encontrado"})
        return
    }
    
    const {id,nome,email,telefone,senha,endereco} = req.body // req.body.nome, req.body.email ...
    if(!id || !nome || !email || !telefone || !senha || !endereco){
        res.status(400).json({error: "Informe todos os campos!"})
        return
    }

    cliente.id = id
    cliente.nome = nome
    cliente.email = email
    cliente.telefone = telefone
    cliente.senha = senha
    cliente.endereco = endereco

    update(idcliente,cliente)
    res.json(cliente)
    
}
}



export default ClienteController