import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:marinalva17@cluster0.rcm5bnm.mongodb.net/senac2");
// A função connect guarda a string de conexão dentro dos parenteses.

let db = mongoose.connection;
// Agora criamos uma variavel que guarda a ação de conectar nosso usario com o mongoDB.


export default db;
