import express from 'express'
import * as UsuariosController from '../controller/usuarios.controller.js'
import { usuarioValido } from '../../middleware/validaciones.middleware.js'

const route = express.Router()

route.route('/api/usuarios')
    .get(UsuariosController.traerUsuarios)
    .post([usuarioValido], UsuariosController.registrarUsuario)

route.route('/api/usuarios/:id')
    .get(UsuariosController.traerUsuarioPorId)
    .patch([usuarioValido], UsuariosController.editarUsuario)
    .delete(UsuariosController.eliminarUsuario)



export default route