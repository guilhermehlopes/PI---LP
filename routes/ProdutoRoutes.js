import express from 'express'
import ProdutoController from '../controllers/ProdutoController.js'

const ProdutoRouter = express.Router()

ProdutoRouter.get('/:id/:nome',ProdutoController.find)
//ProdutoRouter.post()
//ProdutoRouter.delete()
ProdutoRouter

ProdutoRouter.get('/',ProdutoController.list)
//ProdutoRouter.delete()
// localhost:3000/produto/1/Produto1
ProdutoRouter.post('/',ProdutoController.createProduto)
ProdutoRouter.get('/:id',ProdutoController.getProdutoById)
ProdutoRouter.delete('/:id',ProdutoController.destroyProduto)
ProdutoRouter.put('/:id',ProdutoController.updateProduto)

export default ProdutoRouter