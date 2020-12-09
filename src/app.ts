import express from 'express';
import cors from 'cors';

const app = express()

app.use(cors())
app.listen(3333, () => {
  console.log('Servidor rodando: http://127.0.0.1:8000')
})