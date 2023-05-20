import Fornecedor from "../models/Fornecedor.js"

class FornecedorController {
    static async list(req,res){
        const fornecedores = await Fornecedor.findAll()
        res.json(fornecedores)
    }

    static async getFornecedorById(req,res){
        const id = parseInt(req.params.id)
        const fornecedor = await Fornecedor.findByPk(id)

        if(!fornecedor){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        
        res.json(fornecedor)
    }

    static async destroyFornecedor(req,res){
        const id = parseInt(req.params.id)
        const fornecedor = await Fornecedor.findByPk(id)
        if(!fornecedor){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        await Fornecedor.destroy({where: {id: fornecedor.id}})
        res.json({message: "Removido com sucesso!"})
    }    

    static async createFornecedor(req,res){
        const {nome,email,telefone,endereco} = req.body // req.body.nome, req.body.email ...
        if(!nome || !email || !telefone || !endereco){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const createdFornecedor = await Fornecedor.create({nome,email,telefone,endereco}) //req.body
        res.status(201).json(createdFornecedor)
    }

    static async updateFornecedor(req,res){
        const id = parseInt(req.params.id)
        const fornecedor = await Fornecedor.findByPk(id)
        if(!fornecedor){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        
        const {nome,email,telefone,endereco} = req.body // req.body.nome, req.body.email ...
        if(!nome || !email || !telefone || !endereco){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const updatedFornecedor = await Fornecedor.update({nome,email,telefone,endereco},{where: {id: fornecedor.id}})
        res.json(updatedFornecedor)
    }
}

export default FornecedorController