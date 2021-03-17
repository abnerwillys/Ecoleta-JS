const db = require('./db');

const QueriesSqlite3 = {
  getDataFromTable() {
    //3-Get data from table
    db.all(`SELECT * FROM places`, function(err, rows) {
      if(err) {
          return console.log(err)
      }

      console.log("Aqui estão seus registros: ")
      console.log(rows)
    })
  },
  createTable() {
    //1-Create Table
    db.run(`
      CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
      );
    `) 
  },
  insertData() {
    //2-Insert data on table   
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
      "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "Papersider",
      "Guilherme Gemballa, Jardim América",
      "Nº260",
      "Santa Catarina",
      "Rio do Sul",
      "Papéis e Papelão"
    ]

    function afterInsertData(err) {
      if(err) {
          return console.log(err)
      }

      console.log("Cadastrado com sucesso")
      console.log(this)
    }

    db.run(query, values, afterInsertData)
  },
  deleteDataFromTable(id) {
    //4-Deletar um dado da tabela
    db.run(`DELETE FROM places WHERE id = ?`, [id], function(err) {
      if(err) {
          return console.log(err)
      }

      console.log("Registro deletado com sucesso")
    })
  },
}

function init() {
  QueriesSqlite3.getDataFromTable()
  // QueriesSqlite3.createTable()
  // QueriesSqlite3.insertData()
  // QueriesSqlite3.deleteDataFromTable(14)
}

init()