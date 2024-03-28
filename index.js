const express = require('express');
//iniciando o express pela variavel

const app = express();

//definindo ejs para reenderizar paginas html

app.set('view engine', 'ejs');



//criando a primeira rota(rota principal)

app.get("/",(req, res) => {
    //sera reenderida a pagina views/index.ejs
    res.render("index")
})


//rota perfil

app.get("/perfil",(req, res) => {
    res.render("perfil")
})

//rota videos 

//rota videos com vareos parametros obrigatorios
app.get("/videos",(req, res) => {
    res.render("videos")
})

app.get("/produtos/:produto?",(req, res)=>{
    let produto = req.params.produto
    let produtos = ['Computador', 'Celular', 'Tablet']
    res.render("produtos",{
        //enviando variaveis para a página
        
        produto : produto,
        produtos : produtos
    })
})

app.get("/clientes",(req, res)=>{
    let cliente = [
        {nome : 'Marcelo',cidade : 'Paris',cpf:'123456879'},
        {nome : 'Marlon',cidade : 'Registro',cpf:'12345986'},
        {nome : 'Leonardo ',cidade : 'Canabis',cpf:'123879456'},
        {nome : 'Matheus Diegues',cidade : 'Paris',cpf:'789132456'},
    ];
    res.render("clientes",{
        //enviando variaveis para a página
        cliente : cliente
    })
})

//rota pedidos 

app.get("/pedidos",(req, res) => {
    //array de objetos com pedidos
    let pedido = [
        {produto : 'Celular',preco : 12000},
        {produto :'Computador',preco : 3000},
        {produto : 'Tablet', preco :2000},
        {produto : 'Notebook', preco : 3800}
    ];
    res.render("pedidos",{
        //enviando array de objetos para a página
        pedido : pedido
    })
})


app.listen(8080, function(erro){
    if(erro) {
        console.log("ocorreu um erro");
    }else {
        console.log("Servidor iniciado com sucesso");
    }
})