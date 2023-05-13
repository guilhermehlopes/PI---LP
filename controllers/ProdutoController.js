import { getAll } from "../models/Produto.js"

class ProdutoController {
    static list(req,res){
        res.json(getAll())
    }

    static find(req,res){
        res.json(req.param)
    }
}

export default ProdutoController