const express = require('express');
const app = express();
app.use(express.json());


// criar um array chamado "pessoas"
let pessoas = [
    { id: 1, nome: 'Malu', idade: '15', altura: '1,62' },
    { id: 2, nome: 'yaya bbzuda', idade: '14', altura: '1,55' },
    { id: 3, nome: 'aaron bbzudo da yaya', idade: '15', altura: '1,69' },
    { id: 4, nome: 'eve bbzuda japonesa', idade: '16', altura: '1,57' },
    { id: 5, nome: 'laulau', idade: '14', altura: '1,53' },
]

app.get('/', (req, res) => {
    res.json({ mensagem: 'API de pessoas funcionando' });

});

app.get('/pessoas', (req, res) => {
    res.json(pessoas)

});

app.post("/pessoas", (req, res) => {
    const { nome, idade } = req.body
    const newUser = {
        id: pessoas.length + 1,
        nome,
        idade,
    };
    console.log("novos dados:  ", newUser)
    pessoas.push(newUser);
    res.status(201).json(newUser); // codigo de criação com sucesso
})


//API do tipo GET para buscar 1 pessoa só por ID
//rota: http://localhost:3000/pessoas/2


app.get("/pessoas/:id", (req, res) => {
    const id = parseInt (req.params.id);
    const pessoa = pessoas.find(u => u.id === id);

    if (!pessoa){
        return res.status(404).json({error: "pessoa não encontrada"});
    }

    res.json(pessoa);
});



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`servido rodando em http://localhost:${PORT}`);
});