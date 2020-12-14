import express, { request, response } from 'express';
import cors from 'cors';
import defaultRouter from './routers/default'
import debug from 'debug'


const log = debug('api:main')
const app:any = express()
const port:number = 8000

app.use(cors())
app.use(defaultRouter)
app.use((req:any, res:any, next:any) => {
  log(request.query, `request at: ${new Date().toISOString()}`)
  return next()
})

app.listen(port, () => {
  log(`Servidor rodando: http://127.0.0.1:${port}`)
})