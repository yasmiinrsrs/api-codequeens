const express = require('express');
const app = express();
app.use(express.json());

let padaria = [
{ id:2, nome:"pão frances", preço: 250, quantidade: 45, contem: "derivados"},
{id:3, nome:"pão integral", preço: 350, quantidade: 55, contem:"aveia, chia e derivados"},
{id:4, nome: "pão doce", preço: 150, quantidade: 25, contem:"açucar, goiabada e chocolate"},
{id:5, nome: "pão gergelim", preço: 356 , quantidade: 78, contem:"gergelim"},
{id:6, nome: "pão de abobora", preço: 245, quantidade: 35, contem: 15, quantidade:"abobora e derivados"},
]

// endpoint 1 retorna todos os dados
app.get('/padaria', (req, res) => {
    res.json(padaria)
})
// endpoint 2 retorna 1 unico dado pelo id
app.get("/padaria/:id", (req, res) => {
    const id = parseInt (req.params.id);
    const itemEncontrado= padaria.find(u => u.id === id);

    if (!itemEncontrado){
        return res.status(404).json({error: "o item da padaria não encontrado"});
    }

    res.json(itemEncontrado);
});
// endpoint put
app.put('/padaria/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const padariaEncontrada = padaria.find(p => p.id === id);
    if (!padariaEncontrada) {
      return res.status(404).json({mensagem: "itens da padaria não encontrado" })
    }

    const novaPadaria = req.body;
    console.log("antigo item:", padaria)
    console.log("novo item:", novaPadaria)

    padariaEncontrada.nome = novaPadaria.nome
    padariaEncontrada.preço = novaPadaria.preço
    padariaEncontrada.quantidade = novaPadaria.quantidade

    padariaEncontrada[padaria.id - 1] = {...novaPadaria, id:padaria.id}
    console.log("padaria:  ", padaria)
    res.json(padaria);

}
)



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`servido rodando em http://localhost:${PORT}`);
});