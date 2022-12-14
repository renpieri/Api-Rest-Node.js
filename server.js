import express from 'express';
import ShowsRouter from './api/routes/shows.routes.js'
import UsuariosRouter from './api/routes/usuario.routes.js'
import cors from 'cors'


const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json()) 
app.use(express.static('public'))
app.use(cors())

app.use('/', ShowsRouter)
app.use('/', UsuariosRouter)
app.listen(3000, function(){
    
    console.log('http://localhost:3000')
})