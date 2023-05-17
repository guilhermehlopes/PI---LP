import { Fornecedor, findAll } from "../models/Fornecedor.js"

class FornecedorController {
    static list(req,res){
        res.json(findAll())
    }

    static getFornecedorById(req,res){
        const id = parseInt(req.params.id)
        const fornecedor = findByPk(id)
        if(!fornecedor){
            res.status(404).json({error:"Não encontrado"})
            return
}

res.json(fornecedor)

    }

    static destroyFornecedor(req,res){
        const id = parseInt(req.params.id)
        const fornecedor = findByPk(id)
        if(!fornecedor){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        destroy(id)
        res.json({message: "Removido com sucesso!"})
    }

    static createFornecedor(req,res){
        const {id,nome,email,telefone,endereco} = req.body // req.body.nome, req.body.email ...
        if(!id ||!nome || !email || !telefone || !endereco){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const fornecedor = new Fornecedor(0,id,nome,email,telefone,endereco)
        const createFornecedor = create(fornecedor)
        res.status(201).json(createFornecedor)
    }
    
    static updateFornecedor(req,res){
        const idfornecedor = parseInt(req.params.id)
        const fornecedor = findByPk(idfornecedor)
        if(!fornecedor){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        
        const {id,nome,email,telefone,endereco} = req.body // req.body.nome, req.body.email ...
        if(!id ||!nome || !email || !telefone || !endereco){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }
    
        fornecedor.id = id
        fornecedor.nome = nome
        fornecedor.email = email
        fornecedor.telefone = telefone
        fornecedor.endereco = endereco
    
        update(idfornecedor,fornecedor)
        res.json(fornecedor)
        
    }
}

export default FornecedorController