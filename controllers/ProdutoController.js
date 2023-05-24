import Produto from "../models/Produto.js"

class ProdutoController {
    static async list(req,res){
        const produtos = await Produto.findAll()
        res.json(produtos)
    }

    static async getProdutoById(req,res){
        const id = parseInt(req.params.id)
        const produto = await Produto.findByPk(id)

        if(!produto){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        
        res.json(produto)
    }

    static async destroyProduto(req,res){
        const id = parseInt(req.params.id)
        const produto = await Produto.findByPk(id)
        if(!produto){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        await Produto.destroy({where: {id: produto.id}})
        res.json({message: "Removido com sucesso!"})
    }    

    static async createProduto(req,res){
        const {descricao,preco,quantidade} = req.body // req.body.nome, req.body.email ...
        if(!descricao || !preco || !quantidade){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const createdProduto = await Produto.create({descricao,preco,quantidade}) //req.body
        res.status(201).json(createdProduto)
    }
    

    static async updateProduto(req,res){
        const id = parseInt(req.params.id)
        const produto = await Produto.findByPk(id)
        if(!produto){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        
        const {descricao,preco,quantidade} = req.body // req.body.nome, req.body.email ...
        if(!descricao || !preco || !quantidade){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const updatedProduto = await Produto.update({descricao,preco,quantidade},{where: {id: produto.id}})
        res.json(updatedProduto)

    }
}
    
export default ProdutoController