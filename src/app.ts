import express from 'express';
import cors from 'cors';
import defaultRouter from './routers/default'

const app:any = express()
const port:number = 8000

app.use(cors())
app.use(defaultRouter)

app.listen(port, () => {
  console.log(`Servidor rodando: http://127.0.0.1:${port}`)
})