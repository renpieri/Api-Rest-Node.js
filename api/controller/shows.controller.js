import * as ShowsServices from '../../services/shows.services.js'



//TRAER SHOWS
function traerShows(req, res){
    ShowsServices.shows()
    .then((shows)=>{
        res.status(200).json(shows)
    })
    .catch(()=>{
        res.status(400).json({mensaje: 'No se pudo traer los shows'})
    })
}



//TRAER SHOW POR ID
function traerShowPorId(req, res){
    const id = req.params.id

    ShowsServices.showPorId(id)
    .then((show)=>{
        res.status(200).json(show)
    })
    .catch(()=>{
        res.status(400).json({mensaje: 'No se pudo traer el show'})
    })
}



//CARGAR SHOW A LA BASE
function cargarShow(req, res){

    ShowsServices.cargar(req.body)
    .then((nuevoShow)=>{
        res.status(200).json(nuevoShow)
    })
    .catch(()=>{
        res.status(400).json({mensaje: 'No se pudo cargar el show a la base'})
    })
}



//EDITAR SHOW
function editarShow(req, res){
    const id = req.params.id

    ShowsServices.editar(id, req.body)
    .then(()=>{
        res.status(200).json({mensaje: 'El show se editó correctamente'})
    })
    .catch(()=>{
        res.status(400).json({mensaje: 'No se pudo editar el show'})
    })
}



//ELIMINAR SHOW
function eliminarShow(req, res){
    const id = req.params.id

    ShowsServices.eliminar(id)
    .then((show)=>{
        res.status(200).json(show)
    })
    .catch(()=>{
        res.status(400).json({mensaje: 'No se pudo eliminar el show'})
    })
}



export {
    traerShows,
    traerShowPorId,
    cargarShow,
    editarShow,
    eliminarShow,
}