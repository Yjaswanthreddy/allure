const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/login', (req, res) => res.json({ message: 'Login successful' }))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))