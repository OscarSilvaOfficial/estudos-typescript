import express from 'express';
import Cors from 'cors';
import firstRoute from './routers/first'

const app = express()
const cors = Cors()

app.use(cors)
app.use(firstRoute)

app.listen(3333, () => {
  console.log('Servidor rodando: http://127.0.0.1:3333')
})