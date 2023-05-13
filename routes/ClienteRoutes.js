import express from 'express'
import ClienteController from '../controllers/ClienteController.js'

const ClienteRouter = express.Router()

ClienteRouter.get('/',ClienteController.list)
//ClienteRouter.post()
//ClienteRouter.delete()
ClienteRouter.get('/:id/:nome',ClienteController.find)
//ClienteRouter.delete()
// localhost:3000/cliente/1/Guilherme
export default ClienteRouter