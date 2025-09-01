const express = require ('express');
const app = express ();
app.use(express.json());


// criar um array chamado "pessoas"
let pessoas = [
    {nome:'Malu', idade:15, altura:1,62}
]

[
    {nome:'yaya bbzuda', idade:14, altura:1,55}
]

[
    {nome:'aaron bbzudo da yaya', idade:15, altura:1,69}
]

[
    {nome:'eve bbzuda japonesa', idade:16, altura:1,57}
]

[
    {nome:'laulau', idade:14, altura:1,53}
]

app.get('/', (req, res) => {
    res.json({mensagem:'API de pessoas funcionando'});

});

app.get('/pessoas', (req, res) => {
    res.json(pessoas)

});

const PORT = 3000;
app.listen(PORT, () => {
 console.log ('servido rodando em http://localhost:${port}');
});