const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

var sqlCreate = "CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50), PRIMARY KEY (id))";
connection.query(sqlCreate, function (err, result) {
   if (err) throw err;
   console.log("Table created");
});


app.get('/', (req, res) =>{
    var selectSQL = `SELECT id, name FROM people`;
    connection.query(selectSQL, (error, results) => {

        if (error) {
            console.log(`Error getting people: ${error}`);
            res.status(500).send('Error getting people');
            return;
          }

        const title = '<h1>Full Cycle Rocks!</h1>'
        const namesList = `
            <ul>
                ${results.map(p => `<li>${p.name}</li>`).join('')}
            </ul>
        `;
        res.send(title + namesList)
        connection.end();
    });

    
})

app.listen(port, () =>{
    console.log('Rodando na porta ' + port)

    var sql = `INSERT INTO people(name) values ('Tiago Silva'), ('FullCycle'), ('Ruffles')`
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Linha inserida");
     });
    
})