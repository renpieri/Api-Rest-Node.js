import * as UsuariosServices from '../../services/usuarios.services.js'


//TRAER USUARIOS
function traerUsuarios(req, res){
    UsuariosServices.usuarios()
    .then((usuarios)=>{
        res.status(200).json(usuarios)
    })
    .catch(()=>{
        res.status(400).json({mensaje: 'No se pudo traer los usuarios'})
    })
}



//TRAER USUARIO POR ID
function traerUsuarioPorId(req, res){
    const id = req.params.id

    UsuariosServices.usuarioPorId(id)
    .then((usuario)=>{
        res.status(200).json(usuario)
    })
    .catch(()=>{
        res.status(400).json({mensaje: 'No se pudo traer el usuario'})
    })
}



//CARGAR USUARIO A LA BASE
function registrarUsuario(req, res){

    UsuariosServices.registrar(req.body)
    .then((nuevoUsuario)=>{
        res.status(200).json(nuevoUsuario)
    })
    .catch((err)=>{
        res.status(500).json({message: err.message})
    })
}



//EDITAR USUARIO
function editarUsuario(req, res){
    const id = req.params.id

    UsuariosServices.editar(id, req.body)
    .then(()=>{
        res.status(200).json({mensaje: 'El usuario se editó correctamente'})
    })
    .catch((err)=>{
        res.status(400).json({mensaje: 'Parece que ocurrio un error, no se pudo editar el usuario.'})
    })
}



//ELIMINAR USUARIO
function eliminarUsuario(req, res){
    const id = req.params.id

    UsuariosServices.eliminar(id)
    .then((usuario)=>{
        res.status(200).json(usuario)
    })
    .catch(()=>{
        res.status(400).json({mensaje: 'No se pudo eliminar el usuario'})
    })
}

    

export {
    traerUsuarios,
    traerUsuarioPorId,
    registrarUsuario,
    editarUsuario,
    eliminarUsuario,
}