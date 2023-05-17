import express from 'express'
import FornecedorController from '../controllers/FornecedorController.js'

const FornecedorRouter = express.Router()

FornecedorRouter.get('/:id/:nome',FornecedorController.find)
//FornecedorRouter.post()
//FornecedorRouter.delete()
FornecedorRouter

FornecedorRouter.get('/',FornecedorController.list)
//FornecedorRouter.delete()
// localhost:3000/fornecedor/1/Empresa1
FornecedorRouter.post('/',FornecedorController.createFornecedor)
FornecedorRouter.get('/:id',FornecedorController.getFornecedorById)
FornecedorRouter.delete('/:id',FornecedorController.destroyFornecedor)
FornecedorRouter.put('/:id',FornecedorController.updateFornecedor)


export default FornecedorRouter