const express = require('express');
const app = express();
const path = require('path');
const _index = require('./routes/index');

const port = process.env.PORT || 5000;

app.use('/api/placa', _index);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + 'client/build/index.html'));
});

const server = app.listen(port, () => {
  console.log(`Server running on port:. ${port}`);
});

module.exports = server;
