import express from 'express';
import index from './routes/index.js'

const app = express(); // esta variavel receber express, será usada em outros arquivos

app.use(express.json());
app.use("/",index);


export default app