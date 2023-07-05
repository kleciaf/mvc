import app from './src/app.js';

const port = 3000;

app.listen(port, () => {
    console.log('servidor esta rodando na porta ${port}')
})