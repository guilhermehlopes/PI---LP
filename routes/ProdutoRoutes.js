import express from 'express'
import ProdutoController from '../controllers/ProdutoController.js'

const ProdutoRouter = express.Router()

ProdutoRouter.get('/',ProdutoController.list)
//ProdutoRouter.post()
//ProdutoRouter.delete()
ProdutoRouter.get('/:id/:descricao',ProdutoController.find)
//ProdutoRouter.delete()
// localhost:3000/produto/1/Bolinha
export default ProdutoRouter