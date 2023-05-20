import express from 'express'
import FornecedorController from '../controllers/FornecedorController.js'

const FornecedorRouter = express.Router()

FornecedorRouter.get('/',FornecedorController.list)
FornecedorRouter.post('/',FornecedorController.createFornecedor)
FornecedorRouter.get('/:id',FornecedorController.getFornecedorById)
FornecedorRouter.delete('/:id',FornecedorController.destroyFornecedor)
FornecedorRouter.put('/:id',FornecedorController.updateFornecedor)


export default FornecedorRouter