import { getAll } from "../models/Fornecedor.js"

class FornecedorController {
    static list(req,res){
        res.json(getAll())
    }

    static find(req,res){
        res.json(req.param)
    }
}

export default FornecedorController