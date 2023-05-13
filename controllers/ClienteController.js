import { Cliente, create, destroy, getAll as findAll, findByPk, update } from "../models/Cliente.js"

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

static destroyContato(req,res){
    const id = parseInt(req.params.id)
    const contato = findByPk(id)
    if(!contato){
        res.status(404).json({error:"Não encontrado"})
        return
    }
    destroy(id)
    res.json({message: "Removido com sucesso!"})
}

    static createCliente(req,res){
        const {nome, email, telefone} = req.body // req.body.nome, req.body.email ...
        if(!nome || !email || !telefone){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const cliente = new Cliente(0,nome,email,telefone)
        const createdCliente = create(cliente)
        res.status(201).json(createdCliente)
    }
    

static updateContato(req,res){
    const id = parseInt(req.params.id)
    const cliente = findByPk(id)
    if(!cliente){
        res.status(404).json({error:"Não encontrado"})
        return
    }
    
    const {nome, email, telefone} = req.body // req.body.nome, req.body.email ...
    if(!nome || !email || !telefone){
        res.status(400).json({error: "Informe todos os campos!"})
        return
    }

    cliente.nome = nome
    cliente.email = email
    cliente.telefone = telefone

    update(id,cliente)
    res.json(cliente)
    
}
}



export default ClienteController