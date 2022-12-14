import { MongoClient, ObjectId } from 'mongodb'
const client = new MongoClient('mongodb://127.0.0.1:27017')  

client.connect()
    .then(async()=>{
        console.log('Conectado a mongoDB')
    })



//TRAER SHOWS
async function shows(){
    return client.connect()
    .then(() =>{
       return client.db('DB_RENZO_PIERI').collection('Shows').find().toArray()
    })
}



//TRAER SHOW POR ID
async function showPorId(id){
    return client.connect()
    .then(() =>{
       return client.db('DB_RENZO_PIERI').collection('Shows').findOne({_id: new ObjectId(id)})
    })
}



//CARGAR SHOW A LA BASE
async function cargar(show){

    const nuevoShow = {
        ...show
    }

    return client.connect()
    .then(() =>{
       return client.db('DB_RENZO_PIERI').collection('Shows').insertOne(nuevoShow)
    })
    .then((result)=>{
        return nuevoShow
    })
}



//EDITAR SHOW
async function editar(id, show){
    return client.connect()
    .then(() =>{
       return client.db('DB_RENZO_PIERI').collection('Shows').updateOne({_id: new ObjectId(id)}, {$set: show})
    })
}



//ELIMINAR SHOW
async function eliminar(id){
    return client.connect()
    .then(() =>{
       return client.db('DB_RENZO_PIERI').collection('Shows').deleteOne({_id: new ObjectId(id)})
    })
}



export {
    shows,
    showPorId,
    cargar,
    editar,
    eliminar,
}