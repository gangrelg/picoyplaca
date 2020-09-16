const express = require('express');
const app = express();
const _index = require('./routes/index');

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  console.log('Root');
});

app.use('/api/placa', _index);

const server = app.listen(port, () => {
  console.log(`Server running on port:. ${port}`);
});

module.exports = server;
