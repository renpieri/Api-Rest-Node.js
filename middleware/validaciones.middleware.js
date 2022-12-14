import { showScheme } from '../schemes/show.scheme.js'
import { usuarioScheme } from '../schemes/usuario.scheme.js'


//SHOW
function showValido(req, res, next) {
    showScheme.validate(req.body, {abortEarly: false})
    .then((show)=> {
        req.body = show
        next()
    })
    .catch(err => {
        res.status(400).json({errors: err.errors})
    })
}

//SHOW
function usuarioValido(req, res, next) {
    usuarioScheme.validate(req.body, {abortEarly: false})
    .then((usuario)=> {
        req.body = usuario
        next()
    })
    .catch(err => {
        res.status(400).json({errors: err.errors})
    })
}


export {
    showValido,
    usuarioValido
}