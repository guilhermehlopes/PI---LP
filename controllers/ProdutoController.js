import { findAll, Produto } from "../models/Produto.js"

class ProdutoController {
    static list(req,res){
        res.json(findAll())
    }

    static getProdutoById(req,res){
        const id = parseInt(req.params.id)
        const Produto = findByPk(id)
        if(!Produto){
            res.status(404).json({error:"Não encontrado"})
            return
}

res.json(Produto)

    }
    static destroyProduto(req,res){
        const id = parseInt(req.params.id)
        const produto = findByPk(id)
        if(!produto){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        destroy(id)
        res.json({message: "Removido com sucesso!"})
    }

    static createProduto(req,res){
        const {id,descricao,preco,quantidade} = req.body // req.body.nome, req.body.email ...
        if(!id ||!descricao || !preco || !quantidade){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const produto = new Produto(0,id,descricao,preco,quantidade)
        const createProduto = create(produto)
        res.status(201).json(createProduto)
    }
    
    static updateProduto(req,res){
        const idproduto = parseInt(req.params.id)
        const produto = findByPk(idproduto)
        if(!produto){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        
        const {id,descricao,preco,quantidade} = req.body // req.body.nome, req.body.email ...
        if(!id ||!descricao || !preco || !quantidade){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }
    
        produto.id = id
        produto.descricao = descricao
        produto.preco = preco
        produto.quantidade = quantidade
        produto.endereco = endereco
    
        update(idproduto,produto)
        res.json(produto)
        
    }
}

export default ProdutoController