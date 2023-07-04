import express, {json} from 'express';
import index from './routes/index.js'

const app = express(); // esta variavel receber express, será usada em outros arquivos

app.use(json());
app.use("/",index);


db.on("error", console.log.bind(console, 'Erro de conexão'))
db.on("error", () => {
    console.log('')
})



export default app