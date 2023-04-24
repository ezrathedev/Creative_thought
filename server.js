const express = require('express');
const app = express();
const port = process.env.port || 3000;
const path = require('path');

app.use('/static', express.static('public'))

app.get('/', (req,res) => {
    res.sendFile("public", path.join(__dirname, "public"))
})

app.listen(port, () =>{
  console.log(`the server is listening on http://localhost:${port}`)
})