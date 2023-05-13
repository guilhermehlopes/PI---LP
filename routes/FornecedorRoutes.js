import express from 'express'
import FornecedorController from '../controllers/FornecedorController.js'

const FornecedorRouter = express.Router()

FornecedorRouter.get('/',FornecedorController.list)
//FornecedorRouter.post()
//FornecedorRouter.delete()
FornecedorRouter.get('/:id/:nome',FornecedorController.find)
//FornecedorRouter.delete()
// localhost:3000/fornecedor/1/Empresa1
export default FornecedorRouter