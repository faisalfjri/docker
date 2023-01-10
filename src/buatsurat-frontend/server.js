'use strict';

const express = require('express');
const path = require('path')
const app = express()

const PORT = 3001;
const HOST = '0.0.0.0';


app.use(express.static(path.join(__dirname, 'dist')))

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
