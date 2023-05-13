import express from 'express'
import ClienteController from '../controllers/ClienteController.js'

const ClienteRouter = express.Router()


ClienteRouter.get('/:id/:nome',ClienteController.find)
//ClienteRouter.delete()
// localhost:3000/cliente/1/Guilherme
ClienteRouter

ClienteRouter.get('/',ClienteController.list)
//ClienteRouter.post()
//ClienteRouter.delete()
ClienteRouter.post('/',ClienteController.createCliente)
ClienteRouter.get('/:id',ClienteController.getClienteById)
ClienteRouter.delete('/:id',ClienteController.destroyCliente)
ClienteRouter.put('/:id',ClienteController.updateCliente)

export default ClienteRouter