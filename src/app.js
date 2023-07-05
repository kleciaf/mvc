import express, {json} from 'express';
import index from './routes/index.js'
import db from './config/dbConnect.js';
import apis from './routes/apis.js';

const app = express(); // esta variavel receber express, será usada em outros arquivos

app.use(json());
app.use("/",index);
app.use("/apis", apis);


db.on("error", console.log.bind(console, 'Erro de conexão')) 
db.on("error", () => {
    console.log('conexão com o banco feito com sucesso') 
});



export default app