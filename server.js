const express = require('express');
const app = express();
const port = process.env.port || 3000;
const path = require('path');

app.use('/static', express.static('public'))

app.get('/', (req,res) => {
    res.sendFile("server.js", path.join(__dirname, "public"))
    console.log('Hello world')
})

app.listen(port, () =>{
  console.log(`the server is listening on http://localhost:${port}`)
})