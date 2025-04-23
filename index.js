const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('public'))

const mysql = require('mysql2')
const db = mysql.createConnection({
    host: '66.198.240.46',
    user: 'bfzhiwes_node-intro-user',
    password: 'node-intro-user-password',
    database: 'bfzhiwes_node-intro'
})

app.get('/students', (req, res) => {
    let sql = 'select * from students'
    db.query(sql, (err, result) => {
        if (err) return res.status(500).send(err)
        res.json(result)
    })
    console.log("someone hit the DB")
})

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

app.get('/form', (req, res) => {
    res.sendFile(`${__dirname}/public/form.html`)
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})