const express = require('express')
const app = express()
const PORT = 3000

const mysql = require('mysql2')
const db = mysql.createConnection({
    host: '66.198.240.46',
    user: 'bfzhiwes_node-intro-user',
    password: 'node-intro-user-password',
    database: 'bfzhiwes_node-intro',
    port: 3306
})

app.get('/students', (req, res) => {
    let sql = 'select * from students'
    db.query(sql, (err, result) => {
        if (err) return res.status(500).send(err)
        res.json(result)
    })
})

app.get('/', (req, res) => {
    res.send('<h1>Hi</h1>')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})