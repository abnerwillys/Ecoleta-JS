// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dado
const db = new sqlite3.Database("./src/database/database.db") // Aqui é o momento que o banco é criado

module.exports = db
    // utilizar o objeto de banco de dados para nossas operações
// db.serialize(() => { //toda vez que uma função esta com "." depois de um objeto é chamada de método.
//     // Com comandos SQL eu vou:
//     // 1 - Criar uma tabela (nesse caso com nome "places")
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `) // Criado as colunas com os seguintes comandos SQL: o "id" no caso é o nome da coluna, para identificar as linhas.
//     //    // o "INTEGER" é tipo numero(eo "TEXT" para texto), "PRIMARY KEY" indica que essa coluna será a "mestra",
//     //    // e "AUTOINCREMENT" que a coluna vai se autopreenchendo conforme for adicionando novas linhas.
//     //    // Na primeira linha traduzindo quer dizer palavra por palvra (CRIE TABELA SE NAO EXISTIR (chamada)places)

//     // // 2 - Inserir dados na tabela
//     //     // para melhor fluxo da aplicação, cria com variaveis para depois referenciar no comando SQL
//     //     // Na const query é aonde vai ser inserido os dados, na parte do SQL values fica com ponto de interrogação indicando que o dado vai vir de algum lugar(no caso da "const values" abaixo).               
//     // const query = `
//     //     INSERT INTO places (
//     //         image,
//     //         name,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES (?,?,?,?,?,?,?);`
//     //     // Na const values é os valores/dados que serão inseridos.
//     // const values = [
//     //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//     //     "Papersider",
//     //     "Guilherme Gemballa, Jardim América",
//     //     "Nº260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Papéis e Papelão"
//     // ]
//     //     // na function(nao pode ser feito com arrow function nesse caso devido ao this) é para o caso de SE(if) tiver um erro. Caso nao tenha um erro informa Cadastrado com sucesso
//     //     // e logo depois oque foi cadastrado, mostra OQUE foi cadastrado atravpes do "this" que referencia a function.
//     // function afterInsertData(err) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Cadastrado com sucesso")
//     //     console.log(this)
//     // }

//     //     // o comando é para inserir os dados referenciando as variaveis e a function ja criadas acima. Isso é para inserir pelo banco, entretanto sabemos que
//     //     // quem vai inserir são as entidades de coleta.
//     // db.run(query, values, afterInsertData)

//     // 3 - Consultar os dados da tabela
//     // db.all(`SELECT * FROM places`, function(err, rows) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Aqui estão seus registros: ")
//     //     console.log(rows)
//     // })

//     //4 - Deletar um dado da tabela
//     // db.run(`DELETE FROM places WHERE id = ?`, [10], function(err) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Registro deletado com sucesso")
//     // })
// })