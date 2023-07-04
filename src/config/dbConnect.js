import mongoose from "mongoose";

mongoose.connect();
// A função connect guarda a string de conexão dentro dos parenteses.

let db = mongoose.connection;
// Agora criamos uma variavel que guarda a ação de conectar nosso usario com o mongoDB.


module.exports = db;
