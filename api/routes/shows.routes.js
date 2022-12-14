import express from 'express'
import * as ShowsController from '../controller/shows.controller.js'
import { showValido } from '../../middleware/validaciones.middleware.js'

const route = express.Router()

route.route('/api/shows')
    .get(ShowsController.traerShows)
    .post([showValido], ShowsController.cargarShow)

route.route('/api/shows/:id')
    .get(ShowsController.traerShowPorId)
    .patch([showValido], ShowsController.editarShow)
    .delete(ShowsController.eliminarShow)



export default route