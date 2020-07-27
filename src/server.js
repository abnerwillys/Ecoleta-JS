const express = require("express") // configura/chama o modulo express
const server = express() // servidor recebe o express

// pegar o banco de Dados
const db = require("./database/db.js")
// Configurar pasta public
server.use(express.static("public")) // use serve para fazer Configuração para o servidor(express)

// HABILITAR o uso do req.body na aplicação (por padrao o express nao está habilitado para receber o req.body)
server.use(express.urlencoded({ extended: true }))

// Utilizando template engine
const nunjucks = require("nunjucks") // chama o modulo nunjucks
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Configurar o caminho/rota da minha aplicação
// Página Inicial
// __dirname é uma variavel global do node que indica o diretorio (nao tem aqui mas aparece durante a aula)
// req: Requisição
// res: Resposta
server.get("/", (req, res) => { // GET é um verbo http para Configuração de rota e POST para envio de formularios. 
                                //Oque é digitado na barra de URL é apenas o GET que consegue chegar.
    return res.render("index.html")   
})

server.get("/create-point", (req, res) => {    
    // req.query: Query Strings da nossa URL. Ele requisita as informações da URL, porem nao serve para o verbo POST
    //console.log(req.query)
    return res.render("create-point.html") 
})

server.post("/savepoint", (req, res) => {
    // req.body: Requisita o corpo do formulario (é preciso habilitar antes no express o req.body)
    //console.log(req.body)

    // inserir dados no banco de dados
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);`
    
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]
        
    function afterInsertData(err) {
        if(err) {
            console.log(err)
            return res.send("Erro no cadastro!")
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved: true})
    }

    db.run(query, values, afterInsertData)
    
})

server.get("/search", (req, res) => { 
    const search = req.query.search

    if (search == "") {
        // Pesquisa vazia
        return res.render("search-results.html", { total: 0})
    }

    // pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) { // LIKE % % quer dizer que se colocar rio, pode achar qualquer coisa q tenha essa palavra, independente doq tiver antes ou depois.
        if(err) {
            return console.log(err)
        }

        const totalFound = rows.length // Constante que vai contar quantos elementos tem dentro do array.
        // console.log("Aqui estão seus registros: ")
        // console.log(rows)

        // Mostra a pagina html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: totalFound})
    }) 
})

// Ligar o servidor
server.listen(3000) // listen faz com que deixe uma porta aberta, no caso a 3000 ou seja LIGA o servidor

